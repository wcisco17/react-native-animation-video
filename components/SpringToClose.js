import { BlurView } from 'expo-blur';
import PropTypes from 'prop-types';
import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { clockRunning, Interactable } from 'react-native-redash';

import { SpringValue } from './Spring';

const {
    Value, interpolate, Extrapolate, cond, and, eq, or,
} = Animated;

export default class SwipeToClose extends React.PureComponent {
    static propTypes() {
        return {
            y: typeof Value,
            opacity: typeof Value,
            scale: SpringValue,
            children: PropTypes.any.isRequired,
        }
    }

    render() {
        const {
            children,
            y,
            opacity,
            scale: s,
        } = this.props;
        const scale = cond(
            or(and(clockRunning(s.clock), eq(s.hasSprung, 1)), eq(s.hasSprungBack, 1)),
            s.value,
            interpolate(y, {
                inputRange: [0, 100],
                outputRange: [1, 0.75],
                extrapolate: Extrapolate.CLAMP,
            }),
        );
        return (
            <View style={StyleSheet.absoluteFill}>

                <Animated.View
                    style={[StyleSheet.absoluteFill, { opacity }]}>
                    <BlurView
                        tint="default"
                        intensity={100}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
                <StatusBar barStyle="light-content" />
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, transform: [{ scale }], }}>
                    {children}
                </Animated.View>
                <Interactable
                    style={StyleSheet.absoluteFill}
                    snapPoints={[{ y: 0 }, { y: 100 }]}
                    animatedValueY={y}
                    verticalOnly
                />
            </View>
        );
    }
};

SwipeToClose.propTypes = {
    y: typeof Value,
    opacity: typeof Value,
    scale: SpringValue,
    children: PropTypes.any
}