import React, {useEffect} from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import ChangeProfile from "./component/profile/ChangeProfile";
import ChangePassword from "./component/profile/ChangePassword";
import {getUser} from "../services/UserService";
import {getCurrentUser} from "../services/AuthenticationService";
import ImageCard from "./component/profile/ImageCard";

const Profile: React.FC = () => {
  const [profile, setProfile] = React.useState<any>(undefined);
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

  console.log(profile);
  return (
    <Container maxWidth="xl">
      <Box sx={{ pb: 5 }}>
        <Typography variant="h4">Hi, Welcome back</Typography>
      </Box>
      <ChangeProfile />
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      </Stack>
      <ChangePassword />

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      </Stack>

      {
        profile && profile.avatar && (
          <ImageCard image={profile.avatar} />
        )
      }
    </Container>
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>
    //       <strong>{currentUser.username}</strong> Profile
    //     </h3>
    //   </header>
    //   <p>
    //     <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
    //     {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
    //   </p>
    //   <p>
    //     <strong>Id:</strong> {currentUser.id}
    //   </p>
    //   <p>
    //     <strong>Email:</strong> {currentUser.email}
    //   </p>
    //   <strong>Authorities:</strong>
    //   <ul>
    //     {currentUser.roles &&
    //     currentUser.roles.map((role: string, index: number) => <li key={index}>{role}</li>)}
    //   </ul>
    // </div>
  );
};

export default Profile;
