import React from 'react';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const HomePage = () => {
    const handlePrint = () => {
        const html = `
            <div>
                <h1>Quick Start</h1>
                <p> 
                 <strong>Welcome to the React documentation!</strong> This page will give you an introduction to the 80% of React concepts that you will use on a <em>daily basis</em>.
                  <a href="https://react.dev/learn">MDN</a>.
                  <div className="p-6 xl:p-8 pb-4 xl:pb-6 bg-card dark:bg-card-dark rounded-2xl shadow-inner-border dark:shadow-inner-border-dark text-base text-secondary dark:text-secondary-dark my-8">
                    <h3 className="mdx-heading text-primary dark:text-primary-dark mt-0 mb-3 leading-tight text-2xl font-display leading-9 text-primary dark:text-primary-dark font-bold my-6">
                         You will learn</h3>
                    <ul className="ms-6 my-3 list-disc">
                        <li className="leading-relaxed mb-1">How to create and nest components</li>
                        <li className="leading-relaxed mb-1">How to add markup and styles</li>
                        <li className="leading-relaxed mb-1">How to display data</li>
                        <li className="leading-relaxed mb-1">How to render conditions and lists</li>
                        <li className="leading-relaxed mb-1">
                        How to respond to events and update the screen
                        </li>
                        <li className="leading-relaxed mb-1">
                        How to share data between components
                        </li>
                    </ul>
                    </div>
                </p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxiFZo8hp7oqoftdM8UCkftr2ZDLY0C25LA&s" />
            </div>   
            <div className='center'>
                <h1>Creating and nesting components</h1>
                <p>
                    <u>React apps are made out of components.</u> A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.React components are JavaScript functions that return markup:
                <strong>Tutorial: Tic-Tac-Toe</strong>
                <p>
                    You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.
                </p>
                <h4>Your First Component</h4>
                <p>
                  <ul className="ms-6 my-3 list-disc">
                <li className="leading-relaxed mb-1">What a component is</li>
                <li className="leading-relaxed mb-1">
                    What role components play in a React application
                </li>
                <li className="leading-relaxed mb-1">
                    How to write your first React component
                </li>
                </ul>
                </p>
            </div>
        `;

        const ret = htmlToPdfmake(html, {
            imagesByReference: true,
            defaultStyles: {
                h1: { fontSize: 20, bold: true, color: 'red' },
                p: { fontSize: 12 },
            },
        });

        const documentDefinition = {
            content: ret.content,
            images: ret.images,
        };

        pdfMake.createPdf(documentDefinition).download();
    };

    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={handlePrint}>Print PDF</button>
        </div>
    );
};

export default HomePage;
