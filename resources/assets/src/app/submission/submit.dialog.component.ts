import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ReviewerService } from '../reviewer/reviewer.service';
import { SubmissionComponent } from '../submission/submission.component';
import { Submission } from '../submission/submission.interface';

@Component({
    selector: 'submit-dialog',
    template: `
        <div mat-dialog-title style="text-align:center">投稿者基本資料表</div>
        <div mat-dialog-title style="text-align:center">Author's Personal Infomation Form</div>
        <mat-dialog-content style="height: 800px">
            <submission [submission]="submission"></submission>
        </mat-dialog-content>
        <mat-dialog-actions fxLayout="row">
            <button mat-button mat-dialog-close>取消</button>
            <span fxFlex></span>
            <button mat-raised-button color="primary" (click)="submit()">確定送出</button>
        </mat-dialog-actions>
        <mat-progress-bar mode="indeterminate" *ngIf="saving"></mat-progress-bar>
    `,
})
export class SubmitDialog {
    submission = <Submission>{};
    saving = false;

    constructor(private reviewerService: ReviewerService,
      public dialogRef: MatDialogRef<SubmitDialog>) { }

    submit(): void {
        this.saving = true;
        this.reviewerService.createSubmission(this.submission).then((submitted) => {
            this.dialogRef.close(submitted);
            this.saving = false;
        });
    }

}
