Invites = new Mongo.Collection('invites');

InviteSchema = new SimpleSchema({
	inviteSenderId: {
		type: String,
		label: "inviteSenderId"
	},
	inviteReceiverId: {
		type: String,
		label: "inviteReceiverId"
	}
});

Invites.attachSchema( InviteSchema );