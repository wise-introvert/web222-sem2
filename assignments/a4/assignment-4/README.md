# Assignment 5 and 6 Instructions

NOTE: this assignment combines Assignment 5 and 6 into one, and is 2x the marks.

## Introduction

Please see detailed instructions in the comments within src/index.html and src/contact.html

Due Date: Friday April 12th by Midnight.

To submit your assignment, you must successfully run the "npm run prepare-submission"
build script discussed below.  Please read all of the following information
carefully, and don't skip any steps.

The following setup is meant to give you some experience working with
command-line build environments, automated testing, and validation for
web projects.

## Setup

Install all the necessary dependencies using the npm command (installed with node):

npm install

This should download and save all the necessary files to a folder named
node_modules in the current directory.

If you have trouble getting "npm install" to work:

* Did you install node.js?
* If you type "node --version" in your terminal, does it print the version?
* Are you in the right directory (you must cd into the correct directory)

If you need help, ask your classmates or talk to your professor.

## Writing your code

All of your HTML, CSS, and JavaScript files should be placed in src/.

The build scripts discussed below all assume your files are located there.

## Using Build Scripts

There are a number of build scripts you can run to help you check, validate, and
use your files. All of the scripts are run using the following command format

"npm run script-name":

1. To start a web server so you can browse all the files in Assignment6/*:

    npm run server

    You can now open the URL printed in your console. Use CTRL+C to stop the server 

2. To properly auto-format your HTML, CSS, and JavaScript using https://prettier.io: 

    npm run prettier

    This will reformat and rewrite all the .html, .css, and .js files in Assigment6/

3. To check your JavaScript files for errors using https://eslint.org/:

    npm run eslint

    If you're not sure what an error means, look at the rule name in
    https://eslint.org/docs/rules/

4. To check your CSS files for errors using https://stylelint.io/:

    npm run stylelint

    If you're not sure what an error means, look at the rule name in
    https://stylelint.io/user-guide/rules/

5. To check your HTML for errors using http://html5.validator.nu:

    npm run validate

6. To check your HTML, CSS, and JavaScript all at once (run 3, 4, 5 together):

    npm run check

7. To run steps 2-6 above one after another, and prepare your code for submission:

    npm run prepare-submission

   You can now upload the assignment5-6.zip file to Blackboard.
