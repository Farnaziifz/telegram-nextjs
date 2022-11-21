import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilePicture from "./profilePicture/ProfilePicture";
import CustomButton from "../../../components/shared/customButton/CustomButton";
import CustomInput from "../../../components/shared/customInput/CustomInput";
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
    console.log(name, value);
    dispatch({
      type: "userSlice/profile",
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
          value={profile.Name}
          name="Name"
          onChange={handleInput}
        />
        <CustomInput
          title="Last Name"
          value={profile.LastName}
          placeholder="Enter Last Name"
          name="LastName"
          onChange={handleInput}
        />
        <CustomInput
          title="Bio"
          value={profile.Bio}
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
