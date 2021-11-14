import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImage from "../assets/avatarImage6.jpg";

function ProjectRecommendation () {
    return <RecommendedProject>
            <CardContent>
                <Detail>
                    <InfoContainer>
                        <Avatar>
                            <img src={AvatarImage} alt='' />
                        </Avatar>
                        <Info>
                            <InfoName>Thomas Ozzy</InfoName>
                            <InfoUpdate>Updated 15 minutes ago</InfoUpdate>
                        </Info>
                    </InfoContainer>
                    <Badge content="Design" />
                </Detail>
                <Title>
                    Looking for a designer to create branding for my buisness.
                </Title>
                <ProjectInfo>
                    Looking for a talented UI/UX designer to create all the branding materials for my new startup.
                </ProjectInfo>
                <PriceContainer>
                    <Price>$8700/Month</Price>
                    <Badge content="Full Time" clean />
                </PriceContainer>
            </CardContent>
           </RecommendedProject>
}

const RecommendedProject = styled.div`
border-radius: 1rem;
height: 130%;
padding: 1rem;
background-color: white;
width: 27.5vw;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;

&:hover {
    box-shadow: ${hoverEffect};
}
`;
const CardContent = styled.div`
margin: .4rem;
`;
const Detail = styled.div`
display: flex;
jstify-content: center;
align-items: center;
`;
const InfoContainer = styled.div`
display: flex;
align-items: center;
`;
const Avatar = styled.div`
margin-right: 1rem;
img {
    height: 5rem;
    border-radius: 5rem;
}
`;
const Info = styled.div``;
const InfoName = styled.h3`
font-weight: 500;
`;
const InfoUpdate = styled.h5`
font-weight: 300;
`;
const Title = styled.h4`
font-weight: 500;
`;
const ProjectInfo = styled.div`
margin: 0;
padding: 0;
font-size: 0.9rem;
color: #3b3b3b;
margin-bottom: 0.5rem;
`;
const PriceContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 1rem;
padding: .5rem 1rem;
border-radius: 1rem;
background-color: rgba(146,166,255, 0.3);
`;
const Price = styled.div``;


export default ProjectRecommendation