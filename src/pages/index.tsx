import reactLogo from "../assets/react.svg";
import { MetaTags } from "@dr.pogodin/react-helmet";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <MetaTags
        title="Dynamic SEO Meta Tags in React"
        description="How to dynamically add SEO meta tags to a React application using @dr.pogodin/react-helmet"
        image="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600"
      />
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dynamic SEO Meta Tags in React</h1>
      <div className="card">
        <button>
          <Link to="/blog">View Posts</Link>
        </button>
      </div>
    </>
  );
}
