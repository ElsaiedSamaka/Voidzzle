import { DashboardLayout, RootLayout } from "shared"

const Account = () => {
  return (
    <div>accout</div>
  )
}
Account.getLayout = (page) => {
    return (<RootLayout>
        <DashboardLayout>
            {page}
        </DashboardLayout>
    </RootLayout>)
}

export default Account