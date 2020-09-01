export const getLoginStatus = (state) => state.login.isLoggedIn;

export const getUser = (state) => state.login.user;

export const getClientId = (state) => state.login.clientId;

export const getRedirectUri = (state) => state.login.redirectUri;

export const getClientSecret = (state) => state.login.clientSecret;

export const getProxyUrl = (state) => state.login.proxyUrl;
