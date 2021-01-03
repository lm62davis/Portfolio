# Portfolio

WCCI Course Materials
MENU
Professional Portfolio with HTML and CSS

Overview
Create a portfolio site highlighting your work that can be shared with potential employers. Focus first on building a good structure, then later style and lay out with with CSS.

Skills Required
In order to deliver this webpage solution, you will need the following skills and knowledge.

HTML
CSS
CSS Grid
CSS Flexbox
We are looking for code written by you using these languages, using front-end libraries or frameworks like Bootstrap or Font Awesome is not allowed. If this saddens you, please take solace in the fact that once you learn CSS you won't need to use these types of libraries.

Tasks
First, set up your username.github.io site as per the instructions at https://pages.github.com.

Build the document structure
Create a main page (index.html) representing a professional portfolio, including the following:

an appropriate <header> element

a <nav> element linking to each of the sections

an <h1> element with your page title (there can be only one)

a <section> element for each of the following, each of which should contain an appropriate heading element:

About Me, consisting of:

brief biographical information
photo
contact information
links to your professional networking site profiles, including at least GitHub and LinkedIn
list of skills
Include whatever other information you consider pertinent.

Projects, consisting of at least three, each represented as an <article>

name of project, linked to GitHub repository or the repository/project's GitHub Pages
screenshot skills / technologies used
Don't worry that your available projects are limited now. You'll have time to increase the size of your portfolio.

an appropriate <footer> element

Lay out and style your portfolio
Assign ids/classes to sections/etc, then use css grid to lay out your page. Reference MDN and this tutorial to work out how to use grid: http://cssgridgarden.com/
To contain the elements of your grid, you will want to create a <div>, something like <div id="container">...</div>.
Create CSS rules to style page elements appropriately.
Using online resources
Any resources (images, etc) you use should be:

free for non-commercial use
copied to your repository and referenced there rather than via a uri pointing to another site
Tips
Section ids can be used to create anchors linking to those sections inside the page.
See the appropriate Mozilla Developer Network reference pages for guidance regarding tag usage:

<header>
<nav>
<section>
<article>
<footer>
Grading
You will be graded on:

Working Software
Mastery of HTML and CSS Concepts
Professional Branding
Clean Code
Three of the above areas must be PASSING for the overall project to be PASSING.

Working Software
This category is considered passing if all of the following are true:

The portfolio is deployed to the intended location.
The portfolio's resources all load in the browser.
The project has no misformed code.
Mastery of HTML and CSS Concepts
This category is considered passing if all of the following are true:

The HTML shows understanding of:

Tag opening and closing
Tag attributes
Using images
Creating Links
Using proper tag names

The CSS show understanding of:

Selectors
Styling rules
Layout tools, including Flexbox and Grid
Professional Branding
This category is considered passing if all of the following are true:

There is an About Me section that contains professional content and the following info:

brief biographical information
photo
contact information
links to your professional networking site profiles, including at least GitHub and LinkedIn
list of skills
There is a Projects section that contains three projects with the following info:

name of project, linked to GitHub repository or the repository/project's GitHub Pages
screenshot
skills / technologies used
Clean Code
This category is considered passing if all of the following are true:

Separate files content, styling, and layout.
HTML is clean:

Proper indentation.
Follows semantic HTML guidelines.
Class names are clear and make sense.
CSS is clean:

Proper indentation.
Use of variables for colors schema.
Syntactically correct.
© We Can Code IT 2020
///////////////////////////////////////////////////////
previous border -- border: 5px solid rgb(82, 34, 97);
h1 border -- width: fit-content;
purple border -- padding: 10px;
Me.jpg -- opacity="0.5"
a {
color: #ebe6eb;
background-color: #22315a;
transition: all 1s ease-out;
border-radius: 10px;
}
a:focus,
a:hover {
color: #22315a;
background-color: #ebe6c6;
border-radius: 10px;
}
