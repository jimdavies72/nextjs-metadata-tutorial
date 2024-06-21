import { Metadata } from "next";

// - using layout metadata template
// export const metadata: Metadata = {
//   title: "blog"
// }

// - using absolute
export const metadata: Metadata = {
  title: {
    absolute: "blog",
  }};


const Blog = () => {
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};

export default Blog;
