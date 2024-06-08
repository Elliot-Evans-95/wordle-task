interface RowProps {
  guess?: string;
}

export const Row = ({ guess }: RowProps) => {
  return (
    <div className="flex space-x-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
        >
          {guess?.[i]}
        </span>
      ))}
    </div>
  );
};
