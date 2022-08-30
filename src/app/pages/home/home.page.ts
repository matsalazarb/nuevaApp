import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Animation, AnimationController} from '@ionic/angular';
import {users} from '../../../usuarios/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,AfterViewInit {
  username:string;

  @ViewChild('titulo', { read: ElementRef, static: true}) titulo: ElementRef;

  constructor(private readonly router: Router,
    private readonly activateRoute: ActivatedRoute,
    private animationController: AnimationController) { }

  ngOnInit() {
    this.activateRoute.queryParamMap.subscribe( () => {
    this.username = `${this.router.getCurrentNavigation().extras.state}`;
      
    });
  }
  //animacion
  public ngAfterViewInit(): void {
    const animation = this.animationController
      .create()
      .addElement(this.titulo.nativeElement)
      .iterations(Infinity)
      .duration(6000)
      .fromTo('transform', 'translateX(-100%)', 'translate(100%)')
      .fromTo('opacity', 0.2, 1);
  
    animation.play();
  }

}
