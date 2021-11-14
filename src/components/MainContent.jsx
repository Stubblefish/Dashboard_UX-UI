import React from 'react'
import styled from "styled-components";
import Earnings from "./Earnings";
import Navbar from "./Navbar";
import Info from "./Info";
import Projects from "./Projects";
import Invoices from "./Invoices";

function MainContent() {
    return (
    <Container>
        <Navbar />
        <SubContainer>
            <SectionOne>
                <ColumnOneOne>
                    <Earnings />
                    <Info />
                </ColumnOneOne>
                <ColumnTwoOne>
                    <TitleText>Your Projects</TitleText>
                    <Projects />
                </ColumnTwoOne>
            </SectionOne>
            <SectionTwo>
                <ColumnOneTwo>
                    <InvoiceContainer>
                        <TitleText> Recent Invoices</TitleText>
                        <Invoices />
                    </InvoiceContainer>
                </ColumnOneTwo>
                <ColumnTwoTwo></ColumnTwoTwo>
            </SectionTwo>
        </SubContainer>
    </Container>
    );
}

const Container = styled.div`
width: 80%;
background: linear-gradient(to bottom right, white 0%right, #e6e4ff 70%);
border-bottom-right-radius: 2rem;
border-top-right-radius: 2rem;
margin: 1rem 8rem 1rem 4rem;
`;

const SubContainer = styled.div`
margin: 0.5rem 0;
height: 80%;
width: 100%;
display: flex;
flex-direction: column;
gap: 4rem;
`;

const TitleText = styled.h3`
height: 20%;
`;

const SectionOne = styled.div`
display: flex;
justify-content: space-between;
height: 40%;
gap: 2rem;
width: 100%;
`;

const SectionTwo = styled.div`
display: flex;
gap: 2rem;
height: 26vh;
`;

const ColumnOneOne = styled.div`
display: flex;
gap: 3rem;
`;

const ColumnTwoOne = styled.div`
display: flex;
flex-direction: column;
height: 115%;
width: 100%;
`;

const ColumnOneTwo = styled.div`
display: flex;
flex-direction: column;
height: 115%;
width: 100%;
`;

const InvoiceContainer = styled.div`
height: 60%
`;

const ColumnTwoTwo = styled.div``;


export default MainContent;