import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(private http:Http) { }

    logout() {
        this.http.post('/logout', {}).toPromise().then(() => window.location.replace('/home') );
    }
}
