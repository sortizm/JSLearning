let names;

(function() {

    let search = document.getElementById("search1");
    let searchInput = search.getElementsByClassName("searchQuery")[0];
    let searchSuggestions = search.getElementsByClassName("suggestions")[0];

    searchInput.addEventListener('input', function () {

        //e.firstElementChild can be used.
        let child = searchSuggestions.lastElementChild;
        while (child) {
            searchSuggestions.removeChild(child);
            child = searchSuggestions.lastElementChild;
        }
        if (this.value !== "") {
            searchSuggestions.classList.add("show");
            names.filter(name => name.toLowerCase().startsWith(this.value.toLowerCase())).forEach((name) => {
                let suggestion = document.createElement('a');
                suggestion.href = "#";
                suggestion.text = name;
                searchSuggestions.appendChild(suggestion);
            });
        } else {
            searchSuggestions.classList.remove("show");
        }
    });
})();

names = [
    "Aaliyah",
    "Abby",
    "Abigail",
    "Ada",
    "Adalee",
    "Adaline",
    "Adalyn",
    "Adalynn",
    "Addilyn",
    "Addilynn",
    "Addison",
    "Addisyn",
    "Addyson",
    "Adelaide",
    "Adele",
    "Adelina",
    "Adeline",
    "Adelyn",
    "Adelynn",
    "Adley",
    "Adriana",
    "Adrianna",
    "Adrienne",
    "Ailani",
    "Aileen",
    "Ainsley",
    "Aisha",
    "Aislinn",
    "Aitana",
    "Aiyana",
    "Alaia",
    "Alaina",
    "Alana",
    "Alani",
    "Alanna",
    "Alannah",
    "Alaya",
    "Alayah",
    "Alayna",
    "Aleah",
    "Aleena",
    "Alejandra",
    "Alena",
    "Alessandra",
    "Alessia",
    "Alexa",
    "Alexandra",
    "Alexandria",
    "Alexia",
    "Alexis",
    "Alia",
    "Aliana",
    "Alianna",
    "Alice",
    "Alicia",
    "Alina",
    "Alisha",
    "Alison",
    "Alisson",
    "Alivia",
    "Aliya",
    "Aliyah",
    "Aliza",
    "Allie",
    "Allison",
    "Allyson",
    "Alma",
    "Alondra",
    "Alora",
    "Alyson",
    "Alyssa",
    "Amaia",
    "Amalia",
    "Amanda",
    "Amani",
    "Amara",
    "Amari",
    "Amaris",
    "Amaya",
    "Amayah",
    "Amber",
    "Amelia",
    "Amelie",
    "Amia",
    "Amina",
    "Amira",
    "Amirah",
    "Amiya",
    "Amiyah",
    "Amora",
    "Amy",
    "Ana",
    "Anahi",
    "Anais",
    "Analia",
    "Anastasia",
    "Anaya",
    "Andi",
    "Andrea",
    "Angel",
    "Angela",
    "Angelica",
    "Angelina",
    "Angie",
    "Anika",
    "Aniya",
    "Aniyah",
    "Ann",
    "Anna",
    "Annabel",
    "Annabella",
    "Annabelle",
    "Annalee",
    "Annalise",
    "Anne",
    "Annie",
    "Annika",
    "Ansley",
    "Antonella",
    "Anya",
    "April",
    "Arabella",
    "Arden",
    "Arely",
    "Ari",
    "Aria",
    "Ariadne",
    "Ariah",
    "Ariana",
    "Arianna",
    "Ariel",
    "Ariella",
    "Arielle",
    "Ariya",
    "Ariyah",
    "Arlette",
    "Armani",
    "Arya",
    "Ashley",
    "Ashlyn",
    "Ashlynn",
    "Aspen",
    "Astrid",
    "Athena",
    "Aubree",
    "Aubrey",
    "Aubrie",
    "Aubriella",
    "Aubrielle",
    "Audrey",
    "August",
    "Aurelia",
    "Aurora",
    "Austyn",
    "Autumn",
    "Ava",
    "Avah",
    "Avalyn",
    "Avalynn",
    "Averi",
    "Averie",
    "Avery",
    "Aviana",
    "Avianna",
    "Aya",
    "Ayla",
    "Ayleen",
    "Aylin",
    "Azalea",
    "Azaria",
    "Azariah",
    "Bailee",
    "Bailey",
    "Barbara",
    "Baylee",
    "Beatrice",
    "Belen",
    "Bella",
    "Bellamy",
    "Belle",
    "Berkley",
    "Bethany",
    "Bexley",
    "Bianca",
    "Blair",
    "Blaire",
    "Blake",
    "Blakely",
    "Bonnie",
    "Braelyn",
    "Braelynn",
    "Braylee",
    "Bria",
    "Briana",
    "Brianna",
    "Briar",
    "Bridget",
    "Briella",
    "Brielle",
    "Brinley",
    "Bristol",
    "Brittany",
    "Brooke",
    "Brooklyn",
    "Brooklynn",
    "Brylee",
    "Brynlee",
    "Brynleigh",
    "Brynn",
    "Cadence",
    "Cali",
    "Callie",
    "Calliope",
    "Cameron",
    "Camila",
    "Camilla",
    "Camille",
    "Camryn",
    "Cara",
    "Carly",
    "Carmen",
    "Carolina",
    "Caroline",
    "Carolyn",
    "Carter",
    "Casey",
    "Cassandra",
    "Cassidy",
    "Cataleya",
    "Catalina",
    "Catherine",
    "Cecelia",
    "Cecilia",
    "Celeste",
    "Celia",
    "Celine",
    "Chana",
    "Chanel",
    "Charlee",
    "Charleigh",
    "Charley",
    "Charli",
    "Charlie",
    "Charlotte",
    "Chaya",
    "Chelsea",
    "Cheyenne",
    "Chloe",
    "Christina",
    "Christine",
    "Claire",
    "Clara",
    "Clare",
    "Clarissa",
    "Claudia",
    "Clementine",
    "Colette",
    "Collins",
    "Cora",
    "Coraline",
    "Corinne",
    "Crystal",
    "Cynthia",
    "Dahlia",
    "Daisy",
    "Dakota",
    "Dalary",
    "Daleyza",
    "Dallas",
    "Dana",
    "Dani",
    "Daniela",
    "Daniella",
    "Danielle",
    "Danna",
    "Daphne",
    "Davina",
    "Dayana",
    "Deborah",
    "Delaney",
    "Delilah",
    "Della",
    "Demi",
    "Destiny",
    "Diana",
    "Dior",
    "Dorothy",
    "Dream",
    "Dulce",
    "Dylan",
    "Eden",
    "Edith",
    "Egypt",
    "Eileen",
    "Elaina",
    "Elaine",
    "Eleanor",
    "Elena",
    "Eliana",
    "Elianna",
    "Elina",
    "Elisa",
    "Elisabeth",
    "Elise",
    "Eliza",
    "Elizabeth",
    "Ella",
    "Elle",
    "Ellen",
    "Elliana",
    "Ellianna",
    "Ellie",
    "Elliot",
    "Elliott",
    "Ellis",
    "Ellison",
    "Eloise",
    "Elora",
    "Elsa",
    "Elsie",
    "Elyse",
    "Ember",
    "Emberly",
    "Emelia",
    "Emely",
    "Emerie",
    "Emerson",
    "Emersyn",
    "Emery",
    "Emilee",
    "Emilia",
    "Emily",
    "Emma",
    "Emmaline",
    "Emmalyn",
    "Emmalynn",
    "Emmarie",
    "Emmeline",
    "Emmie",
    "Emmy",
    "Emory",
    "Ensley",
    "Erica",
    "Erika",
    "Erin",
    "Esme",
    "Esmeralda",
    "Esperanza",
    "Estella",
    "Estelle",
    "Esther",
    "Estrella",
    "Etta",
    "Eva",
    "Evangeline",
    "Eve",
    "Evelyn",
    "Evelynn",
    "Everlee",
    "Everleigh",
    "Everly",
    "Evie",
    "Ezra",
    "Faith",
    "Fatima",
    "Faye",
    "Felicity",
    "Fernanda",
    "Finley",
    "Fiona",
    "Florence",
    "Frances",
    "Francesca",
    "Frankie",
    "Freya",
    "Frida",
    "Gabriela",
    "Gabriella",
    "Gabrielle",
    "Galilea",
    "Gemma",
    "Genesis",
    "Genevieve",
    "Georgia",
    "Gia",
    "Giana",
    "Gianna",
    "Giavanna",
    "Giovanna",
    "Giselle",
    "Giuliana",
    "Gloria",
    "Grace",
    "Gracelyn",
    "Gracelynn",
    "Gracie",
    "Greta",
    "Guadalupe",
    "Gwen",
    "Gwendolyn",
    "Hadassah",
    "Hadlee",
    "Hadleigh",
    "Hadley",
    "Hailee",
    "Hailey",
    "Haisley",
    "Haley",
    "Halle",
    "Hallie",
    "Hana",
    "Hanna",
    "Hannah",
    "Harlee",
    "Harleigh",
    "Harley",
    "Harlow",
    "Harmoni",
    "Harmony",
    "Harper",
    "Hattie",
    "Haven",
    "Hayden",
    "Haylee",
    "Hayley",
    "Hazel",
    "Heaven",
    "Heavenly",
    "Heidi",
    "Helen",
    "Helena",
    "Henley",
    "Holland",
    "Holly",
    "Hope",
    "Hunter",
    "Iliana",
    "Imani",
    "India",
    "Ingrid",
    "Irene",
    "Iris",
    "Isabel",
    "Isabela",
    "Isabella",
    "Isabelle",
    "Isla",
    "Itzayana",
    "Itzel",
    "Ivanna",
    "Ivory",
    "Ivy",
    "Izabella",
    "Jacqueline",
    "Jada",
    "Jade",
    "Jaelyn",
    "Jaelynn",
    "Jaliyah",
    "Jamie",
    "Jana",
    "Jane",
    "Janelle",
    "Janessa",
    "Janiyah",
    "Jasmine",
    "Jaycee",
    "Jayda",
    "Jayde",
    "Jayden",
    "Jayla",
    "Jaylah",
    "Jaylee",
    "Jayleen",
    "Jaylene",
    "Jazlyn",
    "Jazlynn",
    "Jazmin",
    "Jazmine",
    "Jemma",
    "Jenesis",
    "Jenna",
    "Jennifer",
    "Jessica",
    "Jessie",
    "Jewel",
    "Jillian",
    "Jimena",
    "Joanna",
    "Jocelyn",
    "Joelle",
    "Johanna",
    "Jolene",
    "Jolie",
    "Jordan",
    "Jordyn",
    "Joselyn",
    "Josephine",
    "Josie",
    "Journee",
    "Journey",
    "Journi",
    "Joy",
    "Joyce",
    "Judith",
    "Julia",
    "Juliana",
    "Julianna",
    "Julie",
    "Juliet",
    "Julieta",
    "Juliette",
    "Julissa",
    "June",
    "Juniper",
    "Jurnee",
    "Justice",
    "Kadence",
    "Kaelyn",
    "Kai",
    "Kaia",
    "Kailani",
    "Kailey",
    "Kailyn",
    "Kairi",
    "Kaitlyn",
    "Kaiya",
    "Kalani",
    "Kali",
    "Kaliyah",
    "Kallie",
    "Kamila",
    "Kamilah",
    "Kamiyah",
    "Kamryn",
    "Kara",
    "Karen",
    "Karina",
    "Karla",
    "Karlee",
    "Karsyn",
    "Karter",
    "Kassidy",
    "Kataleya",
    "Katalina",
    "Kate",
    "Katelyn",
    "Katherine",
    "Kathleen",
    "Kathryn",
    "Katie",
    "Kaydence",
    "Kayla",
    "Kaylani",
    "Kaylee",
    "Kayleigh",
    "Kaylie",
    "Kaylin",
    "Kehlani",
    "Keilani",
    "Keily",
    "Keira",
    "Kelly",
    "Kelsey",
    "Kendall",
    "Kendra",
    "Kenia",
    "Kenley",
    "Kenna",
    "Kennedi",
    "Kennedy",
    "Kensley",
    "Kenzie",
    "Keyla",
    "Khaleesi",
    "Khloe",
    "Kiana",
    "Kiara",
    "Kiera",
    "Kimber",
    "Kimberly",
    "Kimora",
    "Kinley",
    "Kinslee",
    "Kinsley",
    "Kira",
    "Kora",
    "Kori",
    "Kyla",
    "Kylee",
    "Kyleigh",
    "Kylie",
    "Kynlee",
    "Kyra",
    "Lacey",
    "Laila",
    "Lailah",
    "Lainey",
    "Lana",
    "Landry",
    "Laney",
    "Lara",
    "Laura",
    "Laurel",
    "Lauren",
    "Lauryn",
    "Layla",
    "Laylah",
    "Lea",
    "Leah",
    "Leanna",
    "Legacy",
    "Leia",
    "Leighton",
    "Leila",
    "Leilani",
    "Lena",
    "Lennon",
    "Lennox",
    "Leona",
    "Leslie",
    "Lexi",
    "Lexie",
    "Leyla",
    "Lia",
    "Liana",
    "Liberty",
    "Lila",
    "Lilah",
    "Lilian",
    "Liliana",
    "Lilianna",
    "Lilith",
    "Lillian",
    "Lilliana",
    "Lillianna",
    "Lillie",
    "Lilly",
    "Lily",
    "Lilyana",
    "Lina",
    "Linda",
    "Lindsey",
    "Lisa",
    "Liv",
    "Livia",
    "Logan",
    "Lola",
    "London",
    "Londyn",
    "Lorelai",
    "Lorelei",
    "Louisa",
    "Louise",
    "Lucia",
    "Luciana",
    "Lucille",
    "Lucy",
    "Luella",
    "Luna",
    "Lyanna",
    "Lydia",
    "Lyla",
    "Lylah",
    "Lyra",
    "Lyric",
    "Mabel",
    "Maci",
    "Macie",
    "Mackenzie",
    "Macy",
    "Madalyn",
    "Madalynn",
    "Maddison",
    "Madeleine",
    "Madeline",
    "Madelyn",
    "Madelynn",
    "Madilyn",
    "Madilynn",
    "Madison",
    "Madisyn",
    "Mae",
    "Maeve",
    "Maggie",
    "Magnolia",
    "Maia",
    "Maisie",
    "Makayla",
    "Makenna",
    "Makenzie",
    "Malani",
    "Malaya",
    "Malaysia",
    "Maleah",
    "Malia",
    "Maliah",
    "Maliyah",
    "Mallory",
    "Mara",
    "Maren",
    "Margaret",
    "Margo",
    "Margot",
    "Maria",
    "Mariah",
    "Mariam",
    "Mariana",
    "Marianna",
    "Marie",
    "Marilyn",
    "Marina",
    "Marisol",
    "Marissa",
    "Marlee",
    "Marleigh",
    "Marley",
    "Martha",
    "Mary",
    "Maryam",
    "Matilda",
    "Mavis",
    "Maxine",
    "Maya",
    "Mckenna",
    "Mckenzie",
    "Mckinley",
    "Meadow",
    "Megan",
    "Meghan",
    "Meilani",
    "Melanie",
    "Melany",
    "Melina",
    "Melissa",
    "Melody",
    "Mercy",
    "Meredith",
    "Mia",
    "Miah",
    "Micah",
    "Michaela",
    "Michelle",
    "Mikaela",
    "Mikayla",
    "Mila",
    "Milan",
    "Milana",
    "Milani",
    "Milena",
    "Miley",
    "Millie",
    "Mina",
    "Mira",
    "Miracle",
    "Miranda",
    "Miriam",
    "Molly",
    "Monica",
    "Monroe",
    "Morgan",
    "Mya",
    "Myah",
    "Myla",
    "Mylah",
    "Myra",
    "Nadia",
    "Nala",
    "Nalani",
    "Nancy",
    "Naomi",
    "Natalia",
    "Natalie",
    "Nataly",
    "Natasha",
    "Nathalie",
    "Naya",
    "Nayeli",
    "Nevaeh",
    "Nia",
    "Nicole",
    "Nina",
    "Noa",
    "Noelle",
    "Noemi",
    "Nola",
    "Noor",
    "Nora",
    "Norah",
    "Nova",
    "Novah",
    "Novalee",
    "Nyla",
    "Nylah",
    "Oaklee",
    "Oakley",
    "Oaklyn",
    "Oaklynn",
    "Octavia",
    "Olive",
    "Olivia",
    "Opal",
    "Ophelia",
    "Paige",
    "Paislee",
    "Paisleigh",
    "Paisley",
    "Palmer",
    "Paloma",
    "Paola",
    "Paris",
    "Parker",
    "Patricia",
    "Paula",
    "Paulina",
    "Payton",
    "Pearl",
    "Penelope",
    "Penny",
    "Perla",
    "Peyton",
    "Phoebe",
    "Phoenix",
    "Piper",
    "Poppy",
    "Presley",
    "Princess",
    "Priscilla",
    "Promise",
    "Queen",
    "Quinn",
    "Rachel",
    "Raegan",
    "Raelyn",
    "Raelynn",
    "Raina",
    "Ramona",
    "Raquel",
    "Raven",
    "Rayna",
    "Rayne",
    "Reagan",
    "Rebecca",
    "Rebekah",
    "Reese",
    "Regina",
    "Reign",
    "Reina",
    "Remi",
    "Remington",
    "Remy",
    "Renata",
    "Reyna",
    "Rhea",
    "Riley",
    "River",
    "Rivka",
    "Robin",
    "Romina",
    "Rory",
    "Rosa",
    "Rosalee",
    "Rosalie",
    "Rosalyn",
    "Rose",
    "Roselyn",
    "Rosemary",
    "Rosie",
    "Rowan",
    "Royal",
    "Royalty",
    "Ruby",
    "Ruth",
    "Ryan",
    "Ryann",
    "Rylan",
    "Rylee",
    "Ryleigh",
    "Rylie",
    "Sabrina",
    "Sadie",
    "Sage",
    "Saige",
    "Salma",
    "Samantha",
    "Samara",
    "Samira",
    "Sandra",
    "Saniyah",
    "Saoirse",
    "Sara",
    "Sarah",
    "Sarai",
    "Sariah",
    "Sariyah",
    "Sasha",
    "Savanna",
    "Savannah",
    "Sawyer",
    "Saylor",
    "Scarlet",
    "Scarlett",
    "Scarlette",
    "Scout",
    "Selah",
    "Selena",
    "Selene",
    "Serena",
    "Serenity",
    "Shelby",
    "Shiloh",
    "Siena",
    "Sienna",
    "Sierra",
    "Simone",
    "Sky",
    "Skye",
    "Skyla",
    "Skylar",
    "Skyler",
    "Sloan",
    "Sloane",
    "Sofia",
    "Sophia",
    "Sophie",
    "Stella",
    "Stephanie",
    "Stevie",
    "Summer",
    "Sunny",
    "Sutton",
    "Sydney",
    "Sylvia",
    "Sylvie",
    "Talia",
    "Taliyah",
    "Tatiana",
    "Tatum",
    "Taylor",
    "Teagan",
    "Tenley",
    "Teresa",
    "Tessa",
    "Thalia",
    "Thea",
    "Tiana",
    "Tiffany",
    "Tinley",
    "Tinsley",
    "Tori",
    "Treasure",
    "Trinity",
    "Vada",
    "Valentina",
    "Valeria",
    "Valerie",
    "Valery",
    "Vanessa",
    "Veda",
    "Vera",
    "Veronica",
    "Victoria",
    "Vienna",
    "Violet",
    "Violeta",
    "Virginia",
    "Vivian",
    "Viviana",
    "Vivienne",
    "Waverly",
    "Wendy",
    "Whitley",
    "Whitney",
    "Willa",
    "Willow",
    "Winter",
    "Wren",
    "Wynter",
    "Ximena",
    "Xiomara",
    "Yamileth",
    "Yara",
    "Yareli",
    "Yaretzi",
    "Zahra",
    "Zainab",
    "Zaniyah",
    "Zara",
    "Zaria",
    "Zariah",
    "Zariyah",
    "Zaylee",
    "Zelda",
    "Zhavia",
    "Zoe",
    "Zoey",
    "Zoie",
    "Zola",
    "Zora",
    "Zuri"
];