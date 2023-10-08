import React from 'react'
import { InnovaLayout, RootLayout } from 'shared'

const InnvoaPage = () => {
  return (
    <div>InnvoaPage</div>
  )
}
InnvoaPage.getLayout = (page) => {
    return (
      <RootLayout>
        <InnovaLayout>
          {page}
          </InnovaLayout>
        </RootLayout>
    )
}
export default InnvoaPage