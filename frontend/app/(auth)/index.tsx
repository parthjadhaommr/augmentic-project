import { useSocialAuth } from "@/hooks/useSocialAuth";
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const { handleSocialAuth, isLoading } = useSocialAuth()

    return (

        // <View className="flex-col gap-2">
        //     <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
        //         onPress={() => { handleSocialAuth("oauth_google") }}
        //         disabled={isLoading}
        //         style={{
        //             shadowColor: "#000",
        //             shadowOffset: { width: 0, height: 1 },
        //             shadowOpacity: 0.1,
        //             shadowRadius: 2,
        //             elevation: 2
        //         }}
        //     >
        //         {isLoading ? (
        //             <ActivityIndicator size="small" color="#000" />
        //         ) : (
        //             <View className="flex-row items-center justify-center">
        //                 <Image
        //                     source={require("../../assets/images/google.png")}
        //                     className="size-10 "
        //                     resizeMode="contain"
        //                 />
        //                 <Text className="text-black font-medium text-base">Continue with Google</Text>
        //             </View>
        //         )}
        //     </TouchableOpacity>
        //     <TouchableOpacity className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6"
        //         onPress={() => { handleSocialAuth("oauth_apple") }}
        //         disabled={isLoading}
        //         style={{
        //             shadowColor: "#000",
        //             shadowOffset: { width: 0, height: 1 },
        //             shadowOpacity: 0.1,
        //             shadowRadius: 2,
        //             elevation: 2
        //         }}
        //     >
        //         {isLoading ? (
        //             <ActivityIndicator size="small" color="#000" />
        //         ) : (
        //             <View className="flex-row items-center justify-center">
        //                 <Image
        //                     source={require("../../assets/images/apple.png")}
        //                     className="size-10 "
        //                     resizeMode="contain"
        //                 />
        //                 <Text className="text-black font-medium text-base">Continue with Apple</Text>
        //             </View>
        //         )}

        //     </TouchableOpacity>
        // </View>

        <SafeAreaView>

            <View>
                <Text>Welcome To Event</Text>
                <TouchableOpacity
                    onPress={() => { handleSocialAuth("oauth_google") }}
                    style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}
                >
                    <View className="flex-row items-center justify-center">
                        <Image
                            source={require("../../assets/images/google.png")}
                            style={{
                                height: 30,
                                width: 30
                            }}
                            resizeMode="contain"
                        />
                        <Text className="text-black font-medium text-base">Continue with Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { handleSocialAuth("oauth_apple") }}
                    style={{
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.1,
                        shadowRadius: 2,
                        elevation: 2
                    }}
                ></TouchableOpacity>
                <View className="flex-row items-center justify-center">
                    <Image
                        source={require("../../assets/images/apple.png")}
                        style={{
                            height: 30,
                            width: 30
                        }}
                        resizeMode="contain"
                    />
                    <Text className="text-black font-medium text-base">Continue with Apple</Text>
                </View>
            </View>
        </SafeAreaView >
    );
}