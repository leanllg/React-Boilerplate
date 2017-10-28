# React-Boilerplate
React boilerplate contains redux, react-router v4 and so on

## File Structure
```
React-Biolerplate\
  build\
  config\
  public\
  scripts\
  .storybook\
    config.js
    webpack.config.js
    addons.js
  src\
    actions\
      index.js
    components\
      Commons\
        styles\
          a.css
        images\
          a.jpg
         Footer\
           index.js
      Home\
        images\
        index.js
        index.css
    containers\
      Home\
        index.js
      DevTools.js
    reducers\
      index.js
      selectors.js
    routes\
      routes.dev.js
      index.js
      routes.prod.js
    store\
      configureStore.dev.js
      configureStore.js
      configureStore.prod.js
    utils\
      middlewares\
        index.js
      sagas\
        index.js
  stories\
    index.js
  .gitignore
  LICENSE
  README.md
  package.json
  yarn.lock
```



## About

This is based on 'create-react-app'. Redux, React-router v4 and redux-devtools are enabled
. What's more, react-hot-loader works well on it.

## Todo

Add server rendering.

## License
MIT © [LLGZONE](https://github.com/LLGZONE)