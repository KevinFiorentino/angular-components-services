import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  public countItems = 0;
  private sub$!: Subscription;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.sub$ = this.storeService.myCart$
      .subscribe(data => {
        this.countItems = data.length;
      });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
