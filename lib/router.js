Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//simulation route
	this.route('estimations',{
		path: '/',
		template: 'estimations'
	});

	//chart route
	this.route('chart');

});