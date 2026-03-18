import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true, // important if you're using standalone components
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

  educationList = [
    {
      id:0,
      title: 'Forest Conservation',
      description: 'Learn how forests support biodiversity.',
      image: 'assets/forest.jpg'
    },
    {
      id:1,
      title: 'Marine Life',
      description: 'Protect oceans and marine ecosystems.',
      image: 'assets/ocean.jpg'
    }
  ];

  species = {
    name: 'African Elephant',
    description: 'The largest land animal, under threat due to poaching.',
    status: 'Endangered',
    image: 'assets/elephant.jpg'
  };

  campaigns = [
    {
      id:0,
      title: 'Plant 1000 Trees',
      description: 'Help restore forests.',
      progress: 60
    },
    {
      id:1,
      title: 'Save Marine Life',
      description: 'Protect ocean ecosystems.',
      progress: 40
    }
  ];

  updates = [
    {
      id:0,
      message: '500 trees planted this week 🌱',
      date: 'Today',
      image: 'assets/tree.jpg'
    },
    {
      id:1,
      message: 'Rescued injured elephant 🐘',
      date: 'Yesterday',
      image: 'assets/elephant2.jpg'
    }
  ];

  donate(campaign: any) {
    const phone = prompt("Enter phone number:");
    const amount = prompt("Enter amount:");

    console.log('Donate:', campaign, phone, amount);

    // later: call your M-Pesa API here
  }
}