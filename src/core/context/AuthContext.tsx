import React from "react";

import useSessionStorage from "../hooks/useSessionStorage";

export type PageDispatch = React.Dispatch<any>;

interface Props {
  children: React.ReactNode;
}

const UserContext = React.createContext<{} | undefined>(null);

const UserContextProvider = ({ children }: Props) => {
  const [page, setPage] = useSessionStorage("offset", 0);
  return <UserContext.Provider value={page}>{children}</UserContext.Provider>;
};

export const useUserState = () => {
  const state = React.useContext(UserContext);
  return state;
};



export default UserContextProvider;
