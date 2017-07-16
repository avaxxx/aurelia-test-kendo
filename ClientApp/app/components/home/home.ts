import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import { WebAPI } from "../../web-api";

@inject(WebAPI, EventAggregator)
export class Home {

    constructor(private api: WebAPI, private ea: EventAggregator){
        let list = api.getContactList().then(result => console.log(result));
    }
}
