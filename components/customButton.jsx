import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`bg-yellow-500 rounded-md justify-center items-center min-h-[40px] ${containerStyles} ${isLoading? 'opacity-50':''}`}
    disabled={isLoading}
    >
      <Text className="font-poppins-medium">{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton