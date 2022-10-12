import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'KROONATION',
  tokenName: 'KROO NATION',
  tokenSymbol: 'KROO',
  hiddenMetadataUri: 'ipfs://QmVcmZyJnojemJt3pgWCBcJYVhDanVDKYyEMd4Gthn6Hgd/Hidden.json',
  maxSupply: 111,
  whitelistSale: {
    price: 0,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.22,
    maxMintAmountPerTx: 1,
  },
  contractAddress: "0x3375D3AcC3ed5D4816106A1064571955719d67CC",
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
