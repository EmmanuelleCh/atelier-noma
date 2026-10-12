type InputProps = {
  label?: string;
  name: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
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
          placeholder:text-[var(--muted-foreground)]
          focus:border-[var(--foreground)]
          focus:ring-2
          focus:ring-[var(--border)]
        "
      />
    </div>
  );
}
