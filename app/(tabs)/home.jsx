import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { icons, images } from '../../constants'
import SearchInput from '../../components/searchInput'
import Tranding from '../../components/tranding'
import EmptyList from '../../components/emptyList'
import { getAllPosts, getCurrentUser } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/videoCard'

const Home = () => {
  const [refreshing, setRefreshing] = useState(false)
  const {data} = useAppwrite(getCurrentUser)


  const {data: posts, isLoading, Refetch} = useAppwrite(getAllPosts);

  const onRefresh = async() => {
    setRefreshing(true)
    await Refetch();
    setRefreshing(false)
  }
  return (
    <SafeAreaView className="bg-slate-950 h-full">
      <FlatList
        data={posts}
        
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
           videos = {item}
          />
        )}

        ListHeaderComponent={() => (
          <View className="space-y-2 mt-5 px-4">
            <View className="flex-row justify-between">
              <View>
                <Text className="text-gray-100 font-poppins-medium text-base">Welcome Back</Text>
                <Text className="text-2xl capitalize leading-9 font-poppins-bold text-gray-100">{data.username}</Text>
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
              <Tranding posts={[{id: 1}, {id: 2}, {id:3}]?? []}/>
            </View>
          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyList 
          title="No videos Found!"
          subtitle ="Be the first one to upload video"
          />
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />


      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  )
}

export default Home