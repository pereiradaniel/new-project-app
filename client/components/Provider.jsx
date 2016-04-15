// Provider component - represents a single customer
Provider = React.createClass({
  propTypes: {
    // This component gets the provider to display through a React prop.
    // We can use propTypes to indicate it is required
    provider: React.PropTypes.object.isRequired
  },
  inviteProvider() {
    FlowRouter.go('invite');
  },
  render() {
    return (
      <div>
        <li>{this.props.provider.name}</li>
        <li><button onClick={this.inviteProvider}>Invite provider</button></li>
      </div>
    );
  }
});