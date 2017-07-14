export class Kendokendo {
  private dataSource : kendo.data.DataSource;

  constructor(){
    this.dataSource = new kendo.data.DataSource({
    transport: {
      read: {
        dataType: 'jsonp',
        url: '//demos.telerik.com/kendo-ui/service/Products'
      }
    }
  });
  }
  
}