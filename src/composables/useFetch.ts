import { createFetch } from "@vueuse/core";

const useFetch = createFetch({
  baseUrl: "http://localhost:3000",
  // options: {
  //   async beforeFetch({ options }) {
  //     // const myToken = await getMyToken();
  //     // options.headers.Authorization = `Bearer ${myToken}`;

  //     return { options };
  //   },
  // },
  // fetchOptions: {
  //   mode: "cors",
  // },
});

export { useFetch };

// const { isFetching, error, data } = useMyFetch("users");
