'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { SettingNotificationActivate } from '@/src/features/setting/ui';

export const DashboardWidget = ({
  user,
  notificationEnabled,
  toggleNotification,
}) => {
  /* NOTE - [개발용 샘플 코드] */
  const USER = { name: '테스트' };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">대시보드</h1>
          <div className="flex items-center space-x-2">
            <span>{USER.name}님</span>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <SettingNotificationActivate />
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">알림 정보</h2>
          <div className="text-sm text-gray-600">
            <ul>
              <li className="flex gap-1">
                <span className="w-[4rem] inline-block">• 발송 시간</span>:{' '}
                <span className="font-bold">매일 오전 9시</span>
              </li>
              <li className="flex gap-1">
                <span className="w-[4rem] inline-block">• 내용</span>:{' '}
                <span className="font-bold">당일 핫이슈 키워드 Top 10</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
