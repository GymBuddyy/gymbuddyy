import { useState } from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
    <motion.div 
      className="w-screen h-screen bg-[#1F1F1F] text-[#DBEFED] p-3 sm:p-5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="navbar flex justify-center items-center"
        variants={itemVariants}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <motion.img 
            src="/gymbuddyy_logo_no_br.png" 
            alt="logo" 
            className="w-8 h-8 sm:w-10 sm:h-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          />
          <motion.h1 
            className="text-xl sm:text-2xl font-bold font-satoshi-black"
            variants={itemVariants}
          >
            GymBuddyy
          </motion.h1>
        </div>
      </motion.div>
      <div className="flex-1 flex justify-center items-center flex-col w-full h-full -mt-10">
        <motion.div 
          className="moving-background text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center px-4"
          variants={itemVariants}
        >
            Coming Soon
        </motion.div>
        <motion.div 
          className="text-sm mt-6 w-full px-4 sm:w-2/3 md:w-1/2 lg:w-1/3 text-center"
          variants={itemVariants}
        >
          A community for fitness enthusiasts to share their workouts, track their progress, and connect with others.
        </motion.div>
        <motion.div 
          className="flex flex-col sm:flex-row mt-8 sm:mt-10 gap-3 sm:gap-4 w-full px-4 sm:w-auto"
          variants={itemVariants}
        >
          <motion.input 
            type="email" 
            placeholder="Enter your email" 
            className="text-sm h-10 rounded-md p-2 border border-[#ECDDC8] w-full sm:w-52" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          <motion.button 
            className="bg-[#ECDDC8] text-[#1F1F1F] rounded-md text-sm p-2 w-full sm:w-auto"
            onClick={handleSignUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Sign up
          </motion.button>
        </motion.div>
        <motion.div 
          className="text-sm mt-4 w-full px-4 sm:w-2/3 md:w-1/2 lg:w-1/3 text-center"
          variants={itemVariants}
        >
          Sign up for early access to the app.
        </motion.div>
      </div>
    </motion.div>
    </>
  )
}

export default App
