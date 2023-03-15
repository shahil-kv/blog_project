import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent {
  isEmailError: boolean = false
  isSubscribed: boolean = false
  constructor(private subService: SubscribersService) { }

  onSubmit(formVal: any) {
    const subData: Sub = {
      name: formVal.value.name,
      email: formVal.value.email
    }
    this.subService.checkSubs(subData.email).subscribe((value) => {
      // if there is no user then we have to say that
      if (value.empty) {
        this.subService.addSubs(subData)
        this.isSubscribed = true
      } else {
        console.log('email address is already in use')
        this.isEmailError = true
      }
    })

  }
}
