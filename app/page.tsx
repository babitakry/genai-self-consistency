import { runGeminiTest } from "@/ai/gemini";
import { runGroqTest } from "@/ai/groq";
import { runMistralTest } from "@/ai/mistral";
import Image from "next/image";

export default async function Home() {
  const res = await runGroqTest("Explain what is LLM in 50 words.");

  console.log("Logged in Home:", res);
  return (
    <div>
      <h1>Self Consistency App</h1>
    </div>
  );
}
