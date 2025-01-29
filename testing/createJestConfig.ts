import path from "node:path";

import nextJest from "next/jest";

import { esModules } from "../next.base";

const createJestConfig = nextJest({ dir: path.join(__dirname, "../") });

interface JestConfig {
  transformIgnorePatterns?: string[];
}

// we have to use this override since next/js hard-codes node_modules in transformIgnorePatterns
export default async function overriddenConfig(_config: Record<string, unknown>) {
  return async function defaultExport() {
    const config: JestConfig = await createJestConfig(_config)();
    config.transformIgnorePatterns = [
      "/.next/",
      // ignore all ESM modules
      `/node_modules/(?!(${esModules.join("|")}))(.*)`,
      // CSS modules are mocked so they don't need to be transformed
      "^.+\\.module\\.(css|sass|scss)$",
    ];
    return config;
  };
}
