import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const query = groq`
    *[_type=='post']
    {
       slug
    }
  `;

  const posts: Post[] = await client.fetch(query);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Head({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
`;

  const post: Post = await client.fetch(query, { slug });
  return (
    <>
      <title>{post.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
