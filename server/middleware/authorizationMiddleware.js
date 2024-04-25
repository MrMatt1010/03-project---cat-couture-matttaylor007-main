const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://catcouture.com",
  issuerBaseURL: "https://dev-y0a2px1sm46ajwe2.us.auth0.com",
});

const checkScopes = requiredScopes("read:reports");

module.exports = {
  checkJwt,
  checkScopes,
};
