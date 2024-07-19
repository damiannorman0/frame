#!/usr/bin/env node
const zipdir = require('zip-dir');
const path = require('path');

(async () => {
  const src = __dirname
  const dest = path.join(__dirname, 'frameio_submission.zip')

  // Zip directory (without unecessary files)
  await zipdir(src, {
    saveTo: dest,
    filter(filepath){
      if (filepath.includes('node_modules')) return false
      if (filepath.includes('.next')) return false
      if (filepath.includes('.git')) return false
      if (filepath.includes('.tsbuildinfo')) return false
      return true
    }
  })
})()