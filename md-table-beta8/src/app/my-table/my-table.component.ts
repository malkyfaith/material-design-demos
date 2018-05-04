import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataSource } from '@angular/cdk';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import { TableService } from './table.service';
import { MdPaginator, MdSort } from '@angular/material';
import { tap } from 'rxjs/operators/tap';
import { merge } from 'rxjs/observable/merge';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['number', 'state', 'title'];
  dataSource: ExampleDataSource | null;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild(MdSort) sort: MdSort;

  constructor(private tableService: TableService) {
    this.dataSource = new ExampleDataSource(this.tableService);
    this.dataSource.loadData();
  }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.tableService);
    this.dataSource.loadData();
  }

  ngAfterViewInit() {
    this.sort.mdSortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.mdSortChange, this.paginator.page)
      .pipe(
      tap(() => this.loadPage())
      )
      .subscribe();
  }

  loadPage() {
    console.log('paginate and sort');
    this.dataSource.loadData();
  }

}

export interface MyGithubIssue {
  number: string;
  state: string;
  title: string;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleHttpDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<MyGithubIssue> {
  private issueSubject = new BehaviorSubject<MyGithubIssue[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  constructor(private tableSevice: TableService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<MyGithubIssue[]> {
    return this.issueSubject.asObservable();
  }

  loadData() {
    this.loadingSubject.next(true);
    this.tableSevice.findData().subscribe((data: MyGithubIssue[]) => {
      console.log(data);
      this.issueSubject.next(data);
    });
  }

  disconnect() { }
}
