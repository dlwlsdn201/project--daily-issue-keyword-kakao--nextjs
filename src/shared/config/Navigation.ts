interface Navigation {
  path: string;
  label: string;
}

export const NavigationList: Navigation[] = [
  {
    path: '/',
    label: '홈',
  },
  {
    path: '/signIn',
    label: '로그인 ',
  },
  {
    path: '/dashboard',
    label: '대시보드 ',
  },
];
