import { MensagemComponent } from './../../componetes/mensagem/mensagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [MensagemComponent],
  imports: [
    CommonModule
  ],
  exports: [MensagemComponent]
})
export class MensagemModule { }
