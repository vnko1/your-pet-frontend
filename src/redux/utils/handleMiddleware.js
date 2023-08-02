import { toast } from "react-hot-toast";
import { takeFavoritesList } from "../notices/notices-operations";
import { notifySucces, notifyError } from "../../shared/toasters/Toasters";

const handleMiddleware = (store) => (next) => (action) => {
  if (action.type === "auth/addUserPet/fulfilled") {
    notifySucces("New Post of Pet succesfully created");
  }
  if (action.type === "auth/deleteUserPet/fulfilled") {
    notifySucces("Post succesfully deleted");
  }

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
  if (action.type === "notices/deleteCardById/fulfilled") {
    toast.success("Successfuly delete from own", {
      duration: 4000,
      position: "top-right",
    });
  }
  if (
    action.type === "auth/login/fulfilled" ||
    action.type === "auth/refresh/fulfilled"
  ) {
    const { favorites } = action.payload.user;
    store.dispatch(takeFavoritesList(favorites));
  }

  if (
    action.type === "auth/register/rejected" ||
    action.type === "auth/login/rejected" ||
    action.type === "auth/updateUser/rejected" ||
    action.type === "auth/getCurrentUser/rejected"
  ) {
    notifyError(action.payload.response?.data?.message);
  }

  return next(action);
};

export default handleMiddleware;
