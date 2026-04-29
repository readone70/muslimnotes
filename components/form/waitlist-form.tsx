"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";

export default function WaitlistForm() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("You're in. Early access coming soon.");
                setEmail("");
            } else {
                setMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 relative group w-full">
                <Input
                    type="email"
                    placeholder="Enter your email address..."
                    className="h-12 sm:h-14 pl-4 sm:pl-6 text-sm sm:text-base rounded-xl sm:rounded-2xl bg-white border-zinc-200 focus-visible:ring-zinc-900 transition-shadow w-full disabled:opacity-60"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                />

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium bg-zinc-900 text-white hover:bg-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-zinc-900/20 sm:absolute sm:right-1 sm:top-1 sm:h-12 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Joining...
                        </>
                    ) : (
                        "Join Waitlist"
                    )}
                </Button>
            </form>

            {message && (
                <div className="w-full flex items-center justify-center">
                    <p className={`mt-6 text-sm font-medium ${message.includes("went wrong") ? "text-red-500" : "text-zinc-600"}`}>
                        {message.includes("went wrong") ? "❌" : "✅"} {message}
                    </p>
                </div>
            )}
        </div>
    );
}