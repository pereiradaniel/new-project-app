// App component - represents the whole app
App = React.createClass({
  render() {
    return (
      <div className="container">
        <header>
          <h1>#App</h1>
        </header>
        <AccountsUIWrapper />
      </div>
    );
  }
});