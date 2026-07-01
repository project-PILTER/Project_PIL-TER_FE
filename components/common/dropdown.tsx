import { DropdownMenu ,DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { DropdownOption } from "@/types/ui.type";

interface DropdownProps {
  options: DropdownOption[];
  align?: "start" | "center" | "end";
  trigger?: React.ReactNode;
}

export default function Dropdown({options, align = "end", trigger}:DropdownProps) {
  return(
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ? (trigger) : (
          <Button variant="ghost" size="icon" className="rounded-full w-9 h-9">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
            <span className="sr-only">옵션 더보기</span>
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align={align} className="w-36 rounded-xl p-2 shadow-md">
        {options.map((option, index) => (
          <DropdownMenuItem key={index} onClick={option.onClick}>
            {option.icon}
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}