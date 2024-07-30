import profilesData from "../data/profiles.json";

export const getProfiles = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(profilesData);
    }, 500);
  });
};


export const getProfileById = (id) => {
  return profilesData.find((profile) => profile.id === id);
};
