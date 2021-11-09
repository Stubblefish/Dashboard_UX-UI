import React from 'react';
import styled from  "styled-components";
import Badge from './Badge';
import AvatarImage from "../assets/avatarImage.jpeg";
import { darkThemeColor } from "../utils";

function Sidebar() {
    return <Container>
        <ProfileContainer>
            <Avatar src={AvatarImage}/>
            <Name>George Wise</Name>
            <Badge content="Exploring UX/UI"/>
        </ProfileContainer>
    </Container>
}

const Container = styled.div`
width: 20%;
height: 100% !important;
border-radius: 2rem;
background-color: #091322;
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
`;
const ProfileContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Avatar = styled.img`
height: 7rem;
border-radius: 6rem;
margin-top20%;
`;
const Name = styled.h1`
color: white;
font: 1.5rem;
font-weight: 400;
margin: 0.8rem 0 0.5rem;

`;
// const Container = styled.div``;

export default Sidebar;