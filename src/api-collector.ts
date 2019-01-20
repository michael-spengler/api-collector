import { ITopicsAndAPIs } from "./types"

export class APICollector {

    private readonly apis: ITopicsAndAPIs[] = []

    public async addAPI(topic: string, baseURL: string): Promise<void> {
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

        // persistency can be called here
    }

    public getTopicsAndApis(): ITopicsAndAPIs[] {
        return this.apis
    }

    public async getApisForTopic(topic: string): Promise<ITopicsAndAPIs> {
        // persistency can be called here
        return this.apis.filter((entry: ITopicsAndAPIs) => entry.topic === topic)[0]
    }
}
