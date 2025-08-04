"use client";

import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function WeatherTips({ temperature, city, desc }) {
    const [tips, setTips] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getTips = async () => {
            const prompt = `Suggest a personalized lifestyle tip based on the current temperature that is ${temperature}°C in the user's city that is ${city} and the base description that is ${desc}. Make it actionable, engaging, and tied to real-world local experience. For example, suggest cozy indoor ideas for rainy evenings, refreshing outdoor activities on sunny mornings, or mood-boosting habits during cloudy days. Keep it concise, warm, and helpful.`;

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
                console.log(result);
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
        <article className="whitespace-pre-wrap break-words overflow-x-hidden max-w-7xl">
            <Markdown>{tips}</Markdown>
        </article>
    );
}
