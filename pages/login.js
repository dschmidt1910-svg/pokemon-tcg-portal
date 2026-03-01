import { useEffect } from 'react';
import { useAuth } from '../context/authContext'; // Passe den Pfad ggf. an

export default function Login() {
  const { setUser } = useAuth();

  //  Mock-Login für Entwicklung
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setUser({
        email: "test@pokemon.com",
        name: "Test User",
        id: "dev-user-1"
      });
      console.log(" Entwicklungsmodus: Test-User automatisch eingeloggt");
    }
  }, [setUser]);

  const handleLogin = async () => {
    // Hier bleibt deine normale Magic-Link Login-Logik
    console.log("Magic-Link Login (wird im DEV-Modus nicht benötigt)");
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Im Entwicklungsmodus wird automatisch eingeloggt.</p>
      {/* Dein normales Login-Formular hier */}
    </div>
  );
}
