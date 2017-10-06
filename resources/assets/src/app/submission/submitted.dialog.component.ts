import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ReviewerService } from '../reviewer/reviewer.service';
import { SubmissionComponent } from '../submission/submission.component';
import { Submission } from '../submission/submission.interface';

@Component({
    selector: 'submitted-dialog',
    template: `
        <div mat-dialog-title style="text-align:center">投稿者基本資料表</div>
        <div mat-dialog-title style="text-align:center">Author's Personal Infomation Form</div>
        <mat-dialog-content style="height: 800px">
            <submission [submission]="submission"></submission>
        </mat-dialog-content>
        <mat-dialog-actions fxLayout="row">
            <button mat-button mat-dialog-close>取消</button>
            <span fxFlex></span>
            <button mat-raised-button color="primary" (click)="submit(submission)">確定送出</button>
        </mat-dialog-actions>
        <mat-progress-bar mode="indeterminate" *ngIf="saving"></mat-progress-bar>
    `,
})
export class SubmittedDialog {
    submission = <Submission>{};
    saving = false;

    constructor(private reviewerService: ReviewerService,
      public dialogRef: MatDialogRef<SubmittedDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { Object.assign(this.submission, data.submitted); }

    submit(submission): void {
        this.saving = true;
        this.reviewerService.updateSubmission(this.submission).then((updated) => {
            this.dialogRef.close({updated: updated, submitted: submission});
            this.saving = false;
        });
    }

}