const isAuth = user => {
  return user.token === null;
};

export const HOME = {
  path: '/',
  label: 'Home',

  handlePermission : isAuth,
  getDynamicParams(id) {
    return this.path + id;
  },
};

export const SINGUP = {
  path: 'singup',
  label: 'Singup',

  handlePermission : isAuth,
};

export const SINGIN = {
  path: 'singin',
  label: 'Singin',

  handlePermission : isAuth,
};

export const TEST = {
  path: 'test',
  label: 'Test',

  handlePermission : isAuth,
};
