import { getServerSideProps } from "@/pages/index";
import type { GetServerSidePropsContext } from 'next';

describe("Index page", () => {
  it("should redirect to /pages/1", async () => {
    const response = await getServerSideProps({} as GetServerSidePropsContext);

    expect(response).toEqual({
      redirect: {
        destination: "/pages/1",
        permanent: false,
      },
    });
  });
});
