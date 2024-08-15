export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    icon: React.ComponentType;
    error?: { message?: string };
    isTouched?: boolean;
    options: { value: string; label: string }[];
    onCustomChange: (selectedValues: string[]) => void; // Custom handler
}
