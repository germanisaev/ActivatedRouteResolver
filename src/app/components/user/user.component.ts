import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Users: any = [];
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.Users = this.actRoute.snapshot.data['users'];
  }

}
