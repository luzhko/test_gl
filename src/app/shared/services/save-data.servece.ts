import { Injectable } from '@angular/core';

@Injectable()
export class SaveDataService {
    send (data) {
        console.log(data);
    }
}