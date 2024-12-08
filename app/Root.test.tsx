import { render, screen } from '@testing-library/react';
import { describe, test } from '@jest/globals';
import LoginPage, { LoginPageProps } from './page';

describe('Root component', () => {
  test('renders the Root page text', () => {
    const props: LoginPageProps = {
      onLogin: () => console.log('props.onLogin 테스트'),
    };
    render(<LoginPage {...props} />);

    // Root page라는 텍스트가 화면에 나타나는지 확인합니다.
    const titleElement = screen.getByText(/핫이슈 알림 서비스/i);
    expect(titleElement).toBeInTheDocument();
  });
});
