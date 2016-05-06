Invite = React.createClass({
  propTypes: {
    currentUserId: React.PropTypes.string.isRequired,
    inviteId: React.PropTypes.string.isRequired
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentInvite: Invites.findOne({_id: {$not: {$ne: this.props.inviteId}}})
    }
  },
render() {
	return (
    <div>
		  <h3>#Invite</h3>
      <p>current invite id: {this.props.inviteId}</p>
      <p>current user id: {this.props.currentUserId}</p>
      <p>this invite's customer id: {this.data.currentInvite.inviteSenderId}</p>
      <p>this invite's provider id: {this.data.currentInvite.inviteReceiverId}</p>
    </div>
		)
}
});