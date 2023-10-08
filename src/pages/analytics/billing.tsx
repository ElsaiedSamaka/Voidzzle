import React from 'react'
import { AnalyticsLayout, RootLayout } from 'shared'

const Billing = () => {
  return (
    <div>Billing</div>
  )
}
Billing.getLayout = (page) => {
    return (
        <RootLayout>
         <AnalyticsLayout>
            {page}
         </AnalyticsLayout>
        </RootLayout>
    )
}

export default Billing