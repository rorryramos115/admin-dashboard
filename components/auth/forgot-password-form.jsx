'use client';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function ForgotPasswordForm({ className, ...props}) {
  const router = useRouter();

  const handleLogin = () => {
    toast("Login successfully");
  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Forgot your password?</h1>
        <p className="text-balance text-sm text-muted-foreground">
           Enter your email to receive a password reset link
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <Button type="submit" className="w-full">
           Send Reset Link
        </Button>
      </div>
      <div className="text-center text-sm">
        Remember your password?{" "}
        <Link href="/signin" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  )
}
