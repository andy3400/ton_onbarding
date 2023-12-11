import {Address, TonClient} from "ton"
import {getHttpEndpoint} from "@orbs-network/ton-access";


async function main () {
    
    const wallet = Address.parse('UQAb9yfMhZ9IiXaUydbOyin55zbCM2vomVRSDkpNztxvFkoB');
    const collection = Address.parse('UQAb9yfMhZ9IiXaUydbOyin55zbCM2vomVRSDkpNztxvFkoB');

    const endpoint = await getHttpEndpoint({
        network: "testnet",
      });
    
      // initialize ton library
    const client = new TonClient({ endpoint });

    const miningData = await client.callGetMethod(collection, 'get_mining_data')

console.log(miningData)
}


main()