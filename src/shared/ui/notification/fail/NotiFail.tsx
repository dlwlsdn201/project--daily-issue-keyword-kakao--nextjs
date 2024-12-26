import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Notification } from '@mantine/core';
import React from 'react';

export const NotiFail = () => {
  const FailIcon = <FontAwesomeIcon icon={faXmark} />;

  return (
    <Notification icon={FailIcon} color="red" title="실패" mt="md">
      실패하였습니다.
    </Notification>
  );
};
