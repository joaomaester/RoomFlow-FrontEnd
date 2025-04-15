import { Component, Input } from '@angular/core';
import { Status } from '../../../../Enums/Status.enum';
import { ISala } from '../../../../Interfaces/Sala.interface';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { MatCardModule } from '@angular/material/card';
=======
>>>>>>> 52eb728 (atualizacao do codigo)


@Component({
  selector: 'app-cards-sala',
  standalone: true,
<<<<<<< HEAD
  imports:[CommonModule, MatCardModule],
=======
  imports:[CommonModule],
>>>>>>> 52eb728 (atualizacao do codigo)
  templateUrl: './cards-sala.component.html',
  styleUrl: './cards-sala.component.css'
})
export class CardsSalaComponent {  
  @Input({ required: true }) sala: ISala = {} as ISala;

  exibirCard: boolean = false;

  toggleCard() {
<<<<<<< HEAD
    if(this.sala.Status === Status.Reservada) {
=======
    if(this.sala.status === Status.Reservada) {
>>>>>>> 52eb728 (atualizacao do codigo)
      this.exibirCard = !this.exibirCard;
    } 
  }

  corDoCard(): string {
<<<<<<< HEAD
    if (this.sala.Status === Status.Disponivel) {
      return 'rgb(40, 167, 69) ';
    } else if (this.sala.Status === Status.Indisponivel) {
=======
    if (this.sala.status === Status.Disponivel) {
      return 'rgb(40, 167, 69) ';
    } else if (this.sala.status === Status.Indisponivel) {
>>>>>>> 52eb728 (atualizacao do codigo)
      return 'rgb(117, 117, 117)';
    } else {
      return 'rgb(198, 40, 40)';
    }
  }

}
