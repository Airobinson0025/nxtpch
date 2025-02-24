import { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { router } from 'expo-router';
import { supabaseClient } from '@/config/supabase';


// Define AuthContext
interface AuthContextType {
    session: Session | null;
    loading: boolean;
    signOut: () => Promise<void>;
}

// Create auth context
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch session on app load
        const fetchSession = async () => {
            try {
                const { data: { session }} = await supabaseClient.auth.getSession();
                setSession(session);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching session", error);
                setLoading(false);
            }
        }
        fetchSession();
        

        // Listen for session changes
        const { data: authListener } = supabaseClient.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            authListener?.subscription.unsubscribe();
        };
    }, []);
    
    // Sign out function
    const signOut = async () => {
        try {
            await supabaseClient.auth.signOut();
            setSession(null);
            router.replace('/auth/login');
        } catch (error) {
            console.error('Error signing out', error);
        }
    }

    const authContextValues = { session, loading, signOut };

    // return the auth context provider
    return (
        <AuthContext.Provider value={authContextValues}>
            {children}
        </AuthContext.Provider>
    );
};

// Export the context for use in other components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider. Ensure that your app is wrapped with the AuthProvider component.');
    }
    return context;
};