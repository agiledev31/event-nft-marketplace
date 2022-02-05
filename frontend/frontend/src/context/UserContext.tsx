import React, { createContext, useState, useContext, FC } from 'react';
import PropTypes from 'prop-types';

interface UserContextInterface {
  userInfo? : any;
  setUserInfo?: any
}

const defaultState: UserContextInterface = {};

export const UserContext = createContext(defaultState);

const UserContextProvider: FC = ({children}) => {
  const [userInfo, setUserInfo] = useState(false);

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>
    {children}
  </UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.object,
};

export default UserContextProvider;
export const useUserContext = () => useContext(UserContext);