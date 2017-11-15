import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report.class';

@Component({
  selector: 'app-mailformatted',
  templateUrl: './mailformatted.component.html',
  styleUrls: ['./mailformatted.component.css']
})
export class MailformattedComponent implements OnInit {

    reports : Report[];

    formattedMail : string = "";

    constructor(private reportService : ReportService) { }

    ngOnInit() {
        this.getReports()
    }

    getReports(): void {
        this.reportService.getReports().subscribe((reports : Report[]) => {
            this.reports = reports;
            this.updateFormatted();
        });
    }

    updateFormatted() {
        this.formattedMail = "";
        for(let i in this.reports) {
            let r = this.reports[i];
            this.formattedMail += `[${r.time}]\n${r.type}: ${r.title}${r.reporter ? "\n  Repórter: " + r.reporter : ""}${r.location ? "\n  Local: " + r.location : ""}${r.interviews ? "\n  Sonoras: " + r.interviews : r.type.toLowerCase() != "break" ? "\n  Sem sonora" : ""}${r.description ? "\n  Detalhes: " + r.description : ""}\n\n`;
        }
    }

}
