Invite = React.createClass({
  mixins: [ReactMeteorData],
  getInitisalState() {},
  getMeteorData() {
    // Insert user's profile into userProfile
    //   - Detects if user has profile in customers or providers
    if ( Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) ) {
      return {userProfile: Customers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) };
    } else if ( Providers.find({userId: {$not: {$ne: Meteor.userId()}}}) ) {
      return { userProfile: Providers.findOne({userId: {$not: {$ne: Meteor.userId()}}}) };
    }
  },
render() {
	return (
		<div>#Invite</div>
		)
}
});