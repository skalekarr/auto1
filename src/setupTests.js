// import {
//     configure
// } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
// import 'jest-enzyme';
// const localStorageMock = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     removeItem: jest.fn(),
//     clear: jest.fn(),
// };
// global.localStorage = localStorageMock;

// configure({
//     adapter: new Adapter()
// });
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })