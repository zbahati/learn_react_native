import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Tranding = ({posts}) => {
  return (
   <FlatList
   data={posts}
   keyExtractor={(item) => item.$id}
   renderItem={({item}) => (
    <Text className="text-3xl text-gray-100">{item.id}</Text>
   )}
   horizontal
   />
  )
}

export default Tranding