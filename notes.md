### React.js

### Starting a React Project

-`npm install`
-`npm init`
-`npm install react react-dom —save`
-`npm install babel-loader babel-core babel-preset-es2015 babel-preset-react`
-requrires installation of web pack and babel
  -`npm install babel webpack webpack-dev-server -g`
-`webpack.config.js`
  -compile JS/JSX, launches development server

-React.createElement can only return one node
  - This will not work:
    </div></div>
    <span>Hello World</span>
  -But this will:
    <div>
      <span>Hello World</span>
    </div>

