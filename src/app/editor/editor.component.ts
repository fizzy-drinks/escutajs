import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report.class';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

    reports : Report[];
    openReport : Report;
    popAlert : Boolean = false;

    constructor(private reportService: ReportService) { }

    ngOnInit() {
        this.getReports();
    }

    getReports(): void {
        this.reportService.getReports().subscribe((reports : Report[]) => this.reports = reports);
    }

    open(report) {
        if(this.openReport)
            this.close(this.openReport);

        let r = this.getReport(report);

        this.openReport = r;
        r.open = true;
    }

    close(report) {
        if(this.validateRequired(report)){
            this.getReport(report).open = false;
            this.popAlert = false;
        }

        else this.popAlert = true;
    }

    create() {
        let r = new Report()
        this.reportService.create(r);
        this.open(r);
    }

    delete(report) {
        this.reportService.delete(report);
        this.openReport = null
    }

    private getIndex(report) {
        return this.reports.indexOf(report)
    }

    private getReport(report) {
        return this.reports[this.getIndex(report)]
    }

    validateTime(report) {
        let my = this.getReport(report);
        return my.time.length === 5
    }

    validateType(report) {
        let my = this.getReport(report);
        return my.type
    }

    validateTitle(report) {
        let my = this.getReport(report);

        function twoWords(i) {
            let s = my.title.indexOf(i)
            return s != -1 && my.title.substr(s + 1)
        }

        return my.type.toLowerCase() == "break" || twoWords(' ') || twoWords('/') || twoWords('-')
    }

    validateRequired(report) {
        return this.validateTime(report) && this.validateType(report) && this.validateTitle(report);
    }

}
