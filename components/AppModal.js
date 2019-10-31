import PropTypes from 'prop-types';
import * as React from 'react';
import { Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import { clockRunning } from 'react-native-redash';

import AppThumbnail from './AppThumbnail';
import { createValue, spring, springBack } from './Spring';
import SwipeToClose from './SwipeToClose';

const {
    Value, cond, greaterThan, sub, greaterOrEq, round, add, divide, call, eq,
} = Animated;
export const { width: wWidth, height: wHeight } = Dimensions.get("window");
export const { height: globalHeight } = Dimensions.get('screen');

export default class AppModal extends React.PureComponent {
    static propTypes() {
        return {
            app: PropTypes.any.isRequired,
            position: PropTypes.func.isRequired,
            close: PropTypes.any.isRequired,
            isIcon: PropTypes.any.isRequired,
        }
    }

    render() {
        const {
            app,
            position,
            close,
            isIcon
        } = this.props

        const width = createValue(position.width);
        const height = createValue(position.height);
        const x = createValue(position.x);
        const y = createValue(position.y);
        const scale = createValue(1);
        const borderRadius = createValue(8);
        const opacity = createValue(0);
        const translationY = new Value(0);
        const shouldClose = greaterOrEq(round(translationY), 100);
        const p = {
            position: "absolute",
            width: width.value,
            height: wHeight,
            left: x.value,
            top: y.value,
            paddingTop: 45,
            paddingBottom: 45,
            paddingLeft: 25
        };
        return (
            <SwipeToClose y={(translationY)} opacity={opacity.value} {...{ scale }}>
                <Animated.Code>
                    {
                        () => cond(shouldClose,
                            [
                                springBack(width, wWidth, position.width),
                                springBack(height, wHeight, position.height),
                                springBack(x, 0, position.x),
                                springBack(y, 0, position.y),
                                springBack(borderRadius, 0, 8),
                                springBack(opacity, 1, 0),
                                springBack(scale, 0.75, 1),
                                cond(eq(clockRunning((scale.clock)), 0), call([], close)),
                            ], [
                                spring(width, position.width, wWidth),
                                spring(height, position.height, wHeight),
                                spring(x, position.x, 0),
                                spring(y, position.y, 0),
                                spring(borderRadius, 8, 0),
                                spring(opacity, 0, 1),
                            ])
                    }
                </Animated.Code>
                <Animated.View style={{ ...p, height: wHeight, }}>
                    <AppThumbnail
                        borderRadius={borderRadius.value}
                        {...{ app }}
                        shouldPlay={true}
                        showOverlay={false}
                        isIcon={isIcon}
                    />
                </Animated.View>
            </SwipeToClose>
        );
    }
};

AppModal.propTypes = {
    app: PropTypes.any.isRequired,
    position: PropTypes.func.isRequired,
    close: PropTypes.any.isRequired,
    isIcon: PropTypes.any.isRequired,
}