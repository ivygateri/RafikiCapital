import {
    Facebook,
    Instagram,
    YouTube,
    WhatsApp,
    MailOutline,
    Phone,
    Room,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  import { Link } from "react-router-dom";
  
  const Container = styled.div`
    display: flex;
    background: #138808;
    width: 100%;
    max-width: 100vw;
    


    ${mobile({ flexDirection: "column"})}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex-start;
    flex-direction: column;
    padding: 5px;
  `;
  
  const Logo = styled.h1`
  color:#FCE205;
  `;
  
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 5px 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 10px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    text-decoration:none;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 5px 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    word-wrap: break-word;
  `;
  
  const NavLink = styled(Link)`
 color: black;
 text-decoration:none;
 &:hover {
  
  color: #FCE205;
  transform: scale(1.1);
}
 `
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Rafiki Capital.</Logo>
          <SocialContainer>
            <SocialIcon >
              <Facebook />
            </SocialIcon>
            <SocialIcon >
              <Instagram />
            </SocialIcon>
            <SocialIcon >
              <WhatsApp />
            </SocialIcon>
            <SocialIcon>
              <YouTube />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem><NavLink to="/">Home</NavLink></ListItem>
            <ListItem><NavLink to="/about">About</NavLink></ListItem>
            <ListItem><NavLink to="/contact">Contact Us</NavLink></ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Machakos, Kenya
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> 0722334151
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@rafikicapital.com
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;