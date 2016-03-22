SelectProvider = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      providers: Providers.find({}).fetch()
    }
  },
  renderProviders() {
    return this.data.providers.map((provider) => {
      return <Provider
        key={provider._id}
        provider={provider} />;
    });
  },
	render() {
		return (
			<div>
				<h1>#SelectProvider</h1>
				<h3>Deck of cards to flip through results</h3>
		    <ul>
            {this.renderProviders()}
        </ul>
			</div>
		);
	}
});