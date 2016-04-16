// Handle routes for Login and Logout
if (Meteor.isClient) {
	// gwendall:auth-client-callbacks detects user login and logout
	Accounts.onLogin(function() {

		// find a customer profile
		if ( Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) ) {
			console.log('A customer profile has been found');
		}
		// find a provider profile
		else if ( Providers.findOne({ userId: {$not: {$ne: Meteor.userId()}}}) ) {
			console.log('A provider profile has been found');
		}
		else if (
			!Providers.findOne({ userId: {$not: {$ne: Meteor.userId()}}}) &&
			!Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) ) {
			console.log('No profiles for this user');
		}
		FlowRouter.go('search');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}

// Routes
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

FlowRouter.route('/invite', {
	name: 'invite',
	action() {
		ReactLayout.render(MainLayout, {
			content: <Invite/>
		});
	}
});