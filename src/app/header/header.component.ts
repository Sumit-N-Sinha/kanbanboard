import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  wel():void{
    this.router.navigate(['/home']);
  }
  onContact(): void {
    this.router.navigate(['/contact']);
  }
  onCreate(): void{
    this.router.navigate(['/create']);
  }
  onAbout():void{
    this.router.navigate(['/about']);
  }
}
