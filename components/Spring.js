import Animated from 'react-native-reanimated';
import { runSpring } from 'react-native-redash';

const {
    Value, Clock, cond, eq, stopClock, set, clockRunning,
} = Animated;

export const SpringValue = {
    value: typeof Value,
    clock: typeof Clock,
    hasSprung: typeof Value,
    hasSprungBack: typeof Value,
}

const springConfig = () => ({
    toValue: new Value(0),
    damping: 30,
    mass: 1,
    stiffness: 200,
    overshootClamping: false,
    restSpeedThreshold: 0.1,
    restDisplacementThreshold: 0.4,
});

export const createValue = (val = 0) => ({
    value: new Value(val),
    clock: new Clock(),
    hasSprung: new Value(0),
    hasSprungBack: new Value(0),
});

export const springBack = (v = SpringValue, from = 0, to = 0) => [
    cond(eq(v.hasSprung, 0), [
        stopClock(v.clock),
        set(v.hasSprung, 1),
    ]),
    spring(v, from, to, "hasSprungBack"),
];

export const spring = (
    v = SpringValue,
    from = 0,
    to = 0,
    back = "hasSprung" || "hasSprungBack",
) => cond(eq[back], 0, [
    set(v.value, runSpring(v.clock, from, to, springConfig())),
    cond(eq(clockRunning(v.clock), 0), set(v[back], 1)),
]);