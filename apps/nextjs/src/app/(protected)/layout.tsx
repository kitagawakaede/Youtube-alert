//ログインしてるか分岐
import { auth } from "@acme/auth";

import { redirect } from "next/navigation";


export default async function LoginPage(props: { children: React.ReactNode }) {
const session = await auth();
  

  if (!session) {
    redirect("/login")
  }
  return <>{props.children}</>
}

