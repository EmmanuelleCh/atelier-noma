type TextareaProps = {
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
};

export default function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  rows = 5,
  required = false,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}
        </label>
      )}

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className="
          w-full
          resize-none
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
