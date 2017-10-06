import { Injectable, Inject }    from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
// import { MdTableModule } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { ReviewerService } from './reviewer.service';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import { SubmissionComponent } from '../submission/submission.component';
import { Submission } from '../submission/submission.interface';
import { SubmittedDialog } from '../submission/submitted.dialog.component';

@Component({
    selector: 'app-reviewer',
    templateUrl: './reviewer.component.html',
    providers: [MdDialog]
})

@Injectable()
export class ReviewerComponent {
    dataSource: ExampleDataSource;
    submissions = [];
    displayedColumns = ['author', 'title', 'affiliation', 'download', 'actions'];

    constructor(private reviewerService: ReviewerService, public dialog: MdDialog) {
        this.dataSource = new ExampleDataSource(reviewerService);
    }

    openSubmittedDialog(submitted): void {
        let dialogRef = this.dialog.open(SubmittedDialog, {
            data: {
                submitted: submitted
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.updated) {
                Object.assign(submitted, result.submitted);
            }
        });
    }
}

export class ExampleDataSource extends DataSource<any> {
    constructor(private reviewerService: ReviewerService) {
        super();
    }

    connect(): Observable<Submission[]> {
        return Observable.merge([]).startWith(null).switchMap(() => this.reviewerService.getSubmissions());
    }

    disconnect() {}
}