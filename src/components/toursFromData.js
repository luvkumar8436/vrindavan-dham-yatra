import prem_mandir_img from './images/prem-mandir-night.jpg'
import AgraFort from './images/Jahangiri-Mahal-Agra-Fort.jpg'
import tajMahal from './images/taj-mahal.jpg'
import indiaGate2 from './images/india-gate-view.jpg'
import rajPath from './images/Rajpath-delhi.jpg'
import akshardham from './images/akshardham-temple-delhi-hero.jpeg'
import gangaGhat from './images/ganga-ghat-haridwar-uttarakhand.jpeg'
import ganga2 from './images/ganga-boat.webp'
// import { duration } from "@mui/material";
import kirti_mandir_img from './images/kirti-mandir.jpeg'
import parikrama from './images/parikrama.jpg'


export const locations = [
    "Banglore",
    "Hyderabad",
    "Chandigarh",
    "Pune",
    "Gurgaon",
    "Chennai",
    "Kolkata"
]
    

function MathuraVrindavaTour(location){
    return {
        tourHeadline: `Mathura Vrindavan Tour From ${location}`,
        highlights: [
            "Raman Reti",
            "Shri Krishna Janmbhoomi",
            "Dwarikadhish Temple",
            "Vishram Ghat",
            "Shri Nand Baba Temple",
            "Radha Rani Temple",
            "Kirti Mandir",
            "Radha Kund",
            "Goverdhan Hill",
            "Isckon temple",
            "Banke Bihari Mandir",
            "Nidhivan",
            "Kesi Ghat",
            "Prem Mandir",
        ],
        itenary:
        {
            "Day 1": {
                [`${location} to Mathura`]: [
                    {
                        "Flight to Delhi": [
                            `Take an early morning flight from ${location} to Delhi (approx 2.5 hours).`
                        ]
                    },
                    {
                        "Drive to Mathura": [
                            "Board the cab from Delhi to Mathura (approx 2 hours)."
                        ]
                    }
                ],
                "Afternoon (2:00 PM - 5:00 PM)": [
                    {
                        "Lunch in Mathura": [
                            "Visit Brijwasi Mithai Wala for authentic Mathura peda, kachoris, and chaat.",
                            "Try their thali for a full traditional meal."
                        ]
                    },
                    {
                        "Krishna Janmabhoomi Temple Complex" : [
                            "Visit the birthplace of Lord Krishna. The temple complex offers spiritual vibes and historical significance.",
                            "Snacks: Enjoy local delicacies like kachoris and lassi at Shankar Mithai Wala or nearby stalls in Mathura."                                                               
                        ]

                    },
                    {
                        "Dwarkadhish Temple" : 
                        [
                            "Visit this famous temple with its beautiful architecture. The darshan and quiet ambiance are worth experiencing."                                
                        ]
                    },
                ],
                "Evening (5:00 PM - 8:00 PM)": [
                    {
                        "Raman Reti (5:00 PM - 6:00 PM)":
                        [
                            "Return to Raman Reti after it reopens for evening darshan. Participate in the aarti at 7:00 PM, which is a highlight of the day."
                        ]
                    },
                    {
                        "Vishram Ghat (if time permits)": 
                        [
                            "End your day with a peaceful Yamuna boat ride or a short visit to Vishram Ghat in Mathura."
                        ],
                    },
                    {
                        "Dinner (8:00 PM Onwards)": [
                            "Enjoy dinner at Brijwasi Royal Mithaiwala or Brijwasi Bhojnalaya in Mathura, known for authentic dishes like dal-baati churma and sweets like peda."
                        ]
                    }
                ],
                "Street Food Spots": [
                    {
                        "Deeg Gate Market":
                        [
                            "What to Try: Kachori-sabzi, samosas, and laddoos.",
                            "Why Visit: A bustling market offering a true taste of local street food."                                
                        ]
                    },
                    {
                        "Tilak Dwar":
                        [
                            "What to Try: Peda and thandai.",
                            "Why Visit: A vibrant area where you can enjoy street-side stalls selling local delicacies."                                
                        ]
                    }
                ]
                
            },
            "Day 2": {
                "Vrindavan - In Krishna’s Playground" : [
                    {
                        "Morning (6:00 AM - 12:00 PM)":
                        [
                            "Banke Bihari Temple: Arrive by 6:00 AM to experience the vibrant early morning mangal aarti. Allocate about 1.5 hours for darshan and exploration.",
                            "ISKCON Temple: Head here by 8:00 AM for its serene morning prayers. Spend an hour meditating and enjoying the calm ambiance.",
                            "Nidhi Van and Seva Kunj: Visit these sacred groves around 10:30 AM before the temples close. These places don't have strict closing times, so you can explore leisurely."                                
                        ]
                    },
                ],
                "Afternoon (12:00 PM - 4:00 PM)": [
                    {
                        "Enjoy Lunch" : 
                        [
                            "Have a delicious meal at Govinda’s (ISKCON Restaurant) or a nearby café offering local vegetarian dishes."
                        ]
                    },
                    {
                        "Visit Non-Temple Sites" : 
                        [
                            "Local Markets: Explore Vrindavan’s streets for souvenirs, sweets (pedas, kachoris), and handicrafts.",
                            "Yamuna River Banks: Spend some quiet time or take a boat ride."                                
                        ]
                    },
                ],
                "Evening (4:00 PM - 8:00 PM)": [
                    {
                        "Prem Mandir": [
                            "Reopen around 4:00 PM, this temple is perfect for an evening visit. Its lighting after sunset is mesmerizing."
                        ]
                    },
                    {
                        "Rangji Temple": [
                            "Famous for its South Indian architecture, this temple can be visited after 5:00 PM when it reopens."
                        ]
                    },
                    {
                        "Dinner": [
                            "End the day with local specialties like chaat or a full vegetarian meal at a popular restaurant."
                        ]
                    }
                ],
                "Dinner Recommendations": [
                    {
                        "Govinda’s Restaurant (ISKCON, Vrindavan)": [
                            "What to Try: Authentic sattvic food, including curries and rice dishes.",
                            "Why Visit: Perfect for a peaceful dining experience with Krishna-inspired cuisine."                                
                        ]
                    },
                    {
                        "Chhappan Bhog": [
                            "What to Try: Full vegetarian meals and a variety of desserts.",
                            "Why Visit: Known for its clean environment and delectable food options."                                
                        ]
                    }
                ]
            },
            "Day 3": {
                "Barsana, Nandgaon, and Govardhan": [
                    {
                        "Morning (6:00 AM - 11:00 AM)":
                        [
                            "Barsana: Visit Radha Rani Temple and explore this vibrant town. It’s steeped in the lore of Krishna and Radha’s divine love​",
                            "Nandgaon: Explore Nand Bhavan and other spots related to Krishna’s childhood."
                        ]
                    },
                    {
                        "Afternoon (12:00 PM - 4:00 PM)":
                        ["Govardhan Hill: Engage in a partial parikrama (walking or by e-rickshaw) around the sacred hill. Visit nearby temples such as Daan Ghati and Mansi Ganga​"]
                    },
                    {
                        "Evening (4:00 PM - 7:00 PM)":
                        ["Return to Mathura: Wrap up your trip with a relaxed dinner and perhaps shop for souvenirs like religious artifacts, sweets, and handicrafts."]
                    },  
                ],
                "Authentic Brijwasi Style Dinner recommendation": [
                    {
                        "Shri Radha Rasoi (Near Radha Rani Temple)":
                        [
                            "This restaurant offers pure vegetarian meals focusing on traditional Braj cuisine like Kachori-sabzi and sweets like Ghewar."
                        ]
                    },
                    {
                        "Govardhan Bhojanalay":
                        [
                            "Close to Kusum Sarovar and Daan Ghati, this eatery specializes in traditional satvik meals suitable for spiritual travelers."
                        ]
                    },
                    {
                        "Prakash Bhojnalaya":
                        [
                            "Near Radha Kund, it is a well-known place offering hearty meals, including local thalis with dal, roti, sabzi, and fresh curd."
                        ]
                    }
                ]
            }
        }
    }
}

