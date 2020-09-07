import { Injectable } from '@angular/core';
import {
  Account,
  Address,
  NetworkType,
  BlockHttp,
  MosaicId,
  MosaicInfo,
  MosaicHttp,
  NamespaceId,
  NamespaceHttp,
  NodeHttp
} from 'tsjs-xpx-chain-sdk';
import { BlockchainNetworkType } from 'tsjs-chain-xipfs-sdk';
import { MD5, AES } from 'crypto-js';
import { BehaviorSubject } from 'rxjs';

import { config } from '../../app/config';

enum NodeType {
  API = 'api',
  IPFS = 'ipfs'
}



@Injectable({
  providedIn: 'root'
})
export class GlobalService {

      /** App indentifying code name */
      readonly appCodeName = 'SiriusSign';
      readonly appVersion = config.VERSION;   // '1.01';
      readonly build = 'c6ec7aa.0';

      /** Netrork Type  */
      readonly networkType:NetworkType = config.NETWORK_TYPE;
      readonly blockchainNetworkType: BlockchainNetworkType = config.NETWORK_TYPE; // BlockchainNetworkType.PRIVATE_TEST;


    constructor() { }
}
