import { Injectable } from '@angular/core';
import { SimpleWallet, Password, AccountHttp, Crypto, WalletAlgorithm, Account, Address } from 'tsjs-xpx-chain-sdk';
import { GlobalService } from './global.service';


export enum WalletType {
    WLT = 'WLT',
    NWLT = 'nwlt'
}


@Injectable({
  providedIn: 'root'
})
export class WalletService {

  preparedInfo = {
    name: '',
    pass: '',
    privateKey: '',
    // notaPrivateKey: '',
    plan: 1
}

  constructor(private global:GlobalService) { }


    async createWallet(name?:string,password?:string,type:WalletType = WalletType.WLT){

    }

}


