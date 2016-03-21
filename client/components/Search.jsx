// Search component for user
Search = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      providers: Providers.find({}).fetch()
    }
  },
	handleSubmit(event) {
		event.preventDefault();
	},
  renderProviders() {
    return this.data.providers.map((provider) => {
      return <Provider
        key={provider._id}
        provider={provider} />;
    });
  },
  render() {
    return (
      <div>
        <h1>#Search</h1>
        <h3>(map is displayed)</h3>
        <form className="search" onSubmit={this.handleSubmit} >
        	Number of Hours Required
          <input type="number" />

        	<button>SEARCH</button>
        </form>
        <ul>
            {this.renderProviders()}
        </ul>
      </div>
    );
  }
});