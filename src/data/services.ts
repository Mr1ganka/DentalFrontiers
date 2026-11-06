export type ServiceCategory =
  | "All"
  | "Hygiene & Prevention"
  | "Cosmetics & Whitening"
  | "Restorative & Implants"
  | "Orthodontics"
  | "Specialized & Emergency";

export interface Service {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, "All">;
  tagline: string;
  description: string;
  detailedInfo: string;
  procedures: string[];
  duration: string;
  idealFor: string;
  image: string;
  href?: string;
}

export const services: Service[] = [
  {
    id: "preventative",
    title: "Preventative Care & Hygiene",
    category: "Hygiene & Prevention",
    tagline: "Lifelong oral wellness starts with proactive prevention",
    description: "Routine checkups, ultrasonic biofilm cleanings, and low-dose digital screenings to maintain a healthy smile.",
    detailedInfo: "Our preventive protocol merges guided biofilm therapy with gentle periodontal charting and high-resolution digital imaging. We detect micro-cavities and gum inflammation months before they cause symptoms.",
    procedures: [
      "Guided biofilm ultrasonic therapy",
      "Low-radiation 3D digital imaging",
      "Comprehensive periodontal health audit",
      "Enamel remineralization & sealants"
    ],
    duration: "45–60 mins",
    idealFor: "Routine 6-month wellness checkups for all ages",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry & Smile Design",
    category: "Cosmetics & Whitening",
    tagline: "Bespoke aesthetic artistry matched to your facial symmetry",
    description: "Enhance your natural smile with handcrafted porcelain veneers, composite bonding, and digital smile simulations.",
    detailedInfo: "We approach aesthetics with sculptural subtlety. Before making any modifications, our digital smile design lets you preview your final look in 3D, creating results that look naturally radiant.",
    procedures: [
      "Ultra-thin ceramic porcelain veneers",
      "Aesthetic micro-composite bonding",
      "3D digital smile preview & mock-up",
      "Harmonious gingival recontouring"
    ],
    duration: "2–3 visits",
    idealFor: "Chipped, worn, discolored, or unevenly shaped teeth",
    image: "https://images.unsplash.com/photo-1598256989800-fea5ce5146ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "teeth-whitening",
    title: "In-Office Laser Teeth Whitening",
    category: "Cosmetics & Whitening",
    tagline: "Up to 8 shades brighter without lingering sensitivity",
    description: "Professional laser-assisted whitening coupled with custom at-home maintenance trays for a luminous smile.",
    detailedInfo: "Our medical-grade cold light laser activates a gentle pH-neutral gel that lifts stubborn coffee, wine, and tobacco stains safely while incorporating desensitizing nano-hydroxyapatite to protect your enamel.",
    procedures: [
      "Chairside cold-laser activation",
      "Enamel barrier sensitivity prevention",
      "Bespoke laboratory-crafted trays",
      "Digital shade mapping before & after"
    ],
    duration: "60 mins",
    idealFor: "Deep stains, dull enamel, and special event preparation",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "orthodontics",
    title: "Clear Orthodontics & Aligners",
    category: "Orthodontics",
    tagline: "Discreet, comfortable tooth alignment without metal brackets",
    description: "Virtually invisible aligner therapy digitally engineered to straighten teeth and harmonize your bite.",
    detailedInfo: "Say goodbye to traditional wires and brackets. Using optical intraoral 3D scanning, we map each tooth movement in millimeter increments, giving you removable, crystal-clear aligners that fit your lifestyle seamlessly.",
    procedures: [
      "iTero 3D digital impressions (no goop)",
      "Custom medical-grade clear aligner sets",
      "Digital progress tracking every 8 weeks",
      "Vivera post-treatment retention"
    ],
    duration: "6–18 months",
    idealFor: "Crowding, spacing, relapse, and bite misalignment",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "implants-restorative",
    title: "Dental Implants & Restorations",
    category: "Restorative & Implants",
    tagline: "Permanent tooth replacements that look, feel, and bite like natural teeth",
    description: "Computer-guided dental implants, monolithic zirconia crowns, and aesthetic bridges built for longevity.",
    detailedInfo: "Restore full masticatory strength and natural aesthetics. Our surgical guides position pure titanium and zirconia fixtures with sub-millimeter precision, fusing into the jawbone for a permanent foundation.",
    procedures: [
      "3D CBCT guided implant surgery",
      "Monolithic zirconia aesthetic crowns",
      "Implant-supported single & multi bridges",
      "Bone ridge preservation & regeneration"
    ],
    duration: "2–3 appointments",
    idealFor: "Missing teeth, broken roots, and failing traditional bridges",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "endodontics",
    title: "Microscopic Root Canal Therapy",
    category: "Restorative & Implants",
    tagline: "Gentle, pain-free tooth preservation using surgical magnification",
    description: "Save damaged or infected teeth with high-precision endodontic treatment in a single, relaxed visit.",
    detailedInfo: "Root canals with us are as comfortable as a routine filling. Utilizing high-powered surgical microscopes, we gently cleanse microscopic root canals, sterilize infected tissue, and seal them with biocompatible bioceramics.",
    procedures: [
      "High-power surgical microscope visualization",
      "Gentle rotary nickel-titanium instrumentation",
      "Bio-ceramic hermetic canal obturation",
      "Same-day protective restoration"
    ],
    duration: "60–90 mins",
    idealFor: "Severe toothaches, lingering sensitivity, or pulp infections",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "periodontics",
    title: "Periodontal Health & Laser Therapy",
    category: "Hygiene & Prevention",
    tagline: "Targeted laser care to reverse gingivitis and protect bone structure",
    description: "Minimally invasive pocket decontamination and ultrasonic scaling to secure tooth stability.",
    detailedInfo: "Gum health directly influences your cardiovascular and systemic vitality. Our non-surgical periodontal care utilizes diode laser light to eradicate bacteria beneath the gumline while promoting tissue reattachment.",
    procedures: [
      "Diode laser pocket decontamination",
      "Subgingival ultrasonic deep scaling",
      "Microbial DNA saliva testing",
      "Personalized maintenance regimen"
    ],
    duration: "60 mins",
    idealFor: "Bleeding gums, gum recession, halitosis, and bone support",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pediatric",
    title: "Pediatric & Family Dentistry",
    category: "Hygiene & Prevention",
    tagline: "Positive, fear-free dental beginnings for children and teenagers",
    description: "Fun, gentle visits designed to make children feel empowered, safe, and excited about oral wellness.",
    detailedInfo: "We turn dental anxiety into curiosity. Our team uses 'tell-show-do' methods, painless numbing techniques, and fun educational tools so your child grows up loving their dental visits.",
    procedures: [
      "Gentle exploratory checkups & polishing",
      "BPA-free protective molar sealants",
      "Early orthodontic growth assessments",
      "Fun cavity prevention coaching"
    ],
    duration: "30–45 mins",
    idealFor: "Infants, toddlers, children, and teenagers",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "sedation",
    title: "Sedation & Calm Dentistry",
    category: "Specialized & Emergency",
    tagline: "Completely relaxed, worry-free appointments for nervous patients",
    description: "Conscious sedation options, calming noise-canceling headsets, and warm aromatherapy for peaceful care.",
    detailedInfo: "Dental phobia shouldn't keep you from health and confidence. Choose between mild nitrous oxide (laughing gas) or oral conscious sedation to drift into a state of total peace while we complete your dental care.",
    procedures: [
      "Nitrous oxide conscious inhalation",
      "Oral conscious twilight sedation",
      "Continuous digital vital signs monitoring",
      "Noise-canceling audio & cozy blankets"
    ],
    duration: "Tailored to procedure",
    idealFor: "Dental anxiety, sensitive gag reflex, or multi-hour procedures",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "emergency",
    title: "Emergency Dental Care",
    category: "Specialized & Emergency",
    tagline: "Same-day priority relief when urgent dental crises strike",
    description: "Immediate triage and treatment for sudden toothaches, fractured teeth, dislodged crowns, and oral trauma.",
    detailedInfo: "We reserve dedicated emergency appointments every day. Whether you chipped a front tooth on the weekend or woke up with throbbing dental pain, our emergency team provides prompt pain relief and stabilization.",
    procedures: [
      "Same-day priority pain diagnosis & relief",
      "Fractured enamel & tooth rebonding",
      "Emergency crown recementation & repair",
      "Trauma management & infection control"
    ],
    duration: "Same-Day Priority",
    idealFor: "Severe pain, broken teeth, lost restorations, and oral trauma",
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tmj-sleep",
    title: "TMJ, Bruxism & Sleep Apnea",
    category: "Specialized & Emergency",
    tagline: "Relieve jaw pain, stop teeth grinding, and sleep deeply",
    description: "Custom-milled 3D night guards and mandibular advancement devices to eliminate jaw tension and snoring.",
    detailedInfo: "Do you wake with tension headaches, sore jaw muscles, or worn teeth? We map your jaw joint dynamics to produce slim, 3D-milled night guards that protect enamel and alleviate chronic TMJ stress.",
    procedures: [
      "Digital occlusal kinetics & bite analysis",
      "Bespoke 3D-printed hard/soft night guards",
      "Mandibular advancement anti-snore devices",
      "Facial muscle trigger-point relaxation"
    ],
    duration: "2 short visits",
    idealFor: "Teeth clenching, night grinding, TMJ clicking, and morning headaches",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery & Wisdom Teeth",
    category: "Restorative & Implants",
    tagline: "Minimally invasive extractions with natural healing growth factors",
    description: "Gentle wisdom tooth removal and alveolar bone grafting using biological PRF for rapid, pain-free recovery.",
    detailedInfo: "We prioritize tissue-sparing surgical techniques. By incorporating Platelet-Rich Fibrin (PRF) derived from your own blood, we dramatically reduce post-operative swelling and accelerate natural bone and tissue healing.",
    procedures: [
      "Impacted third molar (wisdom teeth) removal",
      "Minimally traumatic atraumatic extractions",
      "Platelet-Rich Fibrin (PRF) natural healing",
      "Ridge preservation & pre-implant grafting"
    ],
    duration: "45–75 mins",
    idealFor: "Painful wisdom teeth, impacted roots, or pre-orthodontic space",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
  }
];
