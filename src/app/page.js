"use client";
import { useAuth } from "@/context/AuthContext";
import { logoutUser } from "@/firebase/auth";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) return <p>Ładowanie...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>PULS Lutycka</h1>
      {user ? (
        <div>
          <p>Zalogowano jako: {user.email}</p>
          <button onClick={logoutUser}>Wyloguj</button>
        </div>
      ) : (
        <p>Nie jesteś zalogowany.</p>
      )}
    </div>
  );
}
