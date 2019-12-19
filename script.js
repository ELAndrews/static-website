// npm init is use to initalise npm project and give a package.json.
// --y flag will answer yes to all default answers
// npm install live-server -D the -D makes it a dev dependency

//ADDITIONAL COMMAND LINE WORK BELOW WITH REPLY
//(base) Emmas-MBP:StaticProject emma$ npx eslint --init
// npx: installed 123 in 7.522s
// ? How would you like to use ESLint? To check syntax and find problems
// ? What type of modules does your project use? JavaScript modules (import/
// export)
// ? Which framework does your project use? React
// ? Does your project use TypeScript? No
// ? Where does your code run? Browser
// ? What format do you want your config file to be in? JavaScript
// Local ESLint installation not found.
// The config that you've selected requires the following dependencies:

// eslint-plugin-react@latest eslint@latest
// ? Would you like to install them now with npm? Yes
// Installing eslint-plugin-react@latest, eslint@latest
// npm WARN staticproject@1.0.0 No description

// + eslint@6.7.2
// + eslint-plugin-react@7.17.0
// added 146 packages from 94 contributors and audited 2616 packages in 13.402s
// found 0 vulnerabilities

// Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .
// Successfully created .eslintrc.js file in /Users/emma/Documents/Coding/Lambda/WebApplicationsII/StaticProject
// ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.

// As soon as you have an npm project you require a build phase and public folder otherwise ziet will throw error
// the public folder needs to hold the final JS file which has been concatonated (webpack)

console.log(`this is working`);
const greet = document.querySelector(".hello");
greet.textContent = "Script is AWESOME!";

const foo = "bar";
