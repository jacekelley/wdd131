const easyQuestions = [
    {
        question: "Who is the main hero of The Legend of Zelda series?",
        options: ["Link", "Zelda", "Ganon", "Impa"],
        answer: "Link"
    },
    {
        question: "Who is the princess that Link is often tasked with rescuing?",
        options: ["Ruto", "Zelda", "Impa", "Nabooru"],
        answer: "Zelda"
    },
    {
        question: "What color is Link's traditional tunic in most games?",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: "Green"
    },
    {
        question: "What is the name of the main kingdom where most Zelda games take place?",
        options: ["Labrynna", "Hyrule", "Termina", "Koholint"],
        answer: "Hyrule"
    },
    {
        question: "Who is the recurring main antagonist of the series?",
        options: ["Vaati", "Darunia", "Ganon", "Zelda"],
        answer: "Ganon"
    },
    {
        question: "Which item is used to permanently increase Link's maximum health?",
        options: ["Bow", "Heart Container", "Bomb", "Boomerang"],
        answer: "Heart Container"
    },
    {
        question: "What is the name of Link's iconic horse?",
        options: ["Epona", "Agro", "Shadowfax", "Phantom"],
        answer: "Epona"
    },
    {
        question: "What is the physical form of the Triforce?",
        options: ["Three gems", "A magic shield", "Three golden triangles", "A single sword"],
        answer: "Three golden triangles"
    },
    {
        question: "Which aquatic race in Hyrule is known for being able to breathe underwater?",
        options: ["Hylians", "Rito", "Gerudo", "Zora"],
        answer: "Zora"
    },
    {
        question: "What is the name of the fairy who accompanies Link in Ocarina of Time?",
        options: ["Midna", "Navi", "Tatl", "Fi"],
        answer: "Navi"
    },
    {
        question: "What color is a standard rupee that is worth one unit?",
        options: ["Blue", "Purple", "Green", "Red"],
        answer: "Green"
    },
    {
        question: "Which common dungeon item is consumed to unlock locked doors?",
        options: ["Small Key", "Bow", "Boomerang", "Bottle"],
        answer: "Small Key"
    },
    {
        question: "Which game first introduced Link as the 'Hero of Time'?",
        options: ["The Wind Waker", "Majora's Mask", "Ocarina of Time", "Twilight Princess"],
        answer: "Ocarina of Time"
    },
    {
        question: "What is the primary currency used in the Zelda series?",
        options: ["Gems", "Coins", "Rupees", "Gold"],
        answer: "Rupees"
    },
    {
        question: "Which magical rod is traditionally used to cast fire and light torches?",
        options: ["Bow", "Boomerang", "Hookshot", "Fire Rod"],
        answer: "Fire Rod"
    },
    {
        question: "What is the name of the corrupted version of Hyrule in A Link to the Past?",
        options: ["Termina", "Labrynna", "Dark World", "Koholint"],
        answer: "Dark World"
    },
    {
        question: "In which game does Link gain the ability to transform into a wolf?",
        options: ["Twilight Princess", "Majora's Mask", "Ocarina of Time", "The Wind Waker"],
        answer: "Twilight Princess"
    },
    {
        question: "In Breath of the Wild, what are the four giant mechanical machines used to fight Ganon called?",
        options: ["Divine Beasts", "Guardians", "Zonai Constructs", "Titans"],
        answer: "Divine Beasts"
    },
    {
        question: "What is the name of the small, leaf-masked forest spirits that hide all over Hyrule?",
        options: ["Koroks", "Kokiri", "Deku", "Fairies"],
        answer: "Koroks"
    },
    {
        question: "Which race of people live in the rocky, volcano-filled area of Death Mountain?",
        options: ["Hylians", "Zora", "Gorons", "Gerudo"],
        answer: "Gorons"
    },
    {
        question: "What legendary item does Link use to travel across the sea in The Wind Waker?",
        options: ["A Raft", "The King of Red Lions", "The Epona Boat", "A Zora Scale"],
        answer: "The King of Red Lions"
    },
    {
        question: "The Triforce is made up of three parts: Wisdom, Courage, and which other piece?",
        options: ["Power", "Strength", "Justice", "Magic"],
        answer: "Power"
    },
    {
        question: "What is the name of the desert-dwelling race of women that Ganondorf originally belonged to?",
        options: ["Sheikah", "Gerudo", "Twili", "Rito"],
        answer: "Gerudo"
    },
    {
        question: "Which of these is a common low-level enemy that looks like a small pig or goblin?",
        options: ["Bokoblin", "Creeper", "Slime", "Goomba"],
        answer: "Bokoblin"
    },
    {
        question: "In 'The Legend of Zelda: Breath of the Wild', what is the name of the ancient device Link uses as a map and tool?",
        options: ["The Sheikah Slate", "The Game Boy", "The Pokédex", "The Magic Mirror"],
        answer: "The Sheikah Slate"
    },
    {
        question: "Who helps Link by giving him a sword in the very first 'The Legend of Zelda' game?",
        options: ["A Fairy", "Princess Zelda", "A Talking Boat", "An Old Man in a cave"],
        answer: "An Old Man in a cave"
    },
    {
        question: "Which of these is the name of the giant owl who guides Link in several games?",
        options: ["Falco", "Kaepora Gaebora", "Hedwig", "Hooty"],
        answer: "Kaepora Gaebora"
    },
    {
        question: "What do Link's 'Rupees' look like?",
        options: ["Paper Money", "Small Shells", "Colorful Gems", "Round Metal Coins"],
        answer: "Colorful Gems"
    },
    {
        question: "What is the name of the massive, sentient tree that often guards the forest and helps Link?",
        options: ["The Great Deku Tree", "The Whispering Willow", "The Yggdrasil", "The Mana Tree"],
        answer: "The Great Deku Tree"
    },
    {
        question: "What kind of small, winged creatures can Link catch in a bottle to be automatically revived when his health reaches zero?",
        options: ["Bees", "Butterflies", "Fireflies", "Fairies"],
        answer: "Fairies"
    },
];



