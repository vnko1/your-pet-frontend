import { useEffect } from "react";
import FriendsList from "../../modules/ourFriends/components/friendsList/FliendsList";
import { useDispatch, useSelector } from "react-redux";
import getFriends from "../../redux/ourFriends/ourFriends-operations";
import {
  getAllFriends,
  isError,
  loading,
} from "../../redux/ourFriends/ourFriends-selectors";
import NotFound from "../../pages/NotFoundPage/NotFound";
const OurFriends = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(loading);
  const error = useSelector(isError);

  useEffect(() => {
    dispatch(getFriends());
  }, []);
  if (error) {
    return <NotFound />;
  } else {
    return isLoading ? <div>Loading</div> : <FriendsList />;
  }
};
export default OurFriends;
