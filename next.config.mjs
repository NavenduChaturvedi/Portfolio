import path from "node:path";
import { fileURLToPath } from "node:url";

// Pin the workspace root: an unrelated package-lock.json sits in the home
// directory, and Turbopack would otherwise infer that as the root.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
