import keycloak from "keycloak-js";
const keycloakConfig = new keycloak({
  adapter: "cordova-native",
  url: process.env.REACT_APP_KEYCLOAK_URL,
  realm: process.env.REACT_APP_KEYCLOAK_REALM,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
  redirectUri: "android-app://io.cordova.hellocordova/http/localhost/",
});
export default keycloakConfig;
