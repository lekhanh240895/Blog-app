import { client } from "@/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import { RichTextComponents } from "@/components/RichTextComponents";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

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

async function Post({ params: { slug } }: Props) {
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
    <article className="px-10 pb-24 ">
      <section className="relative min-h-[256px] ">
        <div className="absolute top-0 w-full h-full p-10 opacity-10 blur-sm z-0">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.author?.name}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className="object-cover object-center"
          />
        </div>

        <div className="p-5 bg-primary w-full z-10 text-white">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md-space-x-4">
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold">{post.title}</h1>

              <p>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="self-start flex items-center space-x-2">
              <div className="relative h-10 w-10">
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author?.name}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  className="object-cover object-center rounded-full"
                />
              </div>

              <div className="w-64">
                <h3 className="text-lg font-bold">{post.author.name}</h3>

                <div>{/* Author BIO */}</div>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <h2 className="italic">{post.description}</h2>

            <div className="flex items-center justify-end space-x-2 mt-auto">
              {post.categories.map((category) => (
                <button key={category._id} className="btn-primary text-white">
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents} />
    </article>
  );
}

export default Post;
