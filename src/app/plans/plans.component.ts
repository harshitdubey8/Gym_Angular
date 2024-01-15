import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css',
})
export class PlansComponent {
  plans: any = [
    {
      id: 1,
      name: 'Basic Plan',
      services: [
        ' Personal Trainer',
        'Convienient Time',
        'Special Class',
        'Group Traning',
        'Free Fitness Traning',
      ],
      price: '$21',
    },

    {
      id: 2,
      name: 'BEGINNER PLAN',
      services: [
        ' Personal Trainer',
        'Convienient Time',
        'Special Class',
        'Group Traning',
        'Free Fitness Traning',
      ],
      price: '$98',
    },
    {
      id: 3,
      name: 'PREMIUM PLAN',
      services: [
        ' Personal Trainer',
        'Convienient Time',
        'Special Class',
        'Group Traning',
        'Free Fitness Traning',
      ],
      price: '$121',
    },
  ];
}
