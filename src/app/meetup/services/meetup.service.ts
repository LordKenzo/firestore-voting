import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Meetup } from '../models/meetup';

@Injectable({
  providedIn: 'root'
})
export class MeetupService {

  constructor(private firestore: AngularFirestore) {}

  getMeetup(): Observable<DocumentChangeAction<{}>[]> {
    return this.firestore.collection('meetup').snapshotChanges();
  }
}
