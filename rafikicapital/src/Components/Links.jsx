import styled from "styled-components";
import { mobile } from "../responsive";
import { Menu} from "@material-ui/icons";


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

const MenuItem = styled.a`
    padding: 0px 35px;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: black;
    text-decoration: underline;
    transform: scale(1.1);
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Links = () => {
  return <Container>
    <Wrapper>
        <Left>
       <MenuItem>Home</MenuItem> 
       <MenuItem>About</MenuItem>
       <MenuItem>Contact Us</MenuItem>
       </Left>
       <Right><Menu/></Right>
    </Wrapper>

  </Container>;
};

export default Links;