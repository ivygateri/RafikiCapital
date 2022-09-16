import React from 'react'
import styled from "styled-components";
import cart from "../images/shoppingCart.png"

const Container = styled.div`
  
  display: flex;
`;

const Left = styled.div`
flex:1 ;
  
`
const Image = styled.div`
height: 100%
width: 100%
`
const Right = styled.div`
flex: 50%;
display: 'flex'
  justifyContent: 'center'
  
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color:#138808;
  margin-bottom: 20px;
`;

const Desc = styled.p`

  font-size: 20px;
  color:gray;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 8px;
  width: auto;
  font-size: 20px;
  border-radius:25px;
  color: white;
  background-color: #138808;
  cursor: pointer;
`;

const AboutInfo = () => {
  return (
    <div>
        <Container>
        <Left>
            <Image><img src={cart} alt="" /></Image>
        </Left>
        <Right>
            <Title>SERVING ORGANIC CROP</Title>
            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in 
            Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
</Desc>
<Button>SHOP</Button>
        </Right>
        </Container>
    </div>
  )
}

export default AboutInfo