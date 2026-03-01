import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext';

export default function Login() {
  const { setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setUser({
        email: "test@pokemon.com",
        name: "Test User",
        id: "dev-user-1"
      });
      console.log("💡 Entwicklungsmodus: Test-User automatisch eingeloggt");

      // Weiterleitung auf /cards
      router.push('/cards');
    }
  }, [setUser, router]);

  return (
    <div>
      <h1>Login</h1>
      <p>Im Entwicklungsmodus wird automatisch eingeloggt und weitergeleitet.</p>
    </div>
  );
}
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authContext'; // Pfad ggf. anpassen

export default function Login() {
  const { setUser } = useAuth();
  const router = useRouter();

  // 🔹 Mock-Login und Weiterleitung
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setUser({
        email: "test@pokemon.com",
        name: "Test User",
        id: "dev-user-1"
      });
      console.log("💡 Entwicklungsmodus: Test-User automatisch eingeloggt");

      // Weiterleitung auf /cards
      router.push('/cards');
    }
  }, [setUser, router]);

  // 🔹 Normaler Login-Form-Code bleibt hier, wird aber in DEV nicht benötigt
  const handleLogin = async () => {
    console.log("Magic-Link Login (wird im DEV-Modus nicht ausgeführt)");
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Im Entwicklungsmodus wird automatisch eingeloggt und weitergeleitet.</p>
      {/* Dein normales Login-Formular */}
    </div>
  );
}
