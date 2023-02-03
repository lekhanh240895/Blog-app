"use client";

import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./BlogList";

interface Props {
  query: string;
}
function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);

  return <BlogList posts={posts} />;
}

export default PreviewBlogList;
