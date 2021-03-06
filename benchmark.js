/*!
 * byte - benchmark.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var Benchmark = require('benchmark');
var ByteBuffer = require('./');

var suite = new Benchmark.Suite();

var putBytes = ByteBuffer.allocate(1);
var putCharBytes = ByteBuffer.allocate(1);
var putShortBytes = ByteBuffer.allocate(2);
var putIntBytes = ByteBuffer.allocate(4);
var putFloatBytes = ByteBuffer.allocate(4);
var putDoubleBytes = ByteBuffer.allocate(8);
var putLongBytes = ByteBuffer.allocate(8);

suite
.add('put()      ', function () {
  putBytes.put(0, 1);
})
.add('putChar()  ', function () {
  putCharBytes.putChar(0, 'a');
})
.add('putShort() ', function () {
  putShortBytes.putShort(0, 1);
})
.add('putInt()   ', function () {
  putIntBytes.putInt(0, 1);
})
.add('putFloat() ', function () {
  putFloatBytes.putFloat(0, 1);
})
.add('putDouble()', function () {
  putDoubleBytes.putDouble(0, 1);
})
.add('putLong()  ', function () {
  putLongBytes.putLong(0, 1);
})

// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('[%s] Fastest is "%s"', Date(), this.filter('fastest').pluck('name'));
})
.run({ async: false });
