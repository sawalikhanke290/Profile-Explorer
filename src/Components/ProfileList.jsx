
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { getProfiles } from "../services/ProfileServices";
import "../App.css";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await getProfiles();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
