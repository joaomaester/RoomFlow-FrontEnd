import { Component, Input } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-nav-bar',
  standalone: true,  // Se você estiver usando standalone components, caso contrário, remova
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'] // Corrigido de "styleUrl" para "styleUrls"
})
export class NavBarComponent {
  @Input() textoNav: string = '';  // Aqui, o textoNav será passado de um componente pai
}

=======
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input() textoNav: string = '';
  
}
>>>>>>> 52eb728 (atualizacao do codigo)
