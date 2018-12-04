import { MeetupService } from './../services/meetup.service';
import { Component, OnInit } from '@angular/core';
import { Meetup } from '../models/meetup';

@Component({
  selector: 'app-meetup-list',
  templateUrl: './meetup-list.component.html',
  styleUrls: ['./meetup-list.component.css']
})
export class MeetupListComponent implements OnInit {

  list: Meetup[];

  constructor(private service: MeetupService) { }

  ngOnInit() {
    this.service.getMeetup().subscribe(
      res => this.list = res.map(meetup => {
        return <Meetup>{
          id: meetup.payload.doc.id,
          ...meetup.payload.doc.data()
        };
      })
    );
  }

}
