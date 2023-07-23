import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";
import NotFound from "./pages/NotFoundPage/NotFound";

export default function App() {
  const dispath = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectRefreshing);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return isRefreshing ? (
    <div>Вставить Спінер або щось що інформує про загрузку !</div>
  ) : (
    <div>Тут Блок Навігації</div>
  );
}
