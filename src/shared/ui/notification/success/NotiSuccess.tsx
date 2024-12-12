import { notifications } from '@mantine/notifications';

export const NotiSuccess = () => {
  return notifications.show({
    title: '성공',
    message: '설정이 완료되었습니다.',
    position: 'top-right',
    autoClose: 2000,
  });
};
