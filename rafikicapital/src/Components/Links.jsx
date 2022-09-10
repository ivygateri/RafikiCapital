import styled from "styled-components";
import { mobile } from "../responsive";
import { Menu} from "@material-ui/icons";
import {Link} from "react-router-dom";

const Container = styled.div`
  height: 30px;
  background-color: #1AA00D;
  
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  ${mobile({ padding: "0px 0px" })}
`;

const Left = styled.div`
  flex: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MenuItem = styled.div`
    padding: 0px 35px;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration:none;
  
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
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
const Links = () => {
  return <Container>
    <Wrapper>
        <Left>
       <MenuItem><NavLink to="/">Home</NavLink></MenuItem> 
       <MenuItem><NavLink to="/about">About</NavLink></MenuItem>
       <MenuItem><NavLink to="/contact">Contact Us</NavLink></MenuItem>
       </Left>
       <Right><Menu/></Right>
    </Wrapper>

  </Container>;
};

export default Links;