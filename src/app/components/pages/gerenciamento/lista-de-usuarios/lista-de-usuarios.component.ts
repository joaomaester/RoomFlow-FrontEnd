import { Component, Input } from '@angular/core';
import { IUsuario } from '../../../../Interfaces/Usuario.interface';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-lista-de-usuarios',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './lista-de-usuarios.component.html',
  styleUrl: './lista-de-usuarios.component.css'
})
export class ListaDeUsuariosComponent {

  displayedColumns: string[] = ['id','login', 'nome', 'perfil','acoes'];
  dataSource = '';

  @Input() usersList: IUsuario[] = [];

}