function MathuraVrindavanAgra(location) {
    return {
            tourHeadline: `Mathura Vrindavan and Agra Tour From ${location}`,
            highlights: [
                "Raman Reti",
                "Shri Krishna Janmbhoomi",
                "Dwarikadhish Temple",
                "Vishram Ghat",
                "Shri Nand Baba Temple",
                "Radha Rani Temple",
                "Kirti Mandir",
                "Radha Kund",
                "Goverdhan Hill",
                "Isckon temple",
                "Banke Bihari Mandir",
                "Nidhivan",
                "Prem Mandir",
                "Fatehpur Sikri",
                "Buland Darwaza",
                "Jama Masjid",
                "Tomb of Salim Chishti",
                "Itimad-ud-Daulah",
                "Agra Fort",
                "Taj Mahal"
            ],
            itenary:
            {
                "Day 1": {
                    [`${location} to Delhi - Mathura and Vrindavan`] : [
                        {
                            "Flight to Delhi": [
                                `Take an early morning flight (approx. 2.5–3 hours) from ${location} to Delhi.`,
                                "Upon arrival in Delhi, drive to Mathura (3–4 hours, approx. 170 km)."
                            ]
                        },
                    ],
                    "Afternoon (2:00 PM - 5:00 PM)": [
                        {
                            "Lunch in Mathura": [
                                "Visit Brijwasi Mithai Wala for authentic Mathura peda, kachoris, and chaat.",
                                "Try their thali for a full traditional meal."
                            ]
                        },
                        {
                            "Krishna Janmabhoomi Temple Complex" : [
                                "Visit the birthplace of Lord Krishna. The temple complex offers spiritual vibes and historical significance.",
                                "Snacks: Enjoy local delicacies like kachoris and lassi at Shankar Mithai Wala or nearby stalls in Mathura."                                                               
                            ]
    
                        },
                        {
                            "Dwarkadhish Temple" : 
                            [
                                "Visit this famous temple with its beautiful architecture. The darshan and quiet ambiance are worth experiencing."                                
                            ]
                        },
                    ],
                    "Evening (5:00 PM - 8:00 PM)": [
                        {
                            "Raman Reti (5:00 PM - 6:00 PM)":
                            [
                                "Return to Raman Reti after it reopens for evening darshan. Participate in the aarti at 7:00 PM, which is a highlight of the day."
                            ]
                        },
                        {
                            "Vishram Ghat (if time permits)": 
                            [
                                "End your day with a peaceful Yamuna boat ride or a short visit to Vishram Ghat in Mathura."
                            ],
                        },
                        {
                            "Dinner (8:00 PM Onwards)": [
                                "Enjoy dinner at Brijwasi Royal Mithaiwala or Brijwasi Bhojnalaya in Mathura, known for authentic dishes like dal-baati churma and sweets like peda."
                            ]
                        }
                    ],
                    "Street Food Spots": [
                        {
                            "Deeg Gate Market":
                            [
                                "What to Try: Kachori-sabzi, samosas, and laddoos.",
                                "Why Visit: A bustling market offering a true taste of local street food."                                
                            ]
                        },
                        {
                            "Tilak Dwar":
                            [
                                "What to Try: Peda and thandai.",
                                "Why Visit: A vibrant area where you can enjoy street-side stalls selling local delicacies."                                
                            ]
                        }
                    ]
                    
                },
                "Day 2": {
                    "Vrindavan - In Krishna’s Playground" : [
                        {
                            "Morning (6:00 AM - 12:00 PM)":
                            [
                                "Banke Bihari Temple: Arrive by 6:00 AM to experience the vibrant early morning mangal aarti. Allocate about 1.5 hours for darshan and exploration.",
                                "ISKCON Temple: Head here by 8:00 AM for its serene morning prayers. Spend an hour meditating and enjoying the calm ambiance.",
                                "Nidhi Van and Seva Kunj: Visit these sacred groves around 10:30 AM before the temples close. These places don't have strict closing times, so you can explore leisurely."                                
                            ]
                        },
                    ],
                    "Afternoon (12:00 PM - 4:00 PM)": [
                        {
                            "Enjoy Lunch" : 
                            [
                                "Have a delicious meal at Govinda’s (ISKCON Restaurant) or a nearby café offering local vegetarian dishes."
                            ]
                        },
                        {
                            "Visit Non-Temple Sites" : 
                            [
                                "Local Markets: Explore Vrindavan’s streets for souvenirs, sweets (pedas, kachoris), and handicrafts.",
                                "Yamuna River Banks: Spend some quiet time or take a boat ride."                                
                            ]
                        },
                    ],
                    "Evening (4:00 PM - 8:00 PM)": [
                        {
                            "Prem Mandir": [
                                "Reopen around 4:00 PM, this temple is perfect for an evening visit. Its lighting after sunset is mesmerizing."
                            ]
                        },
                        {
                            "Rangji Temple": [
                                "Famous for its South Indian architecture, this temple can be visited after 5:00 PM when it reopens."
                            ]
                        },
                        {
                            "Dinner": [
                                "End the day with local specialties like chaat or a full vegetarian meal at a popular restaurant."
                            ]
                        }
                    ],
                    "Dinner Recommendations": [
                        {
                            "Govinda’s Restaurant (ISKCON, Vrindavan)": [
                                "What to Try: Authentic sattvic food, including curries and rice dishes.",
                                "Why Visit: Perfect for a peaceful dining experience with Krishna-inspired cuisine."                                
                            ]
                        },
                        {
                            "Chhappan Bhog": [
                                "What to Try: Full vegetarian meals and a variety of desserts.",
                                "Why Visit: Known for its clean environment and delectable food options."                                
                            ]
                        }
                    ]
                },
                "Day 3": {
                    "Barsana, Nandgaon, and Govardhan": [
                        {
                            "Morning (6:00 AM - 11:00 AM)":
                            [
                                "Barsana: Visit Radha Rani Temple and explore this vibrant town. It’s steeped in the lore of Krishna and Radha’s divine love​",
                                "Nandgaon: Explore Nand Bhavan and other spots related to Krishna’s childhood."
                            ]
                        },
                        {
                            "Afternoon (12:00 PM - 4:00 PM)":
                            ["Govardhan Hill: Engage in a partial parikrama (walking or by e-rickshaw) around the sacred hill. Visit nearby temples such as Daan Ghati and Mansi Ganga​"]
                        },
                        {
                            "Evening (4:00 PM - 7:00 PM)":
                            ["Return to Mathura: Wrap up your trip with a relaxed dinner and perhaps shop for souvenirs like religious artifacts, sweets, and handicrafts."]
                        },  
                    ],
                    "Authentic Brijwasi Style Dinner recommendation": [
                        {
                            "Shri Radha Rasoi (Near Radha Rani Temple)":
                            [
                                "This restaurant offers pure vegetarian meals focusing on traditional Braj cuisine like Kachori-sabzi and sweets like Ghewar."
                            ]
                        },
                        {
                            "Govardhan Bhojanalay":
                            [
                                "Close to Kusum Sarovar and Daan Ghati, this eatery specializes in traditional satvik meals suitable for spiritual travelers."
                            ]
                        },
                        {
                            "Prakash Bhojnalaya":
                            [
                                "Near Radha Kund, it is a well-known place offering hearty meals, including local thalis with dal, roti, sabzi, and fresh curd."
                            ]
                        }
                    ]
                },
                "Day 4": {
                    "Mathura to Agra" : [
                        {
                            "Morning" : 
                            "Drive to Agra (1.5–2 hours)"
                        },
                        {
                            "Breakfast" : 
                            "En route at a highway dhaba offering stuffed parathas with curd and pickle."
                        },
                    ],
                    "Late Morning in Agra": [
                        {
                            "Taj Mahal" :[ 
                            "Visit the Taj Mahal and experience its grandeur.",
                            "Time: 2–3 hours"
                            ]
                        },
                    ],
                    "Afternoon": [
                        {
                            "Lunch":
                            "Pinch of Spice, known for its Mughlai dishes and kebabs."
                        },
                        {
                            "Agra Fort":
                            "Explore the Agra Fort, a UNESCO World Heritage Site."
                        },
                        {
                            "Baby Taj": 
                            "Visit Itimad-ud-Daulah (Baby Taj) for its intricate marble work."
                        },
                    ],
                    "Evening": [
                        {
                            "Sunset at Mehtab Bagh":
                            "Enjoy sunset views of the Taj Mahal from Mehtab Bagh, a serene garden across the Yamuna River."
                        },
                    ],     
                    "Dinner": [
                        {
                            "Dasaprakash": [
                            "Dasaprakash, offering South Indian and North Indian options.",
                            "Overnight stay in Agra."
                            ]
                        }
                    ]
                },
                "Day 5": {
                    [`Fatehpur Sikri and Bharatpur - Return to ${location}`] : [
                        {
                            "Morning in Fatehpur Sikri" : [
                            "Drive to Fatehpur Sikri (1 hour)",
                            "Visit Buland Darwaza, Jama Masjid, and Tomb of Salim Chishti",
                            "Time: 2.5–3 hours"
                            ]
                        },
                        {
                            "Lunch" : 
                            "Surahi Restaurant in Fatehpur Sikri, offering North Indian dishes."
                        },
                    ],
                    "Afternoon in Bharatpur": [
                        {
                            "Drive to Bharatpur (1 hour)" :[ 
                            "Visit Keoladeo National Park, famous for birdwatching.",
                            "Time: 2 hours"
                            ]
                        },
                    ],
                    "Evening Return to Delhi": [
                        {
                            "Agra to Delhi":
                            `Drive back to Delhi (3–4 hours) for your flight to ${location}.`,
                        },
                        {
                            "Dinner":
                            "Stop at a highway dhaba for authentic North Indian cuisine."
                        },
                    ],
                    [`Delhi to ${location} Return`] : [
                        {
                            "Late Night Departure":
                            `Take a late-night flight from Delhi to ${location}.`
                        },
                    ],
                },
            }
        }
}

