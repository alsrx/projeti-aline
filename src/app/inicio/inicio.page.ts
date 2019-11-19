import { Component, OnInit } from '@angular/core';
import { Formulario } from './entidade/formulario';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  formulario: Formulario = new Formulario();

  modalController: any;
  menu: any;

  constructor(private fire: AngularFireDatabase,
    private rota: Router,
    private modal: ModalController) {

   }

   openEnd() {
       this.menu.open('end');
     }

  ngOnInit() {
  }

  salvar() {
    if (this.formulario.key == null) {
      this.fire.list('formulario').push(this.formulario);
      this.formulario = new Formulario();
      alert("Enviado!");
    }else{
      this.fire.object('formulario/' + this.formulario.key).update(this.formulario);
      this.modalController.dismiss();
    }

}
}
