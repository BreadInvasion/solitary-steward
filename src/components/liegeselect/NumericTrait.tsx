import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface NumericTraitProps {
    name: string;
    value: number;
    icon: ReactNode;
}



export const NumericTrait = ({ name, value, icon }: NumericTraitProps) => {
    return (
        <div className="flex flex-row items-center gap-1">
            <p style={{color: value > 0 ? "green" : "red"}}>{value > 0 ? "+" : "-"}{Math.abs(value)}</p>
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        { icon }
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>{ name }</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}