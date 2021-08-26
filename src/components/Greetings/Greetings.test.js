import { render,screen } from '@testing-library/react';
import Greetings from './Greetings';

test('Greetings page', () => {
    render(<Greetings />);
    const linkElement = screen.getByText("Hello World");
    expect(linkElement).toBeInTheDocument();
});