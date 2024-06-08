import { WordForm } from "@/components/wordle/word-form";
import { GuessesList } from "@/components/wordle/guesses-list";
import { ResetButton } from "./wordle/reset-button";

export const Wordle = () => (
    <div className="space-y-10">
        <GuessesList/>
        <WordForm/>
        <ResetButton/>
    </div>
);
