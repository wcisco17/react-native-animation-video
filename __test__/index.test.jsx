import React from 'react';
import renderer from 'react-test-renderer';

import RNAnimationVideo from '..';

test('Render Component correctly', () => {
    const name = "Hello World!";
    const tree = renderer.create(
        <RNAnimationVideo
            name={name}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});