const getRoles = () => {
  const roles = JSON.parse(localStorage.getItem('roles'));
  if (!roles) {
    return ['student'];
  }
  return roles.replace(/"/g, '').split(',');
};

export default getRoles;
