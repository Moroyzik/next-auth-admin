"use client";

import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SettingsSchema } from "@/schemas";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormLabel,
  FormItem,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
import { settings } from "@/actions/settings";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransaction] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name ?? undefined,
    },
  });

  const handleSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransaction(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => {
          setError("Something went wrong!");
        });
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>

                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Dmitry Morozov"
                        disabled={isPending}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormError message={error} />
            <FormSuccess message={success} />

            <Button type="submit" disabled={isPending}>Save</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
