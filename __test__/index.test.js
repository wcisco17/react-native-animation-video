import React from 'react';
import renderer from 'react-test-renderer';
import 'https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz'
import RNAnimationVideo from '..';
import 'react-native';
test('Render Component correctly', () => {
    const name = "Hello World!";
    const tree = renderer.create(
        <RNAnimationVideo
            name={name}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});