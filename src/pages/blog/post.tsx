import { useNavigate, useParams } from "react-router";
import { posts } from "../../data/posts";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.slug === id);

  const url = window.location.href;
  const cover = post?.cover.url + "&w=500";

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>{post?.title}</title>
        <meta name="description" content={post?.content} />
        <link rel="canonical" href={url} />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={post?.title} name="twitter:title" />
        <meta content={post?.content} name="twitter:description" />
        <meta content={post?.title} name="og:title" />
        <meta content={post?.content} name="og:description" />
        <meta content={cover} name="og:image" />
        <meta content={cover} name="twitter:image" />
        <meta content={post?.title} name="og:image:alt" />
        <meta content={url} name="og:url" />
      </Helmet>
      <div>
        <img
          src={post?.cover.url + "&w=1920"}
          alt={post?.cover.alt}
          height={400}
          style={{ objectFit: "cover", backgroundColor: "#333", width: "100%" }}
        />
        <h2>{post?.title}</h2>
        <p>{post?.content}</p>
        <div style={{ margin: "1.5rem 0" }}>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>
    </>
  );
}
