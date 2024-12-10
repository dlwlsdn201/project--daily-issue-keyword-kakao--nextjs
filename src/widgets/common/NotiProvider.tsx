'use client';

import { NotiSuccess, NotiFail } from '@/src/shared/ui';
import { useNotificationStore } from '@/src/stores/useNotification';

const NotiProvider = () => {
  const { notiType } = useNotificationStore();
  console.log({ notiType });
  if (!!!notiType) return null;

  if (notiType === 'success') return <NotiSuccess />;
  if (notiType === 'fail') return <NotiFail />;
};

export default NotiProvider;
