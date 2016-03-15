// Define a collection to store Customers
Customers = new Mongo.Collection("customers");
// Define a collection to store Providers
Providers = new Mongo.Collection("providers");

if (Meteor.isClient) {
  // This code is executed on the client only
 
  Meteor.startup(function () {
    // Use Meteor.startup to render the component after the page is ready
    // ReactDOM.render(<App />, document.getElementById("mount-point"));
  });
}