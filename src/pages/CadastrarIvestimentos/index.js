import {Form, Button, message, DatePicker, Layout, Menu, Input, InputNumber} from 'antd';
import {Link} from 'react-router-dom';
const {Header , Content, Footer} = Layout;


export default function CadastarInvestimento() {
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
     message.success("Ivestimento salvo com sucesso!")
   }
   const onFinishFailed = (erroInfo) =>{
    message.danger("Está faltado algo/ Erro iniesperado!")
    console.log('failed:', erroInfo);
   };


  return(

   <div className="container">
       <Layout className="layout">
         <Header>
           <div className="logo" />
           <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[1]}>
             <Menu.Item key="1">
             <Link to="/cadastrar-investimentos">
               Cadastar Investimento
             </Link>
             </Menu.Item>
           <Menu.Item key="2">
             <Link to="/listar-Ivestimetos">
               Listar Iventimentos
             </Link>
           </Menu.Item>

           </Menu>
         </Header>
         <Content style={{padding: '0 50px'}}>
           <div className="site-layout-content">
           <h2>CADASTAR INVESTIMENTO</h2>
           <Form {...layout} name="basic" initalValues={{
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
                require: true,
                message: 'Insira o código do ativo!',
              }
            ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            label="Valor"
            name="valor"
            rules={[
              {
                require: true,
                message: 'Insira o valor da cota!',
              }
            ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
            label="Quantidade de cotas"
            name="quantidadeCotas"
            rules={[
              {
                require: true,
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
                require: true,
                message: 'Insira a data da comrpa!',
              }
            ]}
            >
              <DatePicker />
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
