import { WelcomeStyles, WelcomeButton, WelcomeTitle, Paragraph, GlobalStyleWelcome } from "../../styled";
import { Link } from 'react-router-dom';

// Exercise 5: Welcome page implementing React routing
const Welcome = () => {

    return (
        <div>
            <GlobalStyleWelcome />
            <WelcomeStyles>
                <WelcomeTitle>Benvinguts!!</WelcomeTitle>
                <Paragraph>Al iniciar podreu accedir a la pàgina del pressupost on podreu obtenir un borrador dels serveis desitjats i el seu cost.<br />Només heu de premer les opcions desitjades i es calcularà automàticament l'import.</Paragraph>
                <WelcomeButton><Link to="/budget/">Iniciar</Link></WelcomeButton>
            </WelcomeStyles>
        </div>
    )
}

export default Welcome;