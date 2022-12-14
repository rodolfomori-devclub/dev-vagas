import { Container } from "./styles";

import logoDevVagasImg from '../../assets/images/logoDevVagas.svg';
import logoDevVagasWhite from '../../assets/images/logoDevVagasWhite.svg';
import { Link } from "react-router-dom";

import searchUserIcon from '../../assets/icons/searchUser.png';
import registerCompanyIcon from '../../assets/icons/registerCompany.png';
import enterpriseAccessIcon from '../../assets/icons/enterpriseAccess.png';


export function TopMenu() {

    const mainIcons = [
        searchUserIcon,
        registerCompanyIcon,
        enterpriseAccessIcon
    ]

    return (
        <Container>
            <img className="logo" src={logoDevVagasImg} alt="Dev vagas" />

            <nav>
                <ul>
                <img className="icons" src={mainIcons[0]} alt="Canditato" />
                    <li>
                        <Link to="/">Procurar candidato</Link>
                    </li>

                    <img className="icons" src={mainIcons[1]} alt="Empresa" />
                    <li>
                        <Link to="/">Cadastrar empresa</Link>
                    </li>

                    <img className="icons" src={mainIcons[2]} />
                    <li>
                        <Link to="/">Acesso empresarial</Link>
                    </li>

                    <li>
                        <Link to="/">Ajuda</Link>
                    </li>
                </ul>
            </nav>

            <div className="devAreaBox">
                <img src={logoDevVagasWhite} alt="Desenvolvedores" />
                <Link to="/" >
                    Área dos Devs
                </Link>
            </div>
        </Container>
    )
}