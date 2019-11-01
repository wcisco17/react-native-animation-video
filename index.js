import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import PropTypes from 'prop-types';
import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Animated from 'react-native-reanimated';

import App from './components/App';
import AppModal from './components/AppModal';
import { Position } from './components/Model';

const { Value } = Animated;

class RNAnimationVideo extends React.PureComponent {
    activeAppId = new Value(-1);
    static propTypes() {
        return {
            isIcon: PropTypes.bool.isRequired,
            items: PropTypes.array.isRequired,
        }
    }

    state = {
        ready: false,
        modal: null,
    };


    async componentDidMount() {
        const { items } = this.props;
        await Promise.all(items.map(app => Asset.loadAsync(app.source)));
        this.setState({ ready: true });
    }

    open = (app, position = Position) => {
        this.activeAppId.setValue(app.id);
        this.setState({
            modal: {
                app,
                position
            }
        });
    }

    close = () => {
        this.activeAppId.setValue(-1);
        this.setState({ modal: null });
    }

    render() {
        const { open, close, activeAppId } = this;
        const { isIcon, items } = this.props;
        const { ready, modal } = this.state;
        if (!ready) {
            return (
                <AppLoading />
            );
        }
        return (
            <>
                <SafeAreaView />
                <ScrollView>
                    {
                        items.map(app => (
                            <App
                                isIcon={isIcon}
                                key={app.id}
                                {...{ app, open, activeAppId }}
                            />
                        ))
                    }
                </ScrollView>
                {
                    modal !== null && (
                        <AppModal
                            isIcon={isIcon}
                            {...modal}
                            {...{ close }}
                        />
                    )
                }
            </>
        );
    }
}

RNAnimationVideo.propTypes = {
    isIcon: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
}

export default RNAnimationVideo;