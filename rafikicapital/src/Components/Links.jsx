import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
import { Menu } from "@material-ui/icons";

const Container = styled.div`
  height: 2%;
  background-color: #138808;
  font-weight: 400;
  background-color: #1AA00D;
  ${mobile({fontSize:"12px"})}
  
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px 0px" })}
`;

const Left = styled.div`
  flex: 80%;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`

  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration:none;
  ${mobile({ fontSize: "12px", marginLeft: "30px"})}
`;

const NavLink = styled(Link)`
 color: black;
 text-decoration:none;
 padding: 0px 15px;
 &:hover {
  text-decoration:underline;
  color: #FCE205;
  transform: scale(1.1);
}
 &: active{
  color: #FCE205;
  
}
 `

const Links = () => {
  return (
    <Container>
       <Wrapper>
        <Left>
       <MenuItem><NavLink to="/">Home</NavLink></MenuItem> 
       <MenuItem><NavLink to="/about">About</NavLink></MenuItem>
       <MenuItem><NavLink to="/contact">Contact Us</NavLink></MenuItem>
       </Left>
       <Right><Menu/></Right>
    </Wrapper>
    </Container>
  );
};

export default Links;