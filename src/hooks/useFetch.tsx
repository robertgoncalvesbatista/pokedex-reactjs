import useSWR from "swr"
import { request } from "../services/api"

export function useFetch(url: string) {
    const { data, error } = useSWR(url, async (url: string) => {
        const response = await request({ url: url });

        return response;
    });

    return { data, error };
}