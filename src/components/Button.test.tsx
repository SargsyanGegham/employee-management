import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  // Test 1: Basic rendering
  test('renders button with children text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  // Test 2: Default props
  test('has default props applied', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText('Default Button');
    
    expect(button).toHaveClass('MuiButton-contained');
    expect(button).toHaveClass('MuiButton-containedPrimary');
    expect(button).toHaveClass('MuiButton-sizeMedium');
  });

  // Test 3: Custom variant
  test('applies outline variant correctly', () => {
    render(<Button variant="outlined">Outline Button</Button>);
    const button = screen.getByText('Outline Button');
    
    expect(button).toHaveClass('MuiButton-outlined');
    expect(button).toHaveClass('MuiButton-outlinedPrimary');
  });

  // Test 4: Custom color
  test('applies secondary color correctly', () => {
    render(<Button color="secondary">Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');
    
    expect(button).toHaveClass('MuiButton-containedSecondary');
  });

  // Test 5: Custom size
  test('applies small size correctly', () => {
    render(<Button size="small">Small Button</Button>);
    const button = screen.getByText('Small Button');
    
    expect(button).toHaveClass('MuiButton-sizeSmall');
  });

  // Test 6: Click handler
  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    
    const button = screen.getByText('Clickable Button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 7: Disabled state
  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveClass('Mui-disabled');
  });

  // Test 8: Full width button
  test('applies full width when fullWidth prop is true', () => {
    render(<Button fullWidth>Full Width Button</Button>);
    const button = screen.getByText('Full Width Button');
    
    expect(button).toHaveClass('MuiButton-fullWidth');
  });

  // Test 9: Button with start icon
  test('renders button with start icon', () => {
    render(
      <Button startIcon={<span data-testid="start-icon">🔍</span>}>
        Search
      </Button>
    );
    
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  // Test 10: Button with end icon
  test('renders button with end icon', () => {
    render(
      <Button endIcon={<span data-testid="end-icon">→</span>}>
        Next
      </Button>
    );
    
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  // Test 11: Button as different HTML element (via component prop)
  test('renders as different component when component prop is used', () => {
    render(
      <Button component="a" href="https://example.com">
        Link Button
      </Button>
    );
    
    const linkButton = screen.getByText('Link Button');
    expect(linkButton.tagName).toBe('A');
    expect(linkButton).toHaveAttribute('href', 'https://example.com');
  });

  // Test 12: Custom className
  test('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByText('Custom Button');
    
    expect(button).toHaveClass('custom-class');
  });

  // Test 13: Loading state (if using MUI loading prop)
  test('shows loading indicator when loading prop is true', () => {
    render(<Button loading>Loading Button</Button>);
    
    // MUI adds a loading indicator and hides the children
    const button = screen.getByRole('button');
    expect(button).toHaveClass('Mui-loading');
    expect(screen.queryByText('Loading Button')).not.toBeVisible();
  });

  // Test 14: Button type attribute
  test('has correct type attribute', () => {
    render(<Button type="submit">Submit Button</Button>);
    const button = screen.getByText('Submit Button');
    
    expect(button).toHaveAttribute('type', 'submit');
  });

  // Test 15: Accessibility - button has proper role
  test('has button role', () => {
    render(<Button>Accessible Button</Button>);
    const button = screen.getByRole('button', { name: 'Accessible Button' });
    
    expect(button).toBeInTheDocument();
  });

  // Test 16: Multiple clicks
  test('handles multiple clicks correctly', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Multiple</Button>);
    
    const button = screen.getByText('Click Multiple');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  // Test 17: Does not call onClick when disabled
  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled Button</Button>);
    
    const button = screen.getByText('Disabled Button');
    fireEvent.click(button);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  // Test 18: Spread additional props
  test('spreads additional props to the underlying button', () => {
    render(
      <Button 
        data-testid="custom-button"
        aria-label="custom label"
        id="button-id"
      >
        Props Button
      </Button>
    );
    
    const button = screen.getByTestId('custom-button');
    expect(button).toHaveAttribute('aria-label', 'custom label');
    expect(button).toHaveAttribute('id', 'button-id');
  });
});