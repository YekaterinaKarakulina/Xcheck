import env from '../../../env';

const user = {
  avatar_url: "https://avatars0.githubusercontent.com/u/14919341?v=4",
  bio: "Frontend developer",
  blog: "",
  collaborators: 0,
  company: null,
  created_at: "2015-10-01T05:28:12Z",
  events_url: "https://api.github.com/users/Qwerty/events{/privacy}",
  followers: 5,
  followers_url: "https://api.github.com/users/Qwerty/followers",
  following: 22,
  html_url: "https://github.com/Qwerty",
  id: 14919341,
  location: "Moscow",
  login: "Qwerty",
  name: "Qwerty",
};

const roles = ['author', 'student', 'supervisor', 'course_manager'];

const initialStateEmpty = {
  isLoggedIn: false,
  user: null,
  clientId: env.clientId,
  redirectUri: `${env.appBaseURL}login`,
  loading: false,
  errorMessage: null,
  roles: [],
};

const initialStateFilled = {
  isLoggedIn: true,
  user,
  clientId: env.clientId,
  redirectUri: `${env.appBaseURL}login`,
  loading: false,
  errorMessage: null,
  roles,
};

export { 
  user,
  roles,
  initialStateEmpty, 
  initialStateFilled
};
