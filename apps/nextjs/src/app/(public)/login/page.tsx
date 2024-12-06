import { auth, signIn } from "@acme/auth";
import { redirect } from "next/navigation"; // リダイレクトを実現する
import { Button } from "@acme/ui/button";
import { HydrateClient } from "~/trpc/server";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    // すでにログインしている場合は /protected にリダイレクト
    redirect("/main");
  }

  // ログインフォーム
  return (
    <HydrateClient>
      <main className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">ログイン</h1>
          <form>
            <Button
              size="lg"
              formAction={async () => {
                "use server";
                await signIn("google");
              }}
              >
              Sign in with Google
            </Button>
          </form>
        </div>
      </main>
    </HydrateClient>
  );
}
