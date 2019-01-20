"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_collector_1 = require("./api-collector");
let aPICollector;
describe("APICollector", () => {
    beforeEach(async () => {
        aPICollector = new api_collector_1.APICollector();
    });
    it("add and provide", async () => {
        await aPICollector.addAPI("Crypto Currencies", "https://rest.coinapi.io/");
        expect(await aPICollector.getApisForTopic("Crypto Currencies"))
            .toEqual({
            apis: ["https://rest.coinapi.io/"],
            topic: "Crypto Currencies",
        });
    });
    it("delivers undefined when no entry found for topic", async () => {
        await aPICollector.addAPI("Crypto Currencies", "https://rest.coinapi.io/");
        expect(await aPICollector.getApisForTopic("xyz"))
            .toEqual(undefined);
    });
});
