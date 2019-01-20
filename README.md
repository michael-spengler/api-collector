# API Collector
As simple as it gets. Find the right API at the right time.

## Usage Example
    import { APICollector, ITopicsAndAPIs } from "api-collector"

    await aPICollector.addAPI("Crypto Currencies", "https://rest.coinapi.io/")

    const result: ITopicsAndAPIs = await aPICollector.getApisForTopic("Crypto Currencies")

    console.log(result)


## Feedback
If you find any issues or want to share improvement proposals in general feel free to open an issue [here](https://github.com/michael-spengler/api-collector/issues).


## Contribute
I am interested in save and useful enhancements. Feel free to create [Pull Requests](https://github.com/michael-spengler/api-collector/pulls) on my Repository.