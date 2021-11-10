import { useState, useEffect } from 'react';
import Buttons from '../../components/buttons/Buttons';
import { StylesRow, StylesPanell, StylesValues, GlobalStyle, DivInfoButton, StylesNameDivInput, StylesNameInput, StylesSideTable } from '../../styled'
import { InfoPages, InfoLang } from '../../components/infoButton/InfoButton';
import { v4 as uuidv4 } from 'uuid';
import List from '../../components/list/List';

// Declare KEY for exercise 4 to save in localStorage
const KEY = 'budget';
// Declare date constant to save the budget on exercise 7
const d = new Date();
const date = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();

const Budget = () => {

    // Declare initial empty budget to reset for new entries
    const newBudget = { id: uuidv4(), web: false, pages: 1, lang: 1, seo: false, ads: false, date: date, Name: '', client: '' };

    // Exercise 1: Calculate budget total according object properties
    const [budget, setBudget] = useState(newBudget);
    const [total, setTotal] = useState(0);
    const [budgetsArray, setBudgetsArray] = useState([]);


    const calcBudget = () => {
        let total = 0;
        if (budget.web) total += 500;
        // Exercise 2: Adding pages and languages properties into budget
        if (budget.pages > 1 || budget.lang > 1) total += budget.pages * budget.lang * 30;
        if (budget.seo) total += 300;
        if (budget.ads) total += 200;
        setTotal(total);
    }

    // Exercise7: Saving current budget into the budgets array with button 'Guardar'
    const saveBudget = () => {
        let index = budgetsArray.findIndex(el => el.id === budget.id)
        if (index === -1) {
            setBudgetsArray([...budgetsArray, { ...budget, total }]);
        } else {
            let update = [...budgetsArray];
            update.splice(index, 1, { ...budget, total });
            setBudgetsArray(update);
        }
    }
    // Function to reset current budget to start a new one with button 'Nou pressupost'
    const newEntry = () => {
        setBudget(newBudget);
    }

    // Exercise 1 & 2: useEffect to update budget total on object's change
    useEffect(calcBudget, [budget]);

    // Exercise 4: Get budget from localStorage
    useEffect(() => {
        const storedBudgets = JSON.parse(localStorage.getItem(KEY));
        if (storedBudgets) {
            setBudgetsArray(storedBudgets);
        }
    }, [])
    // Exercise 4: Save budget in localStorage
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(budgetsArray))
    }, [budgetsArray])


    return (
        <div>
            <GlobalStyle />
            <StylesSideTable>
                <div>
                    <StylesRow>¿Qué quieres hacer?</StylesRow>
                    <StylesRow>
                        <input name="web" type="checkbox" onChange={(event) => setBudget({ ...budget, web: event.target.checked })} checked={budget.web} /> Una página web (500€)
                        {budget.web ?
                            <StylesPanell>
                                <StylesValues>
                                    <label>Número de pàgines </label>
                                    <DivInfoButton>
                                        <Buttons onValueChange={text => setBudget({ ...budget, pages: text })} />
                                        <InfoPages />
                                    </DivInfoButton>
                                </StylesValues>
                                <StylesValues>
                                    <label>Número d' idiomes </label>
                                    <DivInfoButton>
                                        <Buttons onValueChange={text => setBudget({ ...budget, lang: text })} />
                                        <InfoLang />
                                    </DivInfoButton>
                                </StylesValues>
                            </StylesPanell>
                            : null}
                    </StylesRow>
                    <StylesRow>
                        <input name="seo" type="checkbox" onChange={(event) => setBudget({ ...budget, seo: event.target.checked })} checked={budget.seo} /> Una consultoria SEO (300€)
                    </StylesRow>
                    <StylesRow>
                        <input name="ads" type="checkbox" onChange={(event) => setBudget({ ...budget, ads: event.target.checked })} checked={budget.ads} /> Una campaña de Google Ads (200€)
                    </StylesRow>
                    <StylesRow><b>Preu: </b>{total}€</StylesRow>
                    <StylesRow>
                        <StylesRow><b>DADES PRESSUPOST</b></StylesRow>
                        <StylesNameDivInput>
                            <label>Nom pressupost</label>
                            <StylesNameInput name="Name" type="text" placeholder="Nom del teu pressupost" size="25" value={budget.Name} onChange={(event) => setBudget({ ...budget, Name: event.target.value })} />
                        </StylesNameDivInput>
                        <StylesNameDivInput>
                            <label>Nom client</label>
                            <StylesNameInput name="client" type="text" placeholder="Nom del client" size="25" value={budget.client} onChange={(event) => setBudget({ ...budget, client: event.target.value })} />
                        </StylesNameDivInput>
                    </StylesRow>
                    <StylesRow><button budgets={budgetsArray} onClick={saveBudget}>Guardar</button></StylesRow>
                    <StylesRow><button onClick={newEntry}>Nou pressupost</button></StylesRow>
                </div>
                <div>
                    {budgetsArray ?
                        <List budgets={budgetsArray} key={KEY} />
                        : null}
                </div>
            </StylesSideTable>
        </div>
    );
}

export default Budget;