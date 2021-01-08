import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodoList } from 'src/models/list.interface';

import { Store } from '@ngrx/store';
import * as fromStore from '../../storev7/reducers/index';
import * as fromSelectors from '../../storev7/selectors/todov7.selectors';
import * as fromActions from '../../storev7/actions/productv7.actions';
import * as fromUseActions from '../../storev7/actions/user.action';
import { ApiServiceService } from 'src/todo/services/api-service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  lableList;
  list$: Observable<ITodoList[]>;
  listStore$: Observable<ITodoList[]>;
  constructor(private store: Store<fromStore.ProductAppState>, private service: ApiServiceService) {}

  ngOnInit() {
    this.getheaders();
    this.listStore$ = this.store.select(fromSelectors.getAllTodos);
    this.store.dispatch(new fromActions.LoadProducts());
    
   // this.store.dispatch(new fromUseActions.LoadUsers());
  }

  getheaders(){
    this.service.getLabels().subscribe((res => {
      this.lableList = res;
    }))
  }
}
