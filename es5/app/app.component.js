(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/app.component.html',
      providers: [DataService]
    })
    .Class({
      constructor: [DataService, function(dataService){
        this.languages = dataService.getLanguages();
      }],
      getTitle: function() {
        return 'Angular 2 Language Options';
      }
    });
})(window.app || (window.app = {}));
