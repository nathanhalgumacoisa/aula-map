import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import Title from '../../components/Title'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';

export default function Location() {
    const [location, setLocation] = useState(null);

    async function requestPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
            console.log("Localização atual", currentPosition);
            return;
        }
    }

    useEffect(() => {
        console.log("Teste");
        requestPermission();
    }, []);
    return (
        <View style={styles.container}>
            <Title title="today is Felipe Senai birthday 🧁🎂" />
        </View>
    )
}