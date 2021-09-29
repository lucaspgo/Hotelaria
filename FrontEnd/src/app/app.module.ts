import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./components/views/login/login.component";
import { CadastrarFuncionarioComponent } from './components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarFuncionarioComponent } from './components/views/funcionario/listar-funcionario/listar-funcionario.component';
import { ListarQuartoComponent } from './components/views/quarto/listar-quarto/listar-quarto.component';
import { ExcluirQuartoComponent } from './components/views/quarto/excluir-quarto/excluir-quarto.component';
import { FormQuartoComponent } from './components/views/quarto/form-quarto/form-quarto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarFuncionarioComponent,
    NavbarComponent,
    ListarFuncionarioComponent,
    ListarQuartoComponent,
    ExcluirQuartoComponent,
    FormQuartoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
