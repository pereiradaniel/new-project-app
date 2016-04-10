SelectProvider = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      // return providers sorted by:
      //    - meets minimum requirements
      //    - is within range of search filter
      //    - is flagged as available
      providers: Providers.find(
        {available: {$ne: false}}
        ).fetch()
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