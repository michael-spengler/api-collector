import { ITopicsAndAPIs } from "./types"

export class APICollector {

    private readonly apis: ITopicsAndAPIs[] = []

    public addAPI(topic: string, baseURL: string): void {
        if (this.apis.some((entry: ITopicsAndAPIs) => entry.topic === topic)) {
            const foundEntry: ITopicsAndAPIs =
                this.apis.filter((entry: ITopicsAndAPIs) => entry.topic === topic)[0]
            foundEntry.apis.push(baseURL)
        } else {
            const topicAndAPIs: ITopicsAndAPIs = {
                apis: [baseURL],
                topic,
            }
            this.apis.push(topicAndAPIs)
        }
    }

    public getTopicsAndApis(): ITopicsAndAPIs[] {
        return this.apis
    }

    public getApisForTopic(topic: string): ITopicsAndAPIs {
        return this.apis.filter((entry: ITopicsAndAPIs) => entry.topic === topic)[0]
    }
}
