import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import PropTypes from 'prop-types';
import * as React from 'react';
import React from 'react';
import Animated from 'react-native-reanimated';

import { Apps } from './components/Model';

const { Value } = Animated;

class RNAnimationVideo extends React.PureComponent {
    activeAppId = new Value(-1);
    state = {
        ready: false,
        modal: null,
    };

    static propTypes() {
        return {
            isIcon: PropTypes.bool.isRequired,
            items: Apps,
        }
    }

    async componentDidMount() {
        await Promise.all(apps.map(app => Asset.loadAsync(app.source)));
        this.setState({ ready: true });
    }

    open = (app, position) => {
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
    items: Apps || PropTypes.array.isRequired,
}

export default RNAnimationVideo;