import React from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Revamp Your Business With Expert Consulting",
    excerpt:
      "Experts say some good first steps in starting business are researching",
    image: "/blog1.jpg",
    day: "10",
    month: "APR",
    comments: 2,
  },
  {
    id: 2,
    title: "Drive Business Growth With Our Consulting",
    excerpt:
      "Experts say some good first steps in starting business are researching",
    image: "/blog2.jpg",
    day: "12",
    month: "APR",
    comments: 3,
  },
  {
    id: 3,
    title: "Teaching And Training Employees",
    excerpt:
      "Experts say some good first steps in starting business are researching",
    image: "/blog3.jpg",
    day: "13",
    month: "APR",
    comments: 6,
  },
];

const Blogs = () => {
  return (
    <section className="container px-6 py-16 mx-auto">
      <div className="max-w-full">
        <div className="flex items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="flex flex-col gap-2">
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
                <span className="w-10 h-[2px] bg-orange-400 rounded" />
              </div>

              <span className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
                From the blog
              </span>
            </div>
            <h2 className="text-5xl font-extrabold leading-tight">
              Blog & Articles
            </h2>
          </div>

          <div>
            <button className="inline-block px-12 py-3 text-sm font-semibold tracking-wide uppercase border border-gray-300 rounded-md hover:bg-gray-50">
              See more blog
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="bg-white">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={480}
                  className="object-cover w-full h-56"
                />

                {/* date badge on the right (tall rounded card) */}
                <div
                  className="absolute right-6 bottom-6 md:right-8 md:bottom-8 flex flex-col items-center justify-center w-16 h-24 md:w-[58px] md:h-[82px] bg-[#FF9934] text-white rounded-md shadow-md"
                  aria-hidden="false"
                >
                  <div className="text-xl font-bold leading-none md:text-2xl">
                    {post.day}
                  </div>
                  <div className="my-2 w-8 h-[2px] bg-white/90 rounded opacity-20" />
                  <div className="text-xs tracking-wider md:text-sm">
                    {post.month}
                  </div>
                </div>
              </div>

              <div className="px-4 pt-6 pb-8">
                <div className="flex items-center justify-center gap-8 mb-6  border-b border-[#ECECEC] pb-4">
                  <div className="px-3 py-1 text-sm text-gray-700 border border-gray-200">
                    By-Admin
                  </div>
                  <div className="text-sm text-gray-500">
                    Comments ( {post.comments} )
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold">{post.title}</h3>
                <p className="mb-6 text-gray-600">{post.excerpt}</p>

                <hr className="border-t border-gray-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
