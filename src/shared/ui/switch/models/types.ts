import { useSwitch } from '../hooks/useSwitch';

export interface SharedSwitchProps {
  checked: boolean;
  stateCustomHook: ReturnType<typeof useSwitch>;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  defaultChecked?: boolean;
  label?: React.ReactNode;
  onLabel?: React.ReactNode;
  offLabel?: React.ReactNode;
  description?: React.ReactNode;
  id?: string;
  className?: string;
}
