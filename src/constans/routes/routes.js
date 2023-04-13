const isAuth = user => user.isAuth;

export const HOME = {
  path: '/',
  label: 'Home',
  handlePermission : () => true,
};

export const SINGUP = {
  path: 'singup',
  label: 'Singup',

  handlePermission : (user) => !isAuth(user),
};

export const SINGIN = {
  path: 'singin',
  label: 'Singin',
  handlePermission : (user) => !isAuth(user),
};

export const ALLNOTES = {
  path: 'notes',
  label: 'All Notes',
  handlePermission : isAuth,
};
