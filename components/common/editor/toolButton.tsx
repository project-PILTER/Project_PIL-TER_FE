import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ToolButtonProps } from "@/types/ui.type";

export default function ToolButton({
  tooltip,
  onClick,
  children,
  className
}: ToolButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className={cn("rounded-md p-2 hover:bg-gray-100 transition-colors", className)} onClick={onClick}>
          {children}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
