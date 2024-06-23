import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export function usePokemon() {
  const { data, error } = useSWR(url, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const { trigger, data: triggerData } = useSWRMutation(url, fetcher, {
    onSuccess(data, key, config) {
      console.log("onSuccess", data, key, config);
    },
    onError(error, key, config) {
      console.log("onError", error, key, config);
    },
  });
  return { data, error, trigger, triggerData };
}
