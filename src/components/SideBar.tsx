import React, { useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import { SelectedGenreIdContext } from "../../context/index";

import "../styles/sidebar.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

import { Button } from "./Button";

export function SideBar() {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const { handleClickButton, selectedGenreId } = useContext(
    SelectedGenreIdContext
  );

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
