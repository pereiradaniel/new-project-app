// Search component for user
Search = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      showCards: false
    }
  },

  getMeteorData() {
    if ( Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) ) {
      return {userProfile: Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) };
    } else if ( Providers.find({userId: {$not: {$ne: Meteor.userId()}}}) ) {
      return { userProfile: Providers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) };
    }
  },
  renderSearchResults() {
    return this.state.searchResults.map((provider) => {
      return <Provider
        key={provider._id}
        provider={provider} />;
    });
  },
  renderSearchForm() {
    if (this.data.userProfile.userType === "customer") {
      return (
          <form className="search" onSubmit={this.handleSubmit} >
            Number of Hours Required
            <input type="number" ref="hoursInput" />

            <button>SEARCH</button>
          </form>
        )
    } else {
      return (
        <form className="search" onSubmit={this.handleSubmit} >
            Distance Limit in Kilometers
            <input type="number" ref="hoursInput" />

            <button>SEARCH</button>
        </form>
      )
    }
  },
	handleSubmit(event) {
		event.preventDefault();
    this.setState({
      searchResults: Providers.find({available: {$ne: false}}).fetch(),
      showCards: ! this.state.showCards
    });
	},
  toggleCards() {
    this.setState({ showCards: ! this.state.showCards });
  },
  render() {
    return (
      <div>
        {this.state.showCards === true ? this.renderSearchResults() : this.renderSearchForm() }
      </div>
    );
  }
});