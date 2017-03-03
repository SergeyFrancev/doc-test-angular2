import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";
import {User} from '../user.model'

@Component({
  selector: 'app-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.css']
})
export class UserBannerComponent implements OnInit {
  @Input() user: User;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToUser() {
    this.router.navigateByUrl(`test_url/${this.user.id}`)
  }
}
