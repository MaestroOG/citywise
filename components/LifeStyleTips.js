"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function WeatherTips({ temperature }) {
    const [tips, setTips] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getTips = async () => {
            const prompt = `Give me health, clothing, and activity lifestyle tips in markdown format for a human living in temperature: ${temperature}°C`;

            // Wait for the puter SDK to load globally
            const checkPuter = () =>
                new Promise((resolve) => {
                    const interval = setInterval(() => {
                        if (window.puter) {
                            clearInterval(interval);
                            resolve();
                        }
                    }, 100);
                });

            await checkPuter();

            try {
                setLoading(true)
                const res = await window.puter.ai.chat(prompt);
                const result = res.message.content;

                setTips(result); // depends on the response structure
            } catch (err) {
                setTips("Failed to load tips.");
                console.error("AI Error:", err);
            } finally {
                setLoading(false)
            }
        };

        getTips();
    }, [temperature]);

    if (loading) {
        return <p>Loading....</p>
    }

    return (
        <article className="whitespace-pre-wrap break-words overflow-x-hidden">
            <Markdown>{tips}</Markdown>
        </article>
    );
}
