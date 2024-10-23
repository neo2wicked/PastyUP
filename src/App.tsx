import React from 'react';
import { useState } from 'react';
import { Wand2, ArrowRight, Play, Sparkles, Layout, Users, Youtube, Clapperboard, Zap } from 'lucide-react';
import Button from './components/Button';
import AuthModal from './components/AuthModal';

function App() {
  const [showAuth, setShowAuth] = useState<'login' | 'signup' | null>(null);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
      
      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wand2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              VideoMagic
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => setShowAuth('login')}>
              Log in
            </Button>
            <Button size="sm" onClick={() => setShowAuth('signup')}>
              Sign up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        {/* Animated Gradient Orb */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl animate-pulse" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm">AI-Powered Video Creation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 text-transparent bg-clip-text">
              Transform YouTube Shorts
              <br />
              Into Viral Content
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              Create unique videos in minutes using AI. Simply paste a YouTube Short URL,
              customize your script, and let our magic transform it into something amazing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setShowAuth('signup')} className="group">
                Start Creating Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 bg-gradient-to-b from-black to-purple-900/20 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Youtube className="w-8 h-8 text-purple-400" />,
                title: 'Easy Import',
                description: "Simply paste any YouTube Short URL and we'll handle the rest."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-pink-400" />,
                title: 'AI Script Generation',
                description: 'Get unique, engaging scripts powered by advanced AI.'
              },
              {
                icon: <Clapperboard className="w-8 h-8 text-purple-400" />,
                title: 'Smart Clips',
                description: 'Automatically extract and organize the best moments.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Trusted by Content Creators
            </h2>
            <p className="text-gray-400">Join thousands of creators who trust VideoMagic</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '100K+', label: 'Videos Created' },
              { number: '4.9/5', label: 'User Rating' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Create Amazing Content?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of content creators who are already using VideoMagic to transform
                their content creation process.
              </p>
              <Button size="lg" onClick={() => setShowAuth('signup')} className="group">
                Get Started Free
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuth !== null}
        mode={showAuth}
        onClose={() => setShowAuth(null)}
      />
    </div>
  );
}

export default App;