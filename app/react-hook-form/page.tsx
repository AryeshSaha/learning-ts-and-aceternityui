"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import FormFieldComponent from "@/components/generic-form";

type FieldProps = {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  disabled?: boolean;
  className?: string;
};

const fields: FieldProps[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    placeholder: "John",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder: "Doe",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "5TqoZ@example.com",
  },
  {
    name: "select",
    label: "Select",
    type: "select",
    placeholder: "Choose...",
    options: [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
    ],
  },
  {
    name: "above18",
    label: "I am above 18 years old",
    type: "checkbox",
  },
  {
    name: "terms",
    label: "I accept the terms and conditions",
    type: "checkbox",
  },
];

const formSchema = z.object({
  firstName: z.string().min(3, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  select: z.string(),
  above18: z.boolean().refine((val) => val === true, {
    message: "You must be above 18 years old.",
  }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Page() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      select: "",
      above18: true,
      terms: true,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isSubmitSuccessful },
  } = form;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {fields.map(({ name, label, type, placeholder, options }) => (
          <FormField
            key={name}
            control={control}
            name={name as keyof FormData}
            render={({ field }) => (
              <FormFieldComponent
                field={field}
                type={type}
                label={label}
                placeholder={placeholder}
                options={options}
              />
            )}
          />
        ))}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : isSubmitSuccessful ? (
            "Submitted"
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
}
