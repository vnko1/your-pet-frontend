const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectUserName = (state) => state.auth.user.name;
const selectToken = (state) => state.auth.token;
const selectRefreshing = (state) => state.auth.isRefreshing;
const selectUser = (state) => state.auth.user;

const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
  selectToken,
  selectRefreshing,
  selectUser,
};

export default authSelectors;
