import React from 'react';

// Read more at https://react.dev/reference/react/Component

export default class App extends React.Component {

  // The constructor method is called when an instance of the component is created. super(props) is used to call the constructor of the parent class (React.Component). This is necessary because the App component is extending React.Component, and we want to make sure that the base class's constructor is called before initializing the component's state. In this case, it initializes the component's state with an object containing a value property set to the string 'Placeholder'.
  constructor(props) {
    super(props);

    // The component's state is initialized in the constructor. The state contains a single property value with an initial value of 'Placeholder'.
    this.state = { value: 'Placeholder' };
  }

  changeValue = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.value}
            onChange={this.changeValue}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
