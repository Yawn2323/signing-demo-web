import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Listener } from 'tsjs-xpx-chain-sdk';
import { SiriusService } from '../../services/sirius.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {

  account_form:FormGroup

  constructor(private formBuilder:FormBuilder,private siriusService:SiriusService) {
      this.account_form = this.formBuilder.group({
          username:null,
          password:null
      })
  }

  ngOnInit() {

  }

  onSubmit(form:FormGroup){
     try {
      this.siriusService.createWallet(form.value.username,form.value.password)
     }
     catch {

     }
  }
}
