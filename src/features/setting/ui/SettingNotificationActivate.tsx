'use client';

import { SharedSwitch } from '@/src/shared/ui';
import { useSwitch } from '@/src/shared/ui/switch/hooks/useSwitch';
import { useNotificationStore } from '@/src/stores/useNotification';
import { faBell, faBellSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

export const SettingNotificationActivate = () => {
  const { changeNotiType } = useNotificationStore();
  const switchCustomHook = useSwitch({
    initialValue: false,
  });
  const { checked } = switchCustomHook;

  const NOTIFICATION_ENABLED = checked;

  useEffect(() => {
    try {
      changeNotiType('success');
    } catch (error) {
      changeNotiType('fail');
    }
  }, [checked]);

  return (
    <>
      <h2 className="text-lg font-semibold mb-4">알림 설정</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {NOTIFICATION_ENABLED ? (
            <FontAwesomeIcon icon={faBell} className="mr-2" />
          ) : (
            <FontAwesomeIcon icon={faBellSlash} className="mr-2" />
          )}
          <span>
            {NOTIFICATION_ENABLED ? '알림 활성화됨' : '알림 비활성화됨'}
          </span>
        </div>
        <SharedSwitch
          checked={NOTIFICATION_ENABLED}
          stateCustomHook={switchCustomHook}
          onLabel="ON"
          offLabel="OFF"
          size="md"
        />
      </div>
    </>
  );
};
