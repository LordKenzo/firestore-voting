import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MeetupComponent } from './meetup/meetup/meetup.component';
import { MeetupListComponent } from './meetup/meetup-list/meetup-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupComponent,
    MeetupListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
