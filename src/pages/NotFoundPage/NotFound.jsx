import { Section, Title, Wrapper } from "./NotFound.styled";

const notFoundMobile1x = new URL(
  "../../images/notFound-images/not-found-mobile1x.png",
  import.meta.url
);
const notFoundMobile2x = new URL(
  "../../images/notFound-images/not-found-mobile2x.png",
  import.meta.url
);
const notFoundTablet1x = new URL(
  "../../images/notFound-images/not-found-tablet1x.png",
  import.meta.url
);
const notFoundTablet2x = new URL(
  "../../images/notFound-images/not-found-tablet2x.png",
  import.meta.url
);
const notFoundDesk1x = new URL(
  "../../images/notFound-images/not-found-desk1x.png",
  import.meta.url
);
const notFoundDesk2x = new URL(
  "../../images/notFound-images/not-found-desk2x.png",
  import.meta.url
);

function NotFound() {
  return (
    <Section>
      <Title>
        Ooops! <br />
        This page not found :(
      </Title>
      <Wrapper>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${notFoundDesk1x}, ${notFoundDesk2x} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${notFoundTablet1x}, ${notFoundTablet2x} 2x`}
          />
          <img
            src={notFoundMobile1x}
            srcSet={`${notFoundMobile1x}, ${notFoundMobile2x} 2x`}
            alt="404 this page not found"
          />
        </picture>
      </Wrapper>
      <button>Back to main page</button>{" "}
    </Section>
  );
}
export default NotFound;
