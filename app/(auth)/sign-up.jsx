import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/formField';
import CustomButton from '../../components/customButton';
import { Link, useRouter } from 'expo-router';
import { CreateUser } from '../../lib/appwrite';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const router = useRouter();

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await CreateUser(form.email, form.password, form.username);
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
          <Text className="text-white text-2xl font-poppins-semibold mt-8">Sign up to Aora</Text>
          <FormField
            title="username"
            value={form.username}
            handleChange={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
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
            title="Sign up"
            containerStyles="mt-7 mb-6"
          />
          <View className="mt-5 flex-row justify-center gap-2">
            <Text className="text-white text-lg font-poppins-light">Have an account already?</Text>
            <Link href="/sign-in" className="text-lg font-poppins-bold text-yellow-400">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp;