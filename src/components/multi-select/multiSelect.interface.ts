export interface Options {
  value: string | number;
  label: string | number;
}

export interface MultiSelectProps {
  options: Options[];
  onChange: (selectedValue: Options[]) => void;
  isSearchable?: boolean;
  placeholderText?: string;
  chip?: boolean;
  checked?: boolean;
  disabled?: boolean;
  defaultValue?: Options[];
  creatable?: boolean;
  emptyState?: string;
  size?: "sm" | "md" | "lg";
  width?: number;
  maxHeight?: number;
  maxLengthShow?: number;
  maxAcceptItem?: number;
  hideHeader?: boolean;
}
