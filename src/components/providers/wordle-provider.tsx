import { ReactNode, useState } from "react";

import {
  WordleContext,
} from "@/components/contexts/wordle-context";

export const TARGET_WORD = "MARKO";
export const MAX_GUESSES = 5;

interface WordleProviderProps {
  children: ReactNode;
}

export const WordleProvider = ({
  children,
}: WordleProviderProps) => {
  const [guesses] = useState<string[]>([]);
  const [currentGuess] = useState<string>("");
  const [status] = useState<string>("");

  const addGuess = () => {};

  const reset = () => {};

  const handleSetCurrentGuess = () => {};

  return (
    <WordleContext.Provider
      value={{
        currentGuess,
        guesses,
        targetWord: TARGET_WORD,
        addGuess,
        setCurrentGuess: handleSetCurrentGuess,
        maxGuesses: MAX_GUESSES,
        status,
        reset,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};
