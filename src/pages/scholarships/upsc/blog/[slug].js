import React from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import BlogDetails from "@/Components/UPSC/BlogDetail/BlogDetail";

function Blog({ post, data }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <BlogDetails post={post} data={data} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  let { slug } = params;
  const res = await fetch(`http://34.93.71.207/api/v1/blogs/${slug}`);
  const post = await res.json();
  const response = await fetch("http://34.93.71.207/api/v1/blogs");
  const data = await response.json();
  // Return the blog post as props
  return {
    props: {
      post: post,
      data: data,
    },
  };
}

export default Blog;
