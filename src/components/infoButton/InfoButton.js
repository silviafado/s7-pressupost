import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { StyleInfoButton } from '../../styled'

export const InfoPages = () => (
    <Popup trigger={<StyleInfoButton>i</StyleInfoButton>} position="right center">
        <div>En aquest component teniu que indicar el nombre de pàgines de la vostra web.</div>
    </Popup>
);

export const InfoLang = () => (
    <Popup trigger={<StyleInfoButton>i</StyleInfoButton>} position="right center">
        <div>En aquest component teniu que indicar el nombre d'idiomes en que voleu la vostra web.</div>
    </Popup>
);