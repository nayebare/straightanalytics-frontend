## fieldcloud sysmonitoring react front-end 
## mn@fieldcloud.com 
## 21.08.2020


## Installation

``` bash
# clone the repo
$ git clone https://.git my-project

# go into app's directory
$ cd frontend

# install app's dependencies
$ npm install
```


### Basic usage

``` bash
# dev server  with hot reload at http://localhost:3000
$ npm start
```

Navigate to [http://localhost:3000](http://localhost:3000). The app will automatically reload if you change any of the source files.

### Build

Run `build` to build the project. The build artifacts will be stored in the `build/` directory.

```bash
# build for production with minification
$ npm run build
```

## What's included

app software file structuring:

```
fieldcloud #v1.0.0
├── public/          #static files
│   ├── assets/      #assets/image files go in here
│   └── index.html   #html template starting the app
│
├── src/             #project root
│   ├── containers/  #container source - handles and hold the partials side bars,footer and header
|   |── components/  #components # each component hold it class function and views
│   ├── scss/        #user scss/css source
│   ├── App.js       #main start of the application
│   ├── App.test.js  #test file for the framework
│   ├── index.js
│   ├── _nav.js      #sidebar config
│   └── routes.js    #routes config
│
└── package.json     #installed modules app modules
```

## Documentation

The documentation will be provided here


## Copyright and license

copyright 2020 fieldcloud


