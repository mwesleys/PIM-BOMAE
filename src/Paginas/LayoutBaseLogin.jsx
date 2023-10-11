import { Col, Container, Row } from "react-grid-system"
import { Cabecalho } from "../Componentes/Cabecalho/Cabecalho"
import { Rodape } from "../Componentes/Rodape/Rodape"
import { Link, Outlet } from "react-router-dom"
import { ListaInline } from "../Componentes/Lista/ListaInline"
import { ItemListaInline } from "../Componentes/Lista/ItemListaInline"
import { IconeWhatsApp } from "../Componentes/Icones/IconeWhatsApp"
import { IconeInstagram } from "../Componentes/Icones/IconeInsta"
import { IconeTwitter } from "../Componentes/Icones/IconeTwitter"
import { Card } from "../Componentes/Card/Card"
import { Links } from "../Componentes/Link/Links"

const LayoutBaseLogin = () => {
    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                        <Col>
                            <div>BOMAE</div>
                        </Col>
                        <Col align="right">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <Links variante="secundaria">
                            Fazer Cadastro
                                </Links>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
            <Container>
                
            <Row justify="center">
                <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
                    <Card>
                        <Outlet />
                    </Card>
                </Col>
            </Row>

            </Container>
            <Rodape>
                <Container>
                    <Row align="center">
                        <Col style={{ textAlign: 'left'}}>
                            <div>Desenvolvido por alunos da USCS. </div>
                        </Col>
                        <Col style={{ textAlign: 'right'}}>
                            <ListaInline>
                                <ItemListaInline>
                                    <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank" aria-label="Link para WhatsApp">
                                    <IconeWhatsApp />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="https://www.instagram.com/" target="_blank" aria-label="Link para Instagram">
                                    <IconeInstagram />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="https://twitter.com/" target="_blank" aria-label="Link para Twitter">
                                    <IconeTwitter />
                                    </a>
                                </ItemListaInline>
                            </ListaInline>
                        </Col>

                    </Row>

                </Container>
            </Rodape>

        </>

    )
}

export default LayoutBaseLogin