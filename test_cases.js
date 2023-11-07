const assert = require("assert");
const test = require("node:test");
const testTAF = require("./script.js");

// import pkg from "./script.js";

// const { testTAF } = pkg;

test(` It shoud passed candidade [INPUT]:{
        distance: 25000;
        time: 715;
        gender: "male";
        pushUps: 40;
        abs: 35;
    } `, async () => {
  const response = await testTAF(25000, 715, "male", 40, 35);

  assert.strictEqual(response, true);
});

test(` It shoud passed candidade [INPUT]:{
    distance: 24000;
    time: 800;
    gender: "female";
    pushUps: 35;
    abs: 30;
} `, async () => {
  const response = await testTAF(24000, 800, "female", 35, 30);

  assert.strictEqual(response, true);
});

test(` It shouldn't passed candidade [INPUT]:{
  distance: 24000;
  time: 900;
  gender: "female";
  pushUps: 19;
  abs: 30;
} `, async () => {
  const response = await testTAF(24000, 900, "female", 19, 30);

  assert.strictEqual(response, false);
});

test(` It shouldn't passed candidade [INPUT]:{
  distance: 24000;
  time: 900;
  gender: "male";
  pushUps: 19;
  abs: 30;
} `, async () => {
  const response = await testTAF(24000, 900, "male", 19, 30);

  assert.strictEqual(response, false);
});

test(` It shouldn't passed candidade [INPUT]:{
  distance: 24000;
  time: 700;
  gender: "male";
  pushUps: 35;
  abs: 30;
} `, async () => {
  const response = await testTAF(24000, 700, "male", 35, 30);

  assert.strictEqual(response, false);
});

test(` It should passed candidade [INPUT]:{
  distance: 24000;
  time: 700;
  gender: "male";
  pushUps: 40;
  abs: 40;
} `, async () => {
  const response = await testTAF(24000, 700, "male", 40, 40);

  assert.strictEqual(response, true);
});

test(` It should passed candidade [INPUT]:{
  distance: 24000;
  time: 810;
  gender: "female";
  pushUps: 30;
  abs: 20;
} `, async () => {
  const response = await testTAF(24000, 810, "female", 20, 30);

  assert.strictEqual(response, true);
});

test(` It shouldn't passed candidade [INPUT]:{
  distance: 24000;
  time: 810;
  gender: "male";
  pushUps: 30;
  abs: 20;
} `, async () => {
  const response = await testTAF(24000, 810, "male", 20, 30);

  assert.strictEqual(response, false);
});

test(` It shouldn't passed candidade [INPUT]:{
  distance: 24000;
  time: 810;
  gender: "female";
  pushUps: 29;
  abs: 20;
} `, async () => {
  const response = await testTAF(24000, 810, "male", 29, 30);

  assert.strictEqual(response, false);
});

test(`  It shouldn't passed candidade [INPUT]:{
  distance: 20000;
  time: 810;
  gender: "female";
  pushUps: 29;
  abs: 25;
} `, async () => {
  const response = await testTAF(20000, 810, "male", 29, 25);

  assert.strictEqual(response, false);
});

// testTAF(distance, time, gender, pushUps, abs)
