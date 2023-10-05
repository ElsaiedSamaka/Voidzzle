import { ProfileLayout, RootLayout } from "shared";

const Profile = () => {
  return <div>Profile</div>;
};
Profile.getLayout = (page) => {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};
export default Profile;
