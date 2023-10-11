"use client";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState, type FormEventHandler } from "react";

type Props = {};

const SignInForm = ({}: Props) => {
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res && !res.error) {
      setError(false);
      router.push("/profile");
    } else {
      setError(true);
      console.log(res);
    }
  };

  return (
    <>
      {error && <div>Something went wrong</div>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default SignInForm;
