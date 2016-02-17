Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	//simulation route
	this.route('estimations',{
		path: '/',
		template: 'estimations'
	});

	//chart about	
	this.route('about',{
		path: '/about',
		template: 'about'
	});

});