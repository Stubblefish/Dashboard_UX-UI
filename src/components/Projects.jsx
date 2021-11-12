import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage2.jpg";
import AvatarImage2 from "../assets/avatarImage3.jpg";
import { cardShadow, hoverEffect, themeColor } from "../utils";

function Projects() {
    return <YourProjects>
        <Project>
            <Avatar>
                <img src={AvatarImage} alt=""/>
            </Avatar>
            <Detail>
                <Title>Logo Design for Bookshop</Title>
                <SubTitle>1 day remaining</SubTitle>
            </Detail>
        </Project>
        <Project>
            <Avatar>
            <img src={AvatarImage2} alt=""/>
            </Avatar>
            <Detail>
                <Title>Personal branding Projects</Title>
                <SubTitle>6 days remaining</SubTitle>
            </Detail>
        </Project>
        <AllProjects>See all projects</AllProjects>
    </YourProjects>
}

export default Projects;

const YourProjects = styled.div`
height: 70;
background-color: white;
margin: 0;
padding: 1rem;
border-radius: 1rem;
box-shadow: ${cardShadow};
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
`;

const Project = styled.div`
display: flex;
align-items: center;
margin-bottom: 0.3rem;
`;

const Avatar = styled.div`
img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
}
`;

const Detail = styled.div`
margin-left: 1rem;
`;

const Title = styled.h3`
font-weight: 500;
`;

const SubTitle = styled.h5`
font-weight: 300;
`;

const AllProjects = styled.h5`
text-align: end;
color: ${themeColor};
cursor: pointer;
`;