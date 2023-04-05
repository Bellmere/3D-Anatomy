import React from "react";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { RegisterForm } from "./registerForm/registerForm";
import { LoginForm } from "./loginForm/loginForm";
import NotFound from "./NotFound/NotFound";
import { Layout } from "./Layout";
import { Navigation } from "./navigation/navigation";
import { AppBar } from "./appBar/appBar";

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
