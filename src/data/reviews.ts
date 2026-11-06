export interface Review {
  id: string;
  name: string;
  treatment: string;
  date: string;
  text: string;
  rating: number;
  source: "Google Maps";
  googleReviewUrl: string;
}

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Ananya Mukherjee",
    treatment: "Painless Root Canal & Zirconia Crown",
    date: "1 week ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Dr. Tanusree Bera and the entire team at Dental Frontiers are extraordinary. I was terrified of getting a root canal, but the procedure was completely painless and done under high-magnification precision. The clinic in Santoshpur is immaculate, modern, and has a very calming ambiance.",
  },
  {
    id: "rev-2",
    name: "Debabrata Sen",
    treatment: "Dental Implant & Bone Grafting",
    date: "2 weeks ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Got my single-tooth implant completed here. The digital 3D scans and computer-guided placement made the recovery remarkably quick. The doctor explained every step transparently with zero hidden costs. Truly the highest standard of dental care in South Kolkata.",
  },
  {
    id: "rev-3",
    name: "Priyanka Ghosh",
    treatment: "Laser Periodontal Gum Therapy & Cleaning",
    date: "3 weeks ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Visited Dental Frontiers for recurring bleeding gums. Dr. Tanusree used painless laser decontamination and guided ultrasonic cleaning. The difference in my oral comfort was immediate! Very gentle hands, courteous staff, and punctual appointments.",
  },
  {
    id: "rev-4",
    name: "Sourav Chatterjee",
    treatment: "Same-Day Emergency Broken Tooth Repair",
    date: "1 month ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Had a sudden fracture on my front tooth over the weekend. They responded via WhatsApp within 10 minutes and accommodated me immediately. Restored my tooth with natural aesthetic bonding that blends completely invisibly. Lifesavers!",
  },
  {
    id: "rev-5",
    name: "Ritwika Banerjee",
    treatment: "Smile Makeover & Teeth Whitening",
    date: "1 month ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Did in-office cold laser teeth whitening and cosmetic contouring for my wedding. The results exceeded my expectations—bright, natural, and without any lingering enamel sensitivity. The soothing clinic environment makes you forget you are at a dentist.",
  },
  {
    id: "rev-6",
    name: "Subir Roy",
    treatment: "Full Mouth Oral Rehabilitation",
    date: "2 months ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Brought my elderly mother for multiple restorations and bridges. The patience, kindness, and clinical precision shown by the doctors was heartwarming. Ground floor access made it very convenient for her. 5-star clinic in every aspect.",
  },
  {
    id: "rev-7",
    name: "Sneha Chakraborty",
    treatment: "Clear Aligner Consultation & Orthodontics",
    date: "2 months ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Best orthodontic consultation in Santoshpur! They took intraoral 3D scans and projected my smile transformation on screen right before my eyes. No messy alginate impressions. The aligners fit comfortably and discreetly.",
  },
  {
    id: "rev-8",
    name: "Rajesh Kumar Shaw",
    treatment: "Wisdom Tooth Surgical Extraction",
    date: "3 months ago",
    rating: 5,
    source: "Google Maps",
    googleReviewUrl: "https://maps.app.goo.gl/RMGfYsy83D8yHqyZ6",
    text: "Got an impacted lower wisdom tooth extracted. Was expecting severe swelling and pain, but thanks to their gentle minimally invasive surgical protocol, I had almost zero pain and was back to normal routine within two days. Highly recommended!",
  }
];
