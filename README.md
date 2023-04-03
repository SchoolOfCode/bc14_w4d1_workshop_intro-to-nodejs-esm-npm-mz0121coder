# Intro to Node.js

Node.js gives us the power to run JavaScript out of the browser. Running JavaScript outside of the browser means we'll now able to do some things which we weren't able to do before (for example, directly read/write files), but we also lose some things which we were able to do effortlessly in the browser (for example, there's no built-in DOM that comes with Node.js).

Make sure you have the relevant version of Node.js for your operating system installed. Having at least the current LTS version is recommended.

## Task 1: Checking your setup

First of all, let's check our tools are set up correctly. Open your terminal and enter the following code to check your Node.js version:

```bash
node -v
```

and to check your npm version:

```bash
npm -v
```

You should see some information about the versions that you've got installed on your machine, which means that they're all set up and ready to use. If you see some errors, it may mean your installation hasn't worked properly. Have a google to find out what might have gone wrong.

## Task 2: Setting up a new Node.js project

We don't have an existing Node.js project (in other words, there's no `package.json` already in the repo). To quickly initialise a Node.js project with default options, we can use the `npm init -y` command.

_🧪 At the root level of this repo you should now have a `package.json`. Feel free to examine the contents of the `package.json` file. It basically contains information about the project and its dependencies._

_❗ Note that we can skip this initialisation step if there's already a `package.json`._

## Task 3: Adding a JavaScript file

Let's add our first JavaScript file to the project. Create a file named `hello.js` containing the following:

```js
console.log("Hello from Node.js?");
```

_🧪 For feedback on this step, run `node hello.js` in your terminal, which should run Node.js and pass it the path/location of the JavaScript file that needs to be run. Eventually you should see the `Hello from Node.js?` text appear in your terminal._

_❗ Note that this code assumed that `console` is globally available/present (like it is in the browser). Whilst `console` is available globally in Node.js, in general we shouldn't assume that the things we've gotten used to using in the browser are also available in Node.js._

## Task 4: Adding a learning journal

