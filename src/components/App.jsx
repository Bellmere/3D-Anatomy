import React from 'react';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { Loader } from './loader/loader';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import ROUTES from 'constans/routes';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const SingInPage = lazy(() => import('../pages/SingIn'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));
const TestPage = lazy(() => import('../pages/Test'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path={ROUTES.HOME.path} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={ROUTES.SINGUP.path}
          element={
            <PrivateRoute component={<RegisterPage />} redirectTo="/test" guard={ROUTES.SINGUP} />
          }
        />
        <Route
          path={ROUTES.SINGIN.path}
          element={
            <PrivateRoute component={<SingInPage />} redirectTo="/test" guard={ROUTES.SINGIN} />
          }
        />
        <Route
          path={ROUTES.TEST.path}
          element={
            <PrivateRoute component={<TestPage />} redirectTo="/singin" guard={ROUTES.TEST} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
