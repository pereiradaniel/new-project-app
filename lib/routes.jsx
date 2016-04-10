if (Meteor.isClient) {
	// Use gwendall:auth-client-callbacks package to detect user login and logout
	Accounts.onLogin(function() {
		if (Customers.find({ userId: Meteor.userId() })) {
			console.log('A customer');
		}
		else if (Providers.find({ userId: Meteor.userId() })) {
			console.log('A provider');
		}
		else {
			console.log('Usertype not set');
		}
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