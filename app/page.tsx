import Image from 'next/image';
import KakaoIcon from '@shared/assets/icons/kakao_24.png';

export interface LoginPageProps {
  onLogin: () => void;
}
// 로그인 페이지 컴포넌트
export default async function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">핫이슈 알림 서비스</h1>
        <button
          onClick={onLogin}
          className="flex gap-1 items-center justify-center w-full py-2 px-4 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
        >
          <Image src={KakaoIcon} width={24} height={24} alt="kakao-logo" />
          <span>카카오로 로그인</span>
        </button>
      </div>
    </div>
  );
}
