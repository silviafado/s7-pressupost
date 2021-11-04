import { useState } from "react";
import { WelcomeStyles, WelcomeButton } from "../../styled";


const Welcome = () => {

    const [start, setStart] = useState(true);
    const access = () => setStart(false);

    return (
        <div>
            <WelcomeStyles>
                <h1>Benvinguts a la nostra web!!</h1>
                <p>Al iniciar podreu accedir a la pàgina del pressupost on podreu obtenir un borrador dels serveis desitjats i el seu cost. Només heu de premer les opcions desitjades i es calcularà automàticament el import.</p>
                <WelcomeButton onClick={access}>Iniciar</WelcomeButton>
            </WelcomeStyles>
        </div>
    )
}

export default Welcome;