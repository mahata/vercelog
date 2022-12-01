import { testApiHandler } from 'next-test-api-route-handler';
// import handler from '@/pages/api/hello';
import handler from '../../pages/api/hello';

describe('hello', () => {
  it("returns JSON result", async () => {
    expect.hasAssertions();
    await testApiHandler({
      requestPatcher: (req) => (req.url = "/api/hello"),
      handler,
      test: async ({ fetch }) => {
        const res = await fetch({
          method: "GET",
        });

        expect(await res.json()).toStrictEqual({ name: "John Doe" });
      },
    });
  });
});
