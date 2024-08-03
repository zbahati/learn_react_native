import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/formField';
import CustomButton from '../../components/customButton';
import { Link, useRouter } from 'expo-router';
import { SignInFunction } from '../../lib/appwrite';

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await SignInFunction(form.email, form.password);
      router.replace('/home');
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-slate-950 h-full w-full">
      <ScrollView>
        <View className="min-h-[90vh] justify-center px-4">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="h-[35px] w-[112px]"
          />
          <Text className="text-white text-2xl font-poppins-semibold mt-8">Login in to Aora</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChange={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-5"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChange={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton
            handlePress={submit}
            title="Sign in"
            containerStyles="mt-7 mb-6"
          />
          <View className="mt-5 flex-row justify-center gap-2">
            <Text className="text-white text-lg font-poppins-light">Don't you have account?</Text>
            <Link href="/sign-up" className="text-lg font-poppins-bold text-yellow-400">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;