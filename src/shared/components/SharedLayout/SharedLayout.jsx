import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../modules/header/components/Header/Header";
import { Container } from "../../../styles/Container";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Is Loading</div>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
