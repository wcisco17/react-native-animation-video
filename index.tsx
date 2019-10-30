import * as React from 'react';
import { NativeModules, Text, View } from 'react-native';

const { RNAnimationVideo } = NativeModules;

interface IProps {
    name: string;
}

const App: React.FC<IProps> = ({ name }) => {
    return (
        <React.Fragment>
            <View>
                <Text>
                    {name}
                </Text>
            </View>
            <RNAnimationVideo />
        </React.Fragment>
    )
}

export default App;
