import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Report } from './report.class';

@Injectable()
export class ReportService {

    reports : Report[] = []

    constructor() { }

    getReports() : Observable<Report[]> {
        return of(this.reports);
    }

    create(report) {
        this.reports.push(report);
        this.reports.sort((a, b) => a.time > b.time ? 1 : a.time < b.time ? -1 : 0);
    }

    delete(report) {
        this.reports.splice(this.getIndex(report), 1)
    }

    private getIndex(report) {
        return this.reports.indexOf(report)
    }

    private getReport(report) {
        return this.reports[this.getIndex(report)]
    }
}
