const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '..', 'backend', 'data', 'topics.json');
console.log('Reading topics from:', topicsPath);

const data = JSON.parse(fs.readFileSync(topicsPath, 'utf8'));

const newGamesMap = {
  118: [
    {
      "type": "sentence_builder",
      "title": "Phrasal Syntax 🏗️",
      "instruction": "Ordena las palabras para formar la oración correcta.",
      "sentences": [
        {"text": "SHE TRIED TO GLOSS OVER HER MISTAKES", "translation": "Ella intentó pasar por alto sus errores", "distractors": ["GLOSSES", "MISTAKE"]},
        {"text": "WE NEED TO IRON OUT ALL THE DETAILS", "translation": "Necesitamos resolver todos los detalles", "distractors": ["IRONS", "DETAILED"]},
        {"text": "IT TOOK A WHILE TO COTTON ON", "translation": "Tomó un tiempo entender lo que pasaba", "distractors": ["COTTONING", "FOR"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "The Strategic Boardroom 💼",
      "instruction": "Read the text and answer the questions checking the meaning of the phrasal verbs.",
      "text": "The board meeting was intense, but we managed to hammer out an agreement. The CFO tried to gloss over the budget deficit, but the CEO insisted we iron out every detail. Eventually, the team cottoned on to the fact that we had to cut costs immediately.",
      "questions": [
        {
          "q": "What does the text mean by 'hammer out'?",
          "a": "To reach an agreement after long discussion.",
          "o": ["To completely cancel a project.", "To reach an agreement after long discussion.", "To ignore a problem."]
        },
        {
          "q": "What did the CFO try to do with the deficit?",
          "a": "Avoid talking about or ignore it.",
          "o": ["Explain it in great detail.", "Avoid talking about or ignore it.", "Increase it further."]
        },
        {
          "q": "What did the team eventually 'cotton on' to?",
          "a": "They realized they had to cut costs.",
          "o": ["They realized they had to cut costs.", "They decided to resign.", "They forgot the passcode."]
        }
      ]
    }
  ],
  119: [
    {
      "type": "sentence_builder",
      "title": "Emphasis Builder 🏗️",
      "instruction": "Forma la oración invertida correcta tocando las palabras.",
      "sentences": [
        {"text": "NEVER HAVE I SEEN SUCH BEAUTY", "translation": "Nunca he visto tanta belleza", "distractors": ["SAW", "AM"]},
        {"text": "RARELY DOES HE COMPLAIN ABOUT WORK", "translation": "Rara vez se queja del trabajo", "distractors": ["COMPLAINS", "DO"]},
        {"text": "ON NO ACCOUNT SHOULD YOU LEAVE", "translation": "Bajo ninguna circunstancia debes irte", "distractors": ["MUST", "LEAVING"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "A Rare Occurrence 📈",
      "instruction": "Read the text and answer the questions on inversion.",
      "text": "Rarely have we witnessed such a dramatic shift in consumer behavior. Not only did the company launch a failing product, but only after months of research did they realize their strategy was flawed. Under no circumstances should they repeat this mistake.",
      "questions": [
        {
          "q": "What has rarely been witnessed?",
          "a": "A dramatic shift in consumer behavior.",
          "o": ["A successful marketing campaign.", "A dramatic shift in consumer behavior.", "A stable market environment."]
        },
        {
          "q": "When did the company realize their strategy was flawed?",
          "a": "Only after months of research.",
          "o": ["Before the product launch.", "Immediately on the first day.", "Only after months of research."]
        },
        {
          "q": "What is prohibited under any circumstances?",
          "a": "Repeating the mistake.",
          "o": ["Conducting more research.", "Repeating the mistake.", "Changing the consumer behavior."]
        }
      ]
    }
  ],
  120: [
    {
      "type": "sentence_builder",
      "title": "Focus Builder 🏗️",
      "instruction": "Construye la oración Cleft para dar énfasis.",
      "sentences": [
        {"text": "WHAT I NEED IS A GOOD HOLIDAY", "translation": "Lo que necesito es una buena vacación", "distractors": ["WANT", "HOLIDAYS"]},
        {"text": "IT WAS JOHN WHO BROKE THE VASE", "translation": "Fue John quien rompió el florero", "distractors": ["WHICH", "BREAKS"]},
        {"text": "THE REASON WHY SHE LEFT WAS ANGER", "translation": "La razón por la que se fue fue el enojo", "distractors": ["BECAUSE", "LEAVING"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "The Rebranding Move 🚀",
      "instruction": "Read the text and answer the questions about emphasis structures.",
      "text": "What the company desperately needs is a complete rebranding. It was the marketing director who first suggested this idea. The reason why the board hesitated was the enormous cost involved, but it was only yesterday that they finally approved it.",
      "questions": [
        {
          "q": "What does the company desperately need?",
          "a": "A complete rebranding.",
          "o": ["A new marketing director.", "A complete rebranding.", "A reduction in budget."]
        },
        {
          "q": "Who first suggested the rebranding?",
          "a": "The marketing director.",
          "o": ["The CEO.", "The board of directors.", "The marketing director."]
        },
        {
          "q": "Why did the board hesitate?",
          "a": "Because of the enormous cost.",
          "o": ["Because they disliked the idea.", "Because of the enormous cost.", "Because they wanted to wait until next year."]
        }
      ]
    }
  ],
  121: [
    {
      "type": "reading_comprehension",
      "title": "The Museum Heist 🕵️‍♂️",
      "instruction": "Lee el texto y responde las preguntas de especulación.",
      "text": "The famous diamond disappeared from the museum last night. The alarm did not go off, meaning the thief must have known the passcode. Security cameras show a shadow at 2 AM, which could have been the guard, but he denies being near the room. Alternatively, a hacker might have disabled the cameras remotely. Detective Vance believes the heist should have been prevented if the backup locks had been enabled.",
      "questions": [
        {
          "q": "Why didn't the alarm go off?",
          "a": "The thief must have known the passcode.",
          "o": ["The power was cut off.", "The thief must have known the passcode.", "The alarm was broken."]
        },
        {
          "q": "Who does the shadow on the security cameras belong to?",
          "a": "It could have been the guard.",
          "o": ["It could have been the guard.", "It was definitely the manager.", "It was a wild animal."]
        },
        {
          "q": "How were the cameras possibly disabled?",
          "a": "A hacker might have disabled them remotely.",
          "o": ["A hacker might have disabled them remotely.", "The batteries died.", "They were never turned on."]
        }
      ]
    },
    {
      "type": "word_search",
      "title": "Deduction Search 🔍",
      "instruction": "Encuentra las palabras clave relacionadas con la especulación y probabilidad.",
      "words": ["MIGHT", "MUST", "COULD", "SHOULD", "POSSIBLE", "CERTAIN", "PERHAPS", "PROBABLY"]
    }
  ],
  122: [
    {
      "type": "sentence_builder",
      "title": "Clause Assembler 🏗️",
      "instruction": "Forma la oración con cláusula de participio tocando las palabras.",
      "sentences": [
        {"text": "HAVING FINISHED HIS HOMEWORK HE WENT OUT", "translation": "Habiendo terminado su tarea, salió", "distractors": ["FINISHING", "OUTSIDE"]},
        {"text": "NOT KNOWING WHAT TO DO SHE CALLED ME", "translation": "No sabiendo qué hacer, me llamó", "distractors": ["KNOW", "CALLING"]},
        {"text": "SURROUNDED BY FANS THE ACTOR SMILED WIDELY", "translation": "Rodeado por fans, el actor sonrió ampliamente", "distractors": ["SURROUNDING", "ACTING"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "A Pivotal Choice 🍂",
      "instruction": "Read the text and answer the questions about participle clauses.",
      "text": "Having analyzed the market trends, the team decided to pivot. Not knowing how the public would react, they conducted small focus groups. Surrounded by positive feedback, the CEO smiled, realizing that the risk was worth taking.",
      "questions": [
        {
          "q": "What did the team do after analyzing the market trends?",
          "a": "They decided to pivot.",
          "o": ["They launched the product immediately.", "They decided to pivot.", "They hired a new consulting firm."]
        },
        {
          "q": "Why did they conduct focus groups?",
          "a": "Not knowing how the public would react.",
          "o": ["To save money on marketing.", "Not knowing how the public would react.", "To follow a direct order from regulators."]
        },
        {
          "q": "What made the CEO realize the risk was worth taking?",
          "a": "Being surrounded by positive feedback.",
          "o": ["A sudden increase in budget.", "Being surrounded by positive feedback.", "The opinion of competitors."]
        }
      ]
    }
  ],
  123: [
    {
      "type": "fill_blanks",
      "title": "Academic Nouns ✍️",
      "instruction": "Completa el espacio con el sustantivo correspondiente (nominalización).",
      "sentences": [
        {"text": "They decided to implement the policy. -> The ___ of the policy was successful.", "answer": "implementation"},
        {"text": "The team analyzed the results. -> The ___ of the results took three days.", "answer": "analysis"},
        {"text": "He described the event. -> His ___ of the event was very clear.", "answer": "description"}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "The Evolution of AI 🤖",
      "instruction": "Lee el texto y responde las preguntas de comprensión usando nominalizaciones.",
      "text": "The rapid development of artificial intelligence has led to the transformation of many industries. While some critics argue that the implementation of automation will result in the elimination of jobs, others claim it creates new roles. The analysis of recent economic data shows a significant growth in technological sectors. Ultimately, the decision of regulators will shape the future of work.",
      "questions": [
        {
          "q": "What does the analysis of recent economic data show?",
          "a": "A significant growth in technological sectors.",
          "o": ["A decline in employment.", "A significant growth in technological sectors.", "No change in the economy."]
        },
        {
          "q": "What are critics arguing about automation?",
          "a": "That its implementation will eliminate jobs.",
          "o": ["That it will increase salaries.", "That its implementation will eliminate jobs.", "That it is too expensive."]
        },
        {
          "q": "What is said to shape the future of work?",
          "a": "The decision of regulators.",
          "o": ["The decision of regulators.", "The development of hardware.", "The opinions of workers."]
        }
      ]
    }
  ],
  124: [
    {
      "type": "sentence_builder",
      "title": "Reported Speech Builder 🏗️",
      "instruction": "Forma la estructura de reporte correcta.",
      "sentences": [
        {"text": "HE SUGGESTED THAT WE LEAVE IMMEDIATELY", "translation": "Él sugirió que nos fuéramos de inmediato", "distractors": ["SUGGEST", "TO LEAVE"]},
        {"text": "SHE DENIED HAVING SEEN THE DOCUMENT", "translation": "Ella negó haber visto el documento", "distractors": ["DENY", "SEEN"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Corporate Announcement 🏢",
      "instruction": "Read the text and answer the questions based on reported structures.",
      "text": "The spokesperson announced that the merger had been completed. She denied having made any promises regarding job security, but suggested that employees check the official portal. Many congratulated the executives on their vision.",
      "questions": [
        {
          "q": "What did the spokesperson announce?",
          "a": "That the merger was completed.",
          "o": ["That profits had declined.", "That the merger was completed.", "That the company was closing."]
        },
        {
          "q": "What did she deny?",
          "a": "Making promises about job security.",
          "o": ["Making promises about job security.", "Meeting with the press.", "Updating the official portal."]
        },
        {
          "q": "What were the executives congratulated on?",
          "a": "Their vision.",
          "o": ["Their salary increase.", "Their retirement.", "Their vision."]
        }
      ]
    }
  ],
  125: [
    {
      "type": "fill_blanks",
      "title": "Passive Structures ✍️",
      "instruction": "Completa el espacio en blanco para formar la oración de reporte pasivo.",
      "sentences": [
        {"text": "He is believed ___ have escaped to another country.", "answer": "to"},
        {"text": "He is thought ___ be living in London.", "answer": "to"},
        {"text": "It is alleged ___ she stole the funds.", "answer": "that"}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "The Lost Artifact 🏺",
      "instruction": "Lee el texto y responde las preguntas usando estructuras pasivas de reporte.",
      "text": "A rare Egyptian urn is reported to have been stolen from the national gallery. The suspect is believed to have entered the building disguised as a curator. It is understood that security guards were distracted at the time of the heist. The urn, which is estimated to be worth millions, is thought to have already left the country. Police are asking anyone with information to contact them immediately.",
      "questions": [
        {
          "q": "How is the suspect believed to have entered the building?",
          "a": "Disguised as a curator.",
          "o": ["Through the roof.", "Disguised as a curator.", "Using a stolen card."]
        },
        {
          "q": "What is understood about the security guards?",
          "a": "They were distracted during the theft.",
          "o": ["They were sleeping.", "They were distracted during the theft.", "They assisted the thief."]
        },
        {
          "q": "Where is the urn thought to be now?",
          "a": "Outside of the country.",
          "o": ["Hidden in the museum.", "Outside of the country.", "In a private collection."]
        }
      ]
    }
  ],
  126: [
    {
      "type": "sentence_builder",
      "title": "Adverb Positioning 🏗️",
      "instruction": "Ordena las palabras ubicando correctamente el adverbio de oración.",
      "sentences": [
        {"text": "FRANKLY I DO NOT CARE ABOUT IT", "translation": "Francamente, no me importa", "distractors": ["FRANK", "CARES"]},
        {"text": "HOPEFULLY WE WILL ARRIVE ON TIME", "translation": "Con suerte, llegaremos a tiempo", "distractors": ["HOPEFUL", "ARRIVING"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "A Change of Heart 🍂",
      "instruction": "Lee el texto y responde preguntas identificando la actitud del autor a través de adverbios.",
      "text": "Admittedly, the new environmental policy will cause short-term disruptions. Many businesses complain about the costs, but, hopefully, the long-term benefits will outweigh these initial hurdles. Regrettably, some local species are already on the brink of extinction, so action cannot be delayed. Frankly, we have ignored the scientific consensus for far too long, and now we must pay the price.",
      "questions": [
        {
          "q": "What does the author admit about the new environmental policy?",
          "a": "It will cause short-term disruptions.",
          "o": ["It is completely useless.", "It will cause short-term disruptions.", "It is too cheap to implement."]
        },
        {
          "q": "What is regrettably true about some local species?",
          "a": "They are already on the brink of extinction.",
          "o": ["They have left the reserve.", "They are multiplying too fast.", "They are already on the brink of extinction."]
        },
        {
          "q": "What is the author's frank opinion on the scientific consensus?",
          "a": "It has been ignored for far too long.",
          "o": ["It is incorrect.", "It has been ignored for far too long.", "It is too complicated to understand."]
        }
      ]
    }
  ],
  127: [
    {
      "type": "sentence_builder",
      "title": "Comparative Matcher 🏗️",
      "instruction": "Ordena las palabras para formar la doble comparativa.",
      "sentences": [
        {"text": "THE MORE YOU LEARN THE MORE YOU GROW", "translation": "Cuanto más aprendes, más creces", "distractors": ["MOST", "LEARNING"]},
        {"text": "THE SOONER THE BETTER", "translation": "Cuanto antes, mejor", "distractors": ["SOON", "BEST"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Renewable Investment Trends ☀️",
      "instruction": "Read the text and answer the questions on double comparatives.",
      "text": "The more a country invests in renewable energy, the faster its economy transitions. Economists note that the sooner we implement these measures, the better the outcomes. The harder we work now to reduce emissions, the more successful we will be in combating climate change.",
      "questions": [
        {
          "q": "What happens as a country invests more in renewable energy?",
          "a": "Its economy transitions faster.",
          "o": ["Its energy costs rise indefinitely.", "Its economy transitions faster.", "Its GDP growth stops entirely."]
        },
        {
          "q": "What is the benefit of implementing measures sooner?",
          "a": "Better outcomes.",
          "o": ["Less political support.", "Worse economic performance.", "Better outcomes."]
        },
        {
          "q": "What leads to being more successful against climate change?",
          "a": "Working harder now to reduce emissions.",
          "o": ["Working harder now to reduce emissions.", "Postponing all decisions.", "Relying purely on historical data."]
        }
      ]
    }
  ],
  128: [
    {
      "type": "sentence_builder",
      "title": "Habits Builder 🏗️",
      "instruction": "Ordena la oración habitual en pasado/presente.",
      "sentences": [
        {"text": "MY GRANDFATHER WOULD TELL US STORIES", "translation": "Mi abuelo solía contarnos historias", "distractors": ["WILL", "TELLS"]},
        {"text": "SHE WILL ALWAYS TALK DURING MOVIES", "translation": "Ella siempre habla durante las películas", "distractors": ["WOULD", "TALKING"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Generational Habits 🕰️",
      "instruction": "Read the text and answer the questions checking the usage of will and would.",
      "text": "In the old days, our family would gather around the fireplace every Sunday evening. My grandfather would tell us stories about his travels. Today, children are different; they will sit staring at screens for hours without speaking a word.",
      "questions": [
        {
          "q": "What did the family do on Sunday evenings in the past?",
          "a": "Gather around the fireplace.",
          "o": ["Watch television together.", "Gather around the fireplace.", "Go out to the theater."]
        },
        {
          "q": "What did the grandfather use to do?",
          "a": "Tell stories about his travels.",
          "o": ["Complain about the cold.", "Tell stories about his travels.", "Paint portraits of the family."]
        },
        {
          "q": "What is the current persistent habit of children mentioned?",
          "a": "Staring at screens for hours.",
          "o": ["Playing outdoors.", "Staring at screens for hours.", "Gathering around the fireplace."]
        }
      ]
    }
  ],
  129: [
    {
      "type": "sentence_builder",
      "title": "Choice Builder 🏗️",
      "instruction": "Construye la oración utilizando conjunciones correlativas.",
      "sentences": [
        {"text": "I LIKE NEITHER TEA NOR COFFEE", "translation": "No me gusta ni el té ni el café", "distractors": ["OR", "LIKING"]},
        {"text": "EITHER YOU GO OR I WILL", "translation": "O vas tú o voy yo", "distractors": ["NOR", "WENT"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "A Strategic Dilemma ⚖️",
      "instruction": "Read the text and answer the questions using correlative conjunctions.",
      "text": "We can choose either the European expansion or the Asian partnership. Neither path is without risk, but both options offer immense growth potential. We must decide which strategy aligns best with our long-term goals.",
      "questions": [
        {
          "q": "What are the two choices mentioned?",
          "a": "European expansion or Asian partnership.",
          "o": ["Closing the company or merging.", "European expansion or Asian partnership.", "Hiring new staff or laying off."]
        },
        {
          "q": "What is true about both paths?",
          "a": "Neither path is without risk.",
          "o": ["They are completely risk-free.", "Neither path is without risk.", "They cost the exact same amount."]
        },
        {
          "q": "What do both options offer?",
          "a": "Immense growth potential.",
          "o": ["Immediate short-term losses.", "Immense growth potential.", "No change in revenue."]
        }
      ]
    }
  ],
  130: [
    {
      "type": "sentence_builder",
      "title": "Get Phrases 🏗️",
      "instruction": "Ordena las palabras usando expresiones con 'get'.",
      "sentences": [
        {"text": "WE NEED TO GET RID OF THIS", "translation": "Necesitamos deshacernos de esto", "distractors": ["RIDDING", "GETS"]},
        {"text": "SHE WANTS TO GET AWAY FOR HOLIDAYS", "translation": "Ella quiere irse de vacaciones", "distractors": ["GETTING", "OFF"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Adapting to the City 🏙️",
      "instruction": "Read the text and answer the questions based on expressions with 'get'.",
      "text": "Starting a new career in a major city can be tough, but you will get by if you stay focused. It takes time to get along with new colleagues, but once you get your ideas across, you will begin to get ahead in the company.",
      "questions": [
        {
          "q": "What does the text say about 'getting by'?",
          "a": "You will manage if you stay focused.",
          "o": ["You will fail completely.", "You will manage if you stay focused.", "You will need to borrow money."]
        },
        {
          "q": "What is said about relationship with colleagues?",
          "a": "It takes time to get along with them.",
          "o": ["It is impossible to get along.", "It takes time to get along with them.", "It happens instantly on day one."]
        },
        {
          "q": "How can you get ahead in the company?",
          "a": "By getting your ideas across.",
          "o": ["By ignoring feedback.", "By getting your ideas across.", "By working in isolation."]
        }
      ]
    }
  ],
  131: [
    {
      "type": "fill_blanks",
      "title": "Ellipsis Blanks ✍️",
      "instruction": "Rellena el espacio con el término de elipsis o sustitución correcto.",
      "sentences": [
        {"text": "She likes jazz, and I do ___.", "answer": "too"},
        {"text": "He didn't go, and neither ___ I.", "answer": "did"},
        {"text": "Are they coming? I hope ___.", "answer": "so"}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Job Interview Prep 💼",
      "instruction": "Lee la conversación e identifica el significado de las elipsis y sustituciones.",
      "text": "A: 'Have you prepared the slides for the presentation?'\nB: 'I think so. I did most of the work yesterday, but John said he would finish the rest.'\nA: 'He hasn't done so yet. I checked the shared drive ten minutes ago.'\nB: 'If so, I will do it myself. We can't risk presenting an incomplete deck.'\nA: 'I would prefer you to. Thanks for stepping up.'",
      "questions": [
        {
          "q": "Did B finish the slides yesterday?",
          "a": "He did most of the work but left the rest to John.",
          "o": ["Yes, completely.", "He did most of the work but left the rest to John.", "No, he didn't start."]
        },
        {
          "q": "What does A mean by 'He hasn't done so yet'?",
          "a": "John hasn't finished the rest of the slides.",
          "o": ["John hasn't arrived at the office.", "John hasn't finished the rest of the slides.", "John hasn't called the client."]
        },
        {
          "q": "What will B do if John hasn't finished the slides?",
          "a": "Finish the slides himself.",
          "o": ["Cancel the presentation.", "Finish the slides himself.", "Call the boss."]
        }
      ]
    }
  ],
  132: [
    {
      "type": "sentence_builder",
      "title": "-ever Builder 🏗️",
      "instruction": "Ordena las palabras para formar la oración con adverbio relativo en -ever.",
      "sentences": [
        {"text": "WHATEVER HE SAYS DO NOT LISTEN", "translation": "Diga lo que diga, no escuches", "distractors": ["HOWEVER", "SAYING"]},
        {"text": "CHOOSE WHICHEVER ONE YOU PREFER", "translation": "Elige cualquiera que prefieras", "distractors": ["WHAT", "PREFERS"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "The Remote Work Policy 💻",
      "instruction": "Read the text and answer the questions on -ever words.",
      "text": "Our company has a flexible work policy. Whichever office you choose, and whatever hours you work, you can succeed. You can schedule meetings whenever you prefer, and collaborate with whoever is available.",
      "questions": [
        {
          "q": "What is true about office choice and working hours?",
          "a": "You can succeed regardless of either.",
          "o": ["You must work in the main office.", "You can succeed regardless of either.", "You are restricted to night shifts."]
        },
        {
          "q": "When can employees schedule meetings?",
          "a": "Whenever they prefer.",
          "o": ["Only on Friday mornings.", "Whenever they prefer.", "Only after getting approval from HR."]
        },
        {
          "q": "Who can employees collaborate with?",
          "a": "Whoever is available.",
          "o": ["Whoever is available.", "Only the executive team.", "No one; it is strictly individual work."]
        }
      ]
    }
  ],
  133: [
    {
      "type": "sentence_builder",
      "title": "Object Builder 🏗️",
      "instruction": "Construye la oración ordenando el objeto directo e indirecto.",
      "sentences": [
        {"text": "SHE GAVE ME A BEAUTIFUL BOOK", "translation": "Ella me dio un libro hermoso", "distractors": ["GIVES", "FOR"]},
        {"text": "HE LENT SOME MONEY TO JOHN", "translation": "Él le prestó algo de dinero a John", "distractors": ["LENDS", "FOR"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "A Grateful gesture 🎁",
      "instruction": "Read the text and answer the questions on direct and indirect objects.",
      "text": "The client sent a letter to the manager to explain the issue. The manager then bought a gift for the team as an apology. He offered a promotion to Sarah, who had worked tirelessly to resolve the situation.",
      "questions": [
        {
          "q": "Why did the client send a letter?",
          "a": "To explain the issue to the manager.",
          "o": ["To cancel the contract.", "To explain the issue to the manager.", "To request a refund."]
        },
        {
          "q": "What did the manager buy for the team?",
          "a": "A gift.",
          "o": ["A brand new computer.", "A gift.", "Lunch."]
        },
        {
          "q": "What did the manager offer to Sarah?",
          "a": "A promotion.",
          "o": ["A promotion.", "A vacation.", "An apology letter."]
        }
      ]
    }
  ],
  134: [
    {
      "type": "sentence_builder",
      "title": "Compound Builder 🏗️",
      "instruction": "Ordena las palabras usando adjetivos compuestos.",
      "sentences": [
        {"text": "IT IS A BREATHTAKING VIEW OF MOUNTAINS", "translation": "Es una vista impresionante de las montañas", "distractors": ["TAKING", "VIEWED"]},
        {"text": "HE IS A VERY EASYGOING PERSON", "translation": "Él es una persona muy relajada", "distractors": ["EASY", "GOINGED"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Resort Review 🏖️",
      "instruction": "Read the text and answer the questions on advanced compound adjectives.",
      "text": "We stayed at a world-famous hotel that offered breathtaking views of the ocean. It was a brand-new resort with an easygoing atmosphere. The staff were extremely well-behaved and made our stay unforgettable.",
      "questions": [
        {
          "q": "How is the hotel's reputation described?",
          "a": "World-famous.",
          "o": ["Local and quiet.", "World-famous.", "Badly rated."]
        },
        {
          "q": "What kind of atmosphere did the resort have?",
          "a": "Easygoing.",
          "o": ["Strict and corporate.", "Easygoing.", "Boring and silent."]
        },
        {
          "q": "What is noted about the staff?",
          "a": "They were well-behaved.",
          "o": ["They were well-behaved.", "They were absent-minded.", "They worked part-time."]
        }
      ]
    }
  ],
  135: [
    {
      "type": "fill_blanks",
      "title": "Relative Blanks ✍️",
      "instruction": "Completa con el pronombre relativo adecuado (where, whose, which, who).",
      "sentences": [
        {"text": "The city ___ we met is beautiful.", "answer": "where"},
        {"text": "The man ___ car was stolen called the police.", "answer": "whose"},
        {"text": "The book ___ I read was fascinating.", "answer": "which"}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "The Ancient City of Petra 🏛️",
      "instruction": "Lee el texto y responde preguntas sobre las cláusulas relativas en el pasaje.",
      "text": "Petra is an ancient city whose origins date back to the 4th century BC. It was built by the Nabataeans, who carved magnificent structures directly into the red sandstone cliffs. The city, which was a vital trade hub, lay forgotten by the Western world until 1812, when a Swiss explorer rediscovered it. Today, Petra, where thousands of tourists visit daily, remains a symbol of architectural wonder.",
      "questions": [
        {
          "q": "Who built the ancient city of Petra?",
          "a": "The Nabataeans, who carved structures into the cliffs.",
          "o": ["The Romans, who occupied it later.", "The Nabataeans, who carved structures into the cliffs.", "A Swiss explorer in 1812."]
        },
        {
          "q": "What happened to the city until 1812?",
          "a": "It lay forgotten by the Western world.",
          "o": ["It was destroyed by an earthquake.", "It lay forgotten by the Western world.", "It was a busy trade capital."]
        },
        {
          "q": "What is Petra's significance today?",
          "a": "It is a symbol of architectural wonder visited by thousands.",
          "o": ["It is a private archaeological site.", "It is a symbol of architectural wonder visited by thousands.", "It is a modern commercial center."]
        }
      ]
    }
  ],
  136: [
    {
      "type": "sentence_builder",
      "title": "Simile Builder 🏗️",
      "instruction": "Construye la oración utilizando símil/comparación.",
      "sentences": [
        {"text": "HE TALKS AS IF HE KNEW EVERYTHING", "translation": "Habla como si supiera todo", "distractors": ["THOUGH", "KNOWS"]},
        {"text": "IT SMELLS AS THOUGH SOMETHING IS BURNING", "translation": "Huele como si algo se estuviera quemando", "distractors": ["IF", "BURNED"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "A Surreal Encounter 🌌",
      "instruction": "Read the text and answer the questions on comparisons using as if/as though.",
      "text": "She looked as if she had not slept in days. She walked as though she were floating, speaking to us like a person in a dream. We felt as if we had stepped directly into a surreal movie scene.",
      "questions": [
        {
          "q": "What was the initial observation about her appearance?",
          "a": "She looked as if she had not slept in days.",
          "o": ["She looked energetic and ready.", "She looked as if she had not slept in days.", "She wore a bright red coat."]
        },
        {
          "q": "How did she move and speak?",
          "a": "Floating and speaking like a person in a dream.",
          "o": ["Running and shouting loudly.", "Floating and speaking like a person in a dream.", "Walking slowly with a cane."]
        },
        {
          "q": "How did the observers feel?",
          "a": "As if they had stepped into a surreal movie scene.",
          "o": ["Extremely bored.", "As if they had stepped into a surreal movie scene.", "Scared of the dark."]
        }
      ]
    }
  ],
  137: [
    {
      "type": "sentence_builder",
      "title": "Subjunctive Builder 🏗️",
      "instruction": "Ordena la oración en modo subjuntivo.",
      "sentences": [
        {"text": "I DEMAND THAT HE BE REPLACED", "translation": "Exijo que sea reemplazado", "distractors": ["IS", "REPLACING"]},
        {"text": "IT IS VITAL THAT SHE ARRIVE ON TIME", "translation": "Es vital que ella llegue a tiempo", "distractors": ["ARRIVES", "ARRIVING"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Safety Protocols ⚠️",
      "instruction": "Read the text and answer the questions checking the subjunctive forms.",
      "text": "The safety committee insists that the factory supervisor be present during all drills. It is crucial that she know the emergency protocols. They also recommend that every worker arrive fifteen minutes early.",
      "questions": [
        {
          "q": "What does the safety committee insist on?",
          "a": "That the supervisor be present during drills.",
          "o": ["That the factory close down.", "That the supervisor be present during drills.", "That they buy new safety helmets."]
        },
        {
          "q": "What is crucial for the supervisor?",
          "a": "That she know the emergency protocols.",
          "o": ["That she know the emergency protocols.", "That she leave early.", "That she invite the committee for dinner."]
        },
        {
          "q": "What is recommended for every worker?",
          "a": "Arriving fifteen minutes early.",
          "o": ["Wearing heavy boots.", "Arriving fifteen minutes early.", "Working on weekends."]
        }
      ]
    }
  ],
  138: [
    {
      "type": "sentence_builder",
      "title": "Agreement Builder 🏗️",
      "instruction": "Ordena la oración asegurando la concordancia sujeto-verbo.",
      "sentences": [
        {"text": "THE MEMBERS OF THE TEAM ARE READY", "translation": "Los miembros del equipo están listos", "distractors": ["IS", "READIED"]},
        {"text": "EACH OF THE STUDENTS HAS A BOOK", "translation": "Cada uno de los estudiantes tiene un libro", "distractors": ["HAVE", "BOOKS"]}
      ]
    },
    {
      "type": "reading_comprehension",
      "title": "Scientific Abstract 🧪",
      "instruction": "Read the text and answer the questions on subject-verb agreement.",
      "text": "The list of approved items is now available. Neither the manager nor the technicians were able to find the error. However, every one of the files has been backed up, which ensures our data is safe.",
      "questions": [
        {
          "q": "What is available now?",
          "a": "The list of approved items.",
          "o": ["The tools in the lab.", "The list of approved items.", "A new computer model."]
        },
        {
          "q": "Who was unable to find the error?",
          "a": "Neither the manager nor the technicians.",
          "o": ["Neither the manager nor the technicians.", "Only the client.", "The software company."]
        },
        {
          "q": "What is true about the files?",
          "a": "Every one of them has been backed up.",
          "o": ["They were all deleted.", "Every one of them has been backed up.", "They are corrupted."]
        }
      ]
    }
  ]
};

data.forEach(topic => {
  if (newGamesMap[topic.id]) {
    console.log(`Modifying topic ID ${topic.id} ("${topic.title}")`);
    let parsedPractice = { games: [] };
    if (topic.premium_practice) {
      try {
        parsedPractice = typeof topic.premium_practice === 'string'
          ? JSON.parse(topic.premium_practice)
          : topic.premium_practice;
      } catch (e) {
        console.error(`Error parsing premium_practice for topic ID ${topic.id}:`, e.message);
      }
    }
    
    // We only keep the original first 3 games (matching, trivia_game, cloze_test)
    // to avoid duplicating them if the script is run multiple times
    const originalGames = (parsedPractice.games || []).slice(0, 3);
    
    // Combine with the new games
    const updatedGames = [...originalGames, ...newGamesMap[topic.id]];
    parsedPractice.games = updatedGames;
    
    // Stringify back as string to match topics.json format
    topic.premium_practice = JSON.stringify(parsedPractice);
  }
});

fs.writeFileSync(topicsPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated topics.json!');
