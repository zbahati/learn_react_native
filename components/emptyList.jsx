import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './customButton'
import { useRouter } from 'expo-router'

const EmptyList = ({title, subtitle}) => {
  const router = useRouter()
  return (
    <View className="justify-center items-center">
      <Image 
      source={images.empty}
      resizeMode='contain'
      className ="w-[270px] h-[112px]"
      />
        <Text className="text-2xl capitalize leading-9 font-poppins-bold text-gray-100">{title}</Text>
        <Text className="text-gray-100 font-poppins-medium text-base">{subtitle}</Text>
        <CustomButton 
        title="Create Video"
        handlePress={() =>router.replace('/create')}
        containerStyles="w-full my-6"
        />
    </View>
  )
}

export default EmptyList