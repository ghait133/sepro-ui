import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Kunden',
    icon: 'home-outline',
    link: '/pages/kunden',
  },
  {
    title: 'Termine',
    icon: 'home-outline',
    link: '/pages/appointments',
  },
  {
    title: 'Mitarbeiter',
    icon: 'home-outline',
    link: '/pages/employees',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
