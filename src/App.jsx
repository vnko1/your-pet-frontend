import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { refreshUser } from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

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
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {isRefreshing ? (
          <div>Вставить Спінер або щось що інформує про загрузку !</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SharedLayout />
                </Suspense>
              }
            >
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
    </Router>
  );
};

export default App;
