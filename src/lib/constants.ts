export const BUSINESS = {
  name: "Stone Quarry Sealing",
  tagline: "Protecting Northwest PA's Asphalt, One Surface at a Time",
  phone: "(814) 722-5081",
  phoneHref: "tel:+18147225081",
  email: "Stonequarrysealing@gmail.com",
  emailHref: "mailto:Stonequarrysealing@gmail.com",
  address: "2510 Stone Quarry Rd",
  city: "Waterford",
  state: "PA",
  zip: "16441",
  fullAddress: "2510 Stone Quarry Rd, Waterford, PA 16441",
  founded: 2023,
  facebook: "https://www.facebook.com/share/1EqscQM6A2/",
  formspreeEndpoint: "https://formspree.io/f/xykdbook",
  serviceArea: "Erie County, Crawford County & Northwest Pennsylvania",
  season: "May through October",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=2510+Stone+Quarry+Rd,+Waterford,+PA+16441&t=&z=14&ie=UTF8&iwloc=&output=embed",
  coordinates: { lat: 41.94, lng: -79.98 },
} as const;

export const SERVICES = [
  {
    id: "sealcoating",
    title: "Sealcoating",
    shortDesc:
      "We use a polymer seal coat that is dry to the touch in 24–48 hours and lasts 2–3 years.",
    fullDesc:
      "Your driveway or parking lot is constantly exposed to harsh elements like water, oil, and UV rays, all of which can cause serious damage over time. Our high-quality asphalt emulsion sealer forms a protective, flat-black layer that shields your surface from these threats. Beyond protection, sealcoating also restores the deep black appearance of your asphalt, improving curb appeal and giving it a clean, well-maintained look.",
    icon: "Paintbrush",
    image: "/images/work/IMG_5427.jpeg",
    highlights: [
      "Polymer seal coat formula",
      "Dry to touch in 24–48 hours",
      "Protection lasts 2–3 years",
      "Restores jet-black appearance",
      "Blocks water, UV & vehicle fluids",
    ],
  },
  {
    id: "crack-filling",
    title: "Crack Filling",
    shortDesc:
      "Using a hot rubberized crack filler, we seal cracks in your asphalt up to 3/4\" wide.",
    fullDesc:
      "Cracks in your asphalt driveway or parking lot invite water, dirt, and debris to seep in, which can lead to further damage and shorten the life of your pavement. We use a hot rubberized crack filler to seal and protect fillable cracks. First, we thoroughly clean out any debris to ensure a strong bond. Then, we apply the crack filler at 400°F, creating a durable, water-resistant 4-inch band over the crack.",
    icon: "Wrench",
    image: "/images/work/IMG_6624.jpeg",
    highlights: [
      "Hot rubberized crack filler",
      "Applied at 400°F",
      "Fills cracks up to 3/4\" wide",
      "Creates 4-inch protective band",
      "Prevents water infiltration",
    ],
  },
  {
    id: "line-painting",
    title: "Line Painting",
    shortDesc:
      "Using our LineLazer, we paint lines with ease and lay out parking lots to fit your business needs.",
    fullDesc:
      "Using our professional LineLazer equipment, we can paint crisp, clean lines with precision. We will lay out the parking lot to fit the needs of your business, ensuring proper traffic flow, ADA compliance markings, and a professional appearance that makes a great first impression.",
    icon: "Ruler",
    image: "/images/work/IMG_5471.jpeg",
    highlights: [
      "Professional LineLazer equipment",
      "Custom parking lot layouts",
      "Crisp, clean line precision",
      "Business-tailored design",
      "Improves traffic flow & safety",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Surface Assessment",
    description:
      "We assess the driveway or parking lot surface to ensure a thorough and effective seal.",
    icon: "ClipboardCheck",
  },
  {
    step: 2,
    title: "Edge & Clean",
    description:
      "We edge the asphalt to access every inch, then use leaf blowers and hand tools to remove all dirt and debris.",
    icon: "Wind",
  },
  {
    step: 3,
    title: "Crack Filling",
    description:
      "Fillable cracks are cleaned thoroughly and sealed with hot rubberized crack filler from our heated kettle.",
    icon: "Flame",
  },
  {
    step: 4,
    title: "Edge Sealing",
    description:
      "We edge out the perimeter using seal brushes and squeegees, carefully sealing around buildings and nearby objects.",
    icon: "PenTool",
  },
  {
    step: 5,
    title: "Spray Application",
    description:
      "The main coat is applied using our spray system for smooth, even coverage across the entire surface.",
    icon: "SprayCan",
  },
  {
    step: 6,
    title: "Cure & Protect",
    description:
      "Caution tape is placed at the entrance to keep the area clear while the sealcoat cures for 24–48 hours.",
    icon: "ShieldCheck",
  },
] as const;

export const BEFORE_AFTER_PAIRS = [
  {
    id: 1,
    before: "/images/before-after/IMG_5419.jpeg",
    after: "/images/before-after/IMG_5426.jpeg",
    label: "Commercial Parking Lot",
    location: "Waterford, PA",
  },
  {
    id: 2,
    before: "/images/before-after/IMG_5445.jpeg",
    after: "/images/before-after/IMG_5448.jpeg",
    label: "Townhouse Complex",
    location: "Erie, PA",
  },
  {
    id: 3,
    before: "/images/before-after/IMG_5510.jpeg",
    after: "/images/before-after/IMG_5515.jpeg",
    label: "Residential Community",
    location: "Edinboro, PA",
  },
  {
    id: 4,
    before: "/images/before-after/IMG_5420.jpeg",
    after: "/images/before-after/IMG_5516.jpeg",
    label: "Community Parking Area",
    location: "Meadville, PA",
  },
] as const;

export const WORK_IMAGES = [
  { src: "/images/work/IMG_4102.jpeg", alt: "Freshly sealed commercial lot at industrial facility in Erie County, PA" },
  { src: "/images/work/IMG_4137.jpeg", alt: "Completed driveway sealcoating in Waterford, PA" },
  { src: "/images/work/IMG_4140.jpeg", alt: "Professional asphalt sealing project in Edinboro, PA" },
  { src: "/images/work/IMG_4142.jpeg", alt: "Sealed driveway with crisp edges in Waterford, PA" },
  { src: "/images/work/IMG_4143.jpeg", alt: "Residential sealcoating project in Erie, PA" },
  { src: "/images/work/IMG_5427.jpeg", alt: "Freshly painted parking lot lines at Waterford, PA shopping center" },
  { src: "/images/work/IMG_5441.jpeg", alt: "Sealcoated parking area in Meadville, PA with professional finish" },
  { src: "/images/work/IMG_5471.jpeg", alt: "Winding driveway sealcoating in rural Crawford County, PA" },
  { src: "/images/work/IMG_5497.jpeg", alt: "Completed residential driveway sealing in Union City, PA" },
  { src: "/images/work/IMG_5537.jpeg", alt: "Professional sealcoating with clean edges in Corry, PA" },
  { src: "/images/work/IMG_5807.jpeg", alt: "Sealed asphalt surface at residential property in Cambridge Springs, PA" },
  { src: "/images/work/IMG_6559.jpeg", alt: "Night view of freshly sealed and lined car wash parking lot in Erie, PA" },
  { src: "/images/work/IMG_6575.jpeg", alt: "Large commercial parking lot sealcoating in Girard, PA" },
  { src: "/images/work/IMG_6624.jpeg", alt: "Newly sealed and lined parking lot in North East, PA" },
  { src: "/images/work/IMG_6633.jpeg", alt: "Professional asphalt maintenance completed in Fairview, PA" },
  { src: "/images/work/IMG_6694.jpeg", alt: "Freshly sealed industrial lot at farm facility in Erie County, PA" },
  { src: "/images/work/IMG_6742.jpeg", alt: "Large-scale commercial sealcoating project in Crawford County, PA" },
] as const;

export const FAQS = [
  {
    question: "Why should I get my asphalt seal coated?",
    answer:
      "Sealcoating is one of the best ways to protect and preserve your asphalt investment. Your driveway or parking lot is constantly exposed to harsh elements like water, oil, and UV rays, all of which can cause serious damage over time. Our high-quality asphalt emulsion sealer forms a protective, flat-black layer that shields your surface from these threats. Beyond protection, sealcoating also restores the deep black appearance of your asphalt, improving curb appeal and giving it a clean, well-maintained look. Whether it's a driveway or a commercial lot, sealcoating helps extend the life of your asphalt while keeping it looking fresh and sharp.",
  },
  {
    question: "When should I get my asphalt seal coated?",
    answer:
      "It is recommended that you wait 2 years after you get your asphalt installed to get it first seal coated. This coat will be the first reintroduction of oils to the material and therefore will not last as long. Some driveways may require 2 coats at this time. After it is first sealed, it is recommended that you seal your driveway every 2–3 years. Living in Northwest Pennsylvania, harsh winters can also put a toll on asphalt. Scraping snowplows and snow blowers will leave marks on the asphalt. Any area with high traffic will decrease the longevity of the sealer as well. Customers in these situations may need to get their asphalt sealed every year.",
  },
  {
    question: "How do you apply the seal coat?",
    answer:
      "When we arrive, we start by assessing the surface to ensure a thorough and effective seal. First, we edge the asphalt to access every inch, followed by using leaf blowers and hand tools to remove all dirt and debris. If there are any fillable cracks, we clean them thoroughly and use our heated kettle to apply a hot rubberized crack filler. Next, we edge out the perimeter using seal brushes and squeegees, carefully sealing around buildings and nearby objects. Once edging is complete, we apply the main coat using a spray system for smooth, even coverage. Finally, we place caution tape at the entrance to keep the area clear while the sealcoat cures.",
  },
  {
    question: "How long should I stay off fresh seal coat?",
    answer:
      "It is recommended to stay off the fresh coat for at least 24 hours. This depends on the weather — if it is a hot and humid day, drying times may be longer. If it is a warm and windy day, the seal coat will dry much quicker. Most customers can access it between 24–48 hours.",
  },
  {
    question: "What is crack filling?",
    answer:
      "Cracks in your asphalt invite water, dirt, and debris to seep in, which can lead to further damage and shorten the life of your pavement. Over time, these cracks grow larger and more costly to repair. We use a hot rubberized crack filler to seal and protect fillable cracks. First, we thoroughly clean out any debris to ensure a strong bond. Then, we apply the crack filler at 400°F, creating a durable, water-resistant 4-inch band over the crack. Please note: not all cracks are fillable. We can seal cracks up to 3/4\" deep and 3/4\" wide. Larger cracks, or areas with extensive \"alligator cracking,\" may require more extensive work.",
  },
  {
    question: "What can I do to preserve my seal coat?",
    answer:
      "After 24 hours, the seal coat hardens and becomes resistant to most outside objects. However, there are some actions that can expose the seal coat: sharp turning with a vehicle, scraping with a snowplow or other items, and extreme heat. While our seal coat is tough, it will not protect against these actions.",
  },
  {
    question: "When is the best time of the year to seal coat?",
    answer:
      "The best time of the year is between May and October. In order for the seal coat to harden, it must be 55°F overnight. Rain is also an issue — we will not seal coat if there is rain in the 24-hour forecast.",
  },
  {
    question: "Will the seal coat affect my lawn?",
    answer:
      "When spraying the seal coat on the asphalt, there will be overspray on the grass. Sealer will not affect the growth of your lawn. Mowing the lawn will get rid of the sealer and will show no decline in growth.",
  },
  {
    question: "Will the seal coat cover oil stains?",
    answer:
      "Sealer alone won't eliminate oil stains. To properly treat these spots, we first apply an oil stain primer directly over the affected area. This specially formulated primer helps the sealer adhere to the asphalt beneath the stain, ensuring a smooth, uniform finish. Once the process is complete, the oil stain will be effectively covered and no longer visible.",
  },
] as const;

export const STATS = [
  { value: 30, suffix: "+", label: "Years Added to Asphalt Life", prefix: "" },
  { value: 3, suffix: " Yrs", label: "Protection Per Coat", prefix: "Up to " },
  { value: 48, suffix: " Hrs", label: "Dry Time", prefix: "" },
  { value: 400, suffix: "°F", label: "Crack Filler Temperature", prefix: "" },
] as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Our Work" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;