function MathuraVrindavanAgraDelhi(location){
    return {
        tourHeadline: `Mathura Vrindavan Agra and Delhi Tour From ${location}`,
        highlights: [
            "Raman Reti",
            "Shri Krishna Janmbhoomi",
            "Dwarikadhish Temple",
            "Shri Nand Baba Temple",
            "Radha Rani Temple",
            "Kirti Mandir",
            "Radha Kund",
            "Goverdhan Hill",
            "Banke Bihari Mandir",
            "Nidhivan",
            "ISKCON Temple",
            "Prem Mandir",
            "Humayun’s Tomb",
            "Qutub Minar",
            "Dilli Haat",
            "Lotus Temple",
            "Chandni Chowk",
            "Red Fort",
            "Jama Masjid",
            "Fatehpur Sikri",
            "Buland Darwaza",
            "Jama Masjid",
            "Tomb of Salim Chishti",
            "Itimad-ud-Daulah",
            "Agra Fort",
            "Taj Mahal"
        ],
        itenary:
        {
            "Day 1": {
                [`${location} to Delhi - Mathura and Vrindavan `]: [
                    {
                        "Flight to Delhi": [
                            `Take an early morning flight (approx. 2.5–3 hours) from ${location} to Delhi.`,
                            "Upon arrival in Delhi, drive to Mathura (3–4 hours, approx. 170 km)."
                        ]
                    },
                ],
                "Afternoon (2:00 PM - 5:00 PM)": [
                    {
                        "Lunch in Mathura": [
                            "Visit Brijwasi Mithai Wala for authentic Mathura peda, kachoris, and chaat.",
                            "Try their thali for a full traditional meal."
                        ]
                    },
                    {
                        "Krishna Janmabhoomi Temple Complex" : [
                            "Visit the birthplace of Lord Krishna. The temple complex offers spiritual vibes and historical significance.",
                            "Snacks: Enjoy local delicacies like kachoris and lassi at Shankar Mithai Wala or nearby stalls in Mathura."                                                               
                        ]
                    },
                    {
                        "Dwarkadhish Temple" : 
                        [
                            "Visit this famous temple with its beautiful architecture. The darshan and quiet ambiance are worth experiencing."                                
                        ]
                    },
                ],
                "Evening (5:00 PM - 8:00 PM)": [
                    {
                        "Raman Reti (5:00 PM - 6:00 PM)":
                        [
                            "Return to Raman Reti after it reopens for evening darshan. Participate in the aarti at 7:00 PM, which is a highlight of the day."
                        ]
                    },
                    {
                        "Vishram Ghat (if time permits)": 
                        [
                            "End your day with a peaceful Yamuna boat ride or a short visit to Vishram Ghat in Mathura."
                        ],
                    },
                    {
                        "Dinner (8:00 PM Onwards)": [
                            "Enjoy dinner at Brijwasi Royal Mithaiwala or Brijwasi Bhojnalaya in Mathura, known for authentic dishes like dal-baati churma and sweets like peda."
                        ]
                    }
                ],
                "Street Food Spots": [
                    {
                        "Deeg Gate Market":
                        [
                            "What to Try: Kachori-sabzi, samosas, and laddoos.",
                            "Why Visit: A bustling market offering a true taste of local street food."                                
                        ]
                    },
                    {
                        "Tilak Dwar":
                        [
                            "What to Try: Peda and thandai.",
                            "Why Visit: A vibrant area where you can enjoy street-side stalls selling local delicacies."                                
                        ]
                    }
                ]     
            },
            "Day 2": {
                "Vrindavan - In Krishna’s Playground" : [
                    {
                        "Morning (6:00 AM - 12:00 PM)":
                        [
                            "Banke Bihari Temple: Arrive by 6:00 AM to experience the vibrant early morning mangal aarti. Allocate about 1.5 hours for darshan and exploration.",
                            "ISKCON Temple: Head here by 8:00 AM for its serene morning prayers. Spend an hour meditating and enjoying the calm ambiance.",
                            "Nidhi Van and Seva Kunj: Visit these sacred groves around 10:30 AM before the temples close. These places don't have strict closing times, so you can explore leisurely."                                
                        ]
                    },
                ],
                "Afternoon (12:00 PM - 4:00 PM)": [
                    {
                        "Enjoy Lunch" : 
                        [
                            "Have a delicious meal at Govinda’s (ISKCON Restaurant) or a nearby café offering local vegetarian dishes."
                        ]
                    },
                    {
                        "Visit Non-Temple Sites" : 
                        [
                            "Local Markets: Explore Vrindavan’s streets for souvenirs, sweets (pedas, kachoris), and handicrafts.",
                            "Yamuna River Banks: Spend some quiet time or take a boat ride."                                
                        ]
                    },
                ],
                "Evening (4:00 PM - 8:00 PM)": [
                    {
                        "Prem Mandir": [
                            "Reopen around 4:00 PM, this temple is perfect for an evening visit. Its lighting after sunset is mesmerizing."
                        ]
                    },
                    {
                        "Rangji Temple": [
                            "Famous for its South Indian architecture, this temple can be visited after 5:00 PM when it reopens."
                        ]
                    },
                    {
                        "Dinner": [
                            "End the day with local specialties like chaat or a full vegetarian meal at a popular restaurant."
                        ]
                    }
                ],
                "Dinner Recommendations": [
                    {
                        "Govinda’s Restaurant (ISKCON, Vrindavan)": [
                            "What to Try: Authentic sattvic food, including curries and rice dishes.",
                            "Why Visit: Perfect for a peaceful dining experience with Krishna-inspired cuisine."                                
                        ]
                    },
                    {
                        "Chhappan Bhog": [
                            "What to Try: Full vegetarian meals and a variety of desserts.",
                            "Why Visit: Known for its clean environment and delectable food options."                                
                        ]
                    }
                ]
            },
            "Day 3": {
                "Barsana, Nandgaon, and Govardhan": [
                    {
                        "Morning (6:00 AM - 11:00 AM)":
                        [
                            "Barsana: Visit Radha Rani Temple and explore this vibrant town. It’s steeped in the lore of Krishna and Radha’s divine love​",
                            "Nandgaon: Explore Nand Bhavan and other spots related to Krishna’s childhood."
                        ]
                    },
                    {
                        "Afternoon (12:00 PM - 4:00 PM)":
                        ["Govardhan Hill: Engage in a partial parikrama (walking or by e-rickshaw) around the sacred hill. Visit nearby temples such as Daan Ghati and Mansi Ganga​"]
                    },
                    {
                        "Evening (4:00 PM - 7:00 PM)":
                        ["Return to Mathura: Wrap up your trip with a relaxed dinner and perhaps shop for souvenirs like religious artifacts, sweets, and handicrafts."]
                    },  
                ],
                "Authentic Brijwasi Style Dinner recommendation": [
                    {
                        "Shri Radha Rasoi (Near Radha Rani Temple)":
                        [
                            "This restaurant offers pure vegetarian meals focusing on traditional Braj cuisine like Kachori-sabzi and sweets like Ghewar."
                        ]
                    },
                    {
                        "Govardhan Bhojanalay":
                        [
                            "Close to Kusum Sarovar and Daan Ghati, this eatery specializes in traditional satvik meals suitable for spiritual travelers."
                        ]
                    },
                    {
                        "Prakash Bhojnalaya":
                        [
                            "Near Radha Kund, it is a well-known place offering hearty meals, including local thalis with dal, roti, sabzi, and fresh curd."
                        ]
                    }
                ]
            },
            "Day 4": {
                "Mathura to Agra" : [
                    {
                        "Morning" : 
                        "Drive to Agra (1.5–2 hours)"
                    },
                    {
                        "Breakfast" : 
                        "En route at a highway dhaba offering stuffed parathas with curd and pickle."
                    },
                ],
                "Late Morning in Agra": [
                    {
                        "Taj Mahal" :[ 
                        "Visit the Taj Mahal and experience its grandeur.",
                        "Time: 2–3 hours"
                        ]
                    },
                ],
                "Afternoon": [
                    {
                        "Lunch":
                        "Pinch of Spice, known for its Mughlai dishes and kebabs."
                    },
                    {
                        "Agra Fort":
                        "Explore the Agra Fort, a UNESCO World Heritage Site."
                    },
                    {
                        "Baby Taj": 
                        "Visit Itimad-ud-Daulah (Baby Taj) for its intricate marble work."
                    },
                ],
                "Evening": [
                    {
                        "Sunset at Mehtab Bagh":
                        "Enjoy sunset views of the Taj Mahal from Mehtab Bagh, a serene garden across the Yamuna River."
                    },
                ],     
                "Dinner": [
                    {
                        "Dasaprakash": [
                        "Dasaprakash, offering South Indian and North Indian options.",
                        "Overnight stay in Agra."
                        ]
                    }
                ]
            },
            "Day 5": {
                [`Agra to Delhi - Return to ${location}`] : [
                    {
                        "Morning in Fatehpur Sikri" : [
                        "Drive to Fatehpur Sikri (1 hour)",
                        "Visit Buland Darwaza, Jama Masjid, and Tomb of Salim Chishti",
                        "Time: 2.5–3 hours"
                        ]
                    },
                    {
                        "Lunch" : 
                        "Surahi Restaurant in Fatehpur Sikri, offering North Indian dishes."
                    },
                ],
                "Afternoon Drive to Delhi": [
                    {
                        "Delhi" :[ 
                        "Drive to Delhi (3–4 hours, approx. 220 km).",
                        ]
                    },
                ],
                "Evening in Delhi": [
                    {
                        "Explore Delhi":
                        "Explore India Gate, Rashtrapati Bhavan, and Connaught Place for a brief city tour.",
                    },
                    {
                        "Dinner":
                        "At Kake Da Hotel in Connaught Place for authentic North Indian curries and breads."
                    },
                ],
                [`Delhi to  Return ${location}`]: [
                    {
                        "Late Night Departure":
                        `Take a late-night flight from Delhi to ${location}.`
                    },
                ],
            },
            "Day 6" : {
                "Explore Delhi": [
                    {
                        "Breakfast":
                        "At Saravana Bhavan (Connaught Place) for South Indian delicacies."
                    },
                    {
                        "Visit Red fort and Jama Masjid": [
                            "Start your day with a visit to this iconic Mughal Red fort. Explore its impressive architecture and museums.",
                            "Walk to this grand mosque of Jama Masjid, one of the largest in India."
                        ]
                    },
                    {
                        "Market Exploration": 
                        "Explore Chandni Chowk: Shop for traditional items and try Paranthe Wali Gali for stuffed parathas."
                    }
                ],
                "Afternoon": [
                    {
                        "Lunch":
                        "Karim’s near Jama Masjid: Known for its Mughlai cuisine."
                    },
                    {
                        "Qutub Minar" : 
                        "Visit this 12th-century UNESCO World Heritage Site."
                    },
                    {
                        "Lotus Temple " : 
                        "Experience peace at this architectural marvel shaped like a lotus."
                    },
                ],
                "Evening": [
                    {
                        "Humayun’s Tomb":
                        "Admire this UNESCO World Heritage Site, a precursor to the Taj Mahal."
                    },
                    {
                        "Market Explore":
                        "shopping at Dilli Haat"
                    }
                ],
                "Dinner": [
                    {
                        "Bukhara": 
                        "Bukhara at ITC Maurya for an upscale dining experience with signature North Indian dishes."
                    }
                ],
                "Late Night Departure": [
                    {
                        [`Delhi to ${location}`]:
                        `Take a late-night flight from Delhi to ${location}.`
                    }
                ]
            },

        }
    }
} 

