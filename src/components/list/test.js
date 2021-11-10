import { StylesRow, SavedBudgetsUl, SavedBudgetsLi, StylesSortDiv } from "../../styled";
import { useState } from "react";

const List = ({ budgets }) => {

    const budgetsRender = budgets.map((budgets) => {
        return (
            <SavedBudgetsLi key={budgets.id} >
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

    const [list, setList] = useState(budgetsRender);

    const sortAlphabet = () => {
        let sortedName = budgets.sort((a, b) => a.Name > b.Name ? 1 : -1);
        console.log(sortedName);
        return sortedName;

    }

    const sortDate = () => {
        let sortedDate = budgets.sort((a, b) => a.date > b.date ? 1 : -1);
        console.log(sortedDate);
        return sortedDate;
    }

    const sortReset = () => {
        //let orderCreation = new Date();
        let sortedReset = budgets;
        console.log(sortedReset);
    }

    /*const searchBudget = (event) => {
        const search = budgets.filter(el => el.Name === event.target.value)

    }*/



    return (
        <div>
            <StylesSortDiv>
                <button onClick={sortAlphabet}>Ordenar per nom</button>
                <button onClick={sortDate}>Ordenar per data</button>
                <button onClick={sortReset}>Reiniciar ordre</button>
            </StylesSortDiv>
            <StylesRow>
                <input placeholder="Search..." size="25" />
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
                {budgetsRender}
            </SavedBudgetsUl>
        </div>
    )
}

export default List;