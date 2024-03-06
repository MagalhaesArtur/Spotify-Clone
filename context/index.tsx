"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  let [deleteSongId, setDeleteSongId] = useState<string>("test");
  return (
    <AppContext.Provider value={{ deleteSongId, setDeleteSongId }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
