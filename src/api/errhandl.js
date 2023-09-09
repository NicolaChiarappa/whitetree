import { Component } from "react";
import { useRouter } from "next/router";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          className='text-white font-Cocon font-bold text-3xl flex flex-col justify-center
        items-center h-screen'
        >
          <h2>{"Ooops c'è stato un errore, riprova"}</h2>
          <button
            type='button'
            onClick={() => {
              localStorage.clear();
              location.href = "/";
            }}
          >
            Riprova
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
