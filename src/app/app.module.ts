import { NgModule } from '@angular/core'
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

import { FIRE_CONFIG } from "../environments/environment-firebase"
import { AngularFireModule, FirebaseApp } from "@angular/fire"
import { AngularFireAuthModule } from "@angular/fire/auth"
import { AngularFireDatabaseModule } from "@angular/fire/database"
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { IonicStorageModule } from "@ionic/storage"
import { PopComponent } from './pop/pop.component'
import { HttpClientModule } from "@angular/common/http"
import { ConnectionServiceModule } from "ng-connection-service"
import { AddCategoryComponent } from './add-category/add-category.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, PopComponent, AddCategoryComponent],
  entryComponents: [PopComponent, AddCategoryComponent],
  imports: [
    FormsModule,
    IonicModule.forRoot({
      swipeBackEnabled: false
    }),
    BrowserModule,
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(FIRE_CONFIG),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    ConnectionServiceModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // TextToSpeechOriginal,
    // Storage,
    // FacebookOriginal,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    // { provide: FirebaseOptionsToken, useValue: FIRE_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