Say we're building a Node.js project to help us keep track of things we've learned or would like to learn (they don't have to be related to tech).

Create a file named `things_to_learn.js` within this repo. Within it, declare a variable named `roadmap` and initialise it as an array of objects. Each object can have a `topic`, `haveLearned` and `why` property.

Here's a quick example to give you an idea but hopefully you can make your own list:

```js
const roadmap = [
  {
    topic: "Array methods in JavaScript",
    haveLearned: false,
    why: "Useful for simplifying common operations involving arrays",
  },
  {
    topic: "Cooking the perfect jacket potato",
    haveLearned: true,
    why: "I refuse to elaborate",
  },
  {
    topic: "Centering an element vertically and horizontally with CSS",
    haveLearned: false,
    why: "Helps to build effective, aesthetically pleasing UIs",
  },
  {
    topic: "Cloud computing e.g. AWS",
    haveLearned: false,
    why: "Used by lots of organisations to build reliable, highly available solutions",
  },
];
```

_🧪 How would you check this step before proceeding? You can temporarily add `console.log(roadmap);` to `things_to_learn.js` and then run `node things_to_learn.js` in your terminal. Eventually you should see the list printed in your terminal._

## Task 5: Exporting with modules

Modules are a great way for us to organise our project into shorter, manageable files -- and helps us avoid ending up with one long, overwhelming file. Ideally, each module can have its own responsibility. For example, if we were building a simple quiz app that fetches questions from an API, we might choose to organise our project something like:

- `trivia-api.js` contains the logic responsible for fetching questions from the API
- `game.js` contains the logic responsible for keeping track of game state (e.g. our score, which question we're on, etc)
- `ui.js` contains the logic responsible for presenting things to the user and getting input from the user

This is just a contrived example. Even if you and your team would organise or name things differently, the point is keeping our code organised makes it easier to work with.

Although it might seem unnecessary in our case (since `things_to_learn.js` doesn't contain a lot of code to begin with), let's practice using modules.

To let Node.js know we want to use ESM (the current module system), open the `package.json` file and add the following key-value pair to the outermost object (remember that in JSON, key-value pairs in objects are separated by commas).

```json
  "type": "module"
```

Now that we've enabled ESM within this Node.js project, let's try and use `roadmap` (from `things_to_learn.js`) in another file/module. To do this, we have to explicitly "export" `roadmap` by placing `export` before the variable declaration. In `things_to_learn.js`, you should have something like:

```js
export const roadmap = [
  // Whatever you've written here
];
```

_🧪 Again, to check things are still working, you can temporarily add `console.log(roadmap);` to `things_to_learn.js` and then run `node things_to_learn.js` in your terminal. Eventually you should see the list printed in your terminal._

## Task 6: Importing with modules

Now that we've "exposed" `roadmap` and made it available to other modules, let's create a new file named `display.js`, import `roadmap` (from `things_to_learn.js`) and then display the array in the terminal.

```js
import { roadmap } from "./things_to_learn.js";

console.table(roadmap); // Similar to console.log, but prints information as a table.
```

_🧪 To check the code works, have Node.js run the `display.js` file. Try to recall how we ran a file with Node.js earlier._

## Task 7: Installing third party packages

JavaScript projects often use third party packages/modules to simplify or speed up development. These are essentially modules/files that other JavaScript developers have written and then shared with the JavaScript community. We can use https://www.npmjs.com/ to browse and search for third party packages.

We'll be using lots of different third party packages (for testing, building UIs, writing servers, etc.) on the course. For now, let's install a package that we'll use to write our `roadmap` to a JSON file.

Visit https://www.npmjs.com/package/write-json-file if you're interested in details about the package we're using.

For now, first create a `.gitignore` file and add the following to it:

```
node_modules
```

Then, enter the following in your terminal to install this package:

```sh
npm i write-json-file
```

_🧪 You may see a lot of information appear in the terminal, but eventually you should see a message saying packages have been added._

_❗ We don't need to commit and push the contents of the `node_modules` folder to GitHub, so we've added it to a `.gitignore` file. This is mainly because the `node_modules` folder, whilst important when we want to run our code, can be recreated from the `package.json` via `npm i`._

## Task 8: Importing and using third party packages

Create a file named `save_as_json.js` and import the `roadmap` (from `things_to_learn.js`) into it.

Use the documentation (https://www.npmjs.com/package/write-json-file) to figure out how we can complete the following:

- import the `write-json-file` package into `save_as_json.js`
- write the `roadmap` to a JSON file named `roadmap.json`

<details>
<summary>Have a go yourself first, but once you're done/stuck, click this for an example.
</summary>

```js
import { writeJsonFile } from "write-json-file";
import { roadmap } from "./roadmap.js";

await writeJsonFile("roadmap.json", roadmap);
```

</details>

_🧪 To check if the code works, run `save_as_json.js` with Node.js. Try to recall how we ran a file with Node.js earlier._

## Task 9: Adding an NPM script

In Node.js projects, NPM scripts are often used to create handy "shortcuts" for the command line. These shortcuts can simplify entering important/repetitive commands, as well automating tasks and running scripts.

Let's set up an NPM script which will let us run the `save_as_json.js`. In the `package.json` file, within the `scripts` object, add the following key-value pair:

```json
"save": "node save_as_json.js"
```

_🧪 To check if the shortcut has been set up correctly, delete `roadmap.json` (if it already exists) and then enter `npm run save` in your terminal. You should see it run `save_as_json.js` and a new `roadmap.json` should be created._

_❗ It may seem unnecessary to set up a shortcut here as `node save_as_json.js` isn't that long to begin with. However, as we begin to delve deeper into the JavaScript ecosystem, you'll find certain packages require longer, more complex commands -- and in those cases, NPM scripts can be quite convenient._

## Task 10: Optional

🌟 There are all sorts of handy packages on the NPM website that you can use in your code. Browse and search to check out which are popular, and what they do.

🌟 If you're still hungry for more NPM practice, check out [this list](https://github.com/parro-it/awesome-micro-npm-packages) of small, easy-to-manage NPM packages and experiment! 🧪

🌟 Dig further into Node by working through [NodeSchool](https://nodeschool.io/)'s [LearnYouNode](https://github.com/workshopper/learnyounode) and [How to NPM](https://github.com/workshopper/how-to-npm) interactive courses in your pair.
