type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  name: string;
  options: SelectOption[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
};

export default function Select({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full
          rounded-[var(--radius)]
          border
          border-[var(--border)]
          bg-[var(--background)]
          px-4
          py-3
          text-sm
          outline-none
          transition
          focus:border-[var(--foreground)]
          focus:ring-2
          focus:ring-[var(--border)]
        "
      >
        <option value="">Sélectionnez une option</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
