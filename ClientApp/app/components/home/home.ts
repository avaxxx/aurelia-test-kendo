// import {inject} from 'aurelia-framework';
// import {EventAggregator} from 'aurelia-event-aggregator';
// import { WebAPI } from "../../web-api";

// @inject(WebAPI, EventAggregator)
// export class Home {

//     constructor(private api: WebAPI, private ea: EventAggregator){
//         let list = api.getContactList().then(result => console.log(result));
//     }
// }

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

 export class Home {
     constructor(){
    
        const client = new ApolloClient({
        networkInterface: createNetworkInterface({
            uri: 'http://localhost:47080/api/graphql',
        }),
        });

        client.query({
        query: gql`
            query TodoApp {
            todos {
                id
                text
                completed
            }
            }
        `,
        })
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

 }

