const React = require('react');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const EmptyComponent = require('../index');

Enzyme.configure({adapter: new Adapter()});

test('EmptyComponent should render null', () => {
    const empty = Enzyme.shallow(<EmptyComponent />);
    expect(empty.type()).toBe(null);
});
