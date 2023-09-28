import './ErrorBoundary.css';

import { Button } from '@mui/material';
import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-main">
            <h1 className="title error-title">Woops, something went wrong :(</h1>
            <div className="subtitle error-subtitle">Please either refresh the page or return to home to try again.</div>
            <Button
              variant="contained"
              href="/Website"
              sx={{ marginTop: '50px' }}
            >Go Home</Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
