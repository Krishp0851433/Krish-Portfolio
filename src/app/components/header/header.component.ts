import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavItem, navItems, sidenavAnimations } from '../../constants/header-nav';
import { HEADER_DEPS } from './header.dependencies';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [HEADER_DEPS],
  animations: [sidenavAnimations],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public navItems: NavItem[] = navItems;
  public sidenavState: string = 'out';
  public logoName!: string;
  private subscription!: Subscription;

  

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public openSidenav() {
    this.sidenavState = 'in';
  }

  public closeSidenav() {
    this.sidenavState = 'out';
  }
}
