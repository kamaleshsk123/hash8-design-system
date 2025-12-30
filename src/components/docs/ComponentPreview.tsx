import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ children, className }: ComponentPreviewProps) {
  return (
    <div className={cn("component-preview", className)}>
      {children}
    </div>
  );
}
