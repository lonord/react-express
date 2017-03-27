# react-express
A template of website using react.js(with webpack)+node(express)

### Directory
files/directories under root:

- **app.js**: express app entry
- **webpack.config.js**: webpack config file
- **package.json**: npm project config file
- **bin**: starting scripts
- **react-src**: react source directory
- **pages**: html pages
- **public**: website's virtual root directory
- **routes**: express router

### Usage
Debug mode: Run webpack compile with watching and source map generated, and start express server either
```shell
npm run debug
```

Release mode: Run webpack compile with compressed, and start express server either
```shell
npm start
```

Server only: Run express server only
```shell
npm run server
```

# License
MIT License