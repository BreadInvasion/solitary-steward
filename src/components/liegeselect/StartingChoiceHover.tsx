import { ReactNode } from "react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { StartingChoice } from "./liege-models"
import { Beaker, BicepsFlexed, Church, Coins, Crown, HandCoins, Lightbulb, Paintbrush, ShieldEllipsis, Sword, Users } from "lucide-react"
import { NumericTrait } from "./NumericTrait"

interface StartingChoiceHoverProps {
    children: ReactNode,
    choice: StartingChoice,
}

interface NumericTraitInfo {
    id: string;
    name: string;
    icon: ReactNode;
}

const NUMERIC_TRAITS: NumericTraitInfo[] = [
    {
        id:  "dLegitimacy",
        name: "Legitimacy",
        icon: <Crown size={16} />,
    },
    {
        id:  "dIntellect",
        name: "Intellect",
        icon: <Lightbulb size={16} />,
    },
    {
        id:  "dAuthority",
        name: "Authority",
        icon: <Sword size={16} />,
    },
    {
        id:  "dFervor",
        name: "Fervor",
        icon: <Users size={16} />,
    },
    {
        id:   "dMartialProwess",
        name: "Martial Prowess",
        icon: <BicepsFlexed size={16} />,
    },
    {
        id:   "dStartingFunds",
        name: "Starting Funds",
        icon: <Coins size={16} />,
    },
    {
        id:       "dIncome",
        name: "Base Income",
        icon: <HandCoins size={16} />,
    },
    {
        id:   "dTrainingTime",
        name: "Training Time",
        icon: <ShieldEllipsis size={16} />,
    },
    {
        id:  "dScience",
        name: "Science (to Kingdom)",
        icon: <Beaker size={16} />,
    },
    {
        id:  "dCulture",
        name: "Culture (to Kingdom)",
        icon: <Paintbrush size={16} />,
    },
    {
        id:  "dFaith",
        name: "Faith (to Kingdom)",
        icon: <Church size={16} />,
    },
]

function getNumericTraits(choice: StartingChoice): ReactNode[] {
    return NUMERIC_TRAITS.filter(({id}) => choice[id] !== undefined).map(({id, name, icon}) => {
        return <NumericTrait name={name} value={choice[id]} icon={icon} />;
    });
}

function traitsWithSeparator(choice: StartingChoice): ReactNode[] {
    const traits = getNumericTraits(choice);
    return traits.map((trait, index) => {
        return index !== traits.length - 1 ? (
            <>
                { trait }
                <p>|</p>
            </>
        ) : trait;
    })
}

function StartingChoiceHover({ children, choice }: StartingChoiceHoverProps) {
    return (
        <HoverCard openDelay={100} closeDelay={50}>
            <HoverCardTrigger asChild>
                { children }
            </HoverCardTrigger>
            <HoverCardContent className="min-w-16 w-fit max-w-80 flex flex-col items-start text-left gap-1">
                <p className="font-bold">{ choice.name }</p>
                { choice.description !== undefined && 
                    <p>{ choice.description }</p>
                }
                <div className="flex flex-row gap-2">
                    { traitsWithSeparator(choice) }
                </div>
                { choice.losePermanent !== undefined && 
                    <p><span style={{color: "red"}}>Lose:</span> {choice.losePermanent}</p>
                }
                { choice.gainPermanent !== undefined && 
                    <p><span style={{color: "green"}}>Gain:</span> {choice.gainPermanent}</p>
                }
                { choice.loseArmy !== undefined && 
                    <p><span style={{color: "red"}}>Lose Battalion:</span> {choice.loseArmy}</p>
                }
                { choice.gainArmy !== undefined && 
                    <p><span style={{color: "green"}}>Gain Battalion:</span> {choice.gainArmy}</p>
                }
                { choice.faithSuspicion === true &&
                    <p style={{color: "orange"}}>The Faith is suspicious of your intentions. Chapels and Monasteries cost 500 more Nobles to construct.</p>
                }
                { choice.faithForsaken === true &&
                    <p style={{color: "orange"}}>New provinces may resist your lordship, and Legitimacy may be difficult to earn. Gain no benefits from Faith unless you found a Faith of your own.</p>
                }
                { choice.darkFate === true &&
                    <p style={{color: "red"}}>A dark fate lays over your House.</p>
                }
                { choice.occultDealings === true &&
                    <p style={{color: "chartreuse"}}>Secret options will be available to you during events.</p>
                }
            </HoverCardContent>
        </HoverCard>
    )
}

export default StartingChoiceHover