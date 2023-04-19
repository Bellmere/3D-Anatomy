import { lazy } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Loader } from './loader/loader';
import { PrivateRoute } from './PrivateRoute';

import { StoreContext, useContext } from '../context';
import ROUTES from 'constans/routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SideBar from './sidebar';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const SingInPage = lazy(() => import('../pages/SingIn'));
const NotFoundPage = lazy(() => import('./NotFound/NotFound'));
const AllNotesPage = lazy(() => import('../pages/AllNotes'));
const ViewerPage = lazy(() => import('../pages/Viewer'));

export const App = observer(() => {
  const { authUser } = useContext(StoreContext);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" ></link>
          <script src='https://developer.biodigital.com/builds/api/2/human-api.min.js'></script>
        </Helmet>
      </HelmetProvider>
      <Loader />
      <SideBar />
      {authUser.isAuth === null ? null :
        <Routes>
          <Route path={ROUTES.HOME.path} element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path={ROUTES.SINGUP.path}
              element={
                <PrivateRoute
                  component={<RegisterPage />}
                  redirectTo='/notes'
                  guard={ROUTES.SINGUP}
                />
              }
            />
            <Route
              path={ROUTES.SINGIN.path}
              element={
                <PrivateRoute
                  component={<SingInPage />}
                  redirectTo='/notes'
                  guard={ROUTES.SINGIN}
                />
              }
            />
            <Route
              path={ROUTES.ALLNOTES.path}
              element={
                <PrivateRoute
                  component={<AllNotesPage />}
                  redirectTo='/singin'
                  guard={ROUTES.ALLNOTES}
                />
              }
            />
            <Route
              path={ROUTES.VIEWER.path}
              element={
                <PrivateRoute
                  component={<ViewerPage />}
                  redirectTo='/singin'
                  guard={ROUTES.VIEWER}
                />
              }
            />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      }
    </>
  );
});
