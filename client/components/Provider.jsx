// Provider component - represents a single customer
Provider = React.createClass({
  propTypes: {
    // This component gets the provider to display through a React prop.
    // We can use propTypes to indicate it is required
    provider: React.PropTypes.object.isRequired,
    currentUserId: React.PropTypes.string.isRequired
  },
  inviteProvider() {
    // Create the invite
    Invites.insert({
      'customerId': this.props.currentUserId.toString(),
      'providerId': this.props.provider._id.toString()
    });
  },
  render() {
    return (
      <div>
        <li>{this.props.provider.name}</li>
        <li><button onClick={this.inviteProvider}>Invite</button></li>
      </div>
    );
  }
});