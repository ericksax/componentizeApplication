import { createContext, ReactNode, useState } from "react";

interface ChildrenProps {
  children: ReactNode;
}

interface MainContextData {
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export const SelectedGenreIdContext = createContext<MainContextData>(
  {} as MainContextData
);

export function Provider({ children }: ChildrenProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <SelectedGenreIdContext.Provider
      value={{ selectedGenreId, handleClickButton }}
    >
      {children}
    </SelectedGenreIdContext.Provider>
  );
}
