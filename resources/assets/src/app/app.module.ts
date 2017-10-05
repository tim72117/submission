import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdAutocompleteModule, MdInputModule, MdCardModule, MdToolbarModule, MdButtonModule, MdTableModule, MdDialogModule, MdListModule, MdIconModule, MdChipsModule, MdProgressBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReviewerComponent } from './reviewer/reviewer.component';
import { SubmissionComponent } from './submission/submission.component';
import { ReviewerService } from './reviewer/reviewer.service';
import { MainComponent } from './submission/main.component';
import { SubmittedDialog } from './submission/submitted.dialog.component';
import { SubmitDialog } from './submission/submit.dialog.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
    declarations: [
        AppComponent,
        ReviewerComponent,
        SubmissionComponent,
        MainComponent,
        SubmittedDialog,
        SubmitDialog,
        FileSelectDirective,
        FileDropDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdAutocompleteModule,
        MdInputModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MdCardModule,
        MdToolbarModule,
        MdButtonModule,
        MdTableModule,
        HttpModule,
        MdDialogModule,
        MdListModule,
        MdIconModule,
        MdChipsModule,
        MdProgressBarModule,
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
        ])
    ],
    entryComponents: [SubmittedDialog, SubmitDialog],
    providers: [ReviewerService],
    bootstrap: [AppComponent]
})

export class AppModule { }
