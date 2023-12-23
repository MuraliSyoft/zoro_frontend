import Login from "@/pages/Login";
import Register from "@/pages/Register";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-solid border-2 border-sky-500">
        <Login />
        <Register />
      </div>
    </main>
  );
}
