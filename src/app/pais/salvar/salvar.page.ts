import { Component, OnInit } from '@angular/core';
import { Pais } from '../entidade/pais';
import { Router } from '@angular/router';
import { AngularFireDatabase } from "@angular/fire/database";
import { AngularFireAuth } from "angularfire2/auth";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  pais: Pais = new Pais();

  constructor(
    private banco: AngularFireDatabase,
    private rota: Router,
    private modal: ModalController,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {}

  salvar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.pais.email, this.pais.senha).then(
      () => { this.rota.navigate(['inicio']); }
    ).catch((erro) => console.log(erro));
    alert("Cadastro realizado com sucesso!");

    if (this.pais.key == null) {
      this.banco.list('pais').push(this.pais);
      this.pais = new Pais();
      this.rota.navigate(['inicio']);
    } else {
      this.banco.object('pais/' + this.pais.key).update(this.pais);
      this.modal.dismiss();
    }
  }
}
