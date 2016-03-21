// MainLayout component - layout once user is logged in
MainLayout = React.createClass({
  render() {
    return (
    	<div>
    		<Header />
	      <main>
	      	{this.props.content}
	      </main>
     	</div>
    );
  }
});