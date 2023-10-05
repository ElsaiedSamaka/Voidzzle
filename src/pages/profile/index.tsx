import { ProfileLayout, RootLayout } from "shared";

const Profile = () => {
  return (
    <div>
      Profile (My adds,My orders ,My Saved ,My wishlist ,My payments , Billing)
    </div>
  );
};
Profile.getLayout = (page) => {
  return (
    <RootLayout>
      <ProfileLayout>{page}</ProfileLayout>
    </RootLayout>
  );
};
export default Profile;
