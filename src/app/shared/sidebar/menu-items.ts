import { RouteInfo } from './sidebar.metadata';


export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'Personal',
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
    title: 'Accounts',
    icon: 'mdi mdi-gauge',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/component/signing',
    title: 'Signing',
    icon: 'mdi mdi-gauge',
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
