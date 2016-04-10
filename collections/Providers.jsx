Providers = new Mongo.Collection('providers');

Skill = new SimpleSchema({
	title: {
		type: String
	}
});

ProviderSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	// Corresponding UserId
	userId: {
		type: String
	},
	// Flag used to mark provider as available
	available: {
		type: Boolean
	},
	// Use to filter for minimum requirements of customer
	skills: {
		type: [Skill]
	},
	// Use to filter for proximity to customer
	location: {
		type: String
	}
});

Providers.attachSchema( ProviderSchema );