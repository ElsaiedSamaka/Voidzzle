import React from 'react';
import { AnalyticsLayout, RootLayout } from 'shared';

const Refund = () => {
  return <div>Refund</div>;
};
Refund.getLayout = (page) => {
  return (
    <RootLayout>
      <AnalyticsLayout>{page}</AnalyticsLayout>
    </RootLayout>
  );
};
export default Refund;
