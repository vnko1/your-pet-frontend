
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";
import SharedLayout from "./shared/components/SharedLayout/SharedLayout";

export default function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectRefreshing);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
    <div>Вставить Спінер або щось що інформує про загрузку !</div>
  ) : (
    <div><SharedLayout/></div>
  );
}

