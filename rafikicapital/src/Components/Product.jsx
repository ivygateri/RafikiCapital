import {
    FavoriteBorderOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 65%;
    left: 20%;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    border-radius: 25px;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    border-radius: 25px;
    min-width: 280px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fafd;
    position: relative;
  
   
    }
  `;
  
  
  const Image = styled.img`
    position: absolute;
    top: 1%;
       height: 63%;
       width: 65%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 5px;
   
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  const Title = styled.h1`
  font-size: 18px;
  `
  const Price = styled.h1`
  font-size: 18px;
  `
  const Button = styled.button`
  padding: 5px;
  font-size: 15px;
  background-color: #FCE205;
  cursor: pointer;
  border-radius: 25px;
  
`;
  const Product = ({ item }) => {
    return (
      <Container>
        <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        <Image src={item.img} />
        <Info>
          <Title>{item.title} </Title>
          <Price>{item.price}</Price>
          <Button>Add to cart</Button>
        </Info>
      </Container>
    );
  };
  
  export default Product;