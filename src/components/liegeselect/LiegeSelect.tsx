import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LiegeCard from './LiegeCard';
import { BACKGROUNDS, Liege, TRAITS } from './liege-models';
import useWindowDimensions from '../utils/use-window-dimensions';

interface IntroCardTypes {
    selectLiege: () => void;
}

const LIEGES: Liege[] = [
    {
        name: "King Verron Irontooth",
        house: "Cor Vidalis",
        player: "Lazarian",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=450375",
        background: BACKGROUNDS.manOfIndustry,
        allegiance: "thrun",
        isKing: true,
        trait: TRAITS.cultist,
        legitimacy: 4,
        authority: 1,
        intellect: 3,
        fervor: 0,
    },
    {
        name: "Marchioness Elaina Silvia Black",
        house: "Black",
        player: "The GAmeTopians",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=553952",
        background: BACKGROUNDS.northernWarrior,
        allegiance: "thrun",
        isKing: false,
        trait: TRAITS.tactician,
        legitimacy: 3,
        authority: 2,
        intellect: 1,
        fervor: 2,
    },
    {
        name: "Lady Scarlet Fox",
        house: "Fox",
        player: "New Socialist South Africa",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=462838",
        background: BACKGROUNDS.blackguard,
        allegiance: "thrun",
        isKing: false,
        trait: TRAITS.cultist,
        legitimacy: 3,
        authority: 2,
        intellect: 2,
        fervor: 0,
    },
    {
        name: "King Torin Durran",
        house: "Durran",
        player: "Drakonica",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1783293",
        background: BACKGROUNDS.marcherLord,
        allegiance: "sovator",
        isKing: true,
        trait: TRAITS.duelist,
        legitimacy: 5,
        authority: 2,
        intellect: 1,
        fervor: 1,
    },
    {
        name: "Margrave Julian II Befeld",
        house: "Befeld",
        player: "The Borderstate",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1849908",
        background: BACKGROUNDS.greensward,
        allegiance: "sovator",
        isKing: false,
        trait: TRAITS.architect,
        legitimacy: 2,
        authority: 1,
        intellect: 2,
        fervor: 0,
    },
    {
        name: "Viscount Robert de Lutillier",
        house: "Lutillier",
        player: "Ovstylap",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1151127",
        background: BACKGROUNDS.merchantHouse,
        allegiance: "sovator",
        isKing: false,
        trait: TRAITS.scholar,
        legitimacy: 3,
        authority: 1,
        intellect: 2,
        fervor: 0,
    },
    {
        name: "Count Palatine Ludovic Edelmir Valiero",
        house: "Valiero",
        player: "Soviet Chernarus",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=573337",
        background: BACKGROUNDS.manOfIndustry,
        allegiance: "sovator",
        isKing: false,
        trait: TRAITS.architect,
        legitimacy: 2,
        authority: 1,
        intellect: 2,
        fervor: 0,
    },
    {
        name: "Lord Genesis Blue",
        house: "Blessing",
        player: "Ancientania",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1756985",
        background: BACKGROUNDS.blackguard,
        allegiance: "thrun",
        isKing: false,
        trait: TRAITS.scholar,
        legitimacy: 3,
        authority: 2,
        intellect: 2,
        fervor: 1,
    },
    {
        name: "Archduchess Severine Faucher",
        house: "Faucher",
        player: "Cybernetic Socialist Republics",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1299321",
        background: BACKGROUNDS.flagellant,
        allegiance: "thrun",
        isKing: false,
        trait: TRAITS.duelist,
        legitimacy: 3,
        authority: 2,
        intellect: 1,
        fervor: 3,
    },
    {
        name: "High-Prince Herbert Northurnd",
        house: "Northurnd",
        player: "Schwessen-Hellfohen",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1809168",
        background: BACKGROUNDS.cadetBranch,
        allegiance: "sovator",
        isKing: false,
        trait: TRAITS.scholar,
        legitimacy: 5,
        authority: 2,
        intellect: 2,
        fervor: 1,
    },
    {
        name: "Urban Tribune Julia Caenae",
        house: "Caenae",
        player: "Lunas Legion",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=386271",
        background: BACKGROUNDS.antiquarian,
        allegiance: "thrun",
        isKing: false,
        trait: TRAITS.cultist,
        legitimacy: 3,
        authority: 1,
        intellect: 3,
        fervor: 0,
    },
    {
        name: "Duke Sylkaroth Vanserra",
        house: "Helchester",
        player: "Aekaria",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1866920",
        background: BACKGROUNDS.manOfIndustry,
        allegiance: "thrun",
        isKing: false,
        trait: TRAITS.duelist,
        legitimacy: 2,
        authority: 1,
        intellect: 2,
        fervor: 0,
    },
    {
        name: "Earl Harond Rogerik",
        house: "Rogerik",
        player: "Malorossi",
        playerURL: "https://forum.nationstates.net/memberlist.php?mode=viewprofile&u=1789017",
        background: BACKGROUNDS.blackguard,
        allegiance: "thrun",
        isKing: false,
        trait: TRAITS.duelist,
        legitimacy: 3,
        authority: 2,
        intellect: 1,
        fervor: 2,
    }
];

function LiegeSelect({ selectLiege }: IntroCardTypes) {

    const { width } = useWindowDimensions();

    console.log(width);

    const gridCols = width > 885 ? 3 : width > 635 ? 2 : 1;

    const gridClasses: {[numCols: number]: string} = {
        3: 'grid grid-cols-3 overflow-y-auto',
        2: 'grid grid-cols-2 overflow-y-auto',
        1: 'flex flex-col',
    }

  return (
    <div className='flex flex-col items-center gap-12 max-w-full'>
        <div className='flex flex-col gap-4'>
            <h1>The Kingdoms of Eagun</h1>
            <h2>and their Landed Houses</h2>
        </div>
        <div className='flex flex-row justify-center flex-wrap'>
            <Card>
                <CardHeader>
                    <CardTitle>Thrun</CardTitle>
                </CardHeader>
                <CardContent className={gridClasses[gridCols]}>
                    {
                        LIEGES.filter((value) => value.allegiance === "thrun").map((liege) => <LiegeCard selectLiege={()=>{}} liegeInfo={liege}/>)
                    }
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Sovator</CardTitle>
                </CardHeader>
                <CardContent className={gridClasses[gridCols]}>
                    {
                        LIEGES.filter((value) => value.allegiance === "sovator").map((liege) => <LiegeCard selectLiege={()=>{}} liegeInfo={liege}/>)
                    }
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default LiegeSelect