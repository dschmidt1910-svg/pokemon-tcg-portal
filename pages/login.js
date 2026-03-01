if (process.env.NODE_ENV === 'development') {
  // automatisch einen Test-User setzen
  setUser({ email: "test@pokemon.com", name: "Test User" });
  return;
}
