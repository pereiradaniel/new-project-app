// Handle routes for Login and Logout
if (Meteor.isClient) {
	// gwendall:auth-client-callbacks detects user login and logout
	Accounts.onLogin(function() {		
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

// SEARCH ROUTES
	FlowRouter.route('/search', {
		name: 'search',
		action() {
			ReactLayout.render(MainLayout, {
				content: <Search />
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