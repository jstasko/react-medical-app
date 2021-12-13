import React, {useEffect} from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import Email from "./component/profile/ChangeProfile";
import ChangePassword from "./component/profile/ChangePassword";
import {API_USER_URL, getUser, updatePassword} from "../services/auth/UserService";
import {getCurrentUser} from "../services/auth/AuthenticationService";
import ImageCard from "./component/profile/ImageCard";

const Profile: React.FC = () => {
  const [profile, setProfile] = React.useState<any>(undefined);
  const [error, setError] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");


  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!profile) {
      getProfile();
    }
  }, []);

  const getProfile = async () => {
      const profile = await getUser(currentUser.email);
      setProfile(profile.data);
  };

  const changePassword = async (newPassword: string) => {
    await updatePassword(newPassword)
      .then((response) => {
        setMessage("Password was updated")
      })
      .catch((error) => {
        setError(true)
        setMessage("Password was not updated")
      });
    setTimeout(() => {
      setError(false)
      setMessage("")
    }, 1000)
  }
  return (
    <Container maxWidth="xl">
      {message && (
        <div className="form-group">
          <div
            className={
              !error ? "alert alert-success" : "alert alert-danger"
            }
            role="alert"
          >
            {message}
          </div>
        </div>
      )}

      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi, Welcome back</Typography>
      </Box>
      <Email />
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      </Stack>
      <ChangePassword changePassword={changePassword} />

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      </Stack>

      {
        profile  && (
          <ImageCard profile={profile} setError={setError} setMessage={setMessage} setProfile={getProfile} baseUrl={API_USER_URL}/>
        )
      }
    </Container>
  );
};

export default Profile;
