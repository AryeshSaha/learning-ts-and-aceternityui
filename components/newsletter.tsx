// components/SubscribeForm.tsx
"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeUser } from "@/lib/actions";

const subscribeSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof subscribeSchema>;

export default function SubscribeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await subscribeUser(data.email);
      if (result.success) {
        alert("Successfully subscribed!");
        reset();
      } else {
        alert(`Failed to subscribe: ${result.error}`);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Enter your email"
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Subscribe
      </button>
    </form>
  );
}
