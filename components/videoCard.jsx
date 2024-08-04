import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const VideoCard = ({ videos: { title, thumbnail, video, creator: { avatar, username } } }) => {

    const [play, setPlay] = useState(false)
    return (
        <View className="justify-between flex-col my-2 px-2">
            <View className="flex-row w-full items-center gap-3">
                <View className="flex-row gap-2 items-center">
                    <Image
                        source={{ uri: avatar }}
                        resizeMode='contain'
                        className="w-10 h-10 rounded-lg"
                    />
                    <View className="w-[80%] gap-1">
                        <Text className="text-gray-100 text-base font-poppins-regular" numberOfLines={1}>{title}</Text>
                        <Text className="text-gray-100 text-sm font-poppins-medium capitalize" numberOfLines={1}>{username}</Text>
                    </View>
                </View>
                <TouchableOpacity >
                    <Image
                        source={icons.menu}
                        resizeMode='contain'
                        className="w-5 h-5"
                    />
                </TouchableOpacity>
            </View>
            {play ? (
                <Text>Playing</Text>
            ) : (
                <TouchableOpacity className="items-center justify-center relative h-72 border border-red-600 mt-4">
                    <Image
                    source={{uri: thumbnail}}
                    resizeMode='cover'
                    className="h-72 w-full"
                    />
                    <Image
                    source={icons.play}
                    resizeMode='contain'
                    className="w-8 h-8 absolute"
                    />
                </TouchableOpacity>

            )}
        </View>
    )
}

export default VideoCard