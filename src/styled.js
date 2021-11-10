import styled, { createGlobalStyle } from "styled-components";

// General styling
export const StylesRow = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`

// Exercise 2 & 3: Styling Panell pages and languages
export const StylesPanell = styled.div`
    padding: 20px 20px 10px 20px;
    border: 3px solid black;
    border-radius: 20px;
    margin-top: 10px;
    width: fit-content;
    display: '';
`

export const StylesValues = styled.div`
        padding-bottom: 10px;
        display: flex;
        @media (max-width: 420px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
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
        @media (max-width: 420px) {
            margin-left: 0px;
            margin-top: 10px;
        }
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
    margin-top: 40px;
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

// Styling GlobalStyle Budget and Welcome pages
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 40px;
    }
`

export const GlobalStyleWelcome = createGlobalStyle`
    body {
        background-color: #282c34;
    }
`

// Exercise 6: Styling InfoButton
export const StyleInfoButton = styled.button`
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background-color: #a8a7a7;
    color: white;
    margin-left: 10px; 
`

export const DivInfoButton = styled.div`
    display: flex;
    align-items: center;
`

// Exercise 7: Styling name and client inputs
export const StylesNameDivInput = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 340px;
    line-height: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    @media (max-width: 420px){
        justify-content: space-between;
    }
`

export const StylesNameInput = styled.input` 
    line-height: 25px;
    font-size: 14px;
`

// Styling saved budgets table
export const StylesSideTable = styled.div`
    display:flex;
    justify-content: space-between;
    @media( max-width: 800px) {
        flex-direction: column;
    }
`

export const SavedBudgetsUl = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
`

export const SavedBudgetsLi = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
`

// Exercise 8: Styling sorting buttons div
export const StylesSortDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    @media (max-width: 800px) {
        padding-top: 30px;
    }
`