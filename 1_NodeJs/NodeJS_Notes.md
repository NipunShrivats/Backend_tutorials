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
