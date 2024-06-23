import swr from "swr";
import { AxiosError } from "axios";

import { UserResponse } from "@repo/schema";
import { getFetcher } from "@/lib/fetch";

const url = "http://localhost:8080/api/user";

// const fetcher = async (url: string, { arg }: { arg: string }) => {
const fetcher = async (url: string) => {
  try {
    const res: UserResponse = await getFetcher(url);
    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export function useUser() {
  const { data: userData, error } = swr<UserResponse>(url, fetcher, {
    onSuccess: (data) => {
      console.log("success", data);
    },
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (retryCount > 1) return;
        if(error instanceof AxiosError) {
            if(error.response?.status === 401) return
        }
        if (error.status === 404) return

        console.log("retry", error);
      },
    shouldRetryOnError: true,
    // dev
    errorRetryInterval: 2000,
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { userData, error };
}
