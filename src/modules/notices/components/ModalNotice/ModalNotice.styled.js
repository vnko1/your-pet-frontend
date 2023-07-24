import styled from "styled-components";



export const Box = styled.div`
position:relative;
width: 681px;
height: 540px;
padding: 24px 31px;
border-radius: 40px;
background: #5555;

@media (width: 280px) {
    width: 100%; 
    height: auto; 
    border-radius: 20px;
    padding: 44px 20px 16px 20px; 
  }
 
`;



export const Image = styled.img`
width: 262px;
height: 298px;

border-radius: 0px 0px 40px 40px;
background:lightgray 0px -4.16px / 100% 131.822% no-repeat;

@media (width: 280px) {
    width: 240px; 
    height: auto; 
    border-radius: 0px 0px 40px 40px;
    background: lightgray 0px -14.355px / 100% 150.131% no-repeat;
  
  }


`;



export const Wrap = styled.div`
display:flex;
gap: 24px;
margin-bottom: 28px;

@media (width: 280px) {
    flex-flow: row wrap;
    gap: 12px;
   
  }
`;



export const Button = styled.button`
position: absolute;
top: 23px;
right: 26px;

width: 24px;
height: 24px;

@media (width: 280px) {
    top: 12px;
    right: 12px;
  }
`;

export const Title = styled.h1`
 width: 321px;
 height: 76px;
 
 color: #000;
 font-family: Manrope;
 font-size: 28px;
 font-style: normal;
 font-weight: 700;
 line-height: normal;
 letter-spacing: -0.28px;

@media (width: 280px) {
    width: 100%; 
    font-size: 24px;
    letter-spacing: -0.24px;
    
  }

`;

export const Ul = styled.ul`
padding: 0px;
margin-bottom: 12px;
list-style:none;
`;

export const Name = styled.li`
display:flex;
gap:71px;
margin-bottom: 8px;

color: #000;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media (width: 280px) {
    width: 100%; 
    font-size: 14px;
    gap:37px;
  }

`;

export const Birthday = styled.li`
display:flex;
gap:47px;
margin-bottom: 8px;

color: #000;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media (width: 280px) {
    width: 100%; 
    font-size: 14px;
    gap:20px;
  }
`;


export const Type = styled.li`
display:flex;
gap:75px;
margin-bottom: 8px;

color: #000;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media (width: 280px) {
    width: 100%; 
    font-size: 14px;
    gap:44px;
  }
`;

export const Place = styled.li`
display:flex;
gap:73px;
margin-bottom: 8px;

color: #000;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media (width: 280px) {
    width: 100%; 
    font-size: 14px;
    gap:39px;
  }
`;


export const Gender = styled.li`
display:flex;
gap:56px;
margin-bottom: 8px;



font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

@media (width: 280px) {
    width: 100%;  
    width: 221px; 
    font-size: 14px;
    gap:24px;
    color: #000;
  }
`;



export const Email = styled.li`
display:flex;
gap:56px;
margin-bottom: 8px;

@media (width: 280px) {
    width: 100%; 
    font-size: 14px;  
    gap:40px;  
  }
`;

export const Phone = styled.li`
display:flex;
gap:56px;


@media (width: 280px) {
    width: 100%; 
    font-size: 14px;
    gap:33px;
  }
`;

export const Comments = styled.p`
width: 618px;
margin-bottom: 70px;

color: #000;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 24px; 
letter-spacing: 0.64px;

@media (width: 280px) {
    width: 100%; 
    font-size: 14px;
    letter-spacing: 0.56px;
    margin-bottom: 12px;
  }
`;

export const Comments_1 = styled.span`
color: #000;

font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 24px;
letter-spacing: 0.64px;



@media (width: 280px) {
    width: 100%; 
    font-size: 14px;
    letter-spacing: 0.56px;
  }
`;

export const Add = styled.button`
// position: absolute;
// right: 177px;
// bottom: 24px;

display: flex;
width: 129px;
padding: 8px 20px;
justify-content: center;
align-items: center;
gap: 8px;

border-radius: 40px;
background: var(--unnamed, #54ADFF);
border: 2px solid var(--unnamed, #54ADFF);

color: var(--unnamed, #FEF9F9);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.64px;

@media (min-width: 768px) {
  position: absolute;
right: 177px;
bottom: 24px
}

@media (width: 280px) {  
    width: 100%;
    height: 40px;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid var(--unnamed, #54ADFF);
 
  }
`;

export const Contacts = styled.button`


display: flex;
width: 129px;
height: 40px;
padding: 8px 20px;
justify-content: center;
align-items: center;
gap: 8px;

border-radius: 40px;
border: 2px solid var(--unnamed, #54ADFF);
color: var(--unnamed, #54ADFF);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.64px;

@media (min-width: 768px) {
  position: absolute;
  right: 31px;
  bottom: 24px;
}


@media (width: 280px) {
    // right: 12px;
    // bottom: 64px;
    width: 100%;
    height: auto;
    padding: 8px 20px;
    border-radius: 40px;
    border: 2px solid var(--unnamed, #54ADFF);
    margin-bottom: 8px;
   
  }
`;



export const Address = styled.a`
color: var(--yellow, #FFC107);
font-family: Manrope;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
`;



