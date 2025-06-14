import { renderToString } from "react-dom/server";
import {
  HelmetProvider,
  type HelmetDataContext,
} from "@dr.pogodin/react-helmet";
import App from "../App";
import { StaticRouter } from "react-router";

export function render(url: string) {
  const helmetContext: HelmetDataContext = {};

  const app = (
    <StaticRouter location={url}>
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    </StaticRouter>
  );

  const html = renderToString(app);
  const helmet = helmetContext.helmet;

  return {
    html,
    head: `
      ${helmet?.title?.toString() ?? ""}
      ${helmet?.meta?.toString() ?? ""}
      ${helmet?.link?.toString() ?? ""}
    `,
  };
}
