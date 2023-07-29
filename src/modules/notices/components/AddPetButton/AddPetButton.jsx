import { AddPetBtn, IconDesktop, IconMobile } from "./AddPetButton.styled";
import icons from "../../../../assets/icons.svg";
import { useEffect, useState } from "react";

function AddPetButton() {
  // тут 2 разних + в свг для разный екранов
  // const [isDesktop, setIsDesktop] = useState(true); // По замовчуванню вважаємо, що це десктоп

  // const handleResize = () => {
  //   // При зміні розміру вікна браузера перевіряємо, чи потрібно відобразити десктоп або мобільну іконку
  //   if (window.innerWidth < 768) {
  //     setIsDesktop(false); // Встановлюємо стан для відображення мобільної іконки
  //   } else {
  //     setIsDesktop(true); // Встановлюємо стан для відображення десктопної іконки
  //   }
  // };

  // useEffect(() => {
  //   // Додаємо обробник події resize для вікна браузера
  //   window.addEventListener('resize', handleResize);
  //   // Перевіряємо при завантаженні сторінки
  //   handleResize();

  //   return () => {
  //     // Прибираємо обробник події при розмонтуванні компонента
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <div>
      <AddPetBtn>
        Add pet
      
          {/* // Десктоп
          <IconDesktop width="24" height="24">
            <use href={icons + "#plus-small"} stroke="#FEF9F9" />
          </IconDesktop> */}
        
          {/* // Мобільний екран */}
          <IconMobile width="24" height="24">
            <use href={icons + "#plus"} stroke="#FEF9F9" />
          </IconMobile>
        
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 7V17M7 12L17 12"
            stroke="#FEF9F9"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20V12M12 12V4M12 12H20M12 12H4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg> */}
      </AddPetBtn>
    </div>
  );
}

export default AddPetButton;
