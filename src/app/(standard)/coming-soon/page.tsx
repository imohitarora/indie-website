"use client";
import { useState } from 'react';
import { Lock, Rocket } from "lucide-react";
import { HeroIcon } from "./hero-icon";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'waitlist');
      formData.append('email', email);

      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper>
      <style jsx global>{`
        :root {
          --custom-color: #178998;
        }
      `}</style>
      <main>
        <div className="relative container mx-auto px-4 min-h-screen flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center py-16 sm:py-18">
            <div className="w-full max-w-3xl mx-auto space-y-16">
              <div className="space-y-8">
                <div className="flex justify-center">
                  <HeroIcon />
                </div>
                <div className="space-y-6 text-center">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--custom-color)] to-[var(--custom-color)]">
                      Something amazing
                    </span>
                    <br />
                    <span className="text-gray-900">is coming</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                    We&apos;re crafting something special and it&apos;s almost ready.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--custom-color)]-50 rounded-full border border-[var(--custom-color)]-100">
                  <Lock className="w-5 h-5 text-[var(--custom-color)]" />
                  <span className="text-sm font-medium text-[var(--custom-color)]">Invite-only access</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--custom-color)]-50 rounded-full border border-[var(--custom-color)]-100">
                  <Rocket className="w-5 h-5 text-[var(--custom-color)]" />
                  <span className="text-sm font-medium text-[var(--custom-color)]">Early access</span>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto space-y-4">
                {/* Hidden form for Netlify */}
                <form name="waitlist" data-netlify="true" hidden>
                  <input type="email" name="email" />
                </form>

                {/* Actual form */}
                <form
                  onSubmit={handleSubmit}
                  name="waitlist"
                  method="POST"
                  data-netlify="true"
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input type="hidden" name="form-name" value="waitlist" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-[var(--custom-color)]-100 bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--custom-color)] focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--custom-color)] to-[var(--custom-color)] text-white font-medium hover:from-[var(--custom-color)] hover:to-[var(--custom-color)] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>

                {submitStatus === 'success' && (
                  <p className="text-sm text-center text-green-600">
                    Thanks for joining! We'll notify you when we launch.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-center text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}

                <p className="text-sm text-center text-gray-500">
                  Join our exclusive waitlist to be notified when we launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SectionWrapper>
  );
}