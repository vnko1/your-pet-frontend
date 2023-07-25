import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import { refreshUser } from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";
import NotFound from "./pages/NotFoundPage/NotFound";

const SharedLayout = lazy(() =>
  import("./shared/components/SharedLayout/SharedLayout")
);
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = lazy(() => import("./pages/AddPetPage/AddPetPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    
      <Suspense fallback={<div>Loading...</div>}>
        {isRefreshing ? (
          <div>Вставить Спінер або щось що інформує про загрузку !</div>
        ) : (
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<MainPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="notices/:categoryName" element={<NoticesPage />} />
              <Route path="user" element={<UserPage />} />
              <Route path="add-pet" element={<AddPetPage />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    
  );
};

export default App;
