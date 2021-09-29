import { LoginComponent } from './components/views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { ListarQuartoComponent } from './components/views/quarto/listar-quarto/listar-quarto.component';
import { CadastrarQuartoComponent } from './components/views/quarto/cadastrar-quarto/cadastrar-quarto.component';
import { EditarQuartoComponent } from './components/views/quarto/editar-quarto/editar-quarto.component';
import { ExcluirQuartoComponent } from './components/views/quarto/excluir-quarto/excluir-quarto.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "funcionario/cadastro",
    component: CadastrarFuncionarioComponent, 
  },
  {
    path: "funcionario/listar",
    component: ListarFuncionarioComponent, 
  },
  {
    path: "quarto/listar",
    component: ListarQuartoComponent, 
  },
  {
    path: "quarto/cadastrar",
    component: CadastrarQuartoComponent, 
  },
  {
    path: "quarto/editar",
    component: EditarQuartoComponent, 
  },
  {
    path: "quarto/excluir",
    component: ExcluirQuartoComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
