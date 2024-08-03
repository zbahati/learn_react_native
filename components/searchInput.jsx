import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({ title, value, handleChange, otherStyles, placeholder }) => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={` space-y-2 mt-2 ${otherStyles}`}>
            <View className="w-full rounded-xl flex-row justify-center items-center h-16 bg-slate-800">
                <TextInput
                    className="flex-1 w-full text-gray-200 text-lg px-4 rounded-lg font-poppins-medium"
                    value={value}
                    placeholder="Search for a video topic"
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChange}
                    secureTextEntry={title === 'Password' && !showPassword}
                />
                <TouchableOpacity>
                    <Image
                        source={icons.search}
                        resizeMode='contain'
                        className="w-7 h-7"
                    />

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchInput