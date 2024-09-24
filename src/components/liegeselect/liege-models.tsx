export interface MechanicalEffects {
    dLegitimacy?: number;
    dAuthority?: number;
    dIntellect?: number;
    dFervor?: number;
    dMartialProwess?: number;
    dStartingFunds?: number;
    dIncome?: number;
    dTrainingTime?: number;
    gainPermanent?: string;
    losePermanent?: string;
    gainArmy?: string;
    loseArmy?: string;
    faithSuspicion?: boolean;
    faithForsaken?: boolean;
    darkFate?: boolean;
    occultDealings?: boolean;
    dScience?: number;
    dCulture?: number;
    dFaith?: number;
}

export interface StartingChoice extends MechanicalEffects {
    name: string;
    description?: string;
}

export interface Liege {
    name: string;
    house: string;
    player: string;
    playerURL: string;
    background: StartingChoice;
    allegiance: 'thrun' | 'sovator';
    isKing: boolean;
    trait: StartingChoice;
    legitimacy: number;
    authority: number;
    intellect: number;
    fervor: number;
}

export const BACKGROUNDS: { [id: string]: StartingChoice } = {
    antiquarian: {
        name: "Antiquarian",
        description: "The old mysteries of the Havanian Empire are closer to your ken then many, as your lineage is old and distinguished.",
        dIntellect: 1,
        dFervor: -1,
        faithSuspicion: true,
        gainPermanent: "Latin Text",
    },
    marcherLord: {
        name: "Marcher Lord",
        description: "New cut from hard cloth, but your House stands stalwart against her old foes, watching over a strategic pass or crossroads.",
        losePermanent: "Random Rural Estate",
        gainPermanent: "Border Rural Estate (-25 Income)",
        dAuthority: 1,
        dMartialProwess: 1,
        gainArmy: "Spear Levy",
    },
    merchantHouse: {
        name: "Merchant House",
        description: "Coin is king, and war is bad for business. Your House has held to this principle since the Empire fell, and profited from it.",
        dFervor: -1,
        dMartialProwess: -1,
        dStartingFunds: 500,
    },
    blackguard: {
        name: "Blackguard",
        description: "Some call you disreputable. Hell, some call you bandit. But your forefathers didn't get where they are today by caring what other people thought, and the lands you possess have necessitated less than traditional methods of raising funds for the House.",
        dAuthority: 1,
        losePermanent: "Random Rural Estate, Flatland",
        gainPermanent: "Blackguard Forest (+100 Income)",
        gainArmy: "Brigand Band",
    },
    northernWarrior: {
        name: "Northern Warrior",
        description: "The shield that guards the realms of men - well, actually just the realms of civilized men. When the Empire fell, your people were border guards, tasked with the impossible charge of holding back the tides of the North. They executed their duty with more mien than most, despite how it beggared them.",
        dAuthority: 1,
        dFervor: 1,
        losePermanent: "Random Rural Estate",
        gainPermanent: "Northern Rural Estate (Palisade)",
        gainArmy: "Archers",
        dStartingFunds: -500,
    },
    greensward: {
        name: "Greensward",
        description: "The idyll sings in your blood. Far from the wars of the men of the central plains, your House is less proud than many, but has enjoyed quiet peace for many years, which is not to be despised.",
        dIntellect: 1,
        dFervor: -1,
        dLegitimacy: -1,
        losePermanent: "Random Rural Estate",
        gainPermanent: "Inland Rural Estate",
    },
    apostate: {
        name: "Apostate",
        description: "The Faith holds no charm for you, and your people are of a similar mind to your own predilections. Perhaps you hold to the Old Gods. Perhaps to something new. At any rate, many consider you impious, even danger. But you know the truth.",
        dFervor: 1,
        dIntellect: 1,
        faithForsaken: true,
    },
    manOfIndustry: {
        name: "Man of Industry",
        description: "Good earth, stout iron. These things your House has always valued more than blood or coin. What matters, you have, and you care little for more prurient affairs.",
        dFervor: -1,
        dIntellect: 1,
        dLegitimacy: -1,
        losePermanent: "Random Rural Estate",
        gainPermanent: "Random Mining Town",
    },
    flagellant: {
        name: "Flagellant",
        description: " Piety is all - the Gods rule our lives, and you care more for their favor than the concerns of the petty mundane. In your dreams you are driven onward, to do what must be done, and for generations your kinsmen have done likewise. A glorious purpose is given to you.",
        dFervor: 2,
        dAuthority: 1,
        gainPermanent: "Chapel",
        loseArmy: "Men-at-Arms",
        gainArmy: "Spear Militia",
        dStartingFunds: -500,
    },
    atoner: {
        name: "Atoner",
        description: "For ancient sins long forgotten your House has suffered, their duty unwavering and their iniquities still not blotted out. A melancholy air pervades your lands, causing strangers to shun them and few to linger. When will you have suffered enough to be free of this burden? Only the Gods can say.",
        dFervor: 1,
        dMartialProwess: 1,
        dLegitimacy: -2,
        dTrainingTime: -1,
        darkFate: true,
    },
    cadetBranch: {
        name: "Cadet Branch",
        description: "The Crown? Yes, that could have been yours. But for an accident of birth, or, some whisper, machinations of a usurper. Perhaps you have come to accept this reality. Perhaps you still yearn for what should be yours, by right. The histories have yet to be fully written, after all.",
        dAuthority: 1,
        dLegitimacy: 2,
    }
}

export const TRAITS: { [id: string]: StartingChoice } = {
    tactician: {
        name: "Tactician",
        description: "If elected as commander for one of the sides in a battle, that side may use Military Commander bonuses.",
    },
    drillmaster: {
        name: "Drillmaster",
        description: "+1 Morale to Battalions",
    },
    sailor: {
        name: "Sailor",
        description: "+25 Nobles income to Provinces next to the Sea or a River",
    },
    investor: {
        name: "Investor",
        dIncome: 100,
    },
    architect: {
        name: "Architect",
        description: "May construct one building at a 10% discount per Season. Effect may be loaned.",
    },
    pioneer: {
        name: "Pioneer",
        gainPermanent: "+1 Good from a Province",
    },
    cultist: {
        name: "Cultist",
        dIntellect: 1,
        dFervor: -1,
        occultDealings: true,
    },
    scholar: {
        name: "Scholar",
        dScience: 1,
        dIntellect: 1,
    },
    artist: {
        name: "Artist",
        dCulture: 1,
        dAuthority: 1,
    },
    priest: {
        name: "Priest",
        dFaith: 1,
        dFervor: 1,
    },
    explorer: {
        name: "Explorer",
        description: "May Explore gray Provinces. Expeditions cost 2000 Nobles each and takes 3 turns.",
    },
    duelist: {
        name: "Duelist",
        description: "50% less likely to be injured in battle",
        dMartialProwess: 2,
    },
}