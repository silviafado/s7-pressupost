import { useState, useEffect } from 'react';
import Buttons from '../../components/buttons/Buttons';
import { StylesRow, StylesPanell, StylesPages, GlobalStyle, DivInfoButton } from '../../styled'
import { InfoPages, InfoLang } from '../../components/infoButton/InfoButton';

// Declare KEY for exercise 4 to save in localStorage
const KEY = 'budget';

const Budget = () => {

    // Exercise 1: Calculate budget total according object properties
    const [budget, setBudget] = useState({ web: 0, pages: 1, lang: 1, seo: 0, ads: 0 });
    const [total, setTotal] = useState(0);

    const calcBudget = () => {
        let total = 0;

        if (budget.web) total += 500;
        // Exercise 2: Adding pages and languages properties into budget
        if (budget.pages > 1 || budget.lang > 1) total += budget.pages * budget.lang * 30;
        if (budget.seo) total += 300;
        if (budget.ads) total += 200;

        setTotal(total);
    }

    useEffect(calcBudget, [budget]);

    // Exercise 4: Get budget from localStorage
    useEffect(() => {
        const storedBudget = JSON.parse(localStorage.getItem(KEY));
        if (storedBudget) {
            setBudget(storedBudget);
        }
    }, [])
    // Exercise 4: Save budget in localStorage
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(budget))
    }, [budget])


    return (
        <div>
            <GlobalStyle />
            <StylesRow>¿Qué quieres hacer?</StylesRow>
            <StylesRow>
                <input name="web" type="checkbox" onChange={(event) => setBudget({ ...budget, web: event.target.checked })} /> Una página web (500€)
                {budget.web ?
                    <StylesPanell>
                        <StylesPages>
                            <label>Número de pàgines </label>
                            <DivInfoButton>
                                <Buttons onValueChange={text => setBudget({ ...budget, pages: text })} />
                                <InfoPages />
                            </DivInfoButton>
                        </StylesPages>
                        <StylesPages>
                            <label>Número d' idiomes </label>
                            <DivInfoButton>
                                <Buttons onValueChange={text => setBudget({ ...budget, lang: text })} />
                                <InfoLang />
                            </DivInfoButton>
                        </StylesPages>
                    </StylesPanell>
                    : null}
            </StylesRow>
            <StylesRow>
                <input name="seo" type="checkbox" onChange={(event) => setBudget({ ...budget, seo: event.target.checked })} /> Una consultoria SEO (300€)
            </StylesRow>
            <StylesRow>
                <input name="ads" type="checkbox" onChange={(event) => setBudget({ ...budget, ads: event.target.checked })} /> Una campaña de Google Ads (200€)
            </StylesRow>
            <StylesRow>Preu: {total}€</StylesRow>
        </div>
    );
}

export default Budget;