import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from "../Landing_page/home/Hero.js";
import '@testing-library/jest-dom';


// Test suite
describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "Media/homeHero.png");
    });
});
