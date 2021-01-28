# DEPUTY User Hierarchy

## Prerequites

Nodejs, npm, jest are required. Installing nodejs, npm
[Installing node via package manager](https://nodejs.org/en/download/package-manager/)
or
[Download a pre-built installer](https://nodejs.org/en/download/)

```
    node: "10.16.0"
    npm: "6.14.11"
```

After installing nodejs and npm. Run following command

```
    npm install
```

to install dependencies.

## Start

Run test

```
    npm test
```

Run code in command line to see the result.

```
    npm start
```

## Project Structures

- Source code is stored at src folder
- Code is organized by functions related to domain models
    1. All functions related to User will be stored in utils/User.js
    2. All functions related to Role will be stored in utils/Role.js
    3. All general functions (not related to specific domain) will be stored in Util.js
- index.js is entry file and contain sample data.
- All test files will be stored in __test__ folder and have .test at end of file name
