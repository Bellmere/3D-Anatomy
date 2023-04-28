import { observer } from 'mobx-react-lite';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Loader } from './loader/loader';
import { PrivateRoute } from './PrivateRoute';

import { StoreContext, useContext } from '../context';
import ROUTES from 'constans/routes';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SideBar from './sidebar';


import HomePage from '../pages/Home';
import RegisterPage from '../pages/Register';
import SingInPage from '../pages/SingIn';
import NotFoundPage from './NotFound/NotFound';
import AllNotesPage from '../pages/AllNotes';
import ViewerPage from '../pages/Viewer';
import CreatePage from '../pages/Create';
import AddModelPage from '../pages/AddModelPage';


export const App = observer(() => {
  const { authUser } = useContext(StoreContext);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
          <script src='https://developer.biodigital.com/builds/api/2/human-api.min.js'></script>
          <title>Anatomy App</title>
        </Helmet>
      </HelmetProvider>
      <Loader />
      {authUser.isAuth === null ? null : <SideBar />}
      {authUser.isAuth === null ? null :
        <Routes>
          <Route path={ROUTES.HOME.path} element={<Layout />}>
            <Route
              path={ROUTES.HOME.path}
              index
              element={
                <PrivateRoute
                  component={<HomePage />}
                  redirectTo='/notes'
                  guard={ROUTES.HOME}
                />
              }
            />
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
            <Route
              path={ROUTES.ADD_MODEL.path}
              element={
                <PrivateRoute
                  component={<AddModelPage />}
                  redirectTo={ROUTES.SINGIN.path}
                  guard={ROUTES.ADD_MODEL}
                />
              }
            />
            <Route
              path={ROUTES.CREATE_MODEL.path}
              element={
                <PrivateRoute
                  component={<CreatePage />}
                  redirectTo={ROUTES.CREATE_MODEL.path}
                  guard={ROUTES.CREATE_MODEL}
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
