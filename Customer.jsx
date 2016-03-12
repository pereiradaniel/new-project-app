// Customer component - represents a single customer
Customer = React.createClass({
  propTypes: {
    // This component gets the customer to display through a React prop.
    // We can use propTypes to indicate it is required
    customer: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.customer.name}</li>
    );
  }
});