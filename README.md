Testing these things out

Used as a reference:
https://github.com/glin/shiny-react-example/tree/main

starting up:
```
yarn install
yarn run webpack --mode=development
```
then
```
yarn run webpack-dev-server --mode=development
```
and on the R side
```
shiny::runApp()
```

got to make sure the port after starting `runApp()` aligns with the
`devServer` section of `webpack.config.js`
