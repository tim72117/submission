import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ReviewerService } from '../reviewer/reviewer.service';
import { SubmissionComponent } from '../submission/submission.component';
import { Submission } from '../submission/submission.interface';

@Component({
    selector: 'submit-dialog',
    template: `
        <div md-dialog-title style="text-align:center">投稿者基本資料表</div>
        <div md-dialog-title style="text-align:center">Author's Personal Infomation Form</div>
        <md-dialog-content style="height: 800px">
            <submission [submission]="submission"></submission>
        </md-dialog-content>
        <md-dialog-actions fxLayout="row">
            <button md-button md-dialog-close>取消</button>
            <span fxFlex></span>
            <button md-raised-button color="primary" (click)="submit()">確定送出</button>
        </md-dialog-actions>
        <md-progress-bar mode="indeterminate" *ngIf="saving"></md-progress-bar>
    `,
})
export class SubmitDialog {
    submission = <Submission>{};
    saving = false;

    constructor(private reviewerService: ReviewerService,
      public dialogRef: MdDialogRef<SubmitDialog>) { }

    submit(): void {
        this.saving = true;
        this.reviewerService.createSubmission(this.submission).then((submitted) => {
            this.dialogRef.close(submitted);
            this.saving = false;
        });
    }

}
