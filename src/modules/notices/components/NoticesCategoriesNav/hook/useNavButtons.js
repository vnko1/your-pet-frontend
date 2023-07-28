import { useState } from "react";

const initialCategoryBtnUrl = [
  { to: "sell", label: "sell" },
  { to: "lost-found", label: "lost-found" },
  { to: "for-free", label: "in good hands" },
];

const useNavButtons = () => {
  const [login, setLogin] = useState(true);
  const [categoryBtnsUrl, setCategoryBtnsUrl] = useState(initialCategoryBtnUrl);
  const [activeButton, setActiveButton] = useState(() => {
    const fullURL = window.location.href;

    if (fullURL.includes("/notices/")) {
      const hasLostFound = fullURL.includes("lost-found")
        ? "lost-found"
        : false;
      const hasSell = fullURL.includes("sell") ? "sell" : false;
      const hasForFree = fullURL.includes("for-free") ? "for-free" : false;
      const hasFavorite = fullURL.includes("favorite") ? "favorite" : false;
      const hasOwn = fullURL.includes("own") ? "own" : false;

      return hasLostFound || hasSell || hasForFree || hasFavorite || hasOwn;
    } else {
      return "sell";
    }
  });

  if (login && categoryBtnsUrl.length === 3) {
    setCategoryBtnsUrl((prevCategoryBtnUrl) => [
      ...prevCategoryBtnUrl,
      { to: "favorite", label: "favorite ads" },
      { to: "own", label: "my ads" },
    ]);
  }

  return {
    login,
    setLogin,
    categoryBtnsUrl,
    activeButton,
    setActiveButton,
  };
};

export default useNavButtons;
