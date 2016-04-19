// Search component for user
Search = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    if ( Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) ) {
      return { userProfile: Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) };
    } else if ( Providers.find({userId: {$not: {$ne: Meteor.userId()}}}) ) {
      return { userProfile: Providers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) };
    }
  },
	handleSubmit(event) {
		event.preventDefault();
      ReactLayout.render(MainLayout, {
        content: <SelectProvider userProfile={this.data.userProfile} />
      });
	},
  render() {
    return (
      <div>
        <h1>#Search</h1>
        <h3>(map is displayed)</h3>
        <h3>{ this.data.userProfile.name }</h3>
        { this.data.userProfile.userType === "customer" ?
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