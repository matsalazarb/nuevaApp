import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Animation, AnimationController} from '@ionic/angular';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {
  mail: string;

  constructor(private readonly router: Router,
    private readonly activateRoute: ActivatedRoute,
    private animationController: AnimationController) { }

  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe( () => {
    this.mail = `${this.router.getCurrentNavigation().extras.state}`;
        
      });
  }

}
