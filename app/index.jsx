import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-300">
      <Text className="text-3xl font-black" >Aura</Text>
      <StatusBar style="auto" />
      <Link href='/home' className='text-blue-500'>Home</Link>
    </View>
  );
}
