import { Routes } from '@angular/router';


export const ComponentsRoutes: Routes = [
	{
    path:'accounts',
    loadChildren: () => import('../component/account/account.module').then(m => m.AccountsModule),
    data: {
      title: 'Accounts'
    }
  },
  {
    path:'signing',
    loadChildren:() => import('../component/signing-document/signing-document.module').then(m => m.SigningDocumentsModule),
    data: {
      title: 'Signing'
    }
  }
];
