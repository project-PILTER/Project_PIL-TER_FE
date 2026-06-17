import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectOption {
  id: number;
  name: string;
}

interface AppSelectProps {
  value?: string;
  placeholder: string;
  options: SelectOption[];
  onValueChange: (value: string) => void;
}

export default function AppSelect({
  value,
  placeholder,
  options,
  onValueChange,
}: AppSelectProps) {
  return (
    <div className="mt-4">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.id} value={String(option.id)}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