const hardQuestions = [

    {
        question: "According to Tears of the Kingdom, what is the forbidden act of swallowing a Secret Stone called?",
        options: ["Ascension", "Draconification", "Soul-Binding", "Primal Evolution"],
        answer: "Draconification"
    },

    {
        question: "In Ocarina of Time era lore, the Sheikah symbol features a teardrop. According to the manga, what event does this tear represent?",
        options: ["The death of Hylia", "The betrayal of the Royal Family", "The flooding of Hyrule", "The loss of the Triforce"],
        answer: "The betrayal of the Royal Family"
    },

    {
        question: "In Ocarina of Time, catching a 'Big Poe' in a bottle is worth how many points on the Ghost Shop's membership card?",
        options: ["10 Points", "50 Points", "100 Points", "500 Points"],
        answer: "100 Points"
    },

    {
        question: "What is the name of the isolated island in Breath of the Wild where Link must undergo a survival trial without his gear?",
        options: ["Mekar Island", "Tingel Island", "Eventide Island", "Lurelin Island"],
        answer: "Eventide Island"
    },

    {
        question: "In Twilight Princess, the Hero's Shade is confirmed to be the spirit of which previous Link?",
        options: ["The Hero of Skies", "The Hero of Time", "The Hero of Winds", "The Legendary Hero"],
        answer: "The Hero of Time"
    },

    {
        question: "In the original GameCube version of The Wind Waker, how many total slots are available in Link's Delivery Bag?",
        options: ["4 Slots", "8 Slots", "9 Slots", "12 Slots"],
        answer: "8 Slots"
    },

    {
        question: "In Tears of the Kingdom, who was the first King of Hyrule who founded the kingdom alongside Queen Sonia?",
        options: ["King Rhoam", "King Rauru", "King Daphnes", "King Gustaf"],
        answer: "King Rauru"
    },

    {
        question: "According to the official timeline, what specific event leads to the 'Downfall Timeline' branch?",
        options: ["Link is defeated by Ganon", "Zelda is captured early", "The Triforce is destroyed", "The Master Sword breaks"],
        answer: "Link is defeated by Ganon"
    },

    {
        question: "In Skyward Sword, what was the original name of the Master Sword before it was tempered by the three Sacred Flames?",
        options: ["The White Sword", "The Goddess Sword", "The Skyward Blade", "The Picori Blade"],
        answer: "The Goddess Sword"
    },

    {
        question: "In Twilight Princess, how many 'Hidden Skills' does the Hero's Shade teach Link throughout the game?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },

    {
        question: "In Tears of the Kingdom, what is the specific name of the material required to upgrade the 'Battery' capacity at a Crystal Refinery?",
        options: ["Zonai Charges", "Zonaite", "Crystallized Charges", "Large Zonaite"],
        answer: "Crystallized Charges"
    },

    {
        question: "In The Wind Waker, how many 'Triforce Shards' must Link salvage from the bottom of the ocean in the original GameCube version?",
        options: ["3", "8", "9", "10"],
        answer: "8"
    },

    {
        question: "In Breath of the Wild, what is the name of the unique, glowing horse-like creature that can be mounted but not registered at a stable?",
        options: ["Lord of the Mountain", "Epona's Ghost", "Stalhorse", "Spirit Steed"],
        answer: "Lord of the Mountain"
    },

    {
        question: "In Majora's Mask, what is the name of the leader of the Gerudo Pirates found in Great Bay?",
        options: ["Nabooru", "Aveil", "Seven", "Irene"],
        answer: "Aveil"
    },

    {
        question: "In Twilight Princess, what is the name of Telma's cat who assists Wolf Link in reaching the castle?",
        options: ["Gena", "Louise", "Midna", "Renado"],
        answer: "Louise"
    },

    {
        question: "In Tears of the Kingdom, what is the name of the Hudson Construction employee found supporting signs across Hyrule?",
        options: ["Bolson", "Karson", "Addison", "Greyson"],
        answer: "Addison"
    },

    {
        question: "Which mask in Majora's Mask allows Link to perform a dance that makes the Rosa Sisters follow his lead?",
        options: ["Troupe Leader's Mask", "Kamaro's Mask", "Dancer's Mask", "Postman's Hat"],
        answer: "Kamaro's Mask"
    },

    {
        question: "What is the name of the monster-based currency Link earns by trading parts to Kilton in Breath of the Wild?",
        options: ["Bokoblin Coins", "Mon", "Malice Shards", "Rupoors"],
        answer: "Mon"
    },

    {
        question: "Which Forest Temple boss in Ocarina of Time can have its projectiles reflected by an Empty Bottle?",
        options: ["Barinade", "Phantom Ganon", "Volvagia", "Twinrova"],
        answer: "Phantom Ganon"
    },

    {
        question: "In Twilight Princess, how many Poe Souls must Link collect in total to fully restore Jovani to human form?",
        options: ["20", "50", "60", "100"],
        answer: "60"
    },

    {
        question: "In The Wind Waker, what visual cue signifies that Link can perform a 'Parry Attack'?",
        options: ["A red exclamation mark", "A vibrating controller", "A flashing green 'A' button", "A blue circle around the enemy"],
        answer: "A flashing green 'A' button"
    },

    {
        question: "In Twilight Princess, what is the side effect of wearing the Magic Armor when the player has zero Rupees?",
        options: ["The armor breaks", "He becomes extremely heavy and slow", "He begins to lose health rapidly", "The armor disappears from his inventory"],
        answer: "He becomes extremely heavy and slow"
    },

    {
        question: "What is the name of the powerful, two-handed, unbreakable sword found in Ocarina of Time?",
        options: ["Giant's Knife", "Master Sword", "Biggoron's Sword", "Gilded Sword"],
        answer: "Biggoron's Sword"
    },

    {
        question: "What is the final reward for completing the multi-day Anju and Kafei side quest in Majora's Mask?",
        options: ["The Couple's Mask", "The Sun Mask", "The Moon Mask", "The Wedding Ring"],
        answer: "The Couple's Mask"
    },

    {
        question: "Which Zonai device in Tears of the Kingdom consumes energy to stay fixed at its current coordinates in mid-air?",
        options: ["Stabilizer", "Hover Stone", "Rocket", "Stake"],
        answer: "Hover Stone"
    },

    {
        question: "Which item does Link use in The Wind Waker to latch onto Valoo's tail during the Gohma boss fight?",
        options: ["Hookshot", "Clawshot", "Boomerang", "Grappling Hook"],
        answer: "Grappling Hook"
    },

    {
        question: "What is the name of the golden reward given to Link for finding all 900 Korok Seeds in Breath of the Wild?",
        options: ["Hestu's Golden Maraca", "Hestu's Gift", "The Korok Crown", "Unlimited Stamina"],
        answer: "Hestu's Gift"
    },

    {
        question: "What is the correct spelling of the recurring chicken-like creatures in the Zelda series?",
        options: ["Cuckoo", "Cucco", "Cukko", "Chuchu"],
        answer: "Cucco"
    },

    {
        question: "What is the official name of the character that resides in the toilet at the Stock Pot Inn in Majora's Mask?",
        options: ["Akat", "???", "...", "Hand-kun"],
        answer: "???"
    },

    {
        question: "Who is the leader of the Yiga Clan encountered during the 'Autobuild' questline in Tears of the Kingdom?",
        options: ["Master Kohga", "Sooga", "Astor", "Maz Koshia"],
        answer: "Master Kohga"
    },
    {
        question: "How many shrines are there in Zelda Tears of the Kingdom?",
        options: ["152", "120", "100", "200"],
        answer: "152"
    },
    {
        question: "In the 'Downfall Timeline', what is the official name of the conflict where the Seven Sages sealed the Sacred Realm because no hero appeared to stop Ganon?",
        options: ["The Imprisoning War", "The Great Calamity", "The Sacred War", "The Sealing War"],
        answer: "The Imprisoning War"
    },
    {
        question: "In 'Majora's Mask', what are the names of the four giants who guard the four regions of Termina?",
        options: ["The Giants do not have names mentioned within the game", "Darmani, Mikau, Lulu, and Deku butler", "Din, Nayru, Farore, and Hylia", "Odolwa, Goht, Gyorg, and Twinmold"],
        answer: "The Giants do not have names mentioned within the game"
    },
    {
        question: "Which race in 'Twilight Princess' lives in the City in the Sky and is said to be even closer to the gods than the Hylians ?",
        options: ["The Rito", "The Oocca", "The Zonai", "The Loftwings"],
        answer: "The Oocca"
    },
    {
        question: "In 'Ocarina of Time', what is the name of the mask that allows Link to hear the thoughts of Gossip Stones?",
        options: ["Stone Mask", "Mask of Truth", "Keaton Mask", "Lens of Truth"],
        answer: "Mask of Truth"
    },
    {
        question: "In 'The Legend of Zelda: Skyward Sword', what is the name of the massive whale-like spirit that guards the skies and protects the Song of the Hero?",
        options: ["Oshus", "Levias", "Jabu-Jabu", "The Wind Fish"],
        answer: "Levias"
    },
    {
        question: "In 'The Legend of Zelda: Tears of the Kingdom', which Zonai secret stone belongs to Mineru?",
        options: ["The Secret Stone of Light", "The Secret Stone of Spirit", "The Secret Stone of Shadow", "The Secret Stone of Time"],
        answer: "The Secret Stone of Spirit"
    },
    {
        question: "In 'Majora's Mask', what is the name of the specific song that Link must play to prove his 'royalty' to the Deku King and gain access to the Woodfall Temple?",
        options: ["New Wave Bossa Nova", "Elegy of Emptiness", "Song of Healing", "Sonata of Awakening"],
        answer: "Sonata of Awakening"
    },
    {
        question: "In 'Twilight Princess', who is the only individual in the Light World(besides Link) who is able to see and interact with Midna in her imp form without her hiding in the shadows?",
        options: ["Ilia", "Telma", "Renado", "Princess Zelda"],
        answer: "Princess Zelda"
    },
    {
        question: "In 'The Wind Waker', what is the name of the island where Link must go to find the Powerlings (Power Bracelets) inside a volcano?",
        options: ["Dragon Roost Island", "Ice Ring Isle", "Fire Mountain", "Mount Hylia"],
        answer: "Fire Mountain"
    },
    {
        question: "In 'Skyward Sword', what is the name of the ancient robot who is the 'Captain' of the Sandship in Lanayru Desert?",
        options: ["Gondo", "Scrapper", "Lanayru", "Skipper"],
        answer: "Skipper"
    },
    {
        question: "In 'The Legend of Zelda: Twilight Princess', what is the name of the village inhabited by the last member of the tribe that guarded the Royal Family?",
        options: ["Lurelin Village", "Ordon Village", "Kakariko Village", "Hidden Village"],
        answer: "Hidden Village"
    },
    {
        question: "Which race was Link raised as at the beginning of Ocarina of Time?",
        options: ["Kokiri", "Goron", "Hylian", "Rito"],
        answer: "Kokiri"
    },
    {
        question: "In 'The Legend of Zelda: Ocarina of Time', what is the name of the 'other' composer brother who, along with his brother Sharp, wrote the 'Sun's Song'?",
        options: ["Natural", "Crescendo", "Minor", "Flat"],
        answer: "Flat"
    },
    {
        question: "In 'Twilight Princess', the 'Ancient Sky Book' is written in a specific language that Link must help restore. What is the name of this language?",
        options: ["Hylian (Ancient)", "Zonai", "Sky Writing", "Gerudo Typology"],
        answer: "Sky Writing"
    },
    {
        question: "In 'The Wind Waker', what is the name of the specific island where Link must go to receive the 'Fire and Ice Arrows' from the Queen of Fairies?",
        options: ["Mother and Child Isles", "Star Belt Archipelago", "Forest Haven", "Dragon Roost Island"],
        answer: "Mother and Child Isles"
    },
    {
        question: "In 'The Legend of Zelda: Tears of the Kingdom', what is the name of the Sage of Lightning?",
        options: ["Buliara", "Riju", "Urbosa", "Patricia"],
        answer: "Riju"
    },
    {
        question: "In 'Link's Awakening', what is the name of the wind-fish's dream-world that Link is trapped in?",
        options: ["Holodrum", "Labrynna", "Termina", "Koholint Island"],
        answer: "Koholint Island"
    },
    {
        question: "In 'The Legend of Zelda: The Wind Waker', what is the name of the previous Sage of Wind whose spirit remains in the Gale Temple after being killed by Ganondorf's followers?",
        options: ["Fado", "Laruto", "Gulley", "Makar"],
        answer: "Fado"
    },
    {
        question: "In 'The Wind Waker', what is the name of the Rito who serves as the attendant to the Great Valoo?",
        options: ["Komali", "Skinner", "Medli", "Quill"],
        answer: "Medli"
    },
    {
        question: "In 'Ocarina of Time', which Sage is the first to be awakened after Link pulls the Master Sword?",
        options: ["Darunia", "Impa", "Saria", "Rauru"],
        answer: "Rauru"
    },
    {
        question: "What is the name of the goddess who stayed on the surface to protect the humans after the others fled to the sky?",
        options: ["Nayru", "Din", "Hylia", "Farore"],
        answer: "Hylia"
    },
    {
        question: "Which Zelda game was the first to introduce the concept of the 'Master Sword'?",
        options: ["A Link to the Past", "Ocarina of Time", "The Legend of Zelda (1986)", "Zelda II: The Adventure of Link"],
        answer: "A Link to the Past"
    },
    {
        question: "In 'Ocarina of Time', which item must Link use to prove his connection to the Royal Family to the composer brothers?",
        options: ["The Ocarina of Time", "Zelda's Lullaby", "The Goron's Ruby", "The Hylian Shield"],
        answer: "Zelda's Lullaby"
    },
    {
        question: "In 'A Link Between Worlds', what is the name of the kingdom that serves as the 'Dark World' counterpart to Hyrule?",
        options: ["The Dark World", "Lorule", "Holodrum", "Termina"],
        answer: "Lorule"
    },
    {
        question: "Which specific Zelda game introduced the character 'Tingle' to the series?",
        options: ["The Minish Cap", "The Wind Waker", "Majora's Mask", "Ocarina of Time"],
        answer: "Majora's Mask"
    },
    {
        question: "In 'A Link Between Worlds', why does Princess Hilda seek to steal Hyrule's Triforce for her own kingdom of Lorule?",
        options: ["Her ancestors destroyed Lorule's Triforce to end war.", "Ganon had already conquered her world.", "She wanted to rule both kingdoms simultaneously.", "She was corrupted by the influence of Yuga."],
        answer: "Her ancestors destroyed Lorule's Triforce to end war."
    },
    {
        question: "In 'Twilight Princess', what item is used to warp between Portals?",
        options: ["Skeikah Slate", "The Ocarina of Time", "The Mirror of Twilight", "Midna"],
        answer: "Midna"
    },
    {
        question: "In 'Breath of the Wild', what is the name of the Sheikah monk who provides the final challenge in the 'Champions Ballad'?",
        options: ["Monk Maz Koshia", "King Rhoam", "Monk Korgu Chideh", "Impa"],
        answer: "Monk Maz Koshia"
    },
    {
        question: "In 'The Legend of Zelda: Twilight Princess', what is the specific name of the ancient tribe of sorcerers who created the Fused Shadow?",
        options: ["The Zonai", "The Dark Interlopers", "The Sheikah", "The Twili"],
        answer: "The Dark Interlopers"
    }
];
