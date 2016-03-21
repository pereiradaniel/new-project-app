Customers = new Mongo.Collection('customers');

Need = new SimpleSchema({
	title: {
		type: String
	}
});

CustomerSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	needs: {
		type: [Need]
	}
});

Customers.attachSchema( CustomerSchema );