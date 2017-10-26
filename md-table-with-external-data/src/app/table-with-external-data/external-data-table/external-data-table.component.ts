import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatPaginator } from '@angular/material';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-external-data-table',
  templateUrl: './external-data-table.component.html',
  styleUrls: ['./external-data-table.component.css']
})
export class ExternalDataTableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  database: ExternalDatabase = null;
  dataSource: ExternalDataSource = null;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.database = new ExternalDatabase(this.http);
    this.dataSource = new ExternalDataSource(this.database, this.paginator);
  }

}

export interface UserData {
  id: number;
  name: string;
  progress: number;
  color: string;
}


/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExternalDataSource extends DataSource<any> {


  constructor(private database: ExternalDatabase, private _paginator: MatPaginator) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    const displayDataChanges = [
      this.database.dataChange,
      this._paginator.page,
    ];
    //return this.database.getUsersData();
    return Observable.merge(...displayDataChanges).map(() => {
      const data = this.database.data.slice();

      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });

  }

  disconnect() { }
}


/** An example database that the data source uses to retrieve data for the table. */
export class ExternalDatabase {
  private url = 'http://www.mocky.io/v2/59ed6dd43300002b00b5c5ae';  // URL to web API

  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor(private http: Http) {
    this.getUsersData();
  }

  getUsersData() {
    this.http.get(this.url).subscribe(result => {
      this.dataChange.next(result.json());
    });
  }

}



