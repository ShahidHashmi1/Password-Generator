# <Password-Generator>

## Password Generator

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock Up](#mock-up)
- [Submission](#submission)
- [Credits](#credits)
- [License](#license)

## Description

<ul>
<li>
The motivation for this project was to create an easy UI platform where users can generate a random password with specified perameters (special characters, uppercase letters, lowercase letters, and/ or numbers). 
</li>
<li>
The goal here was to make a nice looking page with very simple prompts, easy-to-read styling, and ease of use for the end-user.
</li>
<li>
This code can be modified to meet other perameters, but the main constants are that the password must be between 8 and 128 characters AND contain at least one of the specified criteria for the actual characters generated. 
</li>
<li>
It is an excellent baseline for providing non-bias and completely randomly generated passwords that will not be easy to replicate or guess!
</li>
</ul>

## Installation

<ol>
<li>
In order to begin this project, we must first have a code viewer - such as Visual Studio Code (VSCode).
</li>
<li>
Since we are relying heavily on the javascript here, it is important that we have the appropriate html code with proper IDs and classes labelled so that our javascript can funtion properly in use and in console.  
</li>
<li>
Periodically making sure the project's updates and changes look correct in a live broswer is very important as well. Having a browser open to see the updates happening in live-time will allow you to receive a sort of visual feedback to tell what needs to be done next - outside of solely relying on what the code looks like.
</li>
</ol>

## USER STORY

AS AN employee with access to sensitive data

<p>I WANT to randomly generate a password that meets certain criteria</p>
<p>SO THAT I can create a strong password that provides greater security</p>

## ACCEPTANCE CRITERIA

GIVEN I need a new, secure password

<p>WHEN I click the button to generate a password</p>
<p>THEN I am presented with a series of prompts for password criteria</p>
<p>WHEN prompted for password criteria</p>
<p>THEN I select which criteria to include in the password</p>
<p>WHEN prompted for the length of the password</p>
<p>THEN I choose a length of at least 8 characters and no more than 128 characters</p>
<p>WHEN asked for character types to include in the password</p>
<p>THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters</p>
<p>WHEN I answer each prompt</p>
<p>THEN my input should be validated and at least one character type should be selected</p>
<p>WHEN all prompts are answered</p>
<p>THEN a password is generated that matches the selected criteria</p>
<p>WHEN the password is generated</p>
<p>THEN the password is either displayed in an alert or written to the page</p>

## MOCK UP

![Password Generator Webpage](./images/mockupimg.jpg)

## SUBMISSION

The fully-deployed website for this password generator can be found through the following GitHub Pages link:

https://shahidhashmi1.github...

The associated html code, css stylesheet, and javascript for this assignment can be found at the following GitHub repository link:

https://github.com/ShahidHashmi1...

## Credits

The collaborators on this project included my tutor, Sabrina Hanson, and my TA, Michael Kotte.

The resources for this vary across different platforms. I used explored various methods of populating an empty array where the user-selected criteria would fit, but ultimately landed on concatenation as the methodology. That inspiration came from sites like [Hostinger-Tutorials][2] and [Alvarotrigo][3]. Lastly and as always, [Youtube][4] was a great resource for me personally when having issues with my flex boxes doing what they needed to be doing.

If this text is not readable, please refer to the GitHub repository link I have provided above that will outline the exact URLs for these references.

[1]: https://www.w3schools.com/js/js_loop_for.asp "W3 Schools"

[2]:
[3]:
[4]: https://www.youtube.com/watch?v=NHg6jQajaMs "Youtube"

https://stackoverflow.blog/2019/09/12/practical-ways-to-write-better-javascript/
https://stackoverflow.com/questions/1288095/append-to-string-variable
https://javascript.plainenglish.io/three-ways-to-merge-arrays-in-javascript-27cef85fe67b concat
https://www.w3schools.com/jsref/jsref_concat_array.asp concat
https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event
https://www.codegrepper.com/code-examples/javascript/copy+button+html
https://dev.to/michaelburrows/copy-text-to-the-system-clipboard-on-click-with-javascript-1c0k
https://codepen.io/shaikmaqsood/pen/XmydxJ

## License

There are no licensing requirements.
