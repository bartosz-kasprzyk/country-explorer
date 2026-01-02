"use client";

import { useEffect, useState } from "react";

interface UseFavoritesProps {
  favorites: string[];
  toggleFavorite: (code: string) => void;
}

export default function useFavorites(): UseFavoritesProps {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored: string[] = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    );
    setFavorites(stored);
  }, []);

  const toggleFavorite = (code: string) => {
    let updated = [];
    if (favorites.includes(code)) {
      updated = favorites.filter((c) => c !== code);
    } else {
      updated = [...favorites, code];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return { favorites, toggleFavorite };
}
