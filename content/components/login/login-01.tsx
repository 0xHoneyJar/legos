import { GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Login01() {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-xl font-semibold text-foreground">
            Log in or create account
          </h2>
          <form action="#" method="post" className="mt-6">
            <Label htmlFor="email" className="font-medium text-foreground">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="john@company.com"
              className="mt-2"
            />
            <Button type="submit" className="mt-4 w-full">
              Sign in
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or with
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="inline-flex w-full items-center justify-center space-x-2"
            asChild
          >
            <a href="#">
              <GoogleIcon className="size-5" aria-hidden={true} />
              <span className="text-sm font-medium">Sign in with Google</span>
            </a>
          </Button>

          <p className="mt-4 text-xs text-muted-foreground">
            By signing in, you agree to our{" "}
            <a href="#" className="underline underline-offset-4">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
