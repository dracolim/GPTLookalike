'use client';

import PromptSuggestion from "./PromptSuggestion";
import { TextAnimate } from "@/components/ui/text-animate"

const examples = [
  {
    title: "Cold Email Template Expert",
    description:
      "Helped many people before to create cold email tamplates for various purposes",
    icon: "✉️",
  },
  {
    title: "YouTube Content Writer",
    description: "Create youtube content with this ai",
    icon: "🎬",
  },
  { title: "Pro Coder", description: "Code with this Ai Pro", icon: "💻" },
  {
    title: "Blog Image Generator",
    description: "Generate image with this Ai producer",
    icon: "🖼️",
  },
];

const LandingPageView: React.FC = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="mb-12 text-xl">
            <TextAnimate className="flex justify-center font-bold text-gray-700" text="Hey, I&rsquo;m TypingMind." type="calmInUp"/>
            <TextAnimate className = "text-gray-400 font-bold" text="How can I help you today?" type="calmInUp" />
        </div>
    

      <PromptSuggestion examples={examples} />
    </div>
  );
};

export default LandingPageView;
