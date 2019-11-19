import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SalvarPageModule } from './pais/salvar/salvar.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AppRoutingModule, SalvarPageModule, BrowserModule, IonicModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCLyouflPdQJvTLLHccOfq-ECMsG0DUzO8",
      authDomain: "projeti-5b34d.firebaseapp.com",
      databaseURL: "https://projeti-5b34d.firebaseio.com",
      projectId: "projeti-5b34d",
      storageBucket: "projeti-5b34d.appspot.com",
      messagingSenderId: "577428986984",
      appId: "1:577428986984:web:d2f91b7b020e4558af2fdd"
    }), AngularFireDatabaseModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
