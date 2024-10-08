import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./utils/auth";

const App = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  } else {
    return redirect("/home");
  }
};

export default App;
