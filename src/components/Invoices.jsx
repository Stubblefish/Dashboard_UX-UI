import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImage from "../assets/avatarImage4.jpg";
import AvatarImage2 from "../assets/avatarImage5.jpg";

function Invoices() {
    return <InvoiceContainer>
        <CardContent>
            <Invoice>
                <Info>
                    <Avatar>
                        <img src={AvatarImage} alt='' />
                    </Avatar>
                    <TextContainer>
                        <Title>Shae Brags</Title>
                        <SubTitle>Trinity INC.</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content="Paid" paid />
                    <Price> $ 1,447.50</Price>
                </Container>
            </Invoice>
            <Invoice>
                <Info>
                    <Avatar>
                        <img src={AvatarImage2} alt='' />
                    </Avatar>
                    <TextContainer>
                        <Title>Peter Chole</Title>
                        <SubTitle>Ocean Glory Commodities</SubTitle>
                    </TextContainer>
                </Info>
                <Container>
                    <Badge content="Late" late />
                    <Price> $ 4,607.23</Price>
                </Container>
            </Invoice>            
        </CardContent>
    </InvoiceContainer>
}

const InvoiceContainer = styled.div`
width: 33rem;
border-radius: 1rem;
margin-top: 1rem;
background-color: white;
height: 140%;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}

`;
const CardContent = styled.div``;
const Invoice = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 0.4rem;
padding-top: 1rem;
`;
const Info = styled.div`
display:flex;
align-items: center;
width: 50%;
`;
const Avatar = styled.div`
img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
}
`;
const TextContainer = styled.div`
margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
font-weight: 400;
`;
const Container = styled.div`
display: flex;
justify-content: space-between;
width: 30%;
alighn-items: center;
`;
const Price = styled.div``;

export default Invoices