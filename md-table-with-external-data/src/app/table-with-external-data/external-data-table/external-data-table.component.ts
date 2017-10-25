import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-external-data-table',
  templateUrl: './external-data-table.component.html',
  styleUrls: ['./external-data-table.component.css']
})
export class ExternalDataTableComponent implements OnInit {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  database: ExternalDatabase = null;
  dataSource: ExternalDataSource = null;

  constructor(private http: Http) {
    this.database = new ExternalDatabase(http);
    this.dataSource = new ExternalDataSource(this.database);
  }

  ngOnInit() {
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
  constructor(private database: ExternalDatabase) {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<UserData[]> {
    return this.database.getUsersData();
  }

  disconnect() { }
}


/** An example database that the data source uses to retrieve data for the table. */
export class ExternalDatabase {
  private url = 'http://www.mocky.io/v2/59ed6dd43300002b00b5c5ae';  // URL to web API

  constructor(private http: Http) { }

  getUsersData(): Observable<UserData[]> {
    return this.http.get(this.url).map(result => {
      return result.json();
    });
  }

}



