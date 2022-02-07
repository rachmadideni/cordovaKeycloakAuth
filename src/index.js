import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./container/login";
import HomePage from "./container/home";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloakConfig from "./keycloak";
import "./global.css";
// import "./index.css";

const eventLogger = (event, error) => {
  console.log("onKeycloakEvent", event);
  console.log("onKeycloakEvent error:", error);
};

const tokenLogger = (tokens) => {
  console.log("onKeycloakTokens", tokens);
};

const onAuthSuccess = (event) => {
  console.log("onAuthSuccess", event);
};

const onAuthError = (event) => {
  console.log("onAuthError", event);
};

const renderReact = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ReactKeycloakProvider
        authClient={keycloakConfig}
        // initOptions={{
        //   responseMode: "query",
        //   onLoad: "check-sso",
        //   enableLogging: true,
        //   checkLoginIframe: false,
        // }}
        onEvent={eventLogger}
        onTokens={tokenLogger}
        onAuthSuccess={onAuthSuccess}
        onAuthError={onAuthError}
      >
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/home" element={<HomePage />} />
          </Routes>
        </HashRouter>
      </ReactKeycloakProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (window.cordova) {
  document.addEventListener(
    "deviceready",
    () => {
      alert("cordova is ready!");

      var storage = window.localStorage;
      storage.setItem("manual-token", 1234); // Pass a key name and its value to add or update that key.
      var value = storage.getItem("manual-token"); // Pass a key name to get its value.

      // storage.removeItem(key) // Pass a key name to remove that key from storage.

      renderReact();
    },
    false
  );
} else {
  renderReact();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
