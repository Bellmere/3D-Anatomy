const isAuth = user => user.isAuth;

export const HOME = {
  path: '/',
  label: 'Home',
  getPath() {
    return this.path;
  },
  handlePermission : () => true,
};

export const SINGUP = {
  path: 'singup',
  label: 'Singup',
  getPath() {
    return this.path;
  },
  handlePermission : (user) => !isAuth(user),
};

export const SINGIN = {
  path: 'singin',
  label: 'Singin',
  getPath() {
    return this.path;
  },
  handlePermission : (user) => !isAuth(user),
};

export const ALLNOTES = {
  path: 'notes/region?/:id?',
  getPath(id) {
    if(id === undefined) {
      return '/notes';
    }
    return `notes/region/${id}`
  },
  label: 'All Notes',
  handlePermission : isAuth,
};


export const VIEWER = {
  path: 'viewer/:id',
  label: 'Viewer',
  getPath() {
    return this.path;
  },
  handlePermission : isAuth,
};
