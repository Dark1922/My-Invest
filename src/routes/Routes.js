import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Listarinvestimentos from '../pages/ListarInvestimentos';
import CadastarInvestimento from '../pages/CadastrarIvestimentos';
export default function Routes(){

  return(//exatc path caminho exato

    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Listarinvestimentos}></Route>
      <Route exact path="/cadastar-investimentos" component={CadastarInvestimento}></Route>
      <Route exact path="/listar-investimentos" component={Listarinvestimentos}></Route>
    </Switch>
    </BrowserRouter>
  );

}
