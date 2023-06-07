const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  base: 'https://github.com/SCBattisti/socket-client-v2/',
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
