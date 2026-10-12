type RadioOption = {
  label: string;
  value: string;
};

type RadioProps = {
  label: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Radio({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
}: RadioProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-1 text-sm font-medium">{label}</legend>

      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-3"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            required={required}
            className="h-4 w-4 accent-black"
          />

          <span className="text-sm text-[var(--muted-foreground)]">
            {option.label}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
