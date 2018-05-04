import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MyGithubIssue } from './my-table.component';

@Injectable()
export class TableService {
    private issuesUrl = 'https://api.github.com/repos/angular/material2/issues';

    constructor(private http: Http) { }

    findData(): Observable<MyGithubIssue[]> {
        return this.http.get(this.issuesUrl).map((result) => {
            return result.json().map(issue => {
                return {
                  number: issue.number,
                  state: issue.state,
                  title: issue.title
                };
              });
        });
    }
}
