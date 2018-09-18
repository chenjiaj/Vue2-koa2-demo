/**
 * Author kid
 * Date 2018/9/11
 * Time 下午3:01
 */
const compress = require('compressing');
const fs = require('fs');
const rimraf = require('rimraf');
const pkgconf = require('./package');

const tgz = `pkg/${pkgconf.name}-${pkgconf.version}.tgz`;

fs.exists('pkg', (exists) => {
  if (!exists) {
    fs.mkdirSync('pkg');
  }
  (async () => {
    try {
      await compress.tgz.compressDir('build_temp/.', tgz);
      rimraf('build_temp', (e) => {
        if (!e) {
          console.log('rimraf temp, done');
        }
      });
    } catch (e) {
      console.log(e);
    }
  })();
});
