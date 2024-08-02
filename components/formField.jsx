import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({title, value, handleChange,otherStyles, placeholder}) => {

  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={` space-y-2 ${otherStyles}`}>
      <Text className="text-lg text-gray-100 font-poppins-medium">{title}</Text>
      <View className="w-full rounded-xl flex-row justify-center items-center h-16 bg-slate-800">
        <TextInput
        className="flex-1 w-full text-gray-200 text-xl px-4 rounded-lg font-poppins-medium"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChange}
        secureTextEntry = {title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(prev=> !prev)}>
            <Image
             source={showPassword? icons.eyeHide: icons.eye }
             resizeMode='contain'
             className="w-8 h-6"
            />
          </TouchableOpacity>
        )}
        
      </View>
    </View>
  )
}

export default FormField