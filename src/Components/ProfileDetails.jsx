import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProfileById } from "../services/ProfileServices";

const ProfileDetails = () => {
  const { id } = useParams();
  const profile = getProfileById(parseInt(id, 10));

  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return (
    <div className="profile-details">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <h2 className="profile">{profile.name}</h2>
      <p className="description">{profile.description}</p>
      <p className="address">Address: {profile.address}</p>
      <Link to="/" className="back-link">
        Back to Profiles
      </Link>
    </div>
  );
};

export default ProfileDetails;
