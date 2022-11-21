import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilePicture from "./profilePicture/ProfilePicture";
import CustomButton from "../../../components/customButton/CustomButton";
import CustomInput from "../../../components/customInput/CustomInput";
import styles from "./ProfileView.module.scss";

function ProfileView() {
  const profile = useSelector((state) => {
    return state.userSlice.profile;
  });
  const dispatch = useDispatch();

  function SubmitProfile(event) {
    event.preventDefault();
    Promise.resolve()
      .then(() => {
        localStorage.setItem("profile", JSON.stringify(profile));
      })
      .catch((error) => {
        alert(error);
      })
      .finally(alert("Profile Saved!"));
  }
  function PictureUpload() {}

  function handleInput(event) {
    const { name, value } = event.target;
    dispatch({
      type: "user/profile",
      payload: { ...profile, [name]: value },
    });
  }
  return (
    <form className={styles.container} onSubmit={SubmitProfile}>
      <ProfilePicture onClick={PictureUpload} />
      <div className={styles.profileForm}>
        <CustomInput
          title="Name"
          placeholder="Enter Name"
          value={profile.name}
          name="Name"
          onChange={handleInput}
        />
        <CustomInput
          title="Last Name"
          value={profile.lastName}
          placeholder="Enter Last Name"
          name="LastName"
          onChange={handleInput}
        />
        <CustomInput
          title="Bio"
          value={profile.bio}
          placeholder="Enter Bio"
          name="Bio"
          onChange={handleInput}
        />
        <CustomButton title="Submit" />
      </div>
    </form>
  );
}

export default ProfileView;
