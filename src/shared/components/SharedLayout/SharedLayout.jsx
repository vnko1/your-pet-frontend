import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../modules/header/components/Header/Header";
import { Container } from "../../../styles/Container";
import Loader from "/src/shared/loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader loading={true} />}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
