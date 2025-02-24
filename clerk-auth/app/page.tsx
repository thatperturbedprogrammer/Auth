import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <div className="flex justify-center md:container md:mx-auto center">
        <div className="my-10 text-xl rounded-lg border-4 border-indigo-400 p-2 hover:bg-indigo-600 hover:border-indigo-200 hover:text-slate-100">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
}
