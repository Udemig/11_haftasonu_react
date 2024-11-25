import { delay } from "../../products/page";

export const metadata = {
  title: "Aramıza Katılım",
  description: "amazona giriş yap...",
};

const Login = async () => {
  await delay(2000);

  throw new Error("giriş yapılamadı...");

  return <div>Login</div>;
};

export default Login;
