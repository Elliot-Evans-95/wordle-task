import { createContext } from "react";

interface IWordleContext {
  currentGuess: string;
  guesses: string[];
  targetWord: string;
  maxGuesses: number;
  status: string;
  setCurrentGuess: (value: string) => void;
  addGuess: (guess: string) => void;
  reset: () => void;
}

export const WordleContext = createContext<IWordleContext | undefined>(
  undefined
);
