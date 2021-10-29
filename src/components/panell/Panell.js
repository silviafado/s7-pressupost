import { StylesPanell, StylesPages } from "./styledPanell";

const Panell = (props) => {
    const pages = props.pages;
    const lang = props.lang;

    return (
        <StylesPanell>
            <StylesPages>
                <label>Número de pàgines </label>
                <input type="text" placeholder="Pàgines en xifres" size="20" value={pages} onChange={(event) => props.onPagesChange(event.target.value)} />
            </StylesPages>
            <div className="languages">
                <label>Número d' idiomes </label>
                <input type="text" placeholder="Idiomes en xifres" size="20" value={lang} onChange={(event) => props.onLangChange(event.target.value)} />
            </div>
        </StylesPanell>
    )
}

export default Panell;