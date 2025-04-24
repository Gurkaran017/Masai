import BlogCard from "./BlogCard";

const blogs = [
  { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
  { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
  { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
];

export default function BlogList() {
  return (
    <div>
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          content={blog.content}
          isFeatured={blog.isFeatured}
        />
      ))}
    </div>
  );
}
