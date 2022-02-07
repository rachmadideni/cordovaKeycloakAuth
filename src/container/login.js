import React from "react";
import { useNavigate } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

/*
REACT_APP_KEYCLOAK_LINK='https://id.neux.io/auth/'
REACT_APP_KEYCLOAK_REALM='master'
REACT_APP_KEYCLOAK_CLIENT_ID='com.musicascode'

return new Keycloak({
      realm: process.env.REACT_APP_KEYCLOAK_REALM,
      url: process.env.REACT_APP_KEYCLOAK_LINK,
      clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
    });

*/

const Login = () => {
  let navigate = useNavigate();
  const { keycloak, initialized } = useKeycloak();
  // const keycloakJs = new keycloak();
  /*
  {
    adapter: "cordova-native",
    url: process.env.REACT_APP_KEYCLOAK_URL,
    realm: process.env.REACT_APP_KEYCLOAK_REALM,
    clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
  }
  */
  // const { keycloak, initialized } = useKeycloak();
  // if (window.cordova) {
  //   document.addEventListener("deviceready", () => {
  //     // alert("cordova is ready from login page!");
  //     // console.log(keycloakJs);
  //   });
  // }
  // console.log("is authenticated : ", keycloak.authenticated);
  // console.log("initialized", initialized);
  const handleLogin = (evt) => {
    evt.preventDefault();
    if (!keycloak.authenticated) {
      keycloak.login();
    } else {
      console.log("keycloak.authenticated", keycloak.authenticated);
    }
  };

  //console.log(keycloak.tokenParsed);
  return (
    <div className="layout flex-col flex ml-auto mr-auto justify-center items-center w-full lg:w-2/3 md:w-3/5">
      <h1 className="font-bold text-2xl my-10 text-gray-500">Login</h1>
      <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12">
        <button
          onClick={(evt) => handleLogin(evt)}
          className="bg-sky-700 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
        >
          Login with Discord
        </button>
      </form>
    </div>
  );
};

export default Login;
