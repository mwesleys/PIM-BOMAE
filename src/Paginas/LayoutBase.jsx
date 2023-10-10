import { Col, Container, Row } from "react-grid-system"
import { Cabecalho } from "../Componentes/Cabecalho/Cabecalho"
import { Rodape } from "../Componentes/Rodape/Rodape"
import { Outlet } from "react-router-dom"
import { ListaInline } from "../Componentes/Lista/ListaInline"
import { ItemListaInline } from "../Componentes/Lista/ItemListaInline"
import { IconeWhatsApp } from "../Componentes/Icones/IconeWhatsApp"
import { IconeInstagram } from "../Componentes/Icones/IconeInsta"
import { IconeTwitter } from "../Componentes/Icones/IconeTwitter"
import { Card } from "../Componentes/Card/Card"

const LayoutBase = () => {
    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                        <Col>
                            <div>BOMAE</div>
                        </Col>
                        <Col align="right">
                            <div>Login</div>
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
                        <Col>
                            <div>Desenvolvido por alunos da USCS. </div>
                        </Col>
                        <Col style={{ textAlign: 'right'}}>
                            <ListaInline>
                                <ItemListaInline>
                                    <IconeWhatsApp />
                                </ItemListaInline>
                                <ItemListaInline>
                                    <IconeInstagram />
                                </ItemListaInline>
                                <ItemListaInline>
                                    <IconeTwitter />
                                </ItemListaInline>
                            </ListaInline>
                        </Col>

                    </Row>

                </Container>
            </Rodape>

        </>

    )
}

export default LayoutBase