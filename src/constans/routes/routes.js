const isAuth = user => user.isAuth;

export const HOME = {
  path: '/',
  label: 'Home',
  getPath() {
    return this.path;
  },
  handlePermission : () => !isAuth,
};

export const SINGUP = {
  path: '/singup',
  label: 'Singup',
  getPath() {
    return this.path;
  },
  handlePermission : (user) => !isAuth(user),
};

export const SINGIN = {
  path: '/singin',
  label: 'Singin',
  getPath() {
    return this.path;
  },
  handlePermission : (user) => !isAuth(user),
};

export const ALLNOTES = {
  path: '/notes/region?/:id?',
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
  path: '/viewer/:id',
  label: 'Viewer',
  getPath(id) {
    return id ? this.path.replace(':id', id) : this.path;
  },
  handlePermission : isAuth,
};


export const ADD_MODEL = {
  path: '/add-model',
  label: 'Model',
  getPath() {
    return this.path;
  },
  handlePermission : isAuth,
};

export const CREATE_MODEL = {
  path: '/create',
  label: 'Create',
  getPath() {
    return this.path
  },
  handlePermission : isAuth,
}

export const EDIT_MODEL = {
  path: '/edit/:id',
  label: 'Edit',
  getPath(id) {
    return `/edit/${id}`;
  },
  handlePermission : isAuth,
}
