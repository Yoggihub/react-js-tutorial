# React jS tutorial

# Usage
Switch to the branch you're interested in (branches = different stages in the series) and compare/ download the source code.

# Production dependencies
npm i react react-dom --save

# dev dependencies
npm i webpack webpack-dev-server babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 --save-dev

create a src folder
create a app folder in src folder
create a file in app folder called index.html its a entry point of the app


#commands
npm install
npm start

#issues 
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
 - configuration.module has an unknown property 'loaders'. These properties are valid:
   object { exprContextCritical?, exprContextRecursive?, exprContextRegExp?, exprContextRequest?, noParse?, rules?, defaultRules?, unknownContextCritical?, unknownContextRecursive?, unknownContextRegExp?, unknownContextRequest?, unsafeCache?, wrappedContextCritical?, wrappedContextRecursive?, wrappedContextRegExp?, strictExportPresence?, strictThisContextOnImports? }
   -> Options affecting the normal modules (`NormalModuleFactory`).

   First uninstall webpack

npm uninstall webpack --save-dev

followed by

npm install webpack@2.1.0-beta.22 --save-dev

or use specific versions
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"


#it works
check the command line for the console.log message Developer tools -> console -> it works :)


