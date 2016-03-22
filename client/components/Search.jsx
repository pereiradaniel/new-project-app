// Search component for user
Search = React.createClass({
	handleSubmit(event) {
		event.preventDefault();
    FlowRouter.go('select');
	},
  render() {
    return (
      <div>
        <h1>#Search</h1>
        <h3>(map is displayed)</h3>
        <form className="search" onSubmit={this.handleSubmit} >
        	Number of Hours Required
          <input type="number" ref="hoursInput" />

        	<button>SEARCH</button>
        </form>
      </div>
    );
  }
});