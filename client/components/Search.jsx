// Search component for user
Search = React.createClass({
  getInitialState: function() {
    return {
      deckProviders: 'No search results'
    };
  },
	handleSubmit(event) {
		event.preventDefault();

		this.setState({
      deckProviders: ()=> {
        return Providers.find({})
      }
    });
	},
  renderProviders() {
    if (this.state.deckProviders) {
      return (
        <h3>{this.state.deckProviders}</h3>
      );
    }
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