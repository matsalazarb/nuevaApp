import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {users} from '../../../usuarios/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username:string;

  constructor(private readonly router: Router,
    private readonly activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe( () => {
    this.username = `${this.router.getCurrentNavigation().extras.state}`;
      
    });
  }

}
