type CheckboxProps = {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function Checkbox({
  label,
  name,
  checked,
  onChange,
  required = false,
}: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className="
          mt-0.5
          h-4
          w-4
          rounded
          border
          border-[var(--border)]
          accent-black
        "
      />

      <span className="text-sm text-[var(--muted-foreground)]">{label}</span>
    </label>
  );
}
