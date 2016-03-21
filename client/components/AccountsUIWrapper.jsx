AccountsUIWrapper = React.createClass({
	componentDidMount() {
		// Render login buttons with Blaze
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container));
	},
	componentWillUnmount() {
		// Clean u[p Blaze view
		Blaze.remove(this.view);
	},
	render() {
		// Render placeholder container to be filled in
		return <span ref="container" />;
	}
});