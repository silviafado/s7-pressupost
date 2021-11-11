import { StylesRow, SavedBudgetsUl, SavedBudgetsLi, StylesSortDiv } from "../../styled";
import { useState } from 'react';

const List = ({ budgets }) => {

    // Exercise 7: Create a list of saved budgets
    const [list, setList] = useState(budgets);

    // Exercise 8: Sort alphabetically
    const sortAlphabet = () => {
        budgets.sort((a, b) => a.Name > b.Name ? 1 : -1);
        setList(() => {
            return [...budgets];
        })
    }
    // Exercise 8: Sort by date
    const sortDate = () => {
        budgets.sort((a, b) => a.date > b.date ? 1 : -1);
        setList(() => {
            return [...budgets];
        })
    }
    // Exercise 8: Reset order
    const sortReset = () => {
        const storedBudgets = JSON.parse(localStorage.getItem('budget'));
        setList(() => {
            return storedBudgets;
        })
    }

    // Exercise 9: Search by input
    const searchBudget = (event) => {
        const searchBudgets = [...budgets];
        const search = searchBudgets.filter(el => el.Name.includes(event.target.value));
        setList(() => {
            return search;
        })
    }

    return (
        <div>
            <StylesSortDiv>
                <button onClick={sortAlphabet}>Ordenar per nom</button>
                <button onClick={sortDate}>Ordenar per data</button>
                <button onClick={sortReset}>Reiniciar ordre</button>
            </StylesSortDiv>
            <StylesRow>
                <input type="text" placeholder="Search..." size="25" onChange={searchBudget} />
            </StylesRow>
            <StylesRow><b>PRESSUPOSTS GUARDATS</b></StylesRow>
            <SavedBudgetsUl>
                <SavedBudgetsLi>
                    <StylesRow>NOM PRESSUPOST</StylesRow>
                    <StylesRow>CLIENT</StylesRow>
                    <StylesRow>DATA</StylesRow>
                    <StylesRow>PÀGINA WEB</StylesRow>
                    <StylesRow>Nº PÀGINES</StylesRow>
                    <StylesRow>Nº IDIOMES</StylesRow>
                    <StylesRow>SEO</StylesRow>
                    <StylesRow>GOOGLE ADS</StylesRow>
                    <StylesRow>TOTAL</StylesRow>
                </SavedBudgetsLi>
                {list.map((budgets) => {
                    return (
                        <SavedBudgetsLi key={budgets.id} list={list}>
                            <StylesRow>{budgets.Name}</StylesRow>
                            <StylesRow>{budgets.client}</StylesRow>
                            <StylesRow>{budgets.date}</StylesRow>
                            <StylesRow>{budgets.web.toString()}</StylesRow>
                            <StylesRow>{budgets.pages}</StylesRow>
                            <StylesRow>{budgets.lang}</StylesRow>
                            <StylesRow>{budgets.seo.toString()}</StylesRow>
                            <StylesRow>{budgets.ads.toString()}</StylesRow>
                            <StylesRow>{budgets.total}</StylesRow>
                        </SavedBudgetsLi>
                    )
                })
                }
            </SavedBudgetsUl>
        </div>
    )
}

export default List;