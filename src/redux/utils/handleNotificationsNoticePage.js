import { toast } from "react-hot-toast";

const handleNotificationsNoticePage = (store) => (next) => (action) => {
  console.log("actionType", action.type);
  if (action.type === "notices/addFavorite/fulfilled") {
    toast.success("Successfuly add to favorite", {
      duration: 4000,
      position: "top-right",
    });
  }
  if (action.type === "notices/deleteFavorite/fulfilled") {
    toast.success("Successfuly delete from favorite", {
      duration: 4000,
      position: "top-right",
    });
  }

  return next(action);
};

export default handleNotificationsNoticePage;
