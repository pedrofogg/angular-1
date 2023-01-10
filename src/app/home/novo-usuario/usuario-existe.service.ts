import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService, http: HttpClient) { }

  usuarioJaExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap(nomeUsuario =>this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario) // trocar o fluox
        ),
        map((usuarioExiste) => usuarioExiste ? {usuarioExistente: true}: null), // tratar o resultado
        first() // finalizar o observable
      )
    }
  }
}
