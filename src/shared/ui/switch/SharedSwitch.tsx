'use client';

import { SwitchProps } from '@mantine/core';
import React, { ChangeEvent } from 'react';
import { SharedSwitchProps } from './models/types';
import { StyledSwitch, SwitchWrapper } from './SharedSwitch.styled';

export const SharedSwitch = ({
  stateCustomHook,
  label,
  size,
  defaultChecked,
  onLabel,
  offLabel,
  description,
  id,
  className,
}: SharedSwitchProps) => {
  const { checked, toggleSwitch } = stateCustomHook || {};

  const props: SwitchProps = {
    checked,
    defaultChecked,
    label,
    size,
    onLabel,
    offLabel,
    description,
    id,
    className,
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      toggleSwitch(event.currentTarget.checked),
  };

  return (
    <SwitchWrapper>
      <StyledSwitch {...props} />
    </SwitchWrapper>
  );
};
