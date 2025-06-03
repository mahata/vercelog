import { middleware } from "@/middleware";
import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";

describe("Middleware", () => {
  const targetDomain = "vercelog.mahata.org";

  const createMockRequest = (host: string, url: string) => {
    return new NextRequest(new URL(url), {
      headers: new Headers({
        host: host,
      }),
    });
  };

  it("allows access from the allowed domain (vercelog.mahata.org)", async () => {
    const request = createMockRequest(targetDomain, `https://${targetDomain}/some-path`);
    const response = await middleware(request);

    expect(response.status).toBe(200);
  });

  it("allows access from the development environment (localhost:3000)", async () => {
    const request = createMockRequest("localhost:3000", "http://localhost:3000/some-path");
    const response = await middleware(request);

    expect(response.status).toBe(200);
  });

  it("redirects access from unauthorized domains to the target domain", async () => {
    const unauthorizedDomain = "mahata.vercel.app";
    const request = createMockRequest(unauthorizedDomain, `https://${unauthorizedDomain}/some-path`);
    const response = await middleware(request);

    expect(response.status).toBe(307); // 307 Temporary Redirect
    expect(response.headers.get("location")).toBe(`https://${targetDomain}/some-path`);
  });

  it("redirects access from unauthorized domains to the target domain with query parameters", async () => {
    const unauthorizedDomain = "mahata.vercel.app";
    const request = createMockRequest(unauthorizedDomain, `https://${unauthorizedDomain}/some-path?key=value`);
    const response = await middleware(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(`https://${targetDomain}/some-path?key=value`);
  });

  it.each([
    "vercelog-abc123-mahatas-projects.vercel.app",
    "vercelog-xyz789-mahatas-projects.vercel.app",
  ])("allows access from valid Vercel preview URLs: %s", async (vercelPreviewDomain) => {
    const request = createMockRequest(vercelPreviewDomain, `https://${vercelPreviewDomain}/some-path`);
    const response = await middleware(request);

    expect(response.status).toBe(200);
  });

  it.each([
    "vercelog-mahatas-projects.vercel.app",
    "other-project.vercel.app",
  ])("redirects access from invalid Vercel URLs: %s", async (invalidVercelDomain) => {
    const request = createMockRequest(invalidVercelDomain, `https://${invalidVercelDomain}/some-path`);
    const response = await middleware(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(`https://${targetDomain}/some-path`);
  });
});
