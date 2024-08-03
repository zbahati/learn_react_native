import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { icons, images } from '../../constants'
import SearchInput from '../../components/searchInput'

const Home = () => {
  return (
    <SafeAreaView className="bg-slate-950">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-gray-100">{item.id}</Text>
        )}

        ListHeaderComponent={() => (
          <View className="space-y-2 mt-5 px-4">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-gray-100 font-poppins-medium text-base">Welcome Back</Text>
                <Text className="text-2xl capitalize leading-9 font-poppins-bold text-gray-100">Bahati</Text>
              </View>
              <View>
                <Image
                  source={images.logoSmall}
                  resizeMode='contain'
                  className="w-10 h-14"
                />
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-6">
              <Text className="font-poppins-regular text-lg text-gray-100">Latest Videos</Text>
              
            </View>
          </View>
        )}
      />

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default Home