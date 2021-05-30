import "antd/dist/antd.css";
import {Table, Button, message, Layout, Menu} from 'antd';
import { Link } from 'react-router-dom';
import { useState } from "react";

const { Header, Content, Footer } = Layout;

const { Column } = Table;



export default function Listarinvestimentos() {

    const [investimentos ,setInvestimentos] = useState([]);//vetor vazio inicial
    function remove(record){
      message.success('Investimento removido com sucesso')
    }

  return(//coloca o código que vai ser retornado dessa estrutura
          <div className="coitainer">
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                  <Menu.Item key="1">
                    <Link to="/cadastrar-investimento">
                      Cadastrar Investimento
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                  <Link to="/cadastrar-investimento">
                      Listar Investimento
                    </Link>
                  </Menu.Item>

                </Menu>
              </Header>
              <Content style="{{ padding:  '0 50px' }}">
                <div className="site-layout-content">
                <h2>INVESTIEMNTOS</h2>
                <Table dataSource={investimentos}>
                  <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtivo"></Column>
                  <Column title="Valor" dataIndex="valor" key="valor"></Column>
                  <Column title="Quantidade de cotas" dataIndex="quantidadeCota" key="1"></Column>
                  <Column title="Data da Compra" dataIndex="dataCompra" key="dataCompra"></Column>
                  <Column title="Remover"  key="atualizar"
                     render={(text, record) => (<Button onClick={() =>remove(record)}
                     type="primary">Remover</Button>)}
                  />
                      r
                </Table>
                </div>
              </Content>
              <Footer style={{textAlign: 'center'}}>My Invest ©2021</Footer>
            </Layout>
          </div>
      );
  }
