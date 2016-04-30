Invites = new Mongo.Collection('invites');

InviteSchema = new SimpleSchema({
	customerId: {
		type: String,
		label: "customerId"
	},
	providerId: {
		type: String,
		label: "providerId"
	}
});

Invites.attachSchema( InviteSchema );