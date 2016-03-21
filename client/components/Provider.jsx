// Provider component - represents a single customer
Provider = React.createClass({
  propTypes: {
    // This component gets the provider to display through a React prop.
    // We can use propTypes to indicate it is required
    provider: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.provider.name}</li>
    );
  }
});