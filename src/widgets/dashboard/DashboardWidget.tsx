import {
  findIconDefinition,
  IconDefinition,
  IconLookup,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const bellLookup: IconLookup = { prefix: 'far', iconName: 'bell' };
const bellIconDefinition: IconDefinition = findIconDefinition(bellLookup);

const bellSlashLookup: IconLookup = { prefix: 'far', iconName: 'bell-slash' };
const bellSlashIconDefinition: IconDefinition =
  findIconDefinition(bellSlashLookup);

export const DashboardWidget = ({
  user,
  notificationEnabled,
  toggleNotification,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">대시보드</h1>
          <div className="flex items-center space-x-2">
            <span>{user.name}님</span>
            <img
              src="/api/placeholder/40/40"
              alt="프로필"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-semibold mb-4">알림 설정</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {notificationEnabled ? (
                <FontAwesomeIcon icon={bellIconDefinition} className="mr-2" />
              ) : (
                <FontAwesomeIcon
                  icon={bellSlashIconDefinition}
                  className="mr-2"
                />
              )}
              <span>
                {notificationEnabled ? '알림 활성화됨' : '알림 비활성화됨'}
              </span>
            </div>
            <label className="switch">
              <input
                type="checkbox"
                checked={notificationEnabled}
                onChange={toggleNotification}
                className="hidden"
              />
              <span
                className={`slider round ${
                  notificationEnabled ? 'bg-green-500' : 'bg-gray-300'
                }`}
              ></span>
            </label>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">알림 정보</h2>
          <p className="text-sm text-gray-600">
            • 발송 시간: 매일 오전 9시 • 내용: 당일 핫이슈 키워드 Top 10
          </p>
        </div>
      </div>
    </div>
  );
};
