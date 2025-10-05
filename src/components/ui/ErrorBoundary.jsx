// src/components/ui/ErrorBoundary.js
'use client';
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 border rounded bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200">
          Something went wrong in this section.
        </div>
      );
    }
    return this.props.children;
  }
}
