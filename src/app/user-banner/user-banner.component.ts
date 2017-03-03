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

  isApply: boolean = true;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateToUser() {
    return this.router.navigateByUrl(`test_url/${this.user.id}`)
  }

  applyChanges(): Promise<boolean> {
    return this.router.navigate(['user-apply'])
      .then(() => this.isApply = true)
  }
}
