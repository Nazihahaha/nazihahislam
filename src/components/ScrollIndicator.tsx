import { MousePointer2 } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
