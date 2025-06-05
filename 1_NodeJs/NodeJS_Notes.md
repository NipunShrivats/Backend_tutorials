## Backend NodeJs

### A javaScript Runtime environment

1. Node Deals with server
2. JS Deals with Browser

### global

globalThis is a new feature introduced in ECMAScript 2020 (ES11) that provied a standard way to access the global object in any JS environmenty

### Package.json

1. It is a configuration file used in Node.js Projects.
2. it contains metadata about the project and information on project dependencies.
3. Go to your project folder and use "npm init" to initialize the project or to create package.json
4. Name, version,Description("name","version","description"):
   a. Specifies the name and version of the project.
   b. Helps uniquely identify and version the project.
5. Entry Point("main"):
   a. Specifies the main entry point file for the application.
   b. The file executed when the application starts.

### Nodemon

1. Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

2. nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

### Auto re-start without using nodemon.

use --> "node --watching app.js"

### What is npm?

1. npm is a popular package manager which comes bundled with Node.js.
2. It is a CLI tool used to install, update, and remove external packages.
3. You can also create your own package and publish it on npmjs.com registry.
4. Do not confuse npm CLI with npmjs.com, as it’s a registry where most of the packages of Node.js are saved.
5. There are alternative Node.js package managers registry like JSR, which we will discuss in future.

#### Fun facts:

1. npm shouldn’t be written in capitalized form unless you have everything as capital.
2. npm doesn’t stand for Node Package Manager even though many people refer to it as that. It is a recursive bacronymic abbreviation for "npm is not an acronym".

### npm Commands

1. Before following these commands, make sure you initialized your project.
2. npm install <package-name>
   Alternatively, you can use npm i
3. After installation, you will notice a "node_modules" folder and "package-lock.json" file.

   a. "node_modules" is what stores all the installed packages. It’s usually heavy, so make sure
   to include it in ".gitignore" so that it won’t get pushed on version control and avoid it
   while sharing with others.

   b. You will notice that there are some packages which you didn’t install, it’s because the
   package that you installed depend on those third-party packages.

   c. package-lock.json includes exact version of all packages that you install. It makes sure to
   prevent breaking changes in newer versions of package.

### Synchronous VS Asynchronous in Node Js

1. Synchronous Code
   a. Tasks are executed Sequentially. [also known as blocking tasks]
   b. Eash task blocks the next until it's completed.

2. Asynchronous Code
   a. Tasks don't block execution.
   b. Uses claabacks, promises, or async/await.
