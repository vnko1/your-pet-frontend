const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectUserName = (state) => state.auth.user.name;
const selectToken = (state) => state.auth.token;
const selectRefreshing = (state) => state.auth.isRefreshing;
const selectUser = (state) => state.auth.user;
const selectIsLoader = (state) => state.auth.isLoader;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
  selectRefreshing,
  selectUser,
  selectIsLoader,
};

export default authSelectors;
