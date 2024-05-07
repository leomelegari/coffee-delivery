interface TagNameProps {
  tagName: string;
}

export const TagName = ({ tagName }: TagNameProps) => {
  return (
    <div className="flex w-fit rounded-full bg-yellow-light">
      <span className="px-2 py-1 text-yellow-dark text-[10px] font-bold">
        {tagName.toUpperCase()}
      </span>
    </div>
  );
};
