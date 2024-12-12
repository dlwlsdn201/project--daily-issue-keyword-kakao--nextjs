'use client';

import { NotiSuccess, NotiFail } from '@/src/shared/ui';
import { useNotificationStore } from '@/src/stores/useNotification';
import { Notifications } from '@mantine/notifications';

export const NotiProvider = () => {
  const { notiType } = useNotificationStore();

  console.log({ notiType });
  if (!!!notiType) return null;

  const instance = notiType === 'success' ? <NotiSuccess /> : <NotiFail />;

  return (
    <>
      <Notifications />
      {instance}
    </>
  );
};
