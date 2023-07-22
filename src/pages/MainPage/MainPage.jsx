import { MainSection, Title, TttleBox, Wrapper } from "./MainPage.styled";

const pictures1xMobile = new URL(
  "../../images/mainPage-image/pictures1x-mobile.png",
  import.meta.url
);

const pictures2xMobile = new URL(
  "../../images/mainPage-image/pictures2x-mobile.png",
  import.meta.url
);
const pictures1xTablet = new URL(
  "../../images/mainPage-image/pictures1x-tablet.png",
  import.meta.url
);
const pictures2xTablet = new URL(
  "../../images/mainPage-image/pictures2x-tablet.png",
  import.meta.url
);
const pictures1xDesk = new URL(
  "../../images/mainPage-image/pictures1x-desk.png",
  import.meta.url
);
const pictures2xDesk = new URL(
  "../../images/mainPage-image/picture2x-desk.png",
  import.meta.url
);

const MainPage = () => {
  return (
    <MainSection>
      <TttleBox>
        <Title>Take good care of your small pets</Title>
      </TttleBox>

      <Wrapper>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${pictures1xDesk}, ${pictures2xDesk} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${pictures1xTablet}, ${pictures2xTablet} 2x`}
          />
          <img
            src={pictures1xMobile}
            srcSet={`${pictures1xMobile}, ${pictures2xMobile} 2x`}
            alt="Dogs and cat"
          />
        </picture>
      </Wrapper>
    </MainSection>
  );
};
export default MainPage;
