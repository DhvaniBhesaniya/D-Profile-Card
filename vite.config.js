import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
// https://vitejs.dev/config/

// host: "::" or host: true: Tells Vite to expose the server to your local network (Wi-Fi/Ethernet), which generates that Network URL.
// host: "localhost": Tells Vite to only listen for requests coming from your own computer. This will cause the "Network" line to disappear from your terminal output.
export default defineConfig(({ mode }) => ({
    base: "./",
    server: {
        host: "localhost",
        port: 8080,
        hmr: {
            overlay: false,
        },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
    },
}));
