"use client";
import { useState } from "react";
import { loginUser } from "@/firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      router.push("/dashboard"); // Po zalogowaniu przekierowanie do panelu użytkownika
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Logowanie</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Zaloguj się</button>
    </div>
  );
}
