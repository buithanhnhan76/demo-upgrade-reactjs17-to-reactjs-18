// libs
import { render, screen } from '@testing-library/react';
// component
import App from './App';

test('renders slideshow-app', () => {
  // Arrange
  const buttonLabel = "Restart";
  // Action
  render(<App />);
  const linkElement = screen.getByText(buttonLabel);
  // Assert
  expect(linkElement).toBeInTheDocument();
});
