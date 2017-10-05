import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ReviewerService } from '../reviewer/reviewer.service';
import { SubmissionComponent } from '../submission/submission.component';
import { Submission } from '../submission/submission.interface';

@Component({
    selector: 'submitted-dialog',
    template: `
        <div md-dialog-title style="text-align:center">投稿者基本資料表</div>
        <div md-dialog-title style="text-align:center">Author's Personal Infomation Form</div>
        <md-dialog-content style="height: 800px">
            <submission [submission]="submission"></submission>
        </md-dialog-content>
        <md-dialog-actions fxLayout="row">
            <button md-button md-dialog-close>取消</button>
            <span fxFlex></span>
            <button md-raised-button color="primary" (click)="submit(submission)">確定送出</button>
        </md-dialog-actions>
        <md-progress-bar mode="indeterminate" *ngIf="saving"></md-progress-bar>
    `,
})
export class SubmittedDialog {
    submission = <Submission>{};
    saving = false;

    constructor(private reviewerService: ReviewerService,
      public dialogRef: MdDialogRef<SubmittedDialog>, @Inject(MD_DIALOG_DATA) public data: any) { Object.assign(this.submission, data.submitted); }

    submit(submission): void {
        this.saving = true;
        this.reviewerService.updateSubmission(this.submission).then((updated) => {
            this.dialogRef.close({updated: updated, submitted: submission});
            this.saving = false;
        });
    }

}