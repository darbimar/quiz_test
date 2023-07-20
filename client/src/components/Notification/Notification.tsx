import React, { useEffect } from 'react';
import { notification } from 'antd';
import { useTypedSelector } from 'hooks/useTypedSelector';

const Notification: React.FC = () => {
  const { notificationMessage } = useTypedSelector((state) => state.auth);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (message: string, description: string) => {
    api.info({
      message,
      description,
      placement: 'top',
    });
  };

  useEffect(() => {
    if (notificationMessage) {
      openNotification('', notificationMessage);
    }
  }, [notificationMessage]);

  return <>{contextHolder}</>;
};

export default Notification;
