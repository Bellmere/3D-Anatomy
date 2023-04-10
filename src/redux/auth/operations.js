import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from 'api/firebase/firebase';

const notifyFailed = () => toast('Registration Failed');
const notifyNoSuchUser = () => toast('No Such User');

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        user: { name, email },
        token: userCredentials.user.refreshToken,
      };
    } catch (error) {
      notifyFailed();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { email, password } = credentials;
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        user: { email },
        token: userCredentials.user.refreshToken,
      };
    } catch (error) {
      notifyNoSuchUser();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const persistedToken = localStorage.getItem('token');
      if (!persistedToken) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }

      const user = await new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve(user);
          } else {
            reject('User not found');
          }
        });
      });

      const email = user.email;
      return { user: { email }, token: persistedToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

