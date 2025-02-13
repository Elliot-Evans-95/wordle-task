import { useContext } from "react";

import { Input } from "@/components/ui/input";
import { WordleContext } from "@/components/contexts/wordle-context";
import { Label } from "@/components/ui/label";

export const WordForm = () => {
  const context = useContext(WordleContext);

  const handleGuessChange = () => {};
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Label htmlFor="word" className="text-center w-full block">
        Type your guess
      </Label>
      <Input
        id="word"
        title="Your guess should be only letters and 5 letters long"
        placeholder="Guess Word"
        value={context?.currentGuess}
        onChange={handleGuessChange}
      />
    </form>
  );
};
