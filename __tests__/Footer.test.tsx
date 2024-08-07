import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../app/Components/Footer';

describe('Footer', () => {
  //Defining text the h2 tag with the role of "banner" should contain...
  it('should contain the text "Chatter+" inside an h2 tag', () => {
    
    //Rendering the footer component...
    render(<Footer />);
     
    //Check if the h2 tag has a "banner role attribute..."
    const headingElement = screen.getByRole('banner');
    
  });
});
