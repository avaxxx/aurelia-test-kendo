import { Aurelia, PLATFORM } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([{
            route: [ '', 'home' ],
            name: 'home',
            settings: { icon: 'home' },
            moduleId: PLATFORM.moduleName('../home/home'),
            nav: true,
            title: 'Home'
        }, {
            route: 'counter',
            name: 'counter',
            settings: { icon: 'education' },
            moduleId: PLATFORM.moduleName('../counter/counter'),
            nav: true,
            title: 'Counter'
        }, {
            route: 'fetch-data',
            name: 'fetchdata',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../fetchdata/fetchdata'),
            nav: true,
            title: 'Fetch data'
        },
        {
            route: 'kendo',
            name: 'kendo',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../kendo/kendo'),
            nav: true,
            title: 'Kendo demo'
        },
        {
            route: 'react',
            name: 'react',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../react/react'),
            nav: true,
            title: 'React demo'
        },
        {
            route: 'materialise',
            name: 'materialise',
            settings: { icon: 'th-list' },
            moduleId: PLATFORM.moduleName('../materialise/materialise'),
            nav: true,
            title: 'Materialise demo'
        }]);

        this.router = router;
    }
}
