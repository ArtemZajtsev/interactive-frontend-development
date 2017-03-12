/**
 * Created by minhi_000 on 12.03.2017.
 */
const chai = require('chai');
global.expect = chai.expect;

require('babel-register')({
    babelrc: false,
    presets: ['es2015'],
    plugins: ['transform-object-rest-spread']
});
