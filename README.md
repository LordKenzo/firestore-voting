firebaseConfig: {
  apiKey: 'AIzaSyAAYXbHrCxlYZF2fvqeGTpLMFMDTesYpUU',
  authDomain: 'myfirestore-db.firebaseapp.com',
  databaseURL: 'https://myfirestore-db.firebaseio.com',
  projectId: 'myfirestore-db',
  storageBucket: 'myfirestore-db.appspot.com',
  messagingSenderId: '80753684723'
}

npm i --save firebase @angular/fire

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

AngularFireModule.initializeApp(environment.firebaseConfig),
AngularFirestoreModule

npm i --save bootstrap

./node_modules/bootstrap/dist/css/bootstrap.min.css

npm i --save chart.js

ng g c meetup/meetup-list --spec false
ng g c meetup/meetup --spec false

