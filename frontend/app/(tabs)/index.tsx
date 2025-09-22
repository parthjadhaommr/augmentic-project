import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import SignOutButton from '@/components/SignOutButton';

const index = () => {
    return (
        <View>
            <Text>index</Text>
            <View className="flex-row justify-between items-center px-4 py-3 border-b border-gray-100">
                <Ionicons name='logo-twitter' size={24} color="#1DA1F2"></Ionicons>
                <Text className='text-xl font-bold text-gray-900'>Home</Text>
                <SignOutButton />
            </View>
        </View>
    )
}

export default index