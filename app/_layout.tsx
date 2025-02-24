import { useEffect, useState } from "react";
import { AuthProvider , useAuth } from "./auth/auth-context";
import { router, Stack, Slot } from "expo-router";
import { View, ActivityIndicator } from "react-native";


export default function App() {
  return (
    <AuthProvider>
      <AuthNavigation />
    </AuthProvider>
  );
}

function AuthNavigation() {
    const { session, loading } = useAuth();
    const [ isReady, setIsReady  ] = useState(false);
    
    useEffect(() => {
        if (!loading) {
            if (session) {
                router.replace('/home'); // Authenticated to Home
            } else {
                router.replace('/auth/login'); // Not authenticated to Login
            }
        }

        // Allow navigation to complete routing
        setIsReady(true);
    }, [session, loading]);

    if (!isReady || loading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
          </View>
        );
      }

    return (
        <Slot />
    )
}