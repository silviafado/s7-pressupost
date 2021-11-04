import { WelcomeStyles, WelcomeButton, WelcomeTitle, Paragraph } from "../../styled";
import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
        <div>
            <WelcomeStyles>
                <WelcomeTitle>Benvinguts!!</WelcomeTitle>
                <Paragraph>Al iniciar podreu accedir a la pàgina del pressupost on podreu obtenir un borrador dels serveis desitjats i el seu cost.<br />Només heu de premer les opcions desitjades i es calcularà automàticament l'import.</Paragraph>
                <WelcomeButton><Link to="/budget/">Iniciar</Link></WelcomeButton>
            </WelcomeStyles>
        </div>
    )
}

export default Welcome;