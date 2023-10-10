

import { Col, Row } from 'react-grid-system'
import { Tipografia } from '../../Componentes/Tipografia/Tipografia'
import { CampoTexto } from '../../Componentes/CampoTexto/CampoTexto'
import { Botao } from '../../Componentes/Botao/Botao'

const PaginaFormulario = () => {
  return (<div>
    <div style={{ textAlign: 'center' }}>
      <Tipografia variante="h1" componente="h1">
        Crie seu Cadastro
      </Tipografia>

      <Row>
        <Col>
          <CampoTexto titulo="Nome" placeholder="Digite seu Nome" />
        </Col>
      </Row>
      <Row>
        <Col>
          <CampoTexto titulo="Nome de usuário" placeholder="nome.sobrenome" />
        </Col>
      </Row>
      <Row>
        <Col>
          <CampoTexto titulo="E-mail" placeholder="Digite seu E-Mail" />
        </Col>
      </Row>
      <Row>
        <Col>
          <CampoTexto titulo="Senha" placeholder="Digite sua senha" />
        </Col>
      </Row>
      <Row>
        <Col>
          <CampoTexto titulo="Confirmar senha" placeholder="Confirme sua senha" />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div style={{textAlign: 'left'}}>
          <Botao variante="secundaria">
            Cancelar
          </Botao>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{textAlign: 'right'}}>
            <Botao>
              Próxima
            </Botao>
          </div>
        </Col>
      </Row>

    </div>
  </div>

  )
}

export default PaginaFormulario
