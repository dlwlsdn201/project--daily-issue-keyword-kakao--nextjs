import { useEffect, useState } from 'react';

interface Props {
  initialValue: boolean;
  onToggle?: (value: boolean) => void;
}

export const useSwitch = ({ initialValue, onToggle }: Props) => {
  const [checked, setChecked] = useState(initialValue);

  const toggleSwitch = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  useEffect(() => {
    if (onToggle) {
      onToggle(checked);
    }
  }, [checked]);

  return { checked, toggleSwitch };
};
