import {Component, OnInit} from '@angular/core';
import {jsonMember, jsonObject, TypedJSON} from 'typedjson';


@jsonObject
class Empty {
}

@jsonObject
class NotEmpty {

    @jsonMember
    dummy: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'typedjson-bug';

    ngOnInit(): void {
        console.log(TypedJSON.parse({foo: 'bar'}, Empty)); // e {}
        console.log(TypedJSON.parse({foo: 'bar'}, NotEmpty)); // e {foo: "bar"}
    }
}
