export const getLoginStatus = (state) => state.login.isLoggedIn;

export const getLoadingStatus = (state) => state.login.loading;

export const getUser = (state) => state.login.user;

export const getClientId = (state) => state.login.clientId;

export const getRedirectUri = (state) => state.login.redirectUri;

export const getProxyUrl = (state) => state.login.proxyUrl;

export const getLoginError = (state) => state.login.errorMessage;

export const getUserRoles = (state) => state.login.roles;
