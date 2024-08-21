import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

type FieldProps = {
  field: any; // Define this based on React Hook Form's field props
  type: string;
  label: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
};

const FormFieldComponent: React.FC<FieldProps> = ({
  field,
  type,
  label,
  placeholder,
  options,
}) => {
  return (
    <FormItem>
      {type === "text" && (
        <>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type="text" {...field} />
          </FormControl>
        </>
      )}
      {type === "select" && (
        <>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value as string}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </>
      )}
      {type === "checkbox" && (
        <>
          <div className="flex items-center space-x-1 leading-none">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </div>
        </>
      )}
      <FormMessage />
    </FormItem>
  );
};

export default FormFieldComponent;
