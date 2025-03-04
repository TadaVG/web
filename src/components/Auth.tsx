import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";

const Auth = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="flex items-center justify-center mt-6">
      {isSignedIn ? (
        <SignOutButton>
          <button className="bg-red-500 text-white px-4 py-2">Sign Out</button>
        </SignOutButton>
      ) : (
        <SignInButton>
          <button className="bg-blue-500 text-white px-4 py-2">Sign In</button>
        </SignInButton>
      )}
    </div>
  );
};

export default Auth;
