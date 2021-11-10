import { StylesRow, SavedBudgetsUl, SavedBudgetsLi } from "../../styled";

const List = ({ budgets, handleClick }) => {

    return (
        <div>
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
                {budgets.map((budgets) => {
                    return (
                        <SavedBudgetsLi key={budgets.id} onClick={() => handleClick(budgets.id)}>
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
                })}
            </SavedBudgetsUl>
        </div>
    )
}

export default List;