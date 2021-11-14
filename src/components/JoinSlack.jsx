import React from "react";
import styled from "styled-components";
import { darkThemeColor, hoverEffect, themeColor } from "../utils";
import { FaSlack } from "react-icons/fa";

function JoinSlack() {
    return <JoinChannel>
            <CardContent>
                <Slack>
                    <SlackLogo>
                        <FaSlack />
                    </SlackLogo>
                    <SlackText>
                        <SlackHead>Engage with clients</SlackHead>
                        <SlackFoot>Join slack channel</SlackFoot>
                    </SlackText>
                </Slack>
                <SlackJoin>Join Now</SlackJoin>
            </CardContent>
           </JoinChannel>
}

const JoinChannel = styled.div`
background-color: ${darkThemeColor};
height: 50%;
margin-top: 6.5rem;
border-radius: 1rem;
display: flex;
align-items: center;
transition: 0.4s ease-in-out;
&:hover {
    box-shadow: ${hoverEffect};
}
`;
const CardContent = styled.div`
margin: 1rem;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Slack = styled.div`
display: flex;
`;
const SlackLogo = styled.div`
margin-right: 0.7rem;
display: flex;
justify-content: center;
align-items: center;
svg {
    color: white;
    height: 3rem;
    width: 3rem;
}
`;
const SlackText = styled.div`
color: white;
`;
const SlackHead = styled.h2`
font-weight: 500;
`;
const SlackFoot = styled.h5`
color: white;
font-weight: normal;
`;
const SlackJoin = styled.button`
background-color: ${themeColor};
border: none;
outline: none;
padding: 1rem 2rem;
color: white;
border-radius: .5rem;
font-size: 1.2rem;
font-weight: bold;
cursor: pointer;
`;

export default JoinSlack