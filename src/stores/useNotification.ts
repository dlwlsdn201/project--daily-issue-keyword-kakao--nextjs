import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface NotificationState {
  notiType: 'success' | 'fail' | undefined;
}
interface NotificationAction {
  changeNotiType: (value: 'success' | 'fail') => void;
}

const store = (
  set: (partial: Partial<NotificationState>, replace?: boolean) => void
) => {
  return {
    notiType: undefined,
    changeNotiType: (value: 'success' | 'fail') => set({ notiType: value }),
  };
};

export const useNotificationStore = create<
  NotificationState & NotificationAction
>(process.env.NODE_ENV !== 'production' ? devtools(store) : store);
