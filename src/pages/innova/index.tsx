import React from 'react'
import { RootLayout } from 'shared'

const InnvoaPage = () => {
  return (
    <div>InnvoaPage</div>
  )
}
InnvoaPage.getLayout = (page) => {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}
export default InnvoaPage