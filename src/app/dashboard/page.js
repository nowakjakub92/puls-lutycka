"use client";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) return <p>Ładowanie...</p>;

  return (
    <div>
      <h1>Panel użytkownika</h1>
      {user ? <p>Witaj, {user.email}!</p> : <p>Nie jesteś zalogowany.</p>}
    </div>
  );
}
