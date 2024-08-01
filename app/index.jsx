import { router, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images} from '../constants'
import CustomButton from '../components/customButton';
export default function App() {
  return (
    <SafeAreaView className="bg-slate-950 h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center min-h-[90vh] px-4">
          <Image
          source={images.logo}
          resizeMode='contain'
          className="w-[130px] h-[84px]"
          />

          <Image 
          source={images.cards}
          resizeMode='contain'
          className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white  font-poppins-bold text-center">
              Discover Endlesss Possibilities with {''}
              <Text className="text-yellow-500">Aura</Text>
            </Text>
            <Image 
            source={images.path}
            resizeMode="contain"
            className="w-24 absolute -bottom-5 right-1  "
          
            />

          </View>
          <Text className="text-gray-400 text-sm text-center font-poppins-medium mt-7">
            Where creativivty meets innavation: Embark
            on a journey of limitless exploration with aura
          </Text>
          <CustomButton 
           title="Continue with email"
           handlePress = {()=>router.push('/sign-in')}
           containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}
