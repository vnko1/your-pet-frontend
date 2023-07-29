import { useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

const { selectUser, selectIsLoggedIn, selectRefreshing } = authSelectors;

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);

  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};
