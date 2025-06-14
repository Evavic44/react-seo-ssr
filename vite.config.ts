import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [react()],
    build: {
      rollupOptions: isSsrBuild
        ? {}
        : {
            input: path.resolve(__dirname, "index.html"), // only for client
          },
      ssr: isSsrBuild ? "src/server/renderer.tsx" : undefined,
      outDir: isSsrBuild ? "dist/server" : "dist/client",
      emptyOutDir: false,
    },
  };
});
