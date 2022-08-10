import { createClient } from "@supabase/supabase-js";
import { User } from "../model/User";
import { useEffect, useState } from "react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();

    setUser({ email: session?.user?.email! } ?? null);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser({ email: session?.user?.email! } ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    logIn: (email: string) => supabase.auth.signIn({ email }),
    logOut: () => supabase.auth.signOut(),
  };
};
