import React from "react";
import { MessagesLayout, RootLayout } from "shared";

const Messages = () => {
  return <div>Messages</div>;
};
Messages.getLayout = (page) => {
  return (
    <RootLayout>
      <MessagesLayout>{page}</MessagesLayout>
    </RootLayout>
  );
};
export default Messages;
