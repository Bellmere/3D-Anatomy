export const validationFormRegister = ({ name, email, password, password_confirm }) => {
  const errors = {};
  if (!name) {
    errors.name = 'Name is required';
  }
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid';
  }
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }
  if (!password_confirm) {
    errors.password_confirm = 'Password confirmation is required';
  } else if (password_confirm !== password) {
    errors.password_confirm = 'Passwords do not match';
  }
  return errors;
}

export const validationFormLogin = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Email is invalid';
  }
  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }
  return errors;
};



export const replaceError = (string) => {
  const listReplace = ['Error: ', ',-starting-an-object-on-a-scalar-field'];
  let newString = '';
  for(let item of listReplace) {
    newString = string.replace(item, '');
  }
  return newString
}


export const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};
