import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error);
  }
  render() {
    if (this.state.hasError) {
      return <p className='tc'>Sorry, something went wrong.</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;