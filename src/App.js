import { useState, useEffect } from 'react';
import './App.css';
import Panell from './components/panell/Panell';

function App(props) {

  const [budget, setBudget] = useState({ web: 0, pages: 1, lang: 1, seo: 0, ads: 0 });
  const [total, setTotal] = useState(0);

  const calcBudget = () => {
    let total = 0;

    if (budget.web) total += 500;
    if (budget.pages > 1 || budget.lang > 1) {
      total += budget.pages * budget.lang * 30;
    }
    if (budget.seo) total += 300;
    if (budget.ads) total += 200;

    setTotal(total);
  }

  useEffect(calcBudget, [budget]);

  return (
    <div>
      <div className="row question">¿Qué quieres hacer?</div>
      <div className="row web">
        <input name="web" type="checkbox" onChange={(event) => setBudget({ ...budget, web: event.target.checked })} /> Una página web (500€)
        {budget.web ? <Panell onPagesChange={text => setBudget({ ...budget, pages: text })} onLangChange={text => setBudget({ ...budget, lang: text })} /> : null}
      </div>
      <div className="row seo">
        <input name="seo" type="checkbox" onChange={(event) => setBudget({ ...budget, seo: event.target.checked })} /> Una consultoria SEO (300€)
      </div>
      <div className="row ads">
        <input name="ads" type="checkbox" onChange={(event) => setBudget({ ...budget, ads: event.target.checked })} /> Una campaña de Google Ads (200€)
      </div>
      <div className="total">Preu: {total}€</div>
    </div>
  );
}

export default App;