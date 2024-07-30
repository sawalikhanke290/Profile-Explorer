import React, { useState } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);

  const toggleMap = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={toggleMap}>Current Location</button>
      {showMap && <Map location={profile.location} />}
      <Link to={`/profiles/${profile.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default ProfileCard;
