'use client';

import Image from 'next/image';
import KakaoIcon from '@shared/assets/icons/kakao_24.png';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { REDIRECT_URI, USER_SCOPE } from '@/src/app/model/kakao';

export const MoveToKakaoLoginButton = (): React.ReactNode => {
  const route = useRouter();

  const onClick = () => {
    // route.push('https://kauth.kakao.com/oauth/authorize'); // 카카오 로그인 페이지로 전환
    window.Kakao.Auth.authorize({
      redirectUri: REDIRECT_URI,
      scope: USER_SCOPE,
    });
  };

  /* SECTION - [카카오 인스턴스 초기화 영역] */
  useEffect(() => {
    if (window?.Kakao) {
      const KakaoInstance = window?.Kakao;
      const jsKey = process.env.NEXT_PUBLIC_APP_JS_KEY;
      KakaoInstance.init(jsKey!);
    }
  }, []);

  return (
    <button
      onClick={onClick}
      className="flex gap-1 items-center justify-center w-full py-2 px-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
    >
      <Image src={KakaoIcon} width={24} height={24} alt="kakao-logo" />
      <span>카카오로 로그인</span>
    </button>
  );
};
