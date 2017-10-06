import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ReviewerService } from '../reviewer/reviewer.service';
import { SubmitDialog } from '../submission/submit.dialog.component';
import { SubmittedDialog } from '../submission/submitted.dialog.component';

@Component({
    templateUrl: './main.component.html',
    providers: [MatDialog]
})
export class MainComponent {
    submitteds = [];
    progressing = true

    constructor(private reviewerService: ReviewerService, public dialog: MatDialog) {
        this.reviewerService.getMySubmissions().then((response) => { this.submitteds = response; this.progressing = false; } );
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

    openSubmitDialog(): void {
        let dialogRef = this.dialog.open(SubmitDialog, {
            disableClose: true
        });

        dialogRef.afterClosed().subscribe(submitted => {
            if (submitted) {
                this.submitteds.push(submitted);
            }
        });
    }
}