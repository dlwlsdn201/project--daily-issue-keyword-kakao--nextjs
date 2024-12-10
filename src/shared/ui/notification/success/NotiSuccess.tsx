import { Notification } from '@mantine/core';
import React from 'react';

export const NotiSuccess = () => {
  return (
    <Notification color="teal" title="성공" mt="md">
      성공하였습니다.
    </Notification>
  );
};
