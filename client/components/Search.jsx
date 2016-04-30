// Search component for user
Search = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    // Initial component state
    return {
      // False = show form, true = show results
      showCards: false
    }
  },

  getMeteorData() {
    // Insert user's profile into userProfile
    //   - Detects if user has profile in customers or providers
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
        provider={provider}
        currentUserId={this.data.userProfile._id.toString()} />;
    });
  },
  renderSearchForm() {
    // Returns form specific to user type
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
    // Determines which user type db to search
    if (this.data.userProfile.userType === "customer") {
      this.setState({
        searchResults: Providers.find({available: {$ne: false}}).fetch(),
        showCards: ! this.state.showCards
      });
    } else {
      this.setState({
        searchResults: Customers.find({available: {$ne: false}}).fetch(),
        showCards: ! this.state.showCards
      });
    }
	},
  toggleCards() {
    // Toggles showCards
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