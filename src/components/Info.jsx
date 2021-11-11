import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import { cardShadow, hoverEffect, themeColor } from "../utils";

function Info() {
    return (
        <InfoCard>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>98</Digit>
                        <InfoContainer>
                            <Title>Rank</Title>
                            <Subtitle>In top 20%</Subtitle>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>32</Digit>
                        <InfoContainer>
                            <Title>Projects</Title>
                            <Subtitle>8 this month</Subtitle>
                        </InfoContainer>
                    </Row>
                    <Row justify>
                        <Badge content="mobile app" glow />
                        <Badge content ="branding" glow />
                    </Row>
                </CardContent>
            </Card>
        </InfoCard>
    );
}

const InfoCard = styled.div``;

const Card = styled.div``;

const CardContent = styled.div``;

const Row = styled.div``;

const Digit = styled.div``;

const InfoContainer = styled.div``;

const Title = styled.h3``;

const Subtitle = styled.h5``;

export default Info;