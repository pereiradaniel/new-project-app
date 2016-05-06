// SearchResult component - represents a single search result
SearchResult = React.createClass({
  propTypes: {
    // This component gets the result to display through a React prop.
    // We can use propTypes to indicate it is required
    result: React.PropTypes.object.isRequired
  },
  inviteUser() {
    // Create the invite
    Invites.insert({
      'inviteSenderId': Meteor.userId(),
      'inviteReceiverId': this.props.result._id.toString()
    });
    inviteId = Invites.findOne({inviteSenderId: {$not: {$ne: Meteor.userId()}}})._id.toString();
    currentUserId = Meteor.userId();
    FlowRouter.go('/invite/' + inviteId + '/' + currentUserId);
  },
  render() {
    return (
      <div>
        <li>{this.props.result.name}</li>
        <li><button onClick={this.inviteUser}>Invite</button></li>
      </div>
    );
  }
});