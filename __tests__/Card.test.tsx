import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FaBeer } from 'react-icons/fa';
import Card from '../app/Components/Cards';

describe('Card', () => {
  //Defining what should be rendered on thw cards...
  it('renders correctly with given props', () => {
    const title = 'title';
    const text = 'text';
    const Icon = FaBeer;
   
    //Rendering the card component...
    render(<Card icon={Icon} title={title} text={text} />);

    //Getting the card title role...
    const titleElement = screen.getByRole('heading');

    //Getting the card descriptions role...
    const paragraphElement = screen.getByRole('paragraph');

    //Getting the card icons role...
    const iconsElement = screen.getByRole('icons');

    //Expecting the card roles properties display on the screen when rendered...
    expect(titleElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
    expect(iconsElement).toBeInTheDocument();
  });
});



