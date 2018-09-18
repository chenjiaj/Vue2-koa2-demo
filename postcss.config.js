/**
 * Created by chenjiajun on 2018/9/13.
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'defaults',
        'not ie < 11',
        'last 2 versions',
        '> 1%',
        'iOS 7',
        'last 3 iOS versions'
      ]
    }),
    require('postcss-pxtorem')({
      rootValue: 75,
      propList: ['*']
    })
  ]
};
