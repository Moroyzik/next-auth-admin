import { CardWrapper } from "../auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      showSocial
      headerLabel="Welcome back"
      backButtonLabel="Dont't have an account?"
      backButtonHref="/auth/register"
    >
      LoginForm!
    </CardWrapper>
  );
};
