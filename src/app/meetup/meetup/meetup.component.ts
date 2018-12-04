import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { Meetup } from '../models/meetup';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {

  @Input() meetup: Meetup;
  chart = [];

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.meetup.name, {
      type: 'bar',
      data: {
        labels: ['Yes', 'No', 'MayBe'],
        datasets: [{
          label: '# of Votes',
          data: [this.meetup.yes, this.meetup.no, this.meetup.maybe],
          backgroundColor: [
            'rgba(75, 192, 192, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)'
          ],
          borderColor: [
            'rgba(52, 217, 118, 1)',
            'rgba(217, 63, 52, 1)',
            'rgba(230, 127, 0, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        animation: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
