// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

process.env.TZ = 'UTC';
const { expect } = require('chai');
const supertest = require('supertest');


global.expect = expect;
global.supertest = supertest;