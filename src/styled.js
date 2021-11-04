import styled from "styled-components";

export const StylesPanell = styled.div`
    padding: 20px 20px 10px 20px;
    border: 3px solid black;
    border-radius: 20px;
    margin-top: 10px;
    width: fit-content;
    display: '';
`

export const StylesPages = styled.div`
        padding-bottom: 10px;
        display: flex;
`

export const StylesButtons = styled.button`
    background-color: #f17908d1;
    border-radius: 4px;
    border: none;
    color: white;
    font-size: 1.2rem;
    width: 25px;
`

export const StylesInput = styled.div`
        margin-left: 20px;
`

// Exercise 5: Styling Welcome component
export const WelcomeStyles = styled.div`
    font-size: 3rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #282c34;
    width: 100vw;
    height: 100vh;
    padding-top: 100px;
    text-align: center;
`;

export const WelcomeButton = styled.button`
    background-color: lightgrey;
    text-align: center;
    height: 40px;
    border-radius: 20px;
    width: 200px;
    cursor: pointer;
    font-size: 1rem;
    border: 1px solid grey;
    margin-top: 20px;
    @media(max-width:500px){
      width: 60%;
    }
`;

export const WelcomeTitle = styled.p`
    font-size: 4rem;
    margin: 40px;
    @media (max-width: 600px) {
        font-size: 3rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 2rem;
    margin: 40px;
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }    
`;
