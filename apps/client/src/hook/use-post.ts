import swr from "swr";
import useSWRMutation from 'swr/mutation'
import { AxiosError } from "axios";

import { RequestCreatePost, ResponsePost } from "@repo/schema";
import { getFetcher, postFetcher } from "@/lib/fetch";

const url = "http://localhost:8080/api/post";

const createFetcher = async (url: string, { arg }: { arg: RequestCreatePost }) => {
  const res = await postFetcher<ResponsePost, RequestCreatePost>(url, arg, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

const fetcher = async (url: string) => {
  try {
    const res: ResponsePost[] = await getFetcher(url); // ResponsePostの配列に変更

    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function usePost() {
  const { trigger } = useSWRMutation(url, createFetcher);

  const { data: postData, error: postError } = swr<ResponsePost[]>(
    url,
    fetcher,
    {
      // ResponsePostの配列に変更
      onSuccess: (data) => {
        console.log("success", data);
      },
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount > 1) return;

        if (error instanceof AxiosError) {
          if (error.response?.status === 401) return;
        }

        if (error.status === 404) return;

        console.error("Retry Post Data Fetcher", error);
      },
      shouldRetryOnError: true,
      // dev
      errorRetryInterval: 2000,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { postData, postError, trigger };
}
