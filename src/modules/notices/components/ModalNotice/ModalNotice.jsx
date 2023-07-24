
import { Box, Image, Wrap, Button, Title, Ul, Name,  Birthday,  Type,  Place,  Gender,  Email, Phone, Comments, Comments_1, Add, Contacts, Address  } from "./ModalNotice.styled";

const ModalNotice = () => {  
  
  return <Box>         
    <Wrap>     
    <Image src=" https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" alt="cat"/>
   <div> 
    <Title>Сute dog looking for a home</Title>
    <Ul>    
      <Name> <p>Name:</p> <p>Rich</p></Name>
      <Birthday> <p>Birthday:</p> <p>21.09.2020</p></Birthday>
      <Type> <p>Type:</p> <p>Pomeranian</p></Type>
      <Place>  <p>Place:</p> <p>Lviv</p></Place>
      <Gender><p>The sex:</p> <p>male</p></Gender>
      <Email>Email: <Address href="mailto:user@mail.com">user@mail.com</Address></Email>
      <Phone>Phone: <Address href="tel:+380971234567">+380971234567</Address></Phone>
    </Ul>
    </div>
    </Wrap>
    <Comments>Comments: <Comments_1>Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!</Comments_1> </Comments>
    <Button type="button">X</Button>
   <div>
    <Contacts>Contacts</Contacts>
    <Add>Add to</Add>
    </div>
    
  </Box>
    
};

export default ModalNotice;
