import { useSelector } from "react-redux";
import { getAllFriends } from "../../../../redux/ourFriends/ourFriends-selectors";
import FriendsItem from "../friendsItem/FriendsItem";
import { FriendsContainer, List, Title } from "./FriendsList.styled";

const FriendsList = () => {
  const friends = useSelector(getAllFriends);

  return (
    <FriendsContainer>
      <Title>Our Friends</Title>
      <List>
        {friends.map((friend) => {
          return <FriendsItem key={friend._id} friend={friend} />;
        })}
      </List>
    </FriendsContainer>
  );
};
export default FriendsList;
