import * as React from 'react';
import * as DOM from 'react-dom';


class HelloWorld extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        console.log("Renderujem");
        return (
            <h1>Hello World from React!!!!</h1>
        );
    }
}

export{
    HelloWorld
}