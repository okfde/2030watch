# 2030Watch


## Local setup

``` bash

# Install dependencies
$ npm install

# Generate data files and move them into the data folder
$ node data/load-data.js && mv indiNav.json sdgs.json indicators.json ./data/

# Serve with hot reload at localhost:3010
$ npm run dev

```


## Deployment

### Generate the dist folder for publishing with GitHub Pages

``` bash

$ npm run generate:gh-pages

```

### Move and push the generated files and folders to the gh-pages branch
