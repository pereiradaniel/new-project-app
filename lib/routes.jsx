// Handle routes for Login and Logout
if (Meteor.isClient) {
	// gwendall:auth-client-callbacks detects user login and logout
	Accounts.onLogin(function() {

		// find a customer profile
		if ( Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) ) {
			console.log('A customer profile has been found');
			// userProfile = Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}});
			userIsCustomer = true;
		}
		// find a provider profile
		else if ( Providers.findOne({ userId: {$not: {$ne: Meteor.userId()}}}) ) {
			console.log('A provider profile has been found');
			userProfile = Providers.findOne({userId: {$not: {$ne: Meteor.userId()}}});
			userIsCustomer = false;
		}
		// find 
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

// HOME ROUTE
	FlowRouter.route('/', {
		name: 'home',
		action() {
			if(Meteor.userId()) {
				FlowRouter.go('search');
			}
			ReactLayout.render(App);
		}
	});

	// Trigger home route if logout from anywhere
	FlowRouter.triggers.enter([function(context, redirect){
		if(!Meteor.userId()) {
			FlowRouter.go('home');
		}
	}]);

// SEARCH ROUTE
	FlowRouter.route('/search', {
		name: 'search',
		action() {
			ReactLayout.render(MainLayout, {
				content: <Search />
			});
		}
	});

// SELECT-A-DECK ROUTE
	FlowRouter.route('/select', {
		name: 'select',
		action() {
			ReactLayout.render(MainLayout, {
				content: <SelectProvider />
			});
		}
	});

// INVITE ROUTE
	FlowRouter.route('/invite', {
		name: 'invite',
		action() {
			ReactLayout.render(MainLayout, {
				content: <Invite/>
			});
		}
	});