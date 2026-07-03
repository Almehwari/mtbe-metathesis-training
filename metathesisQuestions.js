const metathesisQuestions = [

{
    section: "SAFETY PROCEDURES",

    question: "What should the CO monitor closely during the normal operation of Regeneration Heater (FR-2302) Section?",

    options: [
        "Closely monitor the liquid level of fuel gas KO drum",
        "Closely monitor the liquid temperature of fuel gas KO drum",
        "Closely monitor the liquid pressure of fuel gas KO drum",
        "Closely monitor the gas concentration of fuel gas KO drum"
    ],

    correct: 0
},

{
    question: "What should the CO do in case of NOx content in the exhaust is exceeding the calculation value in Regeneration Heater (FR-2302) Section?",

    options: [
        "Increase the primary air supply of the burners",
        "Do not make any changes to the heat or air supply of the burners",
        "Decrease the primary air supply of the burners",
        "Increase the primary heat supply of the burners"
    ],

    correct: 2
},

{
    question: "How can the Regeneration Gas Electric Heater be de-energized by CO?",

    options: [
        "By shutting down the whole Regeneration Gas Electric Heater Section",
        "By using the heater off switch located at the control panel",
        "CO cannot de-energize the Regeneration Gas Electric Heater",
        "Only FO can de-energize the Regeneration Gas Electric Heater"
    ],

    correct: 1
},

{
    question: "Who is responsible for gradually reducing the setting of the regeneration gas controller (TC-2405) until it reaches K-2401 discharge temperature during shutdown?",

    options: [
        "Section Head",
        "CO",
        "FO",
        "SSV"
    ],

    correct: 1
},

{
    question: "What is the interlock provided for the protection of the Regeneration Gas Compressor against overpressure?",

    options: [
        "ZC-2425",
        "ZC-2435",
        "ZC-2415",
        "ZC-2405"
    ],

    correct: 3
},


{
    section: "EXTREME WEATHER CONDITIONS",

    question: "How can you avoid heat stroke during hot weather conditions?",

    options: [
        "Working continuously without any break",
        "Working directly under sunlight",
        "Wearing padded thermal clothes",
        "Regularly drinking water during work"
    ],

    correct: 3
},

{
    question: "Which one of the following best describes the symptoms of heat stroke?",

    options: [
        "Heavy sweating, loss of breath, irregular heart beats",
        "Bleeding, anemia, semi consciousness",
        "Stomach ache, loose motion, vomiting",
        "Absence of sweating, pale reddish skin, unconsciousness"
    ],

    correct: 3
},

{
    question: "What should be done in case of lightning?",

    options: [
        "Assemble all employees in the field",
        "Shutdown the plant and move to assembly point",
        "Call maintenance supervisor",
        "Evacuate all employees from field and check for problems on DCS"
    ],

    correct: 3
},

{
    question: "What is the phenomenon a CO could monitor during heavy rain?",

    options: [
        "Atmospheric Pressure",
        "Water drain overflow",
        "Water leakage in PIB",
        "Cooling Water temperature change"
    ],

    correct: 3
},

{
    question: "What is the phenomenon a CO could monitor during heavy sand storm?",

    options: [
        "Tower collapse due to storm",
        "Drum pressure due to wind",
        "Furnace refractory damage due to breeze",
        "Furnace temperature change due to air intake plugging"
    ],

    correct: 3
},


{
    section: "FIRE PROTECTION",

    question: "What is the use of fire hydrant in the plant area?",

    options: [
        "To blanket oil spillages",
        "To extinguish electric fires",
        "To cool down towers and drums",
        "To cool down pumps and compressors"
    ],

    correct: 2
},

{
    question: "What kind of fire can you not extinguish with water?",

    options: [
        "Fire in a motor",
        "Clothes on fire",
        "Wooden furniture on fire",
        "Paper stack on fire"
    ],

    correct: 0
},

{
    question: "How does CO₂ extinguish fire?",

    options: [
        "By creating moisture around and cooling the fire",
        "By chemically interrupting the fire",
        "By displacing oxygen in the air and smothering the fire",
        "By contaminating the fuel and starving the fire"
    ],

    correct: 2
},

{
    question: "What effect has water extinguisher on ordinary combustible fires?",

    options: [
        "Smothering effect",
        "Starvation effect",
        "Chemical inhibition effect",
        "Cooling effect"
    ],

    correct: 3
},

{
    question: "What extinguisher will you use if there is a fire in the control room?",

    options: [
        "Water",
        "Foam",
        "Dry Chemical Powder",
        "CO₂"
    ],

    correct: 2
},

{
    section: "HAZARDOUS MATERIALS",

    question: "What should CO do before draining liquid or gas to flare?",

    options: [
        "Contact Tank Farm",
        "Contact FO",
        "Contact Section Head",
        "Contact Monomer Manager"
    ],

    correct: 0
},

{
    question: "Which one of the following products have the lowest boiling point under same pressure?",

    options: [
        "C3",
        "C4",
        "C2",
        "C5"
    ],

    correct: 2
},

{
    question: "What should the CO do when FO is taking a sample?",

    options: [
        "Take a coffee break",
        "Monitor only downstream unit",
        "Monitor both upstream and downstream units",
        "Monitor only upstream unit"
    ],

    correct: 2
},

{
    question: "Which one of the following is a flammable material in Metathesis?",

    options: [
        "O₂",
        "N₂",
        "H₂O",
        "H₂"
    ],

    correct: 3
},

{
    question: "What is the property of H₂ that makes it very hazardous?",

    options: [
        "Flammability",
        "Corrosiveness",
        "Radioactivity",
        "Toxicity"
    ],

    correct: 0
},



{
    section: "NORMAL CONDITIONS & RANGES",

    question: "What is the operation range of D-2000 level Controller (LC-2091)?",

    options: [
        "1 - 100%",
        "20 - 100%",
        "25 - 85%",
        "75 - 100%"
    ],

    correct: 2
},

{
    question: "What is the set value of D-2000 pressure?",

    options: [
        "10.5 kg/cm2G",
        "7.5 kg/cm2G",
        "9.5 kg/cm2G",
        "3.5 kg/cm2G"
    ],

    correct: 3
},

{
    question: "What is the operation range of C4 Raffinate feed flow controller (FC-2093) at 100% plant load?",

    options: [
        "23.3 - 46.6 t/h",
        "73.3 - 86.6 t/h",
        "33.3 - 56.6 t/h",
        "43.3 - 66.6 t/h"
    ],

    correct: 0
},

{
    question: "Which is the mode in which PC-2093 is closed?",

    options: [
        "Auto mode",
        "Semi-auto mode",
        "Manual mode",
        "Both auto and manual modes"
    ],

    correct: 0
},

{
    question: "What is the set value of D-2001 level at 100% plant load?",

    options: [
        "60%",
        "85%",
        "50%",
        "26.6%"
    ],

    correct: 2
},

{
    question: "What is the operation range of T-2001 bottom (LC-2005) at 100% plant load?",

    options: [
        "20 - 30%",
        "40 - 60%",
        "10 - 20%",
        "50 - 100%"
    ],

    correct: 1
},

{
    question: "What is the operation range of D-2001 reflux flow at 100% plant load?",

    options: [
        "33.6 - 52.6 t/h",
        "10.6 - 12.6 t/h",
        "19.6 - 22.6 t/h",
        "29.6 - 82.6 t/h"
    ],

    correct: 2
},

{
    question: "What is the set value of T-2001 overhead pressure at 100% plant load?",

    options: [
        "4.2 - 5.2 kg/cm2G",
        "41.2 - 51.2 kg/cm2G",
        "42.2 - 52.2 kg/cm2G",
        "49.2 - 59.2 kg/cm2G"
    ],

    correct: 0
},

{
    question: "Which one of the following is true in case of regeneration of D-2003A/B?",

    options: [
        "12 hour cycle",
        "48 hour cycle",
        "72 hour cycle",
        "36 hour cycle"
    ],

    correct: 1
},

{
    question: "What is the operation range of D-2003A/B outlet at 100% plant load?",

    options: [
        "12.6 - 25.2 t/h",
        "22.6 - 45.2 t/h",
        "42.6 - 45.2 t/h",
        "32.6 - 55.2 t/h"
    ],

    correct: 1
},


{
    section: "ALARM & SHUTDOWN LIMITS",

    question: "What is the function of triple redundancy pressure transmitters and controllers in T-2301 during emergency shutdown?",

    options: [
        "Cut off heating medium on high temperature",
        "Cut off heating medium on low temperature",
        "Cut off cooling medium on low pressure",
        "Cut off heating medium to tower reboiler on high pressure"
    ],

    correct: 3
},

{
    question: "What is the function of interlock ZC-2305A/B during a process upset?",

    options: [
        "Prevent low temperature feed from entering OCT C2 Feed Treaters",
        "Prevent high temperature feed from entering OCT C2 Feed Treaters",
        "Prevent low temperature feed from entering OCT C10 Feed Treaters",
        "Prevent high temperature feed from entering OCT C12 Feed Treaters"
    ],

    correct: 0
},

{
    question: "Why is it not recommended to operate the OCU with hot C4s during cooling water failure leading to emergency shutdown?",

    options: [
        "Feed to D-2301 may become two-phased",
        "Feed to D-2301 may become three-phased",
        "Feed may become concentrated",
        "Feed may become single-phased"
    ],

    correct: 0
},

{
    question: "PI-2301 A/B alarm is associated with:",

    options: [
        "OCT C4 Feed Treater inlet pressure high/low",
        "OCT C4 Feed Treater outlet pressure high/low",
        "OCT C2 Feed Treater inlet pressure high/low",
        "OCT C2 Feed Treater outlet pressure high/low"
    ],

    correct: 1
},


{
    section: "ESD & PROTECTIVE SYSTEMS",

    question: "Which interlock is provided for protection of Regeneration Gas Compressor against overpressure?",

    options: [
        "PC-2405",
        "LC-2405",
        "TC-2405",
        "ZC-2405"
    ],

    correct: 3
},

{
    question: "What will interlock ZC-2405 do when it detects HH pressure in Regeneration Gas Compressor?",

    options: [
        "Shutdown compressor and close ZV-2407",
        "Close ZV-2406",
        "Close ZV-2405",
        "Close ZV-2404"
    ],

    correct: 0
},

{
    question: "Which interlock shuts down electric power to E-2406 in case of HH or LL outlet temperature?",

    options: [
        "ZC-2403",
        "ZC-2404",
        "ZC-2405",
        "ZC-2406"
    ],

    correct: 1
},

{
    question: "Which interlocks trigger emergency shutdown in Regeneration Heater FR-2302 section?",

    options: [
        "ZC-2316 and ZC-2317",
        "ZC-2315 and ZC-2316",
        "ZC-2319 and ZC-2320",
        "ZC-2317 and ZC-2318"
    ],

    correct: 2
},

{
    question: "Which equipment is associated with ZC-2308, ZC-2309 and ZC-2310 ESD interlocks?",

    options: [
        "SHU Reactor",
        "OCT Reactor Feed Pre-Heater",
        "OCT Reactor",
        "Propylene Refrigeration Unit"
    ],

    correct: 1
},

{
    question: "What is the emergency shutdown interlock for Treater Regeneration Compressor K-2401?",

    options: [
        "ZC-2405",
        "ZC-2406",
        "ZC-2407",
        "ZC-2408"
    ],

    correct: 0
},

{
    question: "What is the purpose of ZC-2401 Butene Preload Holding Drum inventory interlock?",

    options: [
        "Protect the furnace from high temperature",
        "Stop feed to SHU reactor",
        "Maintain inventory in Butene Preload Holding Drum for regeneration requirements",
        "Stop regeneration gas flow to the heater"
    ],

    correct: 2
},

{
    question: "What is the function of interlock ZC-2191?",

    options: [
        "Off-spec propylene product pumps isolation",
        "Propylene product battery limit isolation",
        "Tank yard shutdown",
        "Propylene vaporizer E-2930 shutdown"
    ],

    correct: 2
},

{
    question: "What is the interlock for propylene product pumps P-2930A/B auto-start?",

    options: [
        "ZC-2939",
        "ZC-2909",
        "ZC-2929",
        "ZC-2919"
    ],

    correct: 1
},

{
    question: "What is alarm tag no. PI-2301 A/B associated with during an emergency shutdown?",

    options: [
        "OCT C4 Feed Treater low outlet pressure",
        "SHU C4 Feed Treater low outlet pressure",
        "OCT C4 Feed Treater high outlet pressure",
        "SHU C4 Feed Treater high outlet pressure"
    ],

    correct: 2
},

{
    question: "What happens if cooling water failure occurs in T-2301?",

    options: [
        "The OCT reactor effluent becomes cooler and reflux increases",
        "The SHU reactor effluent becomes cooler and reflux increases",
        "The SHU reactor effluent becomes warmer and reflux is lost",
        "The OCT reactor effluent becomes warmer and reflux is lost"
    ],

    correct: 3
},

{
    question: "Which other units need to stop if furnace FR-2301 needs to be shutdown?",

    options: [
        "Stop the C4 Feed Treatment Unit",
        "Stop the SHU Feed",
        "Stop the OCT Circulation Loop and OCT Reactors",
        "Stop the C2 Feed Treater Unit and SHU Unit"
    ],

    correct: 2
},

{
    question: "What happens in Debutanizer T-2501 if the tower temperature increases?",

    options: [
        "C1 will go into the top stream and cause adsorbent deactivation",
        "C5+ will go into the top stream and cause adsorbent and catalyst deactivation",
        "C5+ will go into the bottom stream and cause catalyst regeneration",
        "C10 will go into the bottom stream and cause adsorbent deactivation"
    ],

    correct: 1
},

{
    question: "What is the interlock for OCT Reactor Feed Heater Shutdown?",

    options: [
        "ZC-2308",
        "FC-2308",
        "PC-2308",
        "TC-2308"
    ],

    correct: 0
},

{
    question: "What is the temperature at which the TC-2303 alarm tag will be activated when regeneration gas temperature increases?",

    options: [
        "305°C",
        "1000°C",
        "10°C",
        "50°C"
    ],

    correct: 0
},

{
    question: "What is the emergency shutdown condition that sets off alarm tag no. LC-2005?",

    options: [
        "When T-2001 bottom level becomes low",
        "When T-2001 bottom level becomes high",
        "When T-2003 bottom level becomes low",
        "When T-2003 bottom level becomes high"
    ],

    correct: 0
},


{
    section: "PLANT START-UP",

    question: "Who should be contacted before receiving C4 raffinate during startup?",

    options: [
        "Monomer Manager",
        "MTBE Section and UOM",
        "Maintenance Section",
        "PED Section"
    ],

    correct: 1
},

{
    question: "How much should PC-2093 be set during startup?",

    options: [
        "10.3 kg/cm2G in AUTO",
        "23.3 kg/cm2G in AUTO",
        "50.3 kg/cm2G in AUTO",
        "3.3 kg/cm2G in AUTO"
    ],

    correct: 3
},

{
    question: "When do you start reflux by FV-2006 during startup?",

    options: [
        "When LT-2013 reaches 50%",
        "When LT-2013 reaches 100%",
        "When LT-2013 reaches 5%",
        "When LT-2013 reaches 0.5%"
    ],

    correct: 0
},

{
    question: "When do you close the D-2004 inventory valves during startup?",

    options: [
        "When LT-2011 reaches 100%",
        "When LT-2011 reaches 90%",
        "When LT-2011 reaches 50%",
        "When LT-2011 begins to overflow"
    ],

    correct: 1
},

{
    question: "Which valves should be opened to start inventory from D-2004?",

    options: [
        "ZV-2023A and ZV-2024A",
        "ZV-2026A and ZV-2027A",
        "ZV-2021A and ZV-2022A",
        "ZV-2018A and ZV-2019A"
    ],

    correct: 1
},

{
    question: "What will you do if D-2004 level falls below 10% during D-2003A inventory?",

    options: [
        "Refill D-2004 before continuing to fill D-2003A",
        "Continue filling D-2003A until D-2004 reaches 0%",
        "Stop all activities and wait for SSV",
        "Contact the Section Head"
    ],

    correct: 0
},

{
    question: "How long should the OCT cleaning loop continue?",

    options: [
        "At least 14 hours",
        "At least 4 hours",
        "At least 48 hours",
        "At least 24 hours"
    ],

    correct: 3
},

{
    question: "Which pump will you reduce to minimum flow before starting OCT cleaning loop?",

    options: [
        "P-2302 A/B",
        "P-2301 A/B",
        "P-2303 A/B",
        "P-2304 A/B"
    ],

    correct: 1
},

{
    question: "When do you begin to carefully monitor the temperature of the catalyst in T-2201?",

    options: [
        "After H2 feeding",
        "After C4 feeding",
        "After N2 purging",
        "After tightness testing"
    ],

    correct: 0
},

{
    question: "How much should the temperature of tray no. 28 in T-2201 be maintained?",

    options: [
        "0 - 10°C",
        "20 - 30°C",
        "63 - 67°C",
        "100 - 150°C"
    ],

    correct: 2
},


{
    section: "CORRECTIVE ACTIONS",

    question: "What action will you take if there is P-2000A cavitation because of LC-2091 failure?",

    options: [
        "Check LG2093A and increase FC-2092",
        "Check LG2094A and increase FC-2093",
        "Check LG2092A and decrease FC-2091 discharge flow",
        "Check LG2094A and decrease FC-2093"
    ],

    correct: 2
},

{
    question: "What is the action to be taken if there is poor fractioning between C4 and C5+ in T-2001?",

    options: [
        "Increase TC-2002 tray #12 set point and increase reflux flow",
        "Decrease TC-2002 tray #12 set point and decrease reflux flow",
        "Let the process continue",
        "Shutdown the plant"
    ],

    correct: 0
},

{
    question: "What action will you take if there is high content of C5+ in SHU feed due to high temperature profile?",

    options: [
        "Let the process continue",
        "Decrease TC-2002 and increase pressure",
        "Decrease TC-2002 and decrease reflux",
        "Decrease TC-2002 and increase reflux in T-2001"
    ],

    correct: 3
},

{
    question: "What action will you take if SHU reactor temperature increases and cannot be controlled?",

    options: [
        "Stop the C4 feed; hydrogen makeup gas will stop via FFC-2105",
        "Stop the C2 feed",
        "Stop the C5+ feed",
        "Stop the ethylene feed"
    ],

    correct: 0
},

{
    question: "What will you check if there is decrease in catalyst reactivity?",

    options: [
        "Check 1,2-BD content",
        "Check 1,3-BD content and average reaction temperature",
        "Check 2,3-BD content",
        "Check 2,4-BD content"
    ],

    correct: 1
},

{
    question: "What action will you take if D-2101 pressure increases above 4.6 kg/cm2G?",

    options: [
        "Report to SSV",
        "No action required",
        "Open PV-2101 bypass valve",
        "Shut down D-2101"
    ],

    correct: 2
},

{
    question: "What action will you take if SHU reactor feed becomes low below 22,602 kg/h?",

    options: [
        "Shutdown SHU reactor feed",
        "Check P-2101 A/B, FV-2101 opening and D-2101 level",
        "Report to SSV only",
        "Shutdown SHU section"
    ],

    correct: 1
},

{
    question: "What can be done if R-2101A/B differential pressure is high above the set point 2.1 kg/cm2g?",

    options: [
        "Inform SSV and SH and conduct catalyst regeneration",
        "Inform SSV and SH and continue working as usual",
        "Inform Monomer Manager and report to Maintenance Department",
        "No need to inform anybody, start catalyst regeneration immediately"
    ],

    correct: 0
},

{
    question: "What action will you take if the Isobutene concentration to OCT is too high?",

    options: [
        "Inform SSV and SH and conduct catalyst regeneration",
        "Inform Monomer Manager and report to Maintenance Department",
        "Reset the set-point of FFC-2204 to a lower value (0.72 is the design set point)",
        "Inform SSV and SH and continue working as usual"
    ],

    correct: 2
},

{
    question: "What is the assumed cause for the problem of low Isobutene concentration at bottom in CD Hydro Deisobutenizer Section?",

    options: [
        "Atmospheric temperature change",
        "Pressure change in feed stock",
        "Temperature change in feed stock",
        "Feed stock composition change"
    ],

    correct: 3
},


{
    section: "DCS OPERATIONS",

    question: "What is the function of control loop FC-2002?",

    options: [
        "Steam flow rate controller to E-2002",
        "CW flow rate controller to E-2002",
        "C4 raffinate flow controller to E-2002",
        "C2 flow rate controller to E-2002"
    ],

    correct: 0
},

{
    question: "What is the control loop tag no. for T-2001 bottom flow rate controller?",

    options: [
        "FC-2006",
        "FC-2007",
        "FC-2005",
        "FC-2004"
    ],

    correct: 2
},

{
    question: "Which one of the following controller loop controls the hot regeneration gas flow?",

    options: [
        "FC-2009",
        "FC-2001",
        "FC-2003",
        "FC-2005"
    ],

    correct: 0
},

{
    question: "What does the alarm tag no. PI-2005A/B indicate?",

    options: [
        "C4 Feed Debutanizer inlet pressure high/low",
        "C4 Feed Treater A/B inlet pressure high/low",
        "OCT C4 Treater inlet pressure high/low",
        "SHU C4 inlet pressure high/low"
    ],

    correct: 1
},

{
    question: "What is the alarm tag no. for C4 Feed Treater A/B outlet pressure high/low?",

    options: [
        "PI-2006 A/B",
        "PI-2007 A/B",
        "PI-2008 A/B",
        "PI-2009 A/B"
    ],

    correct: 0
},

{
    question: "What is the set point of D-2101 maximum pressure beyond which the alarm is activated?",

    options: [
        "4.6 kg/cm2G",
        "2.2 kg/cm2G",
        "1.5 kg/cm2G",
        "10.99 kg/cm2G"
    ],

    correct: 0
},

{
    question: "What is the percentage at which D-2101 LL level alarm (LC-2101) will go on?",

    options: [
        "25%",
        "10%",
        "4%",
        "0.5%"
    ],

    correct: 2
},

{
    question: "What is the indication of FC-2101 alarm?",

    options: [
        "OCT reactor feed is low",
        "SHU reactor feed is high",
        "SHU reactor feed is low",
        "OCT reactor feed is high"
    ],

    correct: 2
},

{
    question: "What should you check if FC-2101 SHU reactor feed alarm goes on?",

    options: [
        "Check P-2101 A/B operation, FV-2101 opening and D-2101 level",
        "Check P-2001 A/B operation, FV-2001 opening and D-2001 level",
        "Check P-2201 A/B operation, FV-2201 opening and D-2201 level",
        "Check P-2301 A/B operation, FV-2301 opening and D-2301 level"
    ],

    correct: 0
},

{
    question: "What does LC-2201 alarm tag no. indicate?",

    options: [
        "It indicates T-2201 level high/low",
        "It indicates T-2202 level high/low",
        "It indicates T-2203 level high/low",
        "It indicates T-2001 level high/low"
    ],

    correct: 0
},


{
    section: "TREND DISPLAYS",

    question: "Which alarm tag no. goes on if T-2201 level goes below 10% or above 83%?",

    options: [
        "QC-2201",
        "FC-2201",
        "LC-2201",
        "PC-2201"
    ],

    correct: 2
},

{
    question: "What is the percentage above which E-2203 shell level high alarm LC-2208 goes on?",

    options: [
        "48%",
        "68%",
        "38%",
        "97%"
    ],

    correct: 3
},

{
    question: "Which controller controls C4 recycle from the T-2302 side draw?",

    options: [
        "FC-2338",
        "FC-2333",
        "FC-2334",
        "FC-2323"
    ],

    correct: 0
},

{
    question: "What are the analyzers provided to monitor performance of D-2301 A & B?",

    options: [
        "AI-2305 and AI-2306",
        "AI-2303 and AI-2304",
        "AI-2301 and AI-2302",
        "AI-2307 and AI-2308"
    ],

    correct: 2
},

{
    question: "What do online analyzers AI-2301 & AI-2302 measure in D-2301 A & B?",

    options: [
        "AI-2301 measures water and AI-2302 measures oxygenates, carbonyls and total sulfur",
        "Impurities, chlorine, fluorine and bromine",
        "Ethylene, methylene and isobutene",
        "Benzene, butylene and chlorine"
    ],

    correct: 0
},

{
    question: "What corrective action would you take if the temperature of ethylene to D-2302 A/B decreases below 29°C?",

    options: [
        "Check for TC-2322 malfunction and check downstream process pressure and discard ethylene expansion",
        "Check for TC-2321 malfunction and check downstream process pressure and discard ethylene expansion",
        "Check for TC-2323 malfunction and check downstream process pressure and discard ethylene expansion",
        "Check for TC-2324 malfunction and check downstream process pressure and discard ethylene expansion"
    ],

    correct: 1
},

{
    question: "What corrective action would you take if C2 feed treater effluent filter differential pressure increases beyond 0.35 kg/cm2g activating the PDI-2361 alarm?",

    options: [
        "Depressurize the filter and continue working on the same filter",
        "Change the filter element without switching over the filter",
        "Switch over the filter and depressurize it for element cleaning or replacement",
        "Switch over the filter and replace the element without depressurizing the filter"
    ],

    correct: 2
},

{
    question: "What corrective action will you take if D-2304 pressure decreases below 3.5 kg/cm2g and PC-2312 alarm gets activated?",

    options: [
        "Check the opening of PV-2312 and compare it with PC-2312.MV and check if PZV-2307 A/B are leaking",
        "Check the opening of PV-2002 and compare it with PC-2002.MV and check if PZV-2007 A/B are leaking",
        "Check the opening of PV-2102 and compare it with PC-2102.MV and check if PZV-2107 A/B are leaking",
        "Check the opening of PV-2202 and compare it with PC-2202.MV and check if PZV-2207 A/B are leaking"
    ],

    correct: 0
},

{
    question: "What is the corrective action if P-2301A/B flow decreases below 60,097 kg/h and FC-2313 alarm gets activated?",

    options: [
        "Check FV-2133 opening and compare it with FC-2133.MV. Check LC-2134 level. Check P-2131 A/B operating condition",
        "Check FV-2313 opening and compare it with FC-2143.MV. Check LC-2144 level. Check P-2144 A/B operating condition",
        "Check FV-2313 opening and compare it with FC-2313.MV. Check LC-2304 level. Check P-2301 A/B operating condition",
        "Check FV-2153 opening and compare it with FC-2153.MV. Check LC-2154 level. Check P-2315 A/B operating condition"
    ],

    correct: 2
},

{
    question: "What corrective action will you take if R-2301A/B differential pressure increases above 2.0 kg/cm2g and PDI-2364A/B alarm gets activated?",

    options: [
        "Consider evacuating the place",
        "Consider ignoring the pressure",
        "Consider emergency shutdown",
        "Consider regeneration"
    ],

    correct: 3
},

{
    section: "CONTROL LOOPS",

    question: "What is the function of controller FC-2330?",

    options: [
        "It controls the fresh ethylene flow rate",
        "It controls the C4 raffinate feed flow rate",
        "It controls the hydrogen flow rate",
        "It controls the C2 feed flow rate"
    ],

    correct: 0
},

{
    question: "What is the function of controller FFY-2330A/B/C/D?",

    options: [
        "Controls the C5/C10 feed ratio",
        "Controls the Xylene/Toluene feed ratio",
        "Controls the Ethylene/Butene feed ratio",
        "Controls the C2/C3 feed ratio"
    ],

    correct: 2
},

{
    question: "What is the molar ratio of Ethylene to Normal Butenes in the OCT Reactor feed?",

    options: [
        "10:1 to 12:1",
        "2.6:1 to 2:1",
        "10.6:1 to 12:0",
        "20.6:1 to 20:1"
    ],

    correct: 1
},

{
    question: "What is the controller tag no. for Deethylenizer overhead product flow controller?",

    options: [
        "FC-2319D",
        "FC-2329D",
        "FC-2339D",
        "FC-2349D"
    ],

    correct: 0
},

{
    question: "What operation is controlled by FC-2328?",

    options: [
        "Debutenizer top product flow",
        "Debutenizer bottom product flow",
        "Depropylenizer top product flow",
        "Depropylenizer bottom product flow"
    ],

    correct: 3
},


{
    section: "PROCESS EQUIPMENT",

    question: "What are the two towers in the Recovery Section?",

    options: [
        "Deethanizer and Depropanizer",
        "Deethylenizer and Depropylenizer",
        "Demethylenizer and Demethanizer",
        "Debutenizer and Deethenizer"
    ],

    correct: 1
},

{
    question: "What is the function of Deethylenizer?",

    options: [
        "Separates unreacted methylene",
        "Separates unreacted propylene",
        "Separates unreacted butylene",
        "Separates unreacted ethylene for recycle and strips ethane and lighter components"
    ],

    correct: 3
},

{
    question: "What is one function of the Depropylenizer?",

    options: [
        "Produces polymer grade propylene overhead product",
        "Produces polymer grade butylene",
        "Produces polymer grade methylene",
        "Produces polymer grade ethylene"
    ],

    correct: 0
},

{
    question: "Which equipment produces C4 as a side draw for recycle to the OCT Reactor?",

    options: [
        "Debutenizer",
        "Deethylenizer",
        "Depropylenizer",
        "Demethylenizer"
    ],

    correct: 2
},

{
    question: "What is produced at the overhead of CD Hydro Deisobutenizer (T-2201)?",

    options: [
        "Isopentane",
        "Isobutane",
        "Isopropane",
        "Isopropene"
    ],

    correct: 1
},

{
    question: "What is produced at the bottoms of T-2501?",

    options: [
        "OCT C3 product",
        "OCT C2 product",
        "OCT C4 product",
        "OCT C5+ product"
    ],

    correct: 3
},

,
{
    question: "Where does the additional Debutanizer receive the feed stream of C4+ byproduct from?",

    options: [
        "From the bottom product of the Depropylenizer",
        "From the bottom product of the Deethylenizer",
        "From the bottom product of the Demethylenizer",
        "From the bottom product of the Demethanizer"
    ],

    correct: 0
},

{
    question: "What is the two stage approach in regeneration of the C4 Feed Treaters and OCT C4 Feed Treaters?",

    options: [
        "The first stage is methane stripping of the adsorbent beds and the second stage is regeneration",
        "The first stage is ethylene stripping of the adsorbent beds and the second stage is regeneration",
        "The first stage is butene stripping of the adsorbent beds and the second stage is regeneration",
        "The first stage is butylene stripping of the adsorbent beds and the second stage is regeneration"
    ],

    correct: 2
},

{
    question: "How is the regeneration done in C4 Feed Treaters and OCT Feed Treaters?",

    options: [
        "Regeneration is carried out with hot ethane-rich regeneration gas at 200°C",
        "Regeneration is carried out with hot propane-rich regeneration gas at 100°C",
        "Regeneration is carried out with hot butane-rich regeneration gas at 50°C",
        "Regeneration is carried out with hot methane-rich regeneration gas at 290°C"
    ],

    correct: 3
},

{
    question: "What is the function of Butene preload system?",

    options: [
        "It is used to provide hot vaporized Butane during the first stage of regeneration",
        "It is used to provide hot vaporized Butenes during the first stage of regeneration",
        "It is used to provide hot vaporized Butylenes during the first stage of regeneration",
        "It is used to provide hot vaporized Isopentanes during the first stage of regeneration"
    ],

    correct: 1
},

{
    section: "P&ID",

    question: "What does the letter E denote in P&ID?",

    options: [
        "Heat Exchanger",
        "Equipment",
        "Electricity",
        "Earthing"
    ],

    correct: 0
},

{
    question: "What does the letter D denote in P&ID?",

    options: [
        "Draft",
        "Datum",
        "Drum",
        "Danger"
    ],

    correct: 2
},

{
    question: "What do the letters TK denote in P&ID?",

    options: [
        "Tank",
        "Torque",
        "Tower",
        "Trap"
    ],

    correct: 0
},

{
    question: "What does the letter T denote in P&ID?",

    options: [
        "Tank",
        "Torque",
        "Tower",
        "Trap"
    ],

    correct: 2
},

{
    question: "What do the letters FR denote in P&ID?",

    options: [
        "Freezer",
        "Frame",
        "Fraternity",
        "Furnace"
    ],

    correct: 3
},



{
    section: "PUMP TROUBLESHOOTING",

    question: "Which action is incorrect to troubleshoot pump cavitation?",

    options: [
        "Increase suction pressure if possible",
        "Increase liquid temperature if possible",
        "Vent gases off pump casing",
        "Throttle discharge valve"
    ],

    correct: 1
},

{
    question: "What is a possible reason for low discharge pressure on a pump?",

    options: [
        "Suction opened",
        "Filter plugged",
        "Discharge opened",
        "High vessel level"
    ],

    correct: 1
},

{
    question: "Which may cause a pump to trip?",

    options: [
        "Suction pressure normal",
        "Suction drum level LL activated",
        "Discharge pressure normal",
        "Discharge valve open"
    ],

    correct: 1
},


{
    question: "What are the positions of Suction and Discharge Valves of Centrifugal Pumps before start-up?",

    options: [
        "Suction valve and discharge valve are closed",
        "Suction valve is open and discharge valve is closed",
        "Suction valve is closed and discharge valve is open",
        "Suction valve and discharge valve are open"
    ],

    correct: 1
},

{
    question: "What would happen to the flow if the shaft rotation direction of a pump changes?",

    options: [
        "The flow is not affected",
        "There will be excessive flow",
        "There will be no flow",
        "The flow rate decreases slightly"
    ],

    correct: 2
},

{
    section: "HEAT EXCHANGER TROUBLESHOOTING",

    question: "What action should be taken to prevent accumulation of inert gas in a reboiler?",

    options: [
        "Increase steam flow",
        "Purge with inert gas",
        "Decrease steam flow",
        "Stop condensate recovery"
    ],

    correct: 1
},

{
    question: "How can water hammering be avoided during commissioning?",

    options: [
        "Increase steam flow",
        "Purge with inert gas",
        "Decrease steam flow",
        "Gradually open the valve"
    ],

    correct: 3
},

{
    question: "What action would you take if a heat exchanger is not heating up?",

    options: [
        "Check for improper line-up and LS supply",
        "Inform Console Operator",
        "Contact Maintenance",
        "Contact Manufacturer"
    ],

    correct: 0
},


{
    question: "What will happen if water hammering occurs in a heat exchanger?",

    options: [
        "No significant effect can be seen",
        "Temperature increases rapidly",
        "Temperature decreases rapidly",
        "Piping gets damaged"
    ],

    correct: 3
},

{
    question: "What is the action required if a heat exchanger is not heating due to lack of LS supply?",

    options: [
        "Inform SSV to contact supplier plant to confirm that LS supply is normal",
        "Arrange the LS supply locally",
        "Inform Console Operator",
        "Inform Section Head and wait for advice"
    ],

    correct: 0
},


{
    section: "COMPRESSOR TROUBLESHOOTING",

    question: "What problems can bearing damage lead to in a compressor?",

    options: [
        "Low bearing temperature and high suction pressure",
        "High discharge pressure and low suction pressure",
        "High bearing temperature and abnormal noise",
        "Low bearing temperature and low vibration"
    ],

    correct: 2
},

{
    question: "What does wrong rotational direction of impeller result in?",

    options: [
        "High gas flow",
        "No gas flow",
        "Lube oil leakage",
        "Seal damage"
    ],

    correct: 1
},

{
    question: "What would happen if the suction filter is clogged?",

    options: [
        "Suction pressure very high",
        "Suction pressure low",
        "Pressure not affected",
        "Discharge pressure very high"
    ],

    correct: 1
},


{
    question: "What may be the cause for High Drain Oil Temperature in compressor K-2401?",

    options: [
        "Bearing damage",
        "High Atmospheric Pressure",
        "High Atmospheric Temperature",
        "High Voltage Electricity Supply"
    ],

    correct: 0
},

{
    question: "Which one of the following would be an indication if there is a leakage problem in the bypass valve in a compressor?",

    options: [
        "Low capacity operation",
        "High outlet temperature",
        "High discharge pressure",
        "Low outlet temperature"
    ],

    correct: 0
},


{
    section: "FURNACE TROUBLESHOOTING",

    question: "What will happen if oxygen level is low in furnace FR-2301?",

    options: [
        "Heat efficiency is low",
        "Heat efficiency is high",
        "Heat efficiency is not affected",
        "Furnace will shut down"
    ],

    correct: 0
},

{
    question: "How does the burner flame appear when there is low oxygen level in FR-2302?",

    options: [
        "Lazy and white",
        "Active and blue",
        "Lazy and yellow",
        "Active and orange"
    ],

    correct: 2
},

{
    question: "What action can be taken if Stack temperature is high and process outlet temperature is low in FR-2301?",

    options: [
        "Check draft; if it is high, reduce the firing to the heater and close the stack damper in 5% increments",
        "Check draft; if it is high, increase the firing to the heater and open the stack damper in 5% increments",
        "No action required, it will reset to normal automatically",
        "The whole furnace has to be shut down and restarted"
    ],

    correct: 0
},

{
    question: "What is the remedy for low draft and high oxygen level in FR-2302?",

    options: [
        "Open each burner air register",
        "Restart the furnace",
        "Adjusting oxygen levels will not help",
        "Close each burner air register a little"
    ],

    correct: 3
},

{
    question: "What does lack of air (O2) due to increasing firing load in furnace FR-2302 result in?",

    options: [
        "Results in a low draft of furnace",
        "Results in explosion of the furnace",
        "Results in the shutdown of furnace",
        "Results in overdraft of furnace"
    ],

    correct: 0
}

];