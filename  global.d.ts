declare interface Window {
  Kakao: {
    init: (key: string) => void;
    Auth: {
      authorize: ({
        redirectUri,
        scope,
      }: {
        redirectUri: string;
        scope: string;
      }) => void;
    };
  };
}
