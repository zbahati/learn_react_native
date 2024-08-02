import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants'
import FormField from '../../components/formField';
import CustomButton from '../../components/customButton';
import { Link } from 'expo-router';

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className=" bg-slate-950 h-full w-full">
      <ScrollView>
        <View className="min-h-[90vh] justify-center px-4">
          <Image
            source={images.logo}
            resizeMode='contain'
            className=" h-[35px] w-[112px]"
          />

          <Text className="text-white text-2xl font-poppins-semibold mt-8">Sign up to Aora</Text>
          <FormField
           title="username"
           value={form.username}
           handleChange ={(e) => setForm({...form, username: e})}
           otherStyles ="mt-10"
          />
          <FormField
           title="Email"
           value={form.email}
           handleChange ={(e) => setForm({...form, email: e})}
           otherStyles ="mt-5"
          />
          <FormField
           title="Password"
           valube={form.password}
           handleChange ={(e) => setForm({...form, password: e})}
           otherStyles ="mt-7"
          />

          <CustomButton
          handlePress={() => console.log(form)}
          title="Sign in"
          containerStyles="mt-7 mb-6"
          />
          
          <View className=" mt-5 flex-row justify-center gap-2">
            <Text className="text-white text-lg font-poppins-light ">Have an account already?</Text>
            <Link href="/sign-in" className='text-lg font-poppins-bold text-yellow-400'>Sign In</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp