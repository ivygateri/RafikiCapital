import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {Link} from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Menu as MenuIcon  } from "@material-ui/icons";


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
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem1 = styled.div`

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
       <MenuItem1><NavLink to="/">Home</NavLink></MenuItem1> 
       <MenuItem1><NavLink to="/about">About</NavLink></MenuItem1>
       <MenuItem1><NavLink to="/contact">Contact Us</NavLink></MenuItem1>
       </Left>
       <Right>
       <PopupState variant="popover" popupId="demo-popup-menu" style={{innerWidth:10}}>
      {(popupState) => (
        <React.Fragment>
          
            <MenuIcon {...bindTrigger(popupState)}/>
          
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}><NavLink to="/fruits">Fruits</NavLink></MenuItem>
            <MenuItem onClick={popupState.close}><NavLink to="/vegetables">Vegetables</NavLink></MenuItem>
            <MenuItem onClick={popupState.close}><NavLink to="/logout">Logout</NavLink></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
       </Right>
    </Wrapper>
    </Container>
  );
};

export default Links;