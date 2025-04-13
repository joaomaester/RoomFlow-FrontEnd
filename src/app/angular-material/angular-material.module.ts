import { NgModule } from "@angular/core";
import {MatInput} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  imports: [
    MatTableModule,
    MatInput,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
  ],
  exports: [
    MatTableModule,
    MatInput,
    MatFormFieldModule
  ],
  
  providers: [],
})

export class AngularMaterialModule { }