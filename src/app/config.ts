import { NetworkType } from 'tsjs-xpx-chain-sdk';
import { BlockchainNetworkType } from 'tsjs-chain-xipfs-sdk';

export const config = {
    VERSION: '0.0.1',
    NETWORK_TYPE: NetworkType.PRIVATE_TEST | BlockchainNetworkType.PRIVATE_TEST,
    API_NODE_1: 'https://demo-sc-api-1.ssi.xpxsirius.io',
    API_NODE_2: 'https://demo-sc-api-1.ssi.xpxsirius.io',
    IPFS_NODE_1: 'https://ipfs1-dev.xpxsirius.io:5443',
    IPFS_NODE_2: 'https://ipfs2-dev.xpxsirius.io:5443',
}
