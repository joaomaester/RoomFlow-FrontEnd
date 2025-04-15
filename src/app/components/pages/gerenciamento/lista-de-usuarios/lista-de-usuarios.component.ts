import { Component, Input } from '@angular/core';
import { IUsuario } from '../../../../Interfaces/Usuario.interface';
<<<<<<< HEAD
import { MatTabsModule } from '@angular/material/tabs';
=======
>>>>>>> 52eb728 (atualizacao do codigo)
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lista-de-usuarios',
  standalone: true,
<<<<<<< HEAD
  imports: [MatTableModule],
=======
  imports: [MatTableModule,
  ],
>>>>>>> 52eb728 (atualizacao do codigo)
  templateUrl: './lista-de-usuarios.component.html',
  styleUrl: './lista-de-usuarios.component.css'
})
export class ListaDeUsuariosComponent {

  displayedColumns: string[] = ['id','login', 'nome', 'perfil','acoes'];
<<<<<<< HEAD
  dataSource = '';
=======

>>>>>>> 52eb728 (atualizacao do codigo)

  @Input() usersList: IUsuario[] = [];

}
