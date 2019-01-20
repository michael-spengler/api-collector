import { APICollector } from "./api-collector"

let aPICollector: APICollector

describe("APICollector", () => {
    beforeEach(async () => {
        aPICollector = new APICollector()
    })

    it("add and provide", () => {
        aPICollector.addAPI("Crypto Currencies", "tbd")
        expect(aPICollector.getApisForTopic("Crypto Currencies"))
            .toEqual({
                apis: ["tbd"],
                topic: "Crypto Currencies",
            })
    })
})
