export const noticesList = (state) => state.notices.items;
export const noticesFavoriteList = (state) => state.notices.favorite;
export const noticesIsLoadingFavorite = (state) =>
  state.notices.isLoadingFavorite;
export const isLogin = (state) => state.auth.isLoggedIn;
