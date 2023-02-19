import { Container, Header, Navbar, Main, Content, Content_2, Content_3, Wid, Section, Image1, Section_2, Content_4, Footer } from "./style";
import { BiAnchor, BiCoffee } from "react-icons/bi";
import { FaFacebookSquare, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import './Respon.css';

export function Page1 () {
    return(
        <Container >
            <Header>
                <Navbar className="res600">
                    <div>
                        <a className="a1" href="#">Home</a>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>
                    </div>
                    <div className="menu">
                        <FcMenu size={18} color="#666666" />
                    </div>
                </Navbar>
                <Content>
                    <h1>PÁGINA INICIAL</h1>
                    <p>Modelo por w3.css</p>
                    <button>Iniciar</button>
                </Content>
            </Header>
            <Main>
                <Content_2>
                    <Section>
                        <h1>Lorem Ipsum</h1>
                        <p><strong>É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</strong></p>
                        <p className="p1">É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso. A menos que sejam cegados pelo desejo, eles não saem, são culpados quem abandona seus deveres, a mente amolece, ou seja, a busca pelas dificuldades. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</p>
                    </Section>
                    <Image1>
                        <BiAnchor size={250} color="#F44336" />
                    </Image1>
                </Content_2>
                <Content_3>
                    <Wid>
                        <Image1>
                            <BiCoffee size={250} color="#F44336" />
                        </Image1>
                        <Section_2>
                            <h1>Lorem Ipsum</h1>
                            <p><strong>É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</strong></p>
                            <p className="p1">É importante cuidar do paciente, ser acompanhado pelo cliente, mas ao mesmo tempo ele será acometido por grandes dores e sofrimentos. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso. A menos que sejam cegados pelo desejo, eles não saem, são culpados quem abandona seus deveres, a mente amolece, ou seja, a busca pelas dificuldades. Pois, para chegar ao mais ínfimo detalhe, ninguém deve praticar qualquer tipo de trabalho, a menos que tire algum proveito disso.</p>
                        </Section_2>
                    </Wid>
                <Content_4>
                    <h2>Frase do dia: viva a vida</h2>
                </Content_4>
                </Content_3>
            </Main>

            <Footer>
                <FaFacebookSquare id="fa1" size={22} color="#666666"/>
                <FaInstagram id="fa1" size={22} color="#666666"/>
                <FaSnapchat id="fa1" size={22} color="#666666"/>
                <FaPinterestP id="fa1" size={22} color="#666666"/>
                <FaTwitter id="fa1" size={22} color="#666666"/>
                <FaLinkedinIn id="fa1" size={22} color="#666666"/>
                <br/>
                <br/>
                <p className="p1">Powered by <u> w3.css</u></p>
            </Footer>

        </Container>
    )
}