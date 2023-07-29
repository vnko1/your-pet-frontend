import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../modules/header/components/Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Is Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
