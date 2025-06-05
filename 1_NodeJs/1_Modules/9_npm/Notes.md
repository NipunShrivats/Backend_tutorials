## What is npm?

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
