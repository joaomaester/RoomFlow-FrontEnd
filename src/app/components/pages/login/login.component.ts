import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule, ReactiveFormsModule, CommonModule],  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  formularioDeUsuario: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }
  
  iniciaForm() {
    this.formularioDeUsuario = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    });
  }

  ngOnInit() {
    this.iniciaForm();
  }
  
}
