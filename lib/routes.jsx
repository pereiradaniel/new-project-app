if (Meteor.isClient) {
	// Use gwendall:auth-client-callbacks package to detect user login and logout
	Accounts.onLogin(function() {
		FlowRouter.go('search');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('search');
		}
		ReactLayout.render(App);
	}
});

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/search', {
	name: 'search',
	action() {
		ReactLayout.render(MainLayout, {
			content: <Search />
		});
	}
});

FlowRouter.route('/select', {
	name: 'select',
	action() {
		ReactLayout.render(MainLayout, {
			content: <SelectProvider />
		});
	}
});