import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
        <div className="header__profile">
        <img className="header__profile-img" src={user.picture} alt="" />
          <span className="header__profile-name">{user.name}</span>
      </div>
    )
  );
};

export default Profile;
