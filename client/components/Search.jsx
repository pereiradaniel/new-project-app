// Search component for user
Search = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      userProfile: ( userIsCustomer == true ? Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) : Providers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) )
    }
  },
	handleSubmit(event) {
		event.preventDefault();
    FlowRouter.go('select');
	},
  render() {
    return (
      <div>
        <h1>#Search</h1>
        <h3>(map is displayed)</h3>
        <h3>{ this.data.userProfile.name }</h3>
        { this.data.userIsCustomer == true ?
          <form className="search" onSubmit={this.handleSubmit} >
          	Number of Hours Required
            <input type="number" ref="hoursInput" />

          	<button>SEARCH</button>
        </form> :
        <form className="search" onSubmit={this.handleSubmit} >
            Distance Limit in Kilometers
            <input type="number" ref="hoursInput" />

            <button>SEARCH</button>
        </form>
        }
      </div>
    );
  }
});