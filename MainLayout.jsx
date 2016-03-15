// MainLayout component - layout once user is logged in
MainLayout = React.createClass({
  render() {
    return (
    	<div>
	      <header>
	      	<h1>#MainLayout</h1>
	      </header>
	      <main>
	      	{this.props.content}
	      </main>
     	</div>
    );
  }
});