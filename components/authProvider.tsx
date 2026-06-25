import { getUser } from "@/services/auth.service";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const initializeUser = async() => {
      setLoading(true);

      try {
        const user = await getUser();

        if(user) {
        setUser(user);
        } else {
          clearUser();
        }
      } finally {
        setLoading(false);
      }
    }

    initializeUser();
    
  }, [setUser, clearUser, setLoading])

  return <>{children}</>;
  
}