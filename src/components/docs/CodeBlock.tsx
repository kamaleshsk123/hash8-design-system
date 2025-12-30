import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/hash8-ui";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "tsx", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("code-block group relative", className)}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-3 top-3 h-7 w-7 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={copyToClipboard}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Copy className="h-3.5 w-3.5" />
        )}
        <span className="sr-only">Copy code</span>
      </Button>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}
