import {Form, Button, message, DatePicker, Layout, Menu, Input, InputNumber, Select} from 'antd';
import { Option } from 'antd/lib/mentions';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import CategoriaService from '../../service/CategoriaService';
import InvestimentoService from '../../service/IvestimentoService';
const {Header , Content, Footer} = Layout;



export default function CadastarCategoria() {
  async function refreshCategorias(){

   CategoriaService.retriveAllCategorais()
      .then(
        response => {
          setCategorias(response.data)
        }
      )
    }
  const [categorias ,setCategorias] = useState([]);//vetor vazio inicial
  const [categoria ,setCategoria] = useState([]);//vetor vazio inicial
  useEffect(() =>  {
    refreshCategorias();
    return () => {
  }
},[])
   const layout = {
     labelCol: {
       span: 4,
     },
     wrapperCol: {
       span: 3,
     },
   };
   const tailLayout = {
     wrapperCol: {
       offset: 4,
     },
   };

   const onFinish = (values) =>{
     InvestimentoService.saveInvestimento(values);
     message.success("Ivestimento salvo com sucesso!");
   }
   const onFinishFailed = (erroInfo) =>{
    message.error("Está faltado algo/ Erro inesperado!");
    console.log('failed:', erroInfo);
   };
   function handleChange(value) {
         setCategoria(value);
   }


  return(
    <div className="coitainer">
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/cadastar-investimento">
              Cadastrar Investimento
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
          <Link to="/listar-investimentos">
              Listar Investimento
            </Link>
          </Menu.Item>

        </Menu>

         </Header>
         <Content style={{padding: '0 50px'}}>
           <div className="site-layout-content">
           <h2>CADASTAR INVESTIMENTO</h2>
           <Form {...layout} name="basic"
           initalValues={{
             remember: true,
           }}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
           >
            <Form.Item
            label="Código do ativo"
            name="codigoAtivo"
            rules={[
              {
                required: true,
                message: 'Insira o código do ativo!',
              }
            ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            label="Valor"
            name="valorCota"
            rules={[
              {
                required: true,
                message: 'Insira o valor da cota!',
              }
            ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
            label="Quantidade de cotas"
            name="quantidadeCotas"
            rules={[
              {
                required: true,
                message: 'Insira a quantidade de cotas!',
              }
            ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
            label="Data da comrpa"
            name="dataCompra"
            rules={[
              {
                required: true,
                message: 'Insira a data da comrpa!',
              }
            ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
            label="Categoria"
            name="categoria"
            rules={[
              {
                required: false,
                message: 'Insira a sua categoria!',
              }
            ]}

            >
              <Select  onChange={handleChange}>
                {categorias.map((item, index) => {
                  return(
                    <Option key={item.id} value={item.id} >
                     {item.nome}
                    </Option>
                  )
                })}

              </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Salvar
              </Button>
            </Form.Item>
           </Form>
           </div>
         </Content>
         <Footer style={{textAlign: 'center'}}>My Invest ©2021</Footer>
       </Layout>
   </div>
  );
}
