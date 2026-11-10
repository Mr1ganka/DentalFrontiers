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
    id: "oral-hygiene-maintenance",
    title: "Oral hygiene maintenance",
    category: "Hygiene & Prevention",
    tagline: "Plaque-free, fresh, and deeply sanitized oral wellness",
    description: "Comprehensive ultrasonic scaling, airflow polishing, and tartar removal to maintain fresh breath and healthy gums.",
    detailedInfo: "Our oral hygiene maintenance protocol goes beyond simple cleanings. Utilizing advanced ultrasonic scalers and gentle airflow technology, we eliminate stubborn plaque and surface stains while protecting enamel integrity.",
    procedures: [
      "Ultrasonic supra & sub-gingival scaling",
      "Airflow stain & biofilm removal",
      "Interdental polish & remineralizing rinse",
      "Personalized home care guidance"
    ],
    duration: "30–45 mins",
    idealFor: "Routine 6-month maintenance, smoker's stain removal, and halitosis prevention",
    image: "/services/oral-hygiene.jpg",
  },
  {
    id: "root-canal-treatment",
    title: "Root Canal Treatment",
    category: "Restorative & Implants",
    tagline: "Painless precision endodontics to save natural teeth",
    description: "Advanced rotary endodontics with apex locators and digital imaging to relieve tooth pain and preserve damaged teeth.",
    detailedInfo: "We turn the traditional root canal into a serene, comfortable procedure. Under magnification and computer-guided rotary instrumentation, the infected pulp tissue is thoroughly cleansed, disinfected, and hermetically sealed in single or dual visits.",
    procedures: [
      "High-precision digital apex location",
      "Micro-rotary nickel-titanium instrumentation",
      "Ultrasonic root canal disinfection",
      "Biocompatible 3D warm vertical obturation"
    ],
    duration: "1–2 appointments (45–60 mins each)",
    idealFor: "Severe toothache, deep decay, traumatic nerve exposure, or abscesses",
    image: "/services/root-canal.jpg",
  },
  {
    id: "dental-fillings-restorations",
    title: "Dental Fillings and Restorations",
    category: "Restorative & Implants",
    tagline: "Seamless tooth-colored composite restorations",
    description: "Mercury-free, biomimetic nano-hybrid composites that blend invisibly with your natural enamel and restore tooth strength.",
    detailedInfo: "Say goodbye to unsightly silver fillings. We utilize multilayered nano-hybrid composite resins and ceramic inlays that adhere micro-mechanically to your tooth structure, mimicking natural translucency and stopping decay from spreading.",
    procedures: [
      "Laser-assisted micro-cavity detection",
      "Minimally invasive decay excavation",
      "Multi-shade biomimetic composite layering",
      "Precision anatomical contouring & occlusal bite polish"
    ],
    duration: "30–45 mins per tooth",
    idealFor: "Cavities, chipped front teeth, replacement of old amalgam fillings, or minor gaps",
    image: "/services/dental-fillings.jpg",
  },
  {
    id: "esthetic-smile-makeover",
    title: "Esthetic Smile Makeover",
    category: "Cosmetics & Whitening",
    tagline: "Bespoke smile transformations tailored to your facial harmony",
    description: "Custom ultra-thin porcelain veneers, composite bonding, and digital smile planning for a confident, luminous smile.",
    detailedInfo: "Our aesthetic transformations are planned around your facial contours, lip dynamics, and skin tone. We digitally design and trial your new smile before any physical work begins, ensuring natural-looking, radiant results.",
    procedures: [
      "3D Digital Smile Design (DSD) simulation",
      "Handcrafted porcelain ceramic veneers & laminates",
      "Aesthetic gum line recontouring",
      "Full smile symmetry & shade matching"
    ],
    duration: "2–3 visits over 10–14 days",
    idealFor: "Discolored, worn, chipped, gapped, or asymmetrical teeth",
    image: "/services/smile-makeover.jpg",
  },
  {
    id: "teeth-replacement",
    title: "Teeth replacement",
    category: "Restorative & Implants",
    tagline: "Full function and natural aesthetics restored",
    description: "Fixed zirconia bridges, precision partial dentures, and complete dental prosthetics designed for optimal chewing comfort.",
    detailedInfo: "Missing teeth can affect your nutrition, speech, and facial structure. We provide high-strength biocompatible zirconia bridges, flexible dentures, and implant-supported overdentures engineered for stability and seamless visual appeal.",
    procedures: [
      "Digital impression mapping without messy putties",
      "High-translucency monolithic zirconia crowns & bridges",
      "Flexible, lightweight partial dentures (Valplast)",
      "Complete full-arch prosthetic rehabilitation"
    ],
    duration: "2–3 visits",
    idealFor: "Single or multiple missing teeth, compromised chewing ability, or collapsing bite",
    image: "/services/teeth-replacement.jpg",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    category: "Restorative & Implants",
    tagline: "The permanent, gold-standard solution for missing teeth",
    description: "Computer-guided titanium and ceramic implant placement that permanently restores tooth roots and locks crowns in place.",
    detailedInfo: "Implants integrate directly into your jawbone through osseointegration, preventing bone loss and functioning exactly like natural teeth. We employ 3D CBCT guided surgical stents for millimeter precision and rapid recovery.",
    procedures: [
      "3D CBCT surgical planning & stent guidance",
      "Minimally invasive flapless implant placement",
      "Platelet-rich bone & ridge augmentation",
      "Custom CAD/CAM screw-retained ceramic crowns"
    ],
    duration: "30–60 mins per implant (healing 3–4 months)",
    idealFor: "Permanent tooth loss, loose dentures, or avoiding bridge reduction on neighboring teeth",
    image: "/services/dental-implants.jpg",
  },
  {
    id: "paediatric-dentistry",
    title: "Paediatric dentistry",
    category: "Hygiene & Prevention",
    tagline: "Gentle, fun, and fear-free dental care for children",
    description: "Child-centered preventive treatments, cavity care, fluoride protection, and gentle habit management in a friendly environment.",
    detailedInfo: "We believe early positive dental memories build a lifetime of healthy habits. Our pediatric specialists use gentle language, tell-show-do techniques, and zero-anxiety care to make dental visits an adventure rather than a chore.",
    procedures: [
      "Painless pit & fissure sealant protection",
      "Topical remineralizing fluoride therapies",
      "Gentle baby tooth fillings & pulpotomy",
      "Early developmental bite monitoring"
    ],
    duration: "30–40 mins",
    idealFor: "Infants, toddlers, school-aged children, and teenagers",
    image: "/services/paediatric.jpg",
  },
  {
    id: "preventive-dentistry",
    title: "Preventive Dentistry",
    category: "Hygiene & Prevention",
    tagline: "Stop dental problems before they start",
    description: "Routine examinations, digital X-rays, cavity risk assessments, and enamel remineralization treatments to preserve teeth.",
    detailedInfo: "True dental wellness is proactive rather than reactive. Through comprehensive digital diagnostics, bacterial risk assessments, and targeted preventative therapies, we catch early demineralization before it ever requires drilling.",
    procedures: [
      "Low-radiation 3D digital dental screening",
      "Enamel strengthening & remineralization varnish",
      "Salivary pH & cavity risk analysis",
      "Custom sports mouthguards & bite protection"
    ],
    duration: "30–45 mins",
    idealFor: "Patients of all ages committed to preserving natural tooth structure long-term",
    image: "/services/preventive.jpg",
  },
  {
    id: "orthodontic-teeth-alignment",
    title: "Orthodontic teeth alignment",
    category: "Orthodontics",
    tagline: "Straighten your teeth discreetly and comfortably",
    description: "Clear aligners and modern aesthetic ceramic braces to correct crowded, spaced, or misaligned teeth at any age.",
    detailedInfo: "Achieve the straight smile you have always wanted without bulky metal brackets. Using digital intraoral scanning, we create customized series of clear aligners that gently reposition your teeth with maximum comfort and discretion.",
    procedures: [
      "3D digital teeth scanning (no putty impressions)",
      "Invisible clear aligner treatment plans",
      "Low-friction ceramic self-ligating brackets",
      "Retainers & post-orthodontic bite stabilization"
    ],
    duration: "6–18 months depending on case complexity",
    idealFor: "Crowded teeth, gaps, overbite, crossbite, or relapse from past braces",
    image: "/services/orthodontic.jpg",
  },
  {
    id: "surgical-extractions",
    title: "Surgical extractions",
    category: "Specialized & Emergency",
    tagline: "Safe, gentle, and atraumatic surgical tooth removal",
    description: "Minimally traumatic extraction of impacted wisdom teeth, damaged roots, and severely compromised teeth with swift recovery.",
    detailedInfo: "When a tooth cannot be saved, our surgical team prioritizes atraumatic techniques that safeguard surrounding bone and soft tissue. We combine local profound anesthesia with gentle luxation to ensure a pain-free, comfortable experience.",
    procedures: [
      "Impacted wisdom tooth (third molar) surgery",
      "Sectional atraumatic root extraction",
      "Platelet-Rich Fibrin (PRF) accelerated healing",
      "Alveolar ridge preservation & socket grafting"
    ],
    duration: "30–60 mins",
    idealFor: "Painful impacted wisdom teeth, non-restorable fractured teeth, or severe crowding",
    image: "/services/extractions.jpg",
  },
  {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    category: "Specialized & Emergency",
    tagline: "Advanced light energy for gentle, suture-free treatments",
    description: "Precision diode lasers for pain-free gum contouring, cold sore healing, frenectomy, and deep microbial sterilization.",
    detailedInfo: "Laser technology transforms dental procedures into virtually painless, bloodless interventions. By targeting soft tissues with specific wavelengths, lasers simultaneously cut, sterilize, and coagulate tissue, dramatically speeding recovery.",
    procedures: [
      "Aesthetic laser gingival depigmentation",
      "Laser frenectomy & crown lengthening",
      "Aphthous ulcer & cold sore instant relief",
      "Laser-assisted pocket microbial decontamination"
    ],
    duration: "15–30 mins",
    idealFor: "Gummy smiles, dark gum pigmentation, tongue-tie, and stubborn mouth ulcers",
    image: "/services/laser-dentistry.jpg",
  },
  {
    id: "gum-therapy",
    title: "Gum therapy",
    category: "Hygiene & Prevention",
    tagline: "Rebuild the foundation of your oral health",
    description: "Specialized periodontal treatments for bleeding gums, gingivitis, and deep periodontitis to arrest bone loss.",
    detailedInfo: "Healthy gums are the essential foundation of every lasting smile. If you experience bleeding, redness, or receding gums, our comprehensive periodontal protocol eliminates deep subgingival tartar and bacterial toxins to regenerate tissue health.",
    procedures: [
      "Deep subgingival scaling & root planing (SRP)",
      "Local antimicrobial irrigation & site therapy",
      "Gingival recession evaluation & monitoring",
      "Periodontal maintenance & pocket reduction"
    ],
    duration: "45–60 mins (often in quadrants)",
    idealFor: "Bleeding gums, loose teeth, chronic bad breath, or gum recession",
    image: "/services/gum-therapy.jpg",
  }
];
