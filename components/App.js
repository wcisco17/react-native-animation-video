import Constants from 'expo-constants';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Dimensions, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';

import AppThumbnail from './AppThumbnail';

const { Value, cond, eq } = Animated;

const { width, height } = Dimensions.get("window");
const offset = (v = 0) => (Platform.OS === "android" ? (v + Constants.statusBarHeight) : v);
const measure = async (ref) =>
    new Promise(resolve => ref.measureInWindow((x, y, width, height) =>
        resolve({
            x, y: offset(y), width, height,
        })));

export default class App extends React.PureComponent {

    static propTypes() {
        return {
            app: {
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                views: PropTypes.string.isRequired,
                businessTitle: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired,
                source: PropTypes.string.isRequired,
                videoUrl: PropTypes.string.isRequired,
            },
            open: PropTypes.func.isRequired,
            activeAppId: typeof Animated.Value,
            isIcon: PropTypes.bool.isRequired,
        }
    }

    container = React.createRef();

    startTransition = async () => {
        const { app, open } = this.props;
        const position = await measure(this.container.current.getNode());
        open(app, position);
    };

    render() {
        const { app, activeAppId, isIcon } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.startTransition}>
                <Animated.View
                    ref={this.container}
                    style={[styles.container, { opacity: cond(eq(activeAppId, app.id), 0, 1) }]}
                >
                    <AppThumbnail
                        {...{ app }}
                        shouldPlay={false}
                        showOverlay={true}
                        isIcon={isIcon}
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 32,
        height: height / 2,
        alignSelf: "center",
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});

App.propTypes = {
    app: {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        views: PropTypes.string.isRequired,
        businessTitle: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        source: PropTypes.string.isRequired,
        videoUrl: PropTypes.string.isRequired,
    },
    open: PropTypes.func.isRequired,
    activeAppId: typeof Animated.Value,
    isIcon: PropTypes.bool.isRequired,
}