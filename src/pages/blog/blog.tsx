import { Link } from "react-router";
import { posts } from "../../data/posts";
import { MetaTags } from "@dr.pogodin/react-helmet";

export default function Blog() {
  return (
    <>
      <MetaTags
        title="Blog Posts"
        description="Read interesting stories from the blog"
        image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600"
      />
      <h1>Blog Posts</h1>
      <section>
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.slug}`}
            style={{ display: "block", marginBottom: "1rem" }}
          >
            <article>
              <img
                src={post.cover.url + "&w=500"}
                alt={post.cover.alt}
                width={400}
                height={200}
                style={{ objectFit: "cover", backgroundColor: "#333" }}
              />
              <h3>{post.title}</h3>
            </article>
          </Link>
        ))}
      </section>
      <div style={{ margin: "1.5rem 0" }}>
        <button>
          <Link to="/">Back Home</Link>
        </button>
      </div>
    </>
  );
}
