"use client";

import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CaretRight } from "@phosphor-icons/react";

type Prompt = {
  title: string;
  description: string;
  icon: string;
};

const PromptSuggestion: React.FC<{ examples: Prompt[] }> = ({ examples }) => {
  return (
    <>
        <div className="mx-auto w-full max-w-3xl">
            <div className="flex justify-between text-sm text-gray-800">
                <div className="mb-4 font-semibold ">
                    Your AI agents
                </div>
                <div className="flex items-center mb-4 font-semibold gap-2">
                    All agents  <CaretRight size={16} />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {examples.map((item, index) => (
                <Card key={index} className="py-5">
                <CardHeader className="grid grid-cols-[auto_1fr]">
                    <div className="flex h-10 w-10 mr-3 items-center justify-center rounded-xl bg-muted text-xl">
                        <span aria-hidden>{item.icon}</span>
                    </div>
                    <div>
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                    </div>
                </CardHeader>
                </Card>
            ))}
            </div>
        </div>
    </>
    
);
};

export default PromptSuggestion;
