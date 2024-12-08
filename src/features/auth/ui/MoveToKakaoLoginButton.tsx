import Image from 'next/image';
import KakaoIcon from '@shared/assets/icons/kakao_24.png';
import { useRouter } from 'next/navigation';

export const MoveToKakaoLoginButton = (): React.ReactNode => {
  const route = useRouter();

  const onClick = () => {
    route.push('signIn'); //signIn 페이지로 전환
  };

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
