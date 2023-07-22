import { Button } from "./NoticesCategoriesNav.styled";

function NoticesCategoriesNav() {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
      <Button>sell</Button>
      <Button>lost/found</Button>
      <Button>in good hands</Button>
      <Button>favorite ads</Button>
      <Button>my ads</Button>
    </div>
  );
}

export default NoticesCategoriesNav;
