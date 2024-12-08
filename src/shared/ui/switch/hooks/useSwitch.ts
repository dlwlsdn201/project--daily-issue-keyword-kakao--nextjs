import { useState } from 'react';

interface Props {
  initialValue: boolean;
}

export const useSwitch = ({ initialValue }: Props) => {
  const [checked, setChecked] = useState(initialValue);

  const toggleSwitch = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  return { checked, toggleSwitch };
};
