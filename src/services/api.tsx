import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const handler = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    timeout: 1000,
});

async function request(options: AxiosRequestConfig): Promise<AxiosResponse> {
    return await handler({
        ...options,
    });
};

export { request };