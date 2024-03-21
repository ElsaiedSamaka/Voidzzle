import React from 'react';
import { NotificationsLayout, RootLayout } from 'shared';

const Notifications = () => {
  return <div>Notifications</div>;
};
Notifications.getLayout = (page) => {
  return (
    <RootLayout>
      <NotificationsLayout>{page}</NotificationsLayout>
    </RootLayout>
  );
};
export default Notifications;
