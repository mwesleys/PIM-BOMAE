

import { Col, Row } from 'react-grid-system'
import { Tipografia } from '../../Componentes/Tipografia/Tipografia'
import { CampoTexto } from '../../Componentes/CampoTexto/CampoTexto'
import { Botao } from '../../Componentes/Botao/Botao'
import { Link } from 'react-router-dom'

const PaginaLogin = () => {
  return (<div>
    <div style={{ textAlign: 'center' }}>
      <Tipografia variante="h1" componente="h1">
        Faça o login
      </Tipografia>
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
        <Col lg={6} md={6} sm={6}>
          <div style={{textAlign: 'left'}}>
          <Botao variante="secundaria">
            Cancelar
          </Botao>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{textAlign: 'right'}}>
              <Link to='/user' style={{ textDecoration: 'none' }}>
            <Botao>
              Login
            </Botao>
              </Link>
          </div>
        </Col>
      </Row>

    </div>

    <div style={{ textAlign: 'center' }}>
      <Row>
        <Col>
          
            Esqueci a senha
          
        </Col>
      </Row>
    </div>
  </div>
  

  )
}

export default PaginaLogin
