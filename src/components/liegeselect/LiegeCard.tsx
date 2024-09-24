import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Castle, Crown, ScrollText, Shield, UserPen, VenetianMask } from 'lucide-react'
import { Liege } from './liege-models';
import StartingChoiceHover from './StartingChoiceHover';

interface LiegeCardProps {
    liegeInfo: Liege;
    selectLiege: () => void;
}

function LiegeCard({ liegeInfo, selectLiege }: LiegeCardProps) {

  return (
    <Card onClick={selectLiege} className="w-64 h-80">
        <CardHeader>
            { liegeInfo.isKing ? <Castle size={48} className={"self-center"} /> : <Shield size={48} className={"self-center"}></Shield>}
            <CardTitle>House { liegeInfo.house }</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
            <div className="flex flex-row justify-between">
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Crown size={16} className='h-6'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Head of House</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <span className={"text-right w-32"}> { liegeInfo.name }</span>
            </div>
            <div className="flex flex-row justify-between">
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <UserPen size={16} className='h-6'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Player</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <span className={"text-right w-32"}> <a href={liegeInfo.playerURL}>{ liegeInfo.player }</a></span>
            </div>
            <div className="flex flex-row justify-between">
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ScrollText size={16} className='h-6'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Background</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <StartingChoiceHover choice={liegeInfo.background}>
                    <span className={"text-right w-32 underline"}> { liegeInfo.background.name }</span>
                </StartingChoiceHover>
            </div>
            <div className="flex flex-row justify-between">
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <VenetianMask size={16} className='h-6'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Trait</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <StartingChoiceHover choice={liegeInfo.trait}>
                    <span className={"text-right w-32 underline"}> { liegeInfo.trait.name }</span>
                </StartingChoiceHover>
            </div>
        </CardContent>
    </Card>
  )
}

export default LiegeCard