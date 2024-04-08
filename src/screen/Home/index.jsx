import { View, } from 'react-native'
import React from 'react'
import styles from './styles'
import Title from '../../components/Title'

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="today is Felipe Senai birthday 🧁🎂" />
    </View>
  )
}