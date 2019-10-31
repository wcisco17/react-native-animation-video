import { EvilIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class AppThumbnail extends React.PureComponent {
    static propTypes() {
        return {
            app: PropTypes.any.isRequired,
            borderRadius: PropTypes.any,
            shouldPlay: PropTypes.bool.isRequired,
            showOverlay: PropTypes.bool.isRequired,
            isIcon: PropTypes.bool.isRequired,
        }
    }

    render() {
        const {
            app: {
                id,
                name,
                views,
                businessTitle,
                location,
                source,
                videoUrl,
            },
            borderRadius,
            shouldPlay,
            showOverlay,
            isIcon
        } = this.props;

        return (
            <>
                <Video
                    source={{ uri: videoUrl }}
                    rate={1.0}
                    volume={1.0}
                    resizeMode="cover"
                    isMuted={false}
                    shouldPlay={shouldPlay}
                    isLooping
                    style={[styles.image, { borderRadius: 8 }]}
                />

                <View style={[styles.content, !showOverlay && {
                    borderRadius: 8,
                    paddingLeft: 15,
                    paddingTop: 15,
                    height: '100%'
                }]}>
                    <View style={(showOverlay) && [styles.darkOverlay]}>
                        <Image
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                            }}
                            {...{ source }}
                        />
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{views} views</Text>

                    </View>
                    <View style={styles.contentBottom}>
                        <Text style={{ fontSize: 30, color: 'white' }}>{businessTitle}</Text>
                        <View style={{
                            flexDirection: 'row',
                            paddingTop: 8
                        }} >
                            {
                                isIcon && (
                                    <EvilIcons
                                        name="location"
                                        size={32}
                                        color="white"
                                    />
                                )
                            }
                            <Text style={{ fontSize: 24, color: 'white' }}>
                                {location}
                            </Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

export default AppThumbnail;

AppThumbnail.propTypes = {
    app: PropTypes.any.isRequired,
    borderRadius: PropTypes.any,
    shouldPlay: PropTypes.bool.isRequired,
    showOverlay: PropTypes.bool.isRequired,
    isIcon: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
    content: {
        justifyContent: "space-between",
    },
    darkOverlay: {
        borderRadius: 8,
        paddingLeft: 15,
        paddingTop: 15,
        backgroundColor: 'rgba(0,0,0,.4)',
        height: '100%',
    },
    title: {
        color: "white",
        fontSize: 24,
        lineHeight: 41,
        fontWeight: "bold",
    },
    subtitle: {
        color: "white",
        fontSize: 20,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    contentBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingLeft: 25,
        justifyContent: "space-between",
        paddingBottom: 25
    },
});