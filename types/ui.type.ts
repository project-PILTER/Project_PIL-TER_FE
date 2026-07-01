export interface DropdownOption {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}