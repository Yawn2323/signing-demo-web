import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {
  Account,
  NetworkType,
  Address,
  AccountHttp,
  QueryParams,
  PublicAccount,
  MosaicHttp,
  MosaicService,
  TransferTransaction,
  Transaction,
  Password,
  SimpleWallet,
  Wallet
} from 'tsjs-xpx-chain-sdk';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})

export class SiriusService {
    node:any = environment.nodeUrl;
    address: any;
    publicKey: any;
    private account = Account.createFromPrivateKey(
      'C3C94C048F45BD3E6F400AAE8D39FDE1C6DCA0892085C236AB2A67691F365C09',
      NetworkType.TEST_NET
    );
    credential = undefined;

    constructor(private http:HttpClient){}


  public createWallet = (_wallet_name: any, _wallet_password: any) => {
    const password = new Password(_wallet_password);
    const wallet = SimpleWallet.create(_wallet_name, password, NetworkType.TEST_NET);
    const account = wallet.open(password);
    console.log(wallet)
    // store address and public_key
     this.onEditProfile(account.address.pretty(),account.publicKey,JSON.stringify(Wallet))
  }

  onEditProfile(address:any,public_key:any,wallet:any){
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to create Account",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, create it!'
      }).then((result) => {
        if (result.value) {
          localStorage.setItem('public_key',public_key)
          localStorage.setItem('address',address)
          localStorage.setItem('wallet',wallet)
          Swal.fire(
            'Created!',
            'You Created an Account.',
            'success'
          )
        }
      })
  }

}
