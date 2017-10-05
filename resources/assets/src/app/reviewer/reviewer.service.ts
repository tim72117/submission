import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Submission } from '../submission/submission.interface';

@Injectable()
export class ReviewerService  {

    constructor(private http: Http) { }

    getSubmissions(): Promise<Submission[]> {
        return this.http.get('/api/submissions')
            .toPromise()
            .then(response => response.json() as Submission[])
    }

    createSubmission(submission) {
        return this.http.post('/api/createSubmission', {submission: submission})
            .toPromise()
            .then(response => response.json().submitted as Submission[])
    }

    updateSubmission(submission) {
        return this.http.post('/api/updateSubmission', {submission: submission})
            .toPromise()
            .then(response => response.json().updated)
    }

}