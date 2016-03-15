// App component - represents the whole app
App = React.createClass({

  // This mixin makes getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads users from the Customers collection and puts them in this.data.customers
  getMeteorData() {
    return {
      customers: Customers.find({}).fetch(),
      providers: Providers.find({}).fetch()
    }
  },

  renderCustomers() {
    // Get customers from this.data.customers
    return this.data.customers.map((customer) => {
      return <Customer key={customer._id} customer={customer} />;
    });
  },

  renderProviders() {
    // Get providers from this.data.providers
    return this.data.providers.map((provider) => {
      return <Provider key={provider._id} provider={provider} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>#App component</h1>
        </header>
        <AccountsUIWrapper />
        <ul>Customers:
          {this.renderCustomers()}
        </ul>
        <ul>Providers:
          {this.renderProviders()}
        </ul>
      </div>
    );
  }
});