export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: "dr-gregory-house",
    name: "Dr. Gregory House",
    designation: "Head of Diagnostic Medicine",
    description: "Brilliant, razor-sharp diagnostician renowned for solving the most complex clinical puzzles that baffle other specialists. Unconventional wisdom with pinpoint accuracy.",
    image: "/team/dr-gregory-house.jpg",
  },
  {
    id: "dr-meredith-grey",
    name: "Dr. Meredith Grey",
    designation: "Chief of Reconstructive Surgery",
    description: "World-renowned surgical chief celebrated for groundbreaking surgical precision, steady hands, and an unshakeable commitment to compassionate patient recovery.",
    image: "/team/dr-meredith-grey.jpg",
  },
  {
    id: "dr-stephen-strange",
    name: "Dr. Stephen Strange",
    designation: "Master of Microsurgical Precision",
    description: "World-class surgeon renowned for intricate microscopic surgical mastery, steady composure under pressure, and pioneering innovative clinical techniques.",
    image: "/team/dr-stephen-strange.jpg",
  },
  {
    id: "dr-shaun-murphy",
    name: "Dr. Shaun Murphy",
    designation: "Attending Surgical Diagnostician",
    description: "Endowed with extraordinary visual-spatial anatomical recall and photographic precision, formulating ingenious, minimally-invasive clinical pathways.",
    image: "/team/dr-shaun-murphy.jpg",
  },
  {
    id: "dr-derek-shepherd",
    name: "Dr. Derek Shepherd",
    designation: "Head of Advanced Microsurgery",
    description: "Celebrated for taking on cases deemed impossible. Combines surgical brilliance with calm empathy, steady hands, and an inspiring bedside manner.",
    image: "/team/dr-derek-shepherd.jpg",
  },
  {
    id: "dr-john-watson",
    name: "Dr. John Watson",
    designation: "Senior Clinical Diagnostician",
    description: "Decorated surgeon combining meticulous forensic observation, calm clinical reasoning, and steadfast dedication to long-term patient rehabilitation.",
    image: "/team/dr-john-watson.jpg",
  },
  {
    id: "dr-perry-cox",
    name: "Dr. Perry Cox",
    designation: "Chief of Clinical Excellence",
    description: "Fierce patient advocate with zero patience for shortcuts. Demands unyielding perfection in patient safety while protecting every person under his care.",
    image: "/team/dr-perry-cox.jpg",
  },
  {
    id: "dr-leonard-mccoy",
    name: "Dr. Leonard McCoy",
    designation: "Chief Medical Officer & Therapeutics",
    description: "Pioneer of non-invasive clinical therapeutics and cellular tissue regeneration, treating every patient with warm humanity and heartfelt dedication.",
    image: "/team/dr-leonard-mccoy.jpg",
  }
];
