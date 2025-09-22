import { useSocialAuth } from "@/hooks/useSocialAuth";
import { Image, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
    const { handleSocialAuth, isLoading } = useSocialAuth()

    return (
        <SafeAreaView>
            <View>
                <Text>hello world</Text>
                <View>

                    <TouchableOpacity
                        onPress={() => { handleSocialAuth("oauth_google") }}
                        disabled={isLoading}
                        style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            elevation: 2
                        }}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#000" />
                        ) : (
                            <View>
                                <Image
                                    source={require("../../assets/images/google.png")}
                                    resizeMode="contain"
                                />
                                <Text style={{ color: "#000000" }}>Continue with Google</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { handleSocialAuth("oauth_apple") }}
                        disabled={isLoading}
                        style={{
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.1,
                            shadowRadius: 2,
                            elevation: 2
                        }}
                    >
                        {isLoading ? (
                            <ActivityIndicator size="small" color="#000" />
                        ) : (
                            <View>
                                <Image
                                    source={require("../../assets/images/apple.png")}
                                    resizeMode="contain"
                                />
                                <Text>Continue with Apple</Text>
                            </View>
                        )}

                    </TouchableOpacity>
                </View>
            </View >
        </SafeAreaView>
    );
}