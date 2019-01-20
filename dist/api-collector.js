"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APICollector {
    constructor() {
        this.apis = [];
    }
    async addAPI(topic, baseURL) {
        if (this.apis.some((entry) => entry.topic === topic)) {
            const foundEntry = this.apis.filter((entry) => entry.topic === topic)[0];
            foundEntry.apis.push(baseURL);
        }
        else {
            const topicAndAPIs = {
                apis: [baseURL],
                topic,
            };
            this.apis.push(topicAndAPIs);
        }
        // persistency can be called here
    }
    getTopicsAndApis() {
        return this.apis;
    }
    async getApisForTopic(topic) {
        // persistency can be called here
        return this.apis.filter((entry) => entry.topic === topic)[0];
    }
}
exports.APICollector = APICollector;
