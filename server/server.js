import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ success: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback({ success: null, message: '' });

    const endpoint = isLoginMode 
      ? 'http://localhost:5000/api/auth/login' 
      : 'http://localhost:5000/api/auth/signup';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        setFeedback({ success: true, message: data.message });
      } else {
        setFeedback({ success: false, message: data.message || 'Authentication failed.' });
      }
    } catch (err) {
      console.error('Network error:', err);
      setFeedback({ success: false, message: 'Unable to connect to the Jphoenix backend server.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 p-8 rounded-2xl shadow-2xl relative z-10">
        
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold bg-cyan-950/50 border border-cyan-800/50 px-3 py-1 rounded-full">
            Jphoenix Agency
          </span>
          <h1 className="text-2xl font-bold mt-3 text-white tracking-tight">
            {isLoginMode ? 'Welcome Back' : 'Client Portal Registration'}
          </h1>
        </div>

        {feedback.message && (
          <div className={`mb-6 p-4 rounded-xl text-sm border flex items-center gap-3 ${
            feedback.success 
              ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' 
              : 'bg-rose-950/40 border-rose-800/60 text-rose-300'
          }`}>
            <span>{feedback.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Corporate Email
            </label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 text-sm"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Secure Password
            </label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
              className="w-full px-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-500 text-sm"
              placeholder="••••••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all text-sm"
          >
            {loading ? 'Processing...' : (isLoginMode ? 'Sign In to Portal' : 'Create Account')}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-800/80 text-center">
          <button 
            onClick={() => {
              setIsLoginMode(!isLoginMode);
              setFeedback({ success: null, message: '' });
            }}
            className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isLoginMode ? "Don't have an account? Sign up" : "Already registered? Log in"}
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;