
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({

  declarations: [AccountComponent],

  imports: [
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ]
})
export class AccountsModule {}