function MathuraVrindavanHaridwarRishikesh(location){
    return {
        tourHeadline: `Mathura Vrindavan Haridwar and Rishikesh Tour From ${location}`,
        highlights: [
            "Shri Krishna Janmbhoomi",
            "Dwarikadhish Temple",
            "Radha Rani Temple",
            "Radha Kund",
            "Goverdhan Hill",
            "Isckon temple",
            "Banke Bihari Mandir",
            "Nidhivan",
            "Prem Mandir",
            "Har Ki Pauri",
            "Bharat Mata Mandir",
            "Saptrishi Ashram",
            "Beatles Ashram",
            "River Rafting",
            "Parmarth Niketan Ashram",
            "Triveni Ghat",
            "Ram Jhula",
            "Laxman Jhula",
            "Mansa Devi Temple",
            "Chandi Devi Temple"
        ],
        itenary:
        {
            "Day 1": {
                [`${location} to Delhi - Mathura and Vrindavan`] : [
                    {
                        "Flight to Delhi": [
                            `Take an early morning flight (approx. 2.5–3 hours) from ${location} to Delhi.`,
                            "Upon arrival in Delhi, drive to Mathura (3–4 hours, approx. 170 km)."
                        ]
                    },
                ],
                "Late Morning in Mathura": [
                    {
                        "Breakfast": 
                            "Stop at Brijwasi Mithai Wala for aloo puri, jalebi, and lassi.",
                    },
                ],
                "Afternoon in Vrindavan": [
                    {
                        "Krishna Janmabhoomi Temple Complex" : [
                            "Visit the birthplace of Lord Krishna. The temple complex offers spiritual vibes and historical significance.",
                            "Snacks: Enjoy local delicacies like kachoris and lassi at Shankar Mithai Wala or nearby stalls in Mathura."                                                               
                        ]            
                    },
                    {
                        "Dwarkadhish Temple" : 
                        [
                            "Visit this famous temple with its beautiful architecture. The darshan and quiet ambiance are worth experiencing."                                
                        ]
                    },                    
                ],
                "Evening in Vrindavan": [
                    {
                        "Vrindavan":
                        "Drive to Vrindavan (30 minutes)"
                    },
                    {
                        "Bankey Bihari Temple": 
                        "Visit Banke Bihari Temple and experience the divine aarti."
                    },
                    {
                        "Iskcom Temple":
                        "Explore ISKCON Temple and enjoy the peaceful bhajans."
                    },
                    {
                        "Prem Mandir":
                        "Visit Prem Mandir, a beautifully illuminated temple with intricate carvings."
                    },
                    {
                        "Dinner (9:00 PM Onwards)": 
                        "Enjoy local snacks and meals at Govinda’s Restaurant near ISKCON Temple."
                    }
                ],
                "Overnight Stay in Vrindavan": [],
                
            },
            "Day 2": {
                "Explore Mathura and Vrindavan – Overnight Train to Haridwar" : [
                    {
                        "Morning Breakfast":
                        [
                            "At Brijwasi Royal, try kachori, parathas, and chai.",
                            "Visit Radha Kund and Kusum Sarovar, tranquil spots associated with Lord Krishna."
                        ]
                    },
                ],
                "Afternoon": [
                    {
                        "Radha Rani Temple": [
                        "Visit Radha Rani Temple in Barsana, which is dedicated to Lord Krishna's divine consort, Radha.",
                        "Visit Nandgaon and Barsana city the place where Krishna father Nand Baba belongs to."
                        ]
                    },
                    {
                        "Parikrama of Govardhan Hill" : 
                        [
                            "Walk the 21 km Parikrama around the hill, visiting important spots like Radha Kund and Shyam Kund.",
                            "Duration: 2-2.5 hours."                                
                        ]
                    },
                    {
                        "Nidhivan" : 
                        [
                            "Explore more temples in Vrindavan, such as Rangaji Temple and Nidhivan, known for their mythological significance."                                
                        ]
                    },
                ],
                "Evening": [
                    {
                        "Market Exploration": [
                            "Spend your evening shopping for souvenirs and religious items in Mathura's local markets.",
                            "Dinner at a local dhaba or eatery in Mathura.",
                            "Board an overnight train from Mathura Junction to Haridwar (approx. 9–10 hours)."
                        ]
                    },
                    {
                        "Overnight Journey": [
                            "Train to Haridwar."
                        ]
                    },
                ],
                "Dinner Recommendations": [
                    {
                        "Govinda’s Restaurant (ISKCON, Vrindavan)": [
                            "What to Try: Authentic sattvic food, including curries and rice dishes.",
                            "Why Visit: Perfect for a peaceful dining experience with Krishna-inspired cuisine."                                
                        ]
                    },
                    {
                        "Chhappan Bhog": [
                            "What to Try: Full vegetarian meals and a variety of desserts.",
                            "Why Visit: Known for its clean environment and delectable food options."                                
                        ]
                    }
                ]
            },
            "Day 3": {
                "Haridwar – Explore Rishikesh": [
                    {
                        "Morning in Haridwar":
                        "Check into your hotel and freshen up.",
                    },
                    {
                        "Breakfast":
                        "At Mohan Ji Puri Wale, famous for puri-sabzi and lassi."
                    },
                    {
                        "Har Ki Pauri":
                        "Visit Har Ki Pauri, Haridwar’s most sacred ghat, and take a holy dip in the Ganges."
                    },
                    {
                        "Mansa Devi Temple":
                        "Explore Mansa Devi Temple and Chandi Devi Temple using the ropeway for scenic views."
                    },  
                ],
                "Afternoon – Rishikesh": [
                    {
                        "Drive to Rishikesh (30–40 minutes)": []
                    },
                    {
                        "Ram Jhula and Laxman Jhula":
                        [
                            "Visit Ram Jhula and Laxman Jhula, iconic suspension bridges over the Ganges.",
                            "Explore Triveni Ghat, known for its serene ambiance."
                        ]
                    },
                ],
                "Evening in Rishikesh": [
                    {
                        "Ganga Aarti":
                        [
                            "Attend the Ganga Aarti at Parmarth Niketan Ashram."
                        ]
                    },
                    {
                        "Dinner":
                        "Dine at Chotiwala Restaurant, known for its authentic North Indian food."
                    },
                    {
                        "Overnight Stay in Rishikesh": []
                    }
                ]
            },
            "Day 4": {
                "Morning in Rishikesh" : [
                    {
                        "Breakfast" : 
                        "At Freedom Café, offering a blend of Indian and continental dishes."
                    },
                    {
                        "Beatles Ashram":
                        "Visit Beatles Ashram (Maharishi Mahesh Yogi Ashram), known for its association with The Beatles and spiritual vibes."
                    },
                    {
                        "Adventure Activity":
                        "Try adventure activities like river rafting or ziplining (optional)."
                    }
                ],
                "Afternoon in Haridwar": [
                    {
                        "Drive back to Haridwar" :[ 
                        "Visit Bharat Mata Mandir and Saptrishi Ashram, important religious sites.",
                        "Time: 2 hours"
                        ]
                    },
                ],
                "Evening": [
                    {
                        "Market Exploration":
                        "Explore Haridwar’s bustling markets for souvenirs and local sweets like peda and gajak."
                    },
                    {
                        "Ganga Aarti":
                        "Attend the evening Ganga Aarti at Har Ki Pauri, a mesmerizing spiritual experience."
                    },
                ],   
                "Dinner and Overnight stay in Haridwar": [
                    {
                        "Dinner": [
                        "Enjoy a traditional North Indian thali at Hoshiyarpuri Restaurant."
                        ]
                    }
                ]
            },
            "Day 5": {
                [`Haridwar to Delhi – Return to ${location}`] : [
                    {
                        "Breakfast" : 
                        "At a local Haridwar eatery offering puri bhaji and chai."
                    },
                ],
                "Afternoon Drive to Delhi": [
                    {
                        "Delhi" :[ 
                        "If time permits, explore India Gate, Rashtrapati Bhavan, and Connaught Place.",
                        "Lunch at Karim’s or Saravana Bhavan, depending on your preference."
                        ]
                    },
                ],
                [`Delhi to ${location} Return `]: [
                    {
                        "Late Night Departure":
                        `Take a flight from Delhi to ${location}.`
                    },
                ],
            },
        }
    }
}

