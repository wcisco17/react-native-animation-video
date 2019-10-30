import PropTypes from 'prop-types';
import * as React from 'react';
import { Text, View } from 'react-native';

class RNAnimationVideo extends React.PureComponent {
    static propTypes() {
        return {
            name: PropTypes.string.isRequired
        }
    }
    render() {
        const { name } = this.props;
        return (
            <View>
                <Text>{name}</Text>
            </View>
        )
    }
}

RNAnimationVideo.propTypes = {
    name: PropTypes.string,
}

export default RNAnimationVideo;