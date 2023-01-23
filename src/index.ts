import {
  ClientFactory,
  Client,
  DefaultProviderUrls,
  IAccount,
  IStakingAddresses
} from "@massalabs/massa-web3";

// create a base account for signing transactions
const baseAccount = {
  address: 'A12PWTzCKkkE9P5Supt3Fkb4QVZ3cdfB281TGaup7Nv1DY12a6F1',
  secretKey: 'S12tw4YShWtjWfy7YBQ9Erbcg6DYgWnMgb5hGjn9hAKGtgrLNa7L',
  publicKey: 'P1hG8zRRJF2v3qkwyZ2fnHJeaVw9uT4huCkwcWJVvgypEz6D2aR'
} as IAccount;

async function main () {
  // initialize a testnet client
  const web3Client: Client = await ClientFactory.createDefaultClient(
    DefaultProviderUrls.TESTNET,
    true,
    baseAccount
  );

  const stakers: Array<IStakingAddresses> = await web3Client
    .publicApi()
    .getStakers();

  console.log('stakers', stakers);
}

(async function() {
	await main();
})();