export const fromData = [];

for(let i=0;i<locations.length;i++){
    const location = locations[i];
    fromData.push({
        tourHeadline:`Mathura Vrindavan Tour From ${location}`,
        fromLocation: `${location}`,
        tourPlaces:"Mathura-Vrindavan",
        rating: `5 (81)`,
        image:prem_mandir_img,
        duration:"3 Days & 2 Nights",
        tourData: MathuraVrindavaTour(location),
        carouselImages: [
            {
                index: 1,
                name: prem_mandir_img,
                alt : "prem mandir"
            },
            {
                index: 2,
                name: parikrama,
                alt: "vrindavan parikrama" 
            },
            {
                index: 3,
                name: kirti_mandir_img,
                alt: "kirti mandir"
            }
        ]
    })
    fromData.push({
        tourHeadline:`Mathura Vrindavan and Agra Tour From ${location}`,
        fromLocation: `${location}`,
        tourPlaces:"Mathura-Vrindavan-Agra",
        rating: `5 (67)`,
        image:prem_mandir_img,
        duration:"5 Days & 4 Nights",
        tourData: MathuraVrindavanAgra(location),
        carouselImages: [
            {
                index: 2,
                name: tajMahal,
                alt: "taj mahal" 
            },
            {
                index: 3,
                name: AgraFort,
                alt: "agra fort"
            },
            {
                index: 4,
                name: prem_mandir_img,
                alt : "prem mandir"
            },
            {
                index: 5,
                name: kirti_mandir_img,
                alt: "kirti mandir"
            }
        ]
    })
    fromData.push({
        tourHeadline:`Mathura Vrindavan Agra and Delhi Tour From ${location}`,
        fromLocation: `${location}`,
        tourPlaces:"Mathura-Vrindavan-Agra-Delhi",
        rating: `5 (91)`,
        image:prem_mandir_img,
        duration:"6 Days & 5 Nights",
        tourData: MathuraVrindavanAgraDelhi(location),
        carouselImages: [
            {
                index: 1,
                name: tajMahal,
                alt: "taj mahal" 
            },
            {
                index: 2,
                name: AgraFort,
                alt: "agra fort"
            },
            {
                index: 3,
                name: prem_mandir_img,
                alt : "prem mandir"
            },
            {
                index: 4,
                name: kirti_mandir_img,
                alt: "kirti mandir"
            },
            {
                index: 5,
                name: akshardham,
                alt : "akshar dham"
            },
            {
                index: 6,
                name: indiaGate2,
                alt: "india gate" 
            },
            {
                index: 7,
                name: rajPath,
                alt: "raj path"
            }
        ]
    })
    fromData.push({
        tourHeadline: `Mathura Vrindavan Haridwar and Rishikesh Tour From ${location}`,
        fromLocation: `${location}`,
        tourPlaces:"Mathura-Vrindavan-Haridwar-Rishikesh",
        rating: `5 (112)`,
        image:prem_mandir_img,
        duration:"5 Days & 4 Nights",
        tourData: MathuraVrindavanHaridwarRishikesh(location),
        carouselImages: [
            {
                index: 1,
                name: gangaGhat,
                alt : "ganga ghat"
            },
            {
                index: 2,
                name: ganga2,
                alt: "ganga ghat view"
            },
            {
                index: 3,
                name: prem_mandir_img,
                alt : "prem mandir"
            },
            {
                index: 4,
                name: parikrama,
                alt: "vrindavan parikrama" 
            },
        ]
    })
}
