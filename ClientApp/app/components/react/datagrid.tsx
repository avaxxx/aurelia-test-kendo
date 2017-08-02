import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { inject, bindable, noView } from 'aurelia-framework';
import { HelloWorld } from './HelloWorld';


@noView()
@inject(Element)
export class DatagridCustomElement {
    constructor(private element: Element){
        this.element = element;
    }





    render() {
        ReactDOM.render(
           <HelloWorld/>,
            this.element
        );
    }
    
    bind() {
        this.render();
    }
}