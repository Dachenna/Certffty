import { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthPage = () =>{
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //Email and password authentication
  const EmailAuth = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try{
      if(isSignup){
        await createUserWithEmailAndPassword(auth, email, password);
        alert("☑️ Account Created");
        navigate("/roles");
      } else{
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!")
      }
    } catch (err){
      setError("Failed to Create/Login Account");
      navigate("/")
    } finally{
      setLoading(false);
    }
  };

  //Google Authentication
  const GoogleAuth = async () =>{
    setLoading(true);
    setError("");

    try{
      await signInWithPopup(auth, googleProvider);
      alert("☑️Logged in with Google!");
      navigate("/roles");
    } catch(err){
      setError("Failed to Log in with Google!");
      navigate("/")
    } finally{
      setLoading(false);
    }
  };

  return(
    <section className="min-h-screen flex items-center justify-center from-primary/90 to-secondary/40 bg-gradient-to-r">
      <div className="bg-transparent/10 p-8 rounded-xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-extrabold text-secondary/40 text-center mb-6 gap-4 drop-shadow">
        {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>
        
        {error && <p className="text-secondary/60 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={EmailAuth}>
          <div>
            <label className="text-gray-700 font-bold">Email</label>
            <input 
              type="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 gorup gap-2"
              required
            />
          </div>

          <div>
            <label className="text-gray-700 font-bold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full primary-btn transition"
            disabled={loading}
          >
             {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">OR</p>
          <button
            onClick={GoogleAuth}
            className="w-full primary-btn transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Login with Google"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-primary/60 font-semibold ml-2"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </section>
  )
};

export default AuthPage;