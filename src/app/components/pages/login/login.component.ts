import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { AuthService } from '../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';
>>>>>>> 52eb728 (atualizacao do codigo)

@Component({
  selector: 'app-login',
  standalone: true,
<<<<<<< HEAD
  imports:[FormsModule, ReactiveFormsModule, CommonModule],  
=======
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialModule,
    RouterLink
  ],  
>>>>>>> 52eb728 (atualizacao do codigo)
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  formularioDeUsuario: FormGroup = new FormGroup({});

<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder) { }
  
  iniciaForm() {
    this.formularioDeUsuario = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
=======
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly route: Router,
  ) { }
  
  iniciaForm() {
    this.formularioDeUsuario = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
>>>>>>> 52eb728 (atualizacao do codigo)
    });
  }

  ngOnInit() {
    this.iniciaForm();
  }
<<<<<<< HEAD
=======

  logar() {
    this.authService.logar(this.formularioDeUsuario.value.login, this.formularioDeUsuario.value.senha,).subscribe({
      next: token => {
        if (token) {
          this.authService.addToken(token);
          this.route.navigate(['principal']);
          console.log('logado');
          
        } else {
          alert('Usuario ou senha estão incorretos');
        }
      },
      error: erro => {
        alert('deu erro');
      }
    });
  }
>>>>>>> 52eb728 (atualizacao do codigo)
  
}
