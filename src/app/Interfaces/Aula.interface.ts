import { Bloco } from "../Enums/Bloco.enum";
import { IDisciplina } from "./Disciplina.interface";
import { ISala } from "./Sala.interface";
import { ITurma } from "./Turma.interface";
import { IUsuario } from "./Usuario.interface";

export interface IAula {
<<<<<<< HEAD
    Id : number;
    Bloco : Bloco;
    Disciplina : IDisciplina;
    Sala : ISala;
    Turma: ITurma;
    Data : Date;
    Professor : IUsuario;
=======
    id? : number;
    bloco : Bloco;
    disciplina : IDisciplina;
    sala : ISala;
    turma: ITurma;
    data : Date | string;
    professor : IUsuario;
>>>>>>> 52eb728 (atualizacao do codigo)
}