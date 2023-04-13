import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import { Loader } from './loader/loader';
import { PrivateRoute } from './PrivateRoute';
import ROUTES from 'constans/routes';
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const SingInPage = lazy(() => import('../pages/SingIn'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));
const AllNotesPage = lazy(() => import('../pages/AllNotes'));

export const App = () => {
  return (
    <>
      <Loader />
      <Routes>
        <Route path={ROUTES.HOME.path} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={ROUTES.SINGUP.path}
            element={
              <PrivateRoute
                component={<RegisterPage />}
                redirectTo="/notes"
                guard={ROUTES.SINGUP}
              />
            }
          />
          <Route
            path={ROUTES.SINGIN.path}
            element={
              <PrivateRoute
                component={<SingInPage />}
                redirectTo="/notes"
                guard={ROUTES.SINGIN}
              />
            }
          />
          <Route
            path={ROUTES.ALLNOTES.path}
            element={
              <PrivateRoute
                component={<AllNotesPage />}
                redirectTo="/singin"
                guard={ROUTES.ALLNOTES}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
