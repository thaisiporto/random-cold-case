function gerar() {
    var season = Math.floor(Math.random() * 4) + 1;
    
    switch(season) {
        case (season = 1):
            var episode = Math.floor(Math.random() * 23) + 1;
            break
        case (season = 2):
            var episode = Math.floor(Math.random() * 23) + 1;
            break
        case (season = 3):
            var episode = Math.floor(Math.random() * 23) + 1;
            break
        case (season = 4):
            var episode = Math.floor(Math.random() * 24) + 1;
            break
    } 

    var blockEpisode = window.document.querySelector("div#episodeBlock");
    var title = window.document.querySelector("h1#title");
    var photo = window.document.querySelector("img#photo");
    var description = window.document.querySelector("p#description");
    
    blockEpisode.style.display = "block";

    // Temporada 1
    if (season == 1 && episode == 1) {
        var epTitle = "1x01 - Look Again";
        photo.setAttribute("src", "images/s01/s01e01.jpeg");
        var epDesc = "Detective Lilly Rush interviews a maid who says she witnessed the beating death of a teenage girl during a party on a luxurious estate more than 25 years ago.";
    } else if (season == 1 && episode == 2) {
        var epTitle = "1x02 – Gleen";
        photo.setAttribute("src", "images/s01/s01e02.jpeg");
        var epDesc = "Lilly re-investigates a 1980's murder where a young housewife was blown up by a bomb in her backyard. Meanwhile, the victim's now-grown daughter is bothering a pervert whom she believes is the killer, but is he?";
    } else if (season == 1 && episode == 3) {
        var epTitle = "1x03 – Our Boy Is Back";
        photo.setAttribute("src", "images/s01/s01e03.jpeg");
        var epDesc = "When a serial rapist sends a letter to the squad announcing his return to Philadelphia after five years, the team re-investigates the 1998 murder of a college student who was believed to be one of his victims.";
    } else if (season == 1 && episode == 4) {
        var epTitle = "1x04 – Churchgoing People";
        photo.setAttribute("src", "images/s01/s01e04.jpeg");
        var epDesc = "Lilly looks into a man's murder that led to the dissolution of a religiously-involved family, but she finds something fishy about every member of the former household.";
    } else if (season == 1 && episode == 5) {
        var epTitle = "1x05 – The Runner";
        photo.setAttribute("src", "images/s01/s01e05.jpeg");
        var epDesc = "The team reopen an unsolved case about a young policeman was murdered in 1973, Joe Washington, who was involved in a drug case at dangerous zone.";
    } else if (season == 1 && episode == 6) {
        var epTitle = "1x06 – Love Conquers Al";
        photo.setAttribute("src", "images/s01/s01e06.jpeg");
        var epDesc = "A petty thief, hoping for a reduced prison sentence, relays information pertaining to the night in 1981 when a high school track runner was fatally shot, placing doubt on the guilt of the man now serving a life sentence for the crime.";
    } else if (season == 1 && episode == 7) {
        var epTitle = "1x07 – A Time to Hate";
        photo.setAttribute("src", "images/s01/s01e07.jpeg");
        var epDesc = "The team investigates a 1964 case when a young college student was killed outside a gay bar.";
    } else if (season == 1 && episode == 8) {
        var epTitle = "1x08 – Fly Away";
        photo.setAttribute("src", "images/s01/s01e08.jpeg");
        var epDesc = "After two years in a coma, a mother wakes in the hospital. Rosie hardly remembers the night she and her daughter were thrown out of a window, killing her daughter. Lilly and Scotty look into the case and find a whole nest of bad secrets.";
    } else if (season == 1 && episode == 9) {
        var epTitle = "1x09 – Sherry Darlin'";
        photo.setAttribute("src", "images/s01/s01e09.jpeg");
        var epDesc = "A man calls Detective Lilly Rush to confess that he murdered his grandmother in 1989 and buried her in the basement of his old house.";
    } else if (season == 1 && episode == 10) {
        var epTitle = "1x10 – Hitchhiker";
        photo.setAttribute("src", "images/s01/s01e10.jpeg");
        var epDesc = "The team is searching for a suspected serial killer. The murders started with a young man who was hitchhiking home from the casino after winning $3000. They have little to go on other than a boot print.";
    } else if (season == 1 && episode == 11) {
        var epTitle = "1x11 – Hubris";
        photo.setAttribute("src", "images/s01/s01e11.jpeg");
        var epDesc = "A young college girl had been killed several years earlier and laid out in a pond. The college professor, with whom the girl was having an affair, was always suspected but there was nothing solid to go on. Another girl is killed the same way.";
    } else if (season == 1 && episode == 12) {
        var epTitle = "1x12 – Glued";
        photo.setAttribute("src", "images/s01/s01e12.jpeg");
        var epDesc = "Lilly looks into one of Lt. Stillman's old cases, involving the death of an 8 year old boy killed on his way home from the corner store.";
    } else if (season == 1 && episode == 13) {
        var epTitle = "1x13 – The Letter";
        photo.setAttribute("src", "images/s01/s01e13.jpeg");
        var epDesc = "The 1939 case of a young lady living in a boarding house for 'women of color' is reopened and Rush tries to solve it for Sadie's daughter, who has been ashamed of her own heritage since the murder.";
    } else if (season == 1 && episode == 14) {
        var epTitle = "1x14 – The Boy in the Box"
        photo.setAttribute("src", "images/s01/s01e14.jpeg");
        var epDesc = "The 1950's notorious cold case of the 'boy in the box' is reopened and it's discovered that he resided in a Catholic orphanage with his sister until his sudden adoption before his death.";
    }  else if (season == 1 && episode == 15) {
        var epTitle = "1x15 – Disco Inferno";
        photo.setAttribute("src", "images/s01/s01e15.jpeg");
        var epDesc = "The team investigates a 1978 case where 22 people were killed in a fire at a popular disco after new evidence shows that one of the victims was shot before the fire";
    }  else if (season == 1 && episode == 16) {
        var epTitle = "1x16 – Volunteers";
        photo.setAttribute("src", "images/s01/s01e16.jpeg");
        var epDesc = "Two decaying skeletons are discovered in an old building. Rush and the team learn that they were two hippies working for an underground group who were murdered in 1969.";
    }  else if (season == 1 && episode == 17) {
        var epTitle = "1x17 – The Lost Soul of Herman Lester";
        photo.setAttribute("src", "images/s01/s01e17.jpeg");
        var epDesc = "An up and coming basketball player on the way to making it big is found dead on a street playground. Was it a street robbery gone bad, an overly competitive player who wanted his slot or something else?";
    }  else if (season == 1 && episode == 18) {
        var epTitle = "1x18 – Resolutions";
        photo.setAttribute("src", "images/s01/s01e18.jpeg");
        var epDesc = "An alcoholic comes in and tells a tale of a hit and run. She is sure that she killed him when she drove drunk on New Years eve.";
    }  else if (season == 1 && episode == 19) {
        var epTitle = "1x19 – Late Returns";
        photo.setAttribute("src", "images/s01/s01e19.jpeg");
        var epDesc = "A man is found shot to death in his driveway. The team re-open a 1992 murder of a young woman, a Democratic worker, who went missing after leaving a political event on Election night.";
    }  else if (season == 1 && episode == 20) {
        var epTitle = "1x20 – Greed";
        photo.setAttribute("src", "images/s01/s01e20.jpeg");
        var epDesc = "The team reopen the 1980's case of a wealthy corporate stockbroker who set up a Ponzi scheme and left many colleagues broke when it crashed, after which he was murdered in an apparent carjacking.";
    }  else if (season == 1 && episode == 21) {
        var epTitle = "1x21 – Maternal Instincts";
        photo.setAttribute("src", "images/s01/s01e21.jpeg");
        var epDesc = "A young man arrested for robbing a little old lady reluctantly gets the team to reopen the case of his mother, who was stabbed to death in 1989 when he was three years old. They discover the story goes much deeper than just her murder.";
    }  else if (season == 1 && episode == 22) {
        var epTitle = "1x22 – The Plan";
        photo.setAttribute("src", "images/s01/s01e22.jpeg");
        var epDesc = "The Team gets an anonymous letter saying the 1999 accidental death of a swim coach at a military academy was the result of a carefully orchestrated plot.";
    }  else if (season == 1 && episode == 23) {
        var epTitle = "1x23 – Lover's Lane";
        photo.setAttribute("src", "images/s01/s01e23.jpeg");
        var epDesc = "The team reopens the case of Eve, a fifteen-year-old raped and murdered in 1986 after getting involved with a sleazy adult man who promised to make her a famous pop star if she'd run away with him.";
    } // Temporada 2 //////////////////////////////////////////////////////////////
    else if (season == 2 && episode == 1) {
        var epTitle = "2x01 - The Badlands";
        photo.setAttribute("src", "images/s02/s02e01.jpeg");
        var epDesc = "The triple murder of a couple running a restaurant and their employee is reopened when it is revealed in court that the man who was originally charged with the crime was robbing a store at another location at the time of the murders.";
    } else if (season == 2 && episode == 2) {
        var epTitle = "2x02 – Factory Girls";
        photo.setAttribute("src", "images/s02/s02e02.jpeg");
        var epDesc = "The detectives reopen a World War II era case of a female factory worker who died at work from what was believed to be an accidental fall.";
    }  else if (season == 2 && episode == 3) {
        var epTitle = "2x03 – Daniela";
        photo.setAttribute("src", "images/s02/s02e03.jpeg");
        var epDesc = "Lilly and Scotty are confronted by a battered woman whose pervert husband filmed a super 8 snuff film back in 1979 of a young girl presumably being shot.";
    }  else if (season == 2 && episode == 4) {
        var epTitle = "2x04 – The House";
        photo.setAttribute("src", "images/s02/s02e04.jpeg");
        var epDesc = "Outside a prison, the bones of an inmate who tried to escape during the broadcast of Johnny Cash's prison concert in 1968 are found in an old underground escape tunnel. Suspiciously, that inmate was supposedly killed inside the prison at another time...";
    }  else if (season == 2 && episode == 5) {
        var epTitle = "2x05 – Who's Your Daddy";
        photo.setAttribute("src", "images/s02/s02e05.jpeg");
        var epDesc = "Lilly meets a teenage girl named Kara whose parents were shot point-blank back in '91 and offers to reopen their murder files.";
    }  else if (season == 2 && episode == 6) {
        var epTitle = "2x06 – The Sleepover";
        photo.setAttribute("src", "images/s02/s02e06.jpeg");
        var epDesc = "The Cold Case team reopens a 1990's murder of a shy, nerdy twelve-year-old who had a sleepover at a mentally disturbed rich girl's house. They discover quickly that something sinister happened that night, but what was it?";
    }  else if (season == 2 && episode == 7) {
        var epTitle = "2x07 – It's Raining Men";
        photo.setAttribute("src", "images/s02/s02e07.jpeg");
        var epDesc = "Lilly and Scotty reopen the 1983 cold case of an openly gay young man who tried to bring attention to the AIDS epidemic, much to the fear of the rich, closeted men he associated with.";
    }  else if (season == 2 && episode == 8) {
        var epTitle = "2x08 – Red Glare";
        photo.setAttribute("src", "images/s02/s02e08.jpeg");
        var epDesc = "The team investigates the murder of a school teacher in 1953 whose case wasn't very well investigated since he believed in integration";
    }  else if (season == 2 && episode == 9) {
        var epTitle = "2x09 – Mind Hunters";
        photo.setAttribute("src", "images/s02/s02e09.jpeg");
        var epDesc = "The Cold Case team is assigned to a very disturbing case of a sinister serial killer who kidnaps women and whacks off their heads - and he might be closer to home than they realize.";
    }  else if (season == 2 && episode == 10) {
        var epTitle = "2x10 – Discretion";
        photo.setAttribute("src", "images/s02/s02e10.jpeg");
        var epDesc = "The team investigates the 2000 slaying of an up-and-coming Connecticut prosecutor who was about to try a high profile murder case. The early investigation discovers that prior to his death he seemed to have been heavily distracted by something.";
    }  else if (season == 2 && episode == 11) {
        var epTitle = "2x11 – Blank Generation";
        photo.setAttribute("src", "images/s02/s02e11.jpeg");
        var epDesc = "The 1970's death of a man killed by cyanide poisoning is reopened. Meanwhile, Scotty Valens is told some upsetting news and decided come back to work.";
    }  else if (season == 2 && episode == 12) {
        var epTitle = "2x12 – Yo, Adrian";
        photo.setAttribute("src", "images/s02/s02e12.jpeg");
        var epDesc = "An underdog boxer dies from a knock-out on a fight that should have been called by the referee and the boxer's corner. The plot was deeper when the team re-investigates this cold case.";
    }  else if (season == 2 && episode == 13) {
        var epTitle = "2x13 – Time to Crime";
        photo.setAttribute("src", "images/s02/s02e12.jpeg");
        var epDesc = "The 1980's case of a little girl is reopened after the murder weapon, an automatic gun, is turned in. It's revealed that she was shot to death while at a playground with her mother at night.";
    }  else if (season == 2 && episode == 14) {
        var epTitle = "2x14 – Revolution";
        photo.setAttribute("src", "images/s02/s02e14.jpeg");
        var epDesc = "Detectives Rush and Valens reopen a murder case from December of 1969 after serving an arrest warrant to a draft dodger who claims he is innocent of murdering his girlfriend.";
    }  else if (season == 2 && episode == 15) {
        var epTitle = "2x15 – Wishing";
        photo.setAttribute("src", "images/s02/s02e15.jpeg");
        var epDesc = "In the early 90's, the death of a mentally handicapped teen has been reopened. Drawings depicting the incident at the railroad tracks surface, which indicate it may not have been an accident as originally believed.";
    }  else if (season == 2 && episode == 16) {
        var epTitle = "2x16 – Revenge";
        photo.setAttribute("src", "images/s02/s02e16.jpeg");
        var epDesc = "The Cold Case team investigates the death by drowning of a young boy who disappeared from an outlet mall in the 1990's. They uncover a bizarre, elaborate kidnapping plot in the process.";
    }  else if (season == 2 && episode == 17) {
        var epTitle = "2x17 – Schadenfreude";
        photo.setAttribute("src", "images/s02/s02e17.jpeg");
        var epDesc = "The 1980's case of a murdered surgeon's wife is reopened, and the team learn that originally it was thought to have been committed by her husband, who was facing a malpractice lawsuit.";
    }  else if (season == 2 && episode == 18) {
        var epTitle = "2x18 – Ravaged";
        photo.setAttribute("src", "images/s02/s02e18.jpeg");
        var epDesc = "The 1995 case of an alcoholic barmaid is reopened. The team learn she was struggling to recover for the sake of her neglected children, and that she was often a target for jokes and harassment.";
    }  else if (season == 2 && episode == 19) {
        var epTitle = "2x19 – Strange Fruit";
        photo.setAttribute("src", "images/s02/s02e19.jpeg");
        var epDesc = "Jeffries reopens a 1963 case in which he, as a child, found the body of a 16-year-old African American boy who had been planning to attend Martin Luther King's March on Washington.";
    }  else if (season == 2 && episode == 20) {
        var epTitle = "2x20 – Kensington";
        photo.setAttribute("src", "images/s02/s02e20.jpeg");
        var epDesc = "An optimistic young mill worker is murdered months after the mill closes.";
    }  else if (season == 2 && episode == 21) {
        var epTitle = "2x21 – Creatures of the Night";
        photo.setAttribute("src", "images/s02/s02e21.jpeg");
        var epDesc = "An apartment building doorman is murdered while his girlfriend dances at the Rocky Horror Picture Show, and Lilly tries to pursue the killer.";
    }  else if (season == 2 && episode == 22) {
        var epTitle = "2x22 – Best Friends";
        photo.setAttribute("src", "images/s02/s02e22.jpeg");
        var epDesc = "An old truck is found in a river with human remains inside, leading the team to re-open the case of a girl who disappeared in 1932. When the girl's former best friend is interviewed, questions arise: just best friends, or forbidden love?";
    } else if (season == 2 && episode == 23) {
        var epTitle = "2x23 – The Woods";
        photo.setAttribute("src", "images/s02/s02e23.jpeg");
        var epDesc = "When a serial killer resurfaces after walking away from his convictions, Lilly unravels his childhood, which was filled with abuse, rape, murder and insanity, and he follows her every move.";
    } // Temporada 3 //////////////////////////////////////////////////////////////
    else if (season == 3 && episode == 1) {
        var epTitle = "3x01 – Family";
        photo.setAttribute("src", "images/s03/s03e01.jpeg");
        var epDesc = "After a teenage girl who was dumped in the garbage by her parents 17 years earlier is approached by a man claiming to be her father, the team re-investigates the hit and run death of her father, Jimmy in 1988.";
    } else if (season == 3 && episode == 2) {
        var epTitle = "3x02 – The Promise";
        photo.setAttribute("src", "images/s03/s03e02.jpeg");
        var epDesc = "Lilly reopens the case of an overweight film student who was subjected to a cruel 'Hog Scale prank' at a fraternity party, after which she mysteriously died in a fire.";
    } else if (season == 3 && episode == 3) {
        var epTitle = "3x03 – Bad Night";
        photo.setAttribute("src", "images/s03/s03e03.jpeg");
        var epDesc = "Lilly reopens the 1978 case of Angus, a young boy who was killed soon after a car accident that paralyzed his friend around the time the slasher film Halloween was released.";
    } else if (season == 3 && episode == 4) {
        var epTitle = "3x04 – Colors";
        photo.setAttribute("src", "images/s03/s03e04.jpeg");
        var epDesc = "The case of a baseball player beaten to death with his own bat is reopened, and it's discovered that he had many enemies, and that his white girlfriend sparked even more racism and prejudice towards him.";
    } else if (season == 3 && episode == 5) {
        var epTitle = "3x05 – Committed";
        photo.setAttribute("src", "images/s03/s03e05.jpeg");
        var epDesc = "A former mental patient named Betty Petrowski dies. The woman's only child, her son Otis, is called to identify the body and finds it is not the body of his mother. Det. Rush and her colleagues begin the search for Otis' real mother.";
    } else if (season == 3 && episode == 6) {
        var epTitle = "3x06 – Saving Patrick Bubley";
        photo.setAttribute("src", "images/s03/s03e06.jpeg");
        var epDesc = "Brothers are being killed one by one as they grow to their teens. Flashbacks show how the family enjoyed Thanksgiving together until the killings started and the mother got addicted to drugs.";
    } else if (season == 3 && episode == 7) {
        var epTitle = "3x07 – Start-Up";
        photo.setAttribute("src", "images/s03/s03e07.jpeg");
        var epDesc = "In the nineties, business school graduates Scott and Amy start up a computer health care business called Lionstaff, but Amy dies of a heart attack soon after and Lilly reopens the case.";
    } else if (season == 3 && episode == 8) {
        var epTitle = "3x08 – Honor";
        photo.setAttribute("src", "images/s03/s03e08.jpeg");
        var epDesc = "The team investigates the murder of a former POW who was killed days after coming home from the Vietnam War.";
    } else if (season == 3 && episode == 9) {
        var epTitle = "3x09 – A Perfect Day";
        photo.setAttribute("src", "images/s03/s03e09.jpeg");
        var epDesc = "The remains of a small girl are found under a bridge. The story goes back to the 60's and turns out the girl has a twin sister still alive. A sad family story begins to unravel.";
    } else if (season == 3 && episode == 10) {
        var epTitle = "3x10 – Frank's Best";
        photo.setAttribute("src", "images/s03/s03e10.jpeg");
        var epDesc = "The friendly owner of a local grocery store is murdered and Lilly reopens his case, finding that Frank was having issues with his rebellious son, his son's trashy friend Stump and his employee, Ricardo.";
    } else if (season == 3 && episode == 11) {
        var epTitle = "3x11 – 8 Years";
        photo.setAttribute("src", "images/s03/s03e11.jpeg");
        var epDesc = "A young man's case is reopened after his 1988 murder went unsolved. The team look at his three friends to see if any of them had the motive for the shooting.";
    } else if (season == 3 && episode == 12) {
        var epTitle = "3x12 – Detention";
        photo.setAttribute("src", "images/s03/s03e12.jpeg");
        var epDesc = "A grunge high school boy supposedly kills himself in 1994 and Lilly reopens his case, learning of the dark secrets he was keeping with three other outcast students during their detention together.";
    } else if (season == 3 && episode == 13) {
        var epTitle = "3x13 – Debut";
        photo.setAttribute("src", "images/s03/s03e13.jpeg");
        var epDesc = "The Cold Case team investigates a 1960's case of a young débutant who fell to her death. They also discover that the girl's mother was very traditional and expected her daughter to follow order.";
    } else if (season == 3 && episode == 14) {
        var epTitle = "3x14 – Dog Day Afternoons";
        photo.setAttribute("src", "images/s03/s03e14.jpeg");
        var epDesc = "The unsolved case of a quiet and shy girl who dated a bank robber is reopened by the team after a similar crime occurs at the same bank.";
    } else if (season == 3 && episode == 15) {
        var epTitle = "3x15 – Sanctuary";
        photo.setAttribute("src", "images/s03/s03e15.jpeg");
        var epDesc = "The Cold Case team investigates the case of a woman who was disemboweled violently by an unknown killer - a woman Scotty knew from his undercover years.";
    } else if (season == 3 && episode == 16) {
        var epTitle = "3x16 – One Night";
        photo.setAttribute("src", "images/s03/s03e16.jpeg");
        var epDesc = "During a slow night at the P.P.D., it turns out to be anything but when a pitiful man shows up with a dirt-encrusted shovel, claiming to have just buried somebody alive.";
    } else if (season == 3 && episode == 17) {
        var epTitle = "3x17 – Superstar";
        photo.setAttribute("src", "images/s03/s03e17.jpeg");
        var epDesc = "A young female tennis player who won against a guy in a 1battle of the sexes1 style playoff is discovered strangled to death the next day, and her case is reopened.";
    } else if (season == 3 && episode == 18) {
        var epTitle = "3x18 – Willkommen";
        photo.setAttribute("src", "images/s03/s03e18.jpeg");
        var epDesc = "Four years after the slaying, the Cold Case team investigates the murder of a cabbie-turned-actor who was shot to death outside the community theatre on opening night...";
    } else if (season == 3 && episode == 19) {
        var epTitle = "3x19 – Beautiful Little Fool";
        photo.setAttribute("src", "images/s03/s03e19.jpeg");
        var epDesc = "A 1929 case of a beautiful young singer is reopened, and the team learns she had a romance going with a man named Nick Bartleby.";
    } else if (season == 3 && episode == 20) {
        var epTitle = "3x20 – Death Penalty: Final Appeal";
        photo.setAttribute("src", "images/s03/s03e20.jpeg");
        var epDesc = "A corrupt cop's suicide leads to new questions about an old murder, challenging Detective Jeffries' belief that the man on death row for the crime is guilty -- and also putting Jeffries on a collision course with an arrogant ADA.";
    } else if (season == 3 && episode == 21) {
        var epTitle = "3x21 – The Hen House";
        photo.setAttribute("src", "images/s03/s03e21.jpeg");
        var epDesc = "The 'accidental' death of a woman newspaper columnist in 1943 is reinvestigated when old newspaper files indicate that the author of the 'Hey Lo' column could have been murdered by a Nazi officer posing as a Dutch Jew.";
    } else if (season == 3 && episode == 22) {
        var epTitle = "3x22 – The River";
        photo.setAttribute("src", "images/s03/s03e22.jpeg");
        var epDesc = "A successful and loved emergency room doctor's case is reopened and Lilly learns that his life was rapidly becoming unmanageable thanks to his gambling addiction.";
    } else if (season == 3 && episode == 23) {
        var epTitle = "3x23 – Joseph";
        photo.setAttribute("src", "images/s03/s03e23.jpeg");
        var epDesc = "The recent case of a counselor working at a rehab center for drug-addicted youth is reopened, but there's much more going on than meets the eye. Detective Rush starts to cross the line of ethics as she becomes too emotionally invested.";
    } // Temporada 4 //////////////////////////////////////////////////////////////
     else if (season == 4 && episode == 1) {
        var epTitle = "4x01 – Rampage";
        photo.setAttribute("src", "images/s04/s04e01.jpeg");
        var epDesc = "A 1995 mall shooting spree, in which two teenagers killed and wounded several people before committing suicide, is reopened when it is found that there may be a third person involved.";
    } else if (season == 4 && episode == 2) {
        var epTitle = "4x02 – The War at Home";
        photo.setAttribute("src", "images/s04/s04e02.jpeg");
        var epDesc = "Rush and the team try to solve the murder of a soldier who was deployed in the post-9/11 War on Terror, only to discover that she was having trouble coping with her trauma and holding her family together at the same time.";
    } else if (season == 4 && episode == 3) {
        var epTitle = "4x03 – Sandhogs";
        photo.setAttribute("src", "images/s04/s04e03.jpeg");
        var epDesc = "A mining cave-in was no accident that left John Donovan's lifeless body amongst the rubble. A tragic end to a young man and dashed hopes of his beloved.";
    } else if (season == 4 && episode == 4) {
        var epTitle = "4x04 – Baby Blues";
        photo.setAttribute("src", "images/s04/s04e04.jpeg");
        var epDesc = "The team investigates an unsolved death of a baby girl who supposedly drowned, and they realize that any one of a long list of suspects could be a killer.";
    } else if (season == 4 && episode == 5) {
        var epTitle = "4x05 – Saving Sammy";
        photo.setAttribute("src", "images/s04/s04e05.jpeg");
        var epDesc = "The case is reopened of an autistic boy whose parents were both shot and killed while picking up Chinese takeout. Meanwhile the boy's near-adult sister, Ruby, wants custody of him.";
    } else if (season == 4 && episode == 6) {
        var epTitle = "4x06 – Static";
        photo.setAttribute("src", "images/s04/s04e06.jpeg");
        var epDesc = "The 1958 death of an influential and popular disc jockey is reopened when it becomes clear it was not a suicide as originally believed.";
    } else if (season == 4 && episode == 7) {
        var epTitle = "4x07 – The Key";
        photo.setAttribute("src", "images/s04/s04e07.jpeg");
        var epDesc = "The team reopens a case from the 1970's in which a timid housewife and schoolteacher was murdered. They soon learn that she was going through a rebellion at the time and attending sexy key parties, much to her daughter's horror.";
    } else if (season == 4 && episode == 8) {
        var epTitle = "4x08 – Fireflies";
        photo.setAttribute("src", "images/s04/s04e08.jpeg");
        var epDesc = "The case of a little girl who was seemingly abducted from her bedroom in the mid-seventies is reopened.";
    } else if (season == 4 && episode == 9) {
        var epTitle = "4x09 – Lonely Hearts";
        photo.setAttribute("src", "images/s04/s04e09.jpeg");
        var epDesc = "A handsome con-artist commits suicide as an awkward and overweight woman's dating-service tape, which eventually resulted in a relationship, plays on his VCR. The team then reopens her 1989 murder.";
    } else if (season == 4 && episode == 10) {
        var epTitle = "4x10 – Forever Blue";
        photo.setAttribute("src", "images/s04/s04e10.jpeg");
        var epDesc = "The murder of a cop in 1968 is reopened when a dying jailbird makes a deal with the police in order to get released earlier and tells them that he found drugs in the victim's car.";
    } else if (season == 4 && episode == 11) {
        var epTitle = "4x11 – The Red and the Blue";
        photo.setAttribute("src", "images/s04/s04e11.jpeg");
        var epDesc = "When the murder weapon used in the 2000 murder of country singer, Truck Sugar is found, Lilly must travel to Tennessee with a reluctant Scotty in tow to re investigate the case.";
    } else if (season == 4 && episode == 12) {
        var epTitle = "4x12 – Knuckle Up";
        photo.setAttribute("src", "images/s04/s04e12.jpeg");
        var epDesc = "The Cold Case team discovers the body of a prep student rolled up in a barrel in an inner-city area. They learn that he was involved in an underground fight club, and possibly even a much darker incident involving a friendly businessman.";
    } else if (season == 4 && episode == 13) {
        var epTitle = "4x13 – Blackout";
        photo.setAttribute("src", "images/s04/s04e13.jpeg");
        var epDesc = "The team investigates the 1996 death of an abrasive, wealthy woman during a power blackout at a family gathering in her former husband's home.";
    } else if (season == 4 && episode == 14) {
        var epTitle = "4x14 – 8:03 AM";
        photo.setAttribute("src", "images/s04/s04e14.jpeg");
        var epDesc = "The team re-investigates the case of Skill Jones and Madison Reed, two teenagers who were fatally shot in different parts of town on the same day in 2002, at precisely 8:03 AM.";
    } else if (season == 4 && episode == 15) {
        var epTitle = "4x15 – Blood on the Tracks";
        photo.setAttribute("src", "images/s04/s04e15.jpeg");
        var epDesc = "When remnants of a bomb are found during remodeling of an old house, the team reopens the case of a married couple who died there in 1981, in what was thought to be an accidental gas leak.";
    } else if (season == 4 && episode == 16) {
        var epTitle = "4x16 – The Good-Bye Room";
        photo.setAttribute("src", "images/s04/s04e16.jpeg");
        var epDesc = "Lilly and crew investigate the events at a now abandoned home for unwed mothers that led to the death of a patient and the adoption of her infant.";
    } else if (season == 4 && episode == 17) {
        var epTitle = "4x17 – Shuffle, Ball Change";
        photo.setAttribute("src", "images/s04/s04e17.jpeg");
        var epDesc = "The skeleton is found of a sixteen year old who wanted to become a dancer, against the wishes of his grocer/father and wrestler/brother.";
    } else if (season == 4 && episode == 18) {
        var epTitle = "4x18 – A Dollar, a Dream";
        photo.setAttribute("src", "images/s04/s04e18.jpeg");
        var epDesc = "After seven years, the body of a missing woman who had been living in her car with her two daughters is discovered in that car at the bottom of a lake.";
    } else if (season == 4 && episode == 19) {
        var epTitle = "4x19 – Offender";
        photo.setAttribute("src", "images/s04/s04e19.jpeg");
        var epDesc = "A man forces Lilly's team to reinvestigate his son's murder-rape in 1987 by pushing a sex offender off a roof and promising to systematically kill one person a day until the case is solved.";
    } else if (season == 4 && episode == 20) {
        var epTitle = "4x20 – Stand Up and Holler";
        photo.setAttribute("src", "images/s04/s04e20.jpeg");
        var epDesc = "When an anonymous confession to the murder of a 16-year old cheerleader is found in a modern art exhibit, the team reopens her case.";
    } else if (season == 4 && episode == 21) {
        var epTitle = "4x21 – Torn";
        photo.setAttribute("src", "images/s04/s04e21.jpeg");
        var epDesc = "Lilly and her team investigate their oldest case yet, the murder of a woman who was killed in 1919. They soon learn that she may have been murdered because of her activism for woman rights.";
    } else if (season == 4 && episode == 22) {
        var epTitle = "4x22 – Cargo";
        photo.setAttribute("src", "images/s04/s04e22.jpeg");
        var epDesc = "The FBI asks the team to reopen a case involving the 2005 murder of longshoreman Mike Chulaski, whose death might be related to a Russian human-trafficking ring the FBI is trying to bring down.";
    } else if (season == 4 && episode == 23) {
        var epTitle = "4x23 – The Good Death";
        photo.setAttribute("src", "images/s04/s04e23.jpeg");
        var epDesc = "The detectives discover that nine years ago a terminally ill man actually died of a morphine overdose before the disease could take him.";
    } else if (season == 4 && episode == 24) {
        var epTitle = "4x24 – Stalker";
        photo.setAttribute("src", "images/s04/s04e01.jpeg");
        var epDesc = "When a teenage girl wakes up from a coma, the team reopens the murder of her family. Soon, they find out that she was being stalked by a man calling himself 'Romeo'.";
    }

    // Resultado
    title.innerHTML = epTitle;
    window.document.photo;
    description.innerHTML = epDesc;
}