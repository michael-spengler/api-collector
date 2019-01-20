import { ITopicsAndAPIs } from "./types";
export declare class APICollector {
    private readonly apis;
    addAPI(topic: string, baseURL: string): Promise<void>;
    getTopicsAndApis(): ITopicsAndAPIs[];
    getApisForTopic(topic: string): Promise<ITopicsAndAPIs>;
}
