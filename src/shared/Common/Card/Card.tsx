import { RootState } from "core/store";
import { useSelector } from "react-redux";

const Card = () => {
  const userSlice = useSelector((state: RootState) => state.user);
  return (
    <div>
      <span> userid:{userSlice.id}</span>
      <br />
      <span> useremail:{userSlice.email}</span>
      <br />
      <span> userusername:{userSlice.username}</span>
    </div>
  );
};

export default Card;
