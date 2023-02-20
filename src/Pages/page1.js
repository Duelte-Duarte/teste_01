import { BiAnchor, BiCoffee } from "react-icons/bi";
import { FaFacebookSquare, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";
import {
    Container,
    Header,
    Navbar,
    Main,
    Content,
    Row,
    Section,
    Icon,
    SessionPhrase,
    Footer,
} from "./styles";

export function Page1 () {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <Container>
            
            <Navbar className="res600" toggleMenu={toggleMenu}>
                <div className="menu">
                    <a className="active" href="#">Home</a>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    <a href="#">Link 4</a>
                </div>
                <button className="toggle-mobile" onClick={() => setToggleMenu(!toggleMenu)}>
                    <FcMenu size={18} color="#666666" />
                </button>
            </Navbar>

            <Header>
                <Content>
                    <h1>PÁGINA INICIAL</h1>
                    <p>Modelo por w3.css</p>
                    <button>Iniciar</button>
                </Content>
            </Header>

            <Main>
                <Section>
                    <Content>
                        <Row>
                            <div>
                                <h1>Lorem Ipsum</h1>
                                <p><strong>É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</strong></p>
                                <p className="p1">É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso. A menos que sejam cegados pelo desejo, eles não saem, são culpados quem abandona seus deveres, a mente amolece, ou seja, a busca pelas dificuldades. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</p>
                            </div>
                            <Icon>
                                <BiAnchor size={250} color="#F44336" />
                            </Icon>
                        </Row>
                    </Content>
                </Section>
                <Section style={{ backgroundColor: '#f1f1f1' }}>
                    <Content>
                        <Row>
                            <Icon>
                                <BiCoffee size={250} color="#F44336" />
                            </Icon>
                            <div>
                                <h1>Lorem Ipsum</h1>
                                <p><strong>É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</strong></p>
                                <p className="p1">É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso. A menos que sejam cegados pelo desejo, eles não saem, são culpados quem abandona seus deveres, a mente amolece, ou seja, a busca pelas dificuldades. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</p>
                            </div>
                        </Row>
                    </Content>
                </Section>
                <SessionPhrase>
                    <h2>Frase do dia: viva a vida</h2>
                </SessionPhrase>
            </Main>

            <Footer>
                <FaFacebookSquare id="fa1" size={22} />
                <FaInstagram id="fa1" size={22} />
                <FaSnapchat id="fa1" size={22} />
                <FaPinterestP id="fa1" size={22} />
                <FaTwitter id="fa1" size={22} />
                <FaLinkedinIn id="fa1" size={22} />
                <br/>
                <br/>
                <p className="p1">Powered by <u> w3.css</u></p>
            </Footer>

        </Container>
    )
}