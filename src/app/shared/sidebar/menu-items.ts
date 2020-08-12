import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Demo',
    icon: 'mdi mdi-dots-horizontal',
    class: 'nav-small-cap',
    extralink: true,
    submenu: []
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/accounts',
    title: 'Account',
    icon: 'mdi mdi-dots-horizontal',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/component/signing',
    title: 'Signing',
    icon: 'mdi mdi-pen',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/component/accordion',
    title: 'Accordion',
    icon: 'mdi mdi-equal',
    class: '',
    extralink: false,
    submenu: []
  },
];
