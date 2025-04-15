import { NgModule } from "@angular/core";
import {MatInput} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
<<<<<<< HEAD
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


=======
>>>>>>> 52eb728 (atualizacao do codigo)

@NgModule({
  imports: [
    MatTableModule,
    MatInput,
    MatFormFieldModule,
<<<<<<< HEAD
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
=======
    MatButtonModule
>>>>>>> 52eb728 (atualizacao do codigo)
  ],
  exports: [
    MatTableModule,
    MatInput,
<<<<<<< HEAD
    MatFormFieldModule
=======
    MatFormFieldModule,
    MatButtonModule
>>>>>>> 52eb728 (atualizacao do codigo)
  ],
  
  providers: [],
})

export class AngularMaterialModule { }