import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';

import { MdInputModule, MdCardModule, MdToolbarModule, MdButtonModule, MdTableModule, MdDialogModule, MdListModule, MdIconModule, MdChipsModule, MdProgressBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { SubmissionComponent } from './submission/submission.component';
import { ReviewerService } from './reviewer/reviewer.service';
import { MainComponent } from './submission/main.component';
import { SubmittedDialog } from './submission/submitted.dialog.component';
import { SubmitDialog } from './submission/submit.dialog.component';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
    declarations: [
        AppComponent,
        ReviewerComponent,
        SubmissionComponent,
        MainComponent,
        SubmittedDialog,
        SubmitDialog,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
        {
            path: '',
            redirectTo:"submitted",
            pathMatch: 'full'
        },
        {
            path: 'reviewer',
            component: ReviewerComponent
        },
        {
            path: 'submitted',
            component: MainComponent
        }
        ]),
        FormsModule,
        FlexLayoutModule,
        HttpModule,
        MdInputModule,
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        MdTableModule,
        MdDialogModule,
        MdListModule,
        MdIconModule,
        MdChipsModule,
        MdProgressBarModule,
        FileUploadModule,
    ],
    entryComponents: [SubmittedDialog, SubmitDialog],
    providers: [ReviewerService],
    bootstrap: [AppComponent]
})

export class AppModule { }
