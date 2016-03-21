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
	skills: {
		type: [Skill]
	}
});

Providers.attachSchema( ProviderSchema );