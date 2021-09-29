import { LoginComponent } from './components/views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { ListarQuartoComponent } from './components/views/quarto/listar-quarto/listar-quarto.component';
import { FormQuartoComponent } from './components/views/quarto/form-quarto/form-quarto.component';
import { ListarClienteComponent } from './components/views/cliente/listar-cliente/listar-cliente.component';
import { FormClienteComponent } from './components/views/cliente/form-cliente/form-cliente.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "funcionario/cadastrar",
    component: CadastrarFuncionarioComponent, 
  },
  {
    path: "funcionario/listar",
    component: ListarFuncionarioComponent, 
  },
    {
    path: "funcionario/editar/:id",
    component: CadastrarFuncionarioComponent, 
  },
  {
    path: "quarto/listar",
    component: ListarQuartoComponent, 
  },
  {
    path: "quarto/cadastrar",
    component: FormQuartoComponent, 
  },
  {
    path: "quarto/editar/:id",
    component: FormQuartoComponent, 
  },
  {
    path: "cliente/listar",
    component: ListarClienteComponent, 
  },
  {
    path: "cliente/cadastrar",
    component: FormClienteComponent, 
  },
  {
    path: "cliente/editar/:id",
    component: FormClienteComponent, 
  },
  {
    path: "cliente/excluir",
    component: ListarClienteComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
