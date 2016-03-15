FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('search');
		}
		ReactLayout.render(App);
	}
});

FlowRouter.route('/search', {
	action() {
		ReactLayout.render(MainLayout, {
			content: <Search />
		});
	}
});