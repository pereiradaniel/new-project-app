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
      'customerId': Meteor.userId(),
      'providerId': this.props.provider._id.toString()
    });
    inviteId = Invites.findOne({customerId: {$not: {$ne: Meteor.userId()}}})._id.toString();
    FlowRouter.go('/invite/' + inviteId);
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