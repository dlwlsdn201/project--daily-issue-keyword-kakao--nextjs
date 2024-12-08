'use client';

import React from 'react';
import { MoveToKakaoLoginButton } from '@/src/features/auth/ui';

export const IntroWidget = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="h-[30vh] w-[50vw] flex flex-col justify-center p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">핫이슈 알림 서비스</h1>
        <MoveToKakaoLoginButton />
      </div>
    </div>
  );
};
