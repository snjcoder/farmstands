import React, { useEffect, useState } from "react";
const [userList, setUserList] = useState();

const UserList = () => {
  useEffect(() => {
    const getUserList = async () => {
      try {
        let response = await fetch("/sign-up");
        let users = await response.json();
        console.log(`users is:`, users);
        return setUserList(users);
      } catch (ex) {
        console.log(ex);
      }
    };
    getUserList();
  }, []);
};

export default UserList;
