import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, roles: [], token: null },
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => {
        // handle register pending state
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = {
          name: action.payload.user.name,
          email: action.payload.user.email,
          token: action.payload.token,
        };
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        // handle register rejected state
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = {
          email: action.payload.user.email,
          token: action.payload.token,
        };
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null, token: null };
        state.isLoggedIn = false;
        localStorage.removeItem('token');
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
