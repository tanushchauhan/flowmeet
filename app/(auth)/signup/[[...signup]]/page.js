import { SignUp } from "@clerk/nextjs";

function Page() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp />
    </main>
  );
}

export default Page;
