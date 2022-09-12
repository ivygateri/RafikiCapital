import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, Person } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";

const Container = styled.div`
  height: 5%;
  background-color: #138808;
  font-weight: 500;
  
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color:#FCE205;
  ${mobile({ fontSize: "24px" })}
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 25px;
  background: white;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 95%;
  ${mobile({ width: "50px" })}
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration:none;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const NavLink = styled(Link)`
 color: black;
 text-decoration:none;
 &:hover {
  text-decoration:underline;
  color: #FCE205;
  transform: scale(1.1);
}
 &: active{
  color: #FCE205;
  
}
 `

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>Rafiki Capital.</Logo> 
        </Left>
        <Center>
        <SearchContainer>
            <Input placeholder="Search for products" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem><NavLink to="/register">REGISTER</NavLink></MenuItem>
          <MenuItem><NavLink to="/signin">SIGN IN</NavLink></MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          <MenuItem><NavLink to="/dashboard"><Person/></NavLink></MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;