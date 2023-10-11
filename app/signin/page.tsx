import SignInForm from "@/components/SignIn";
import DiscordButton from "@/components/DiscordButton";
import GoogleButton from "@/components/GoogleButton";

type Props = {};

const SignIn = ({}: Props) => {
  return (
    <div>
      <h1>Sign In</h1>
      <GoogleButton />
      <DiscordButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
