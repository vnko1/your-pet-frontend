import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";

import { refreshUser } from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";

export default function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectRefreshing);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <HashLoader
        color="green"
        loading="true"
        size={155}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <div>Тут Блок Навігації</div>
  );
}
