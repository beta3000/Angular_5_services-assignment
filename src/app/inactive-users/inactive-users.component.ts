import {Component, EventEmitter, Inject, Injectable, Input, Output} from '@angular/core';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
@Injectable()
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService: UserService) {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
