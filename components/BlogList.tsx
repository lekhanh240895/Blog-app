import urlFor from "@/lib/urlFor";
import Image from "next/image";
import React from "react";
import ClientSiteRoute from "./ClientSiteRoute";

interface Props {
  posts: Post[];
}

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-primary mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSiteRoute route={`/post/${post.slug.current}`} key={post._id}>
            <div className="group cursor-pointer flex flex-col">
              <div className="relative">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.author?.name}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                    className="object-cover object-left lg:object-center"
                  />
                </div>

                <div className="absolute bottom-0 bg-black bg-opacity-20 backdrop-blur-lg rounded w-full text-white drop-shadow-lg p-5 flex justify-between space-x-4">
                  <div>
                    <p>{post.title}</p>

                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="self-center flex flex-col md:flex-row gap-y-2 md:gap-x-2">
                    {post.categories.map((category) => (
                      <button
                        key={category._id}
                        className="btn-primary bg-primary text-black font-semibold"
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mt-5 flex-1">
                <h2 className="underline text-lg font-bold">{post.title}</h2>
                <p className="text-gray-500">{post.description}</p>
              </div>
            </div>
          </ClientSiteRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
