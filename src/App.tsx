import { useState } from "react";


function App() {
  const [email, setEmail] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await fetch("https://staging-services.gymbuddyy.com/api/users/beta-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setEmail("");
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <h1 className="w-screen h-screen bg-[#1F1F1F] text-[#DBEFED] p-5">
      <div className="navbar flex justify-center items-center ">
        <div className="flex items-center gap-4">
          <img src="/gymbuddyy_logo_no_br.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold font-satoshi-black">GymBuddyy</h1>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col w-full h-full -mt-10">
        <div className="moving-background text-8xl font-bold">
            Coming Soon
        </div>
        <div className="text-sm mt-6 w-1/3 text-center">
          A community for fitness enthusiasts to share their workouts, track their progress, and connect with others.
        </div>
        <div className="flex flex-row mt-10 gap-4">
          <input type="email" placeholder="Enter your email" className="text-sm h-10 rounded-md p-2 border border-[#ECDDC8] w-52" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="bg-[#ECDDC8] text-[#1F1F1F] rounded-md text-sm p-2" onClick={handleSignUp}>
          Sign up
        </button>
        </div>
        <div className="text-sm mt-4 w-1/3 text-center">
          Sign up for early access to the app.
        </div>
      </div>
    </h1>
    </>
  )
}

export default App
