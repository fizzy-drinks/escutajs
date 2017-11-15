import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { FormatTimeDirective } from './format-time.directive';
import { ReportService } from './report.service';
import { MailformattedComponent } from './mailformatted/mailformatted.component';


@NgModule({
  providers: [ReportService],
  declarations: [
    AppComponent,
    EditorComponent,
    FormatTimeDirective,
    MailformattedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
