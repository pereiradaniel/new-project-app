// Search component for user
Search = React.createClass({
	handleSubmit(event) {
		event.preventDefault();

		FlowRouter.go('selectProvider');
	},

  render() {
    return (
      <div>
        <h1>#Search</h1>
        <h3>(map is displayed)</h3>
        <form className="search" onSubmit={this.handleSubmit} >
        	Number of Hours Required
        	1<input type="radio" name="hours" value="1"></input>
        	2<input type="radio" name="hours" value="2"></input>
        	3<input type="radio" name="hours" value="3"></input>
        	4<input type="radio" name="hours" value="4"></input>
        	5<input type="radio" name="hours" value="5"></input>

        	<button>SEARCH</button>
        </form>
      </div>
    );
  }
});