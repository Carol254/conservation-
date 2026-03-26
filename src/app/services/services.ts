import { Component, signal } from '@angular/core';
import { DonationService } from '../donation-service';

@Component({
  selector: 'app-services',
  standalone: true, // important if you're using standalone components
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  Campaign: any;

  constructor(private donationService:DonationService){}

  showModal = signal(false);
  // selectedCampaign = signal<Campaign | null>(null);
  phone = signal('');
  amount = signal<number | null>(null);

  educationList = [
    {
      id:0,
      title: 'Forest Conservation',
      description: 'Learn how forests support biodiversity.',
      image: '/images/forest.jpg'
    },
    {
      id:1,
      title: 'Marine Life',
      description: 'Protect oceans and marine ecosystems.',
      image: '/images/ocean.jpg'
    }
  ];

  species = {
    name: 'African Elephant',
    description: 'The largest land animal, under threat due to poaching.',
    status: 'Endangered',
    image: '/images/elephant-2.jpg'
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
      image: '/images/seedling.jpg'
    },
    {
      id:1,
      message: 'Rescued injured elephant 🐘',
      date: 'Yesterday',
      image: '/images/african-elephant.jpg'
    }
  ];

  donate(campaign: any) {
    const phone = prompt("Enter phone number:");
    const amount = prompt("Enter amount:");

    console.log('Donate:', campaign, phone, amount);

    // later: call your M-Pesa API here
  }

   openModal(campaign: any) {
    // this.selectedCampaign = campaign;
    this.showModal.set(true);
  }

   closeModal() {
    this.showModal.set(false);
  }

  confirmDonation() {
    this.donationService.donate(`${this.phone()}`, Number(this.amount()))
      .subscribe({
        next: () => {
          alert("📲 Check your phone to complete payment");
          this.closeModal();
        },
        error: (err) => {
          console.log(err);
          alert("Something went wrong");
        }
      });
  }

}