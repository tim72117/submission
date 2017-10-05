import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdChipList } from '@angular/material';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { Submission } from '../submission/submission.interface';

@Component({
    selector: 'submission',
    templateUrl: './submission.component.html'
})
export class SubmissionComponent {
    @Input() submission: Submission;
    public uploader:FileUploader = new FileUploader({
        url: 'api/upload',
        headers: [{'name': 'X-CSRF-TOKEN', 'value': document.querySelector('meta[property="csrf-token"]')['content']}],
        queueLimit: 1,
        autoUpload: true
    });
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public constructor() {
        var submissionComponent = this;
        this.uploader.onCompleteItem = function(item:any, response:string, status:number, headers:any):any {
            submissionComponent.uploader.clearQueue();
            var file = JSON.parse(response).file;
            submissionComponent.submission.name = file.name;
            submissionComponent.submission.path = file.path;
        }
    }

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }

    public remove():void {
        delete this.submission.name;
        delete this.submission.path;
    }
}
