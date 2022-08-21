import React from 'react';
import { View, StyleSheet, Button, Platform } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';


export default function VideoItem() {
    const video = React.useRef<any>(null);
    const [status, setStatus] = React.useState<any>({});
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        margin: 8, borderWidth: 2,
        marginBottom: 12,
        borderRadius: 8,
        borderColor: '#ccc',
        elevation: 4,
        shadowColor: 'lightgray',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 9,
        shadowOpacity: 1,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    video: { height: 180, width: 320 }
});