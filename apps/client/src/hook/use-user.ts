import swr from "swr";
import { AxiosError } from "axios";

import { RequestCreateUser, ResponseUser  } from "@repo/schema";
import { getFetcher } from "@/lib/fetch";

const url = "http://localhost:8080/api/user";

// const fetcher = async (url: string, { arg }: { arg: string }) => {
const fetcher = async (url: string) => {
  try {
    const res: ResponseUser = await getFetcher(url);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function useUser() {
  const { data: userData, error: userError } = swr<ResponseUser>(url, fetcher, {
    onSuccess: (data) => {
      console.log("success", data);
    },
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount > 1) return;

        if(error instanceof AxiosError) {
            if(error.response?.status === 401) return
        }

        if (error.status === 404) return

        console.error("Retry User Data Fetcher", error);
      },
    shouldRetryOnError: true,
    // dev
    errorRetryInterval: 2000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { userData, userError };
}
