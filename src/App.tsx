import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {IUser} from "./entities/User";
import * as AuthService from "./services/auth/AuthenticationService";
import EventBus from "./common/EventBus";
import ThemeConfig from "./theme";
import ScrollToTop from "./containers/component/ScrollToTop";
import GlobalStyles from "./theme/globalStyles";
import Router from "./routes";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", logOut);

    return () => {
      EventBus.remove("logout", logOut);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
};

export default App;
