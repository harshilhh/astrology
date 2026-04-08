"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: "talk-to-astrologer",
    title: "Talk To Astrologer Online",
    image: "/services/relationship-problem.jpg",
    href: "/services/talk-to-astrologer",
    paragraphs: [
      "In today's fast-paced world, visiting an astrologer in person isn't always possible. That's why Pandit Vikram Bhai Joshi offers comprehensive online astrology consultations via phone and WhatsApp — delivering the same depth of insight and accuracy you'd receive in person.",
      "Each consultation begins with a thorough analysis of your birth chart (Kundali), current planetary transits, and Dasha periods. Whether you're facing career challenges, relationship confusion, health concerns, or financial obstacles — you'll receive clear, actionable guidance backed by 25+ years of Vedic expertise.",
      "Our phone consultations are available 24/7, ensuring you can seek guidance whenever you need it most. Every session is completely confidential, and follow-up support is provided to ensure the remedies are working effectively.",
    ],
    bullets: [
      "Comprehensive Kundali astrological analysis via phone",
      "Current planetary transit evaluation and impacts",
      "Direct Q&A session with Pandit Vikram Bhai Joshi",
      "Personalized remedial measures for life challenges",
      "Gemstone and Yantra recommendations",
      "Muhurta (auspicious timing) consultation",
    ],
    approach: [
      "Instant solutions without lengthy appointment waits",
      "Flexible scheduling — available 24/7 worldwide",
      "Unlimited questions during your consultation",
      "Complete confidentiality guaranteed",
      "Follow-up support included at no extra charge",
    ],
  },
  {
    id: "kundali-matching",
    title: "Kundali Matching",
    image: "/services/intercaste-love-marriage.jpg",
    href: "/services/kundali-matching",
    paragraphs: [
      "Kundali Matching — also known as Horoscope Matching or Gun Milan — is one of the most critical steps before marriage in Vedic tradition. It involves comparing the birth charts of two individuals to assess their compatibility across 8 key dimensions (Ashtakoota), yielding a score out of 36 Gunas.",
      "Pandit Vikram Bhai Joshi performs detailed Kundali matching that goes beyond simple Guna scores. He analyzes Manglik Dosha, Nadi Dosha, Bhakoot Dosha, planetary positions, Dasha compatibility, and the overall health of the 7th house in both charts — providing a comprehensive picture of marital harmony.",
      "Whether you're considering a love marriage or an arranged match, proper Kundali analysis can reveal potential challenges early and provide remedies to ensure a harmonious, lasting union.",
    ],
    bullets: [
      "Ashtakoota (8 Gunas) compatibility scoring",
      "Manglik Dosha detection and remedies",
      "Nadi Dosha and Bhakoot Dosha analysis",
      "7th house strength assessment for both partners",
      "Dasha period compatibility evaluation",
      "Marriage timing and Muhurta selection",
    ],
    approach: [
      "Complete birth chart comparison with detailed report",
      "Dosha identification with proven Vedic remedies",
      "Honest assessment — not just favorable results",
      "Guidance for both love and arranged marriage scenarios",
      "Post-matching counseling and remedy implementation",
    ],
  },
  {
    id: "love-marriage",
    title: "Love Marriage Problem Solution",
    image: "/services/husband-wife-problem.jpg",
    href: "/services/love-marriage-solution",
    paragraphs: [
      "Love is one of the most powerful emotions, yet love marriages often face immense obstacles — parental disapproval, caste differences, societal pressure, and astrological incompatibilities. Pandit Vikram Bhai Joshi has helped thousands of couples overcome these challenges and unite in marriage.",
      "Using deep analysis of both partners' birth charts, he identifies the planetary causes behind the resistance — whether it's a weakened 7th house, Venus affliction, Manglik Dosha, or malefic Rahu influence. Each remedy is custom-designed for your specific situation, ensuring maximum effectiveness.",
      "From intercaste marriage challenges to ex-partner reunions, from family acceptance to court marriage guidance — no love problem is too complex. With 25+ years of experience and 90,000+ successful consultations, Pandit Vikram Bhai Joshi has the expertise to guide your love story to a happy ending.",
    ],
    bullets: [
      "Love marriage obstacle removal",
      "Intercaste & inter-religion marriage solutions",
      "Break-up and separation resolution",
      "One-sided love transformation techniques",
      "Ex-partner reunion and reconciliation",
      "Extramarital affair guidance and resolution",
      "Divorce prevention and marital harmony",
      "Parental approval facilitation",
    ],
    approach: [
      "Root cause analysis through birth chart examination",
      "Customized Vedic remedies for each unique situation",
      "Positive Vashikaran methods (ethical attraction)",
      "Gemstone and Yantra prescriptions for Venus strengthening",
      "Ongoing support until complete resolution",
    ],
  },
  {
    id: "live-in-partner",
    title: "Live-in Partner Problem Solutions",
    image: "/services/family-problem.jpg",
    href: "/services/live-in-partner-solution",
    paragraphs: [
      "Are you facing challenges in your live-in relationship? Look no further. As an experienced astrologer, Pandit Vikram Bhai Joshi offers expert guidance and solutions to overcome issues related to communication breakdowns, trust and loyalty concerns, financial disagreements, and emotional disconnection.",
      "Through in-depth astrological analysis and personalized consultations, he provides actionable insights and practical advice to help you strengthen your bond, rebuild trust and intimacy, enhance communication, and overcome financial and emotional challenges.",
      "Let the stars guide you towards a more harmonious and fulfilling live-in partnership. Reach out today for a personalized consultation and take the first step towards resolving your live-in partner problems.",
    ],
    bullets: [
      "Communication breakdown resolution",
      "Trust and loyalty concern guidance",
      "Financial disagreement mediation",
      "Intimacy and emotional connection problems",
      "Conflicts and arguments resolution",
      "Compatibility and understanding issues",
    ],
    approach: [
      "Strengthen your bond and understanding",
      "Rebuild trust and intimacy in the relationship",
      "Enhance communication and conflict resolution skills",
      "Overcome financial and emotional challenges together",
      "Rekindle the spark and joy in your partnership",
    ],
  },
  {
    id: "black-magic",
    title: "Black Magic Removal",
    image: "/services/black-magic-removal.jpg",
    href: "/services/black-magic-removal",
    paragraphs: [
      "Black magic is a dark and destructive practice that can devastate every aspect of a person's life. When applied correctly by malicious practitioners, it can cause unexplained health issues, career destruction, relationship breakdowns, financial ruin, and severe mental disturbance — all without the victim knowing the root cause.",
      "Pandit Vikram Bhai Joshi is an expert in detecting and removing black magic, evil eye (Nazar), and all forms of negative spiritual energy. Using powerful Vedic mantras, sacred rituals, and time-tested protective remedies, he can neutralize dark forces and restore your life to normalcy.",
      "If you or your family members are experiencing sudden unexplained problems — chronic illness, business failure, relationship destruction, or persistent bad luck — it could be the result of black magic. Don't suffer in silence. Consult with Pandit Vikram Bhai Joshi for immediate detection and removal.",
    ],
    bullets: [
      "Black magic detection and confirmation",
      "Complete removal of dark energy and spells",
      "Evil eye (Nazar) protection and removal",
      "Spiritual cleansing of home and workplace",
      "Protective kavach (shield) installation",
      "Ancestral curse identification and resolution",
    ],
    approach: [
      "Thorough spiritual assessment of your situation",
      "Identification of the source and type of black magic",
      "Powerful Vedic mantra recitation for neutralization",
      "Sacred fire rituals (Havan) for spiritual cleansing",
      "Long-term protection measures to prevent recurrence",
    ],
  },
  {
    id: "child-birth",
    title: "Child Birth Issue Problem",
    image: "/services/child-birth-issue.jpg",
    href: "/services/child-birth-issue",
    paragraphs: [
      "Child Birth Prediction by Date of Birth — understanding child birth issues using astrology can provide valuable insights for couples hoping to become parents. While modern medicine plays a crucial role, Vedic astrology offers a complementary perspective by analyzing planetary positions that influence fertility and parenthood.",
      "In Vedic astrology, the 5th house is the primary indicator of children. Jupiter's placement, the Saptamamsha chart (D-7), and the condition of the 5th lord all play critical roles. Afflictions from Saturn, Rahu, or Ketu to these areas can delay or complicate conception.",
      "Pandit Vikram Bhai Joshi specializes in fertility-related astrological analysis. By examining your birth chart, he can identify the planetary causes of delay, suggest powerful remedies, and guide you toward the most favorable periods for conception.",
    ],
    bullets: [
      "5th house analysis for fertility potential",
      "Jupiter placement and strength evaluation",
      "Saptamamsha (D-7) chart examination",
      "Saturn, Rahu, Ketu affliction identification",
      "Optimal conception timing through Dasha analysis",
      "Fertility-enhancing Vedic remedies",
    ],
    approach: [
      "Comprehensive birth chart analysis for both partners",
      "Identification of specific planetary blocks to conception",
      "Powerful mantra and ritual remedies for fertility",
      "Gemstone recommendations for strengthening Jupiter",
      "Ongoing guidance through the conception journey",
    ],
  },
  {
    id: "marriage-prediction",
    title: "Marriage Prediction by Date of Birth",
    image: "/services/divorce-problem.jpg",
    href: "/services/marriage-prediction",
    paragraphs: [
      "Marriage Prediction by Date of Birth is one of the most sought-after services in Vedic astrology. Your birth chart contains detailed information about when you'll marry, what kind of partner you'll attract, and how your married life will unfold — all encoded in planetary positions at the time of your birth.",
      "Pandit Vikram Bhai Joshi analyzes the 7th house (marriage), Venus (love and romance), Jupiter (husband significator for women), Mars (wife significator for men), and the current Dasha periods to provide accurate marriage predictions and timing.",
      "Whether you're experiencing delays in marriage, confused about love vs. arranged marriage, or seeking insight into your future spouse's characteristics — a detailed marriage prediction can provide the clarity and guidance you need to make informed decisions about your romantic future.",
    ],
    bullets: [
      "Exact marriage timing prediction",
      "Love marriage vs. arranged marriage likelihood",
      "Future spouse characteristics and compatibility",
      "Marriage delay causes and remedies",
      "Manglik Dosha assessment and solutions",
      "Post-marriage life quality prediction",
    ],
    approach: [
      "Detailed 7th house and Venus analysis",
      "Current and upcoming Dasha period evaluation",
      "Transit-based marriage window identification",
      "Remedies for removing marriage obstacles",
      "Guidance on partner selection and timing",
    ],
  },
  {
    id: "wealth-business",
    title: "Wealth, Business Prediction & Solution",
    image: "/services/business-problem.jpg",
    href: "/services/wealth-business-prediction",
    paragraphs: [
      "Astrology Report for Business Success — in today's competitive business environment, having an edge can make the difference between success and failure. Vedic astrology provides powerful insights into your business potential, optimal timing for ventures, partnership compatibility, and financial growth trajectories.",
      "Pandit Vikram Bhai Joshi analyzes your Lagna (ascendant), the 10th house (career), 11th house (income), and 2nd house (wealth accumulation) to provide comprehensive business predictions. Dasha periods reveal when opportunities will arise and when caution is needed.",
      "Whether you're starting a new business, facing financial challenges, considering a partnership, or planning major investments — astrological guidance can help you make informed decisions aligned with your planetary strengths.",
    ],
    bullets: [
      "Business success potential analysis",
      "Optimal timing for new ventures and investments",
      "Partnership compatibility assessment",
      "Financial growth trajectory prediction",
      "Loss prevention and recovery guidance",
      "Property and real estate timing",
    ],
    approach: [
      "Lagna and Dasha-based business timing analysis",
      "5-year and 10-year financial forecasting",
      "Remedies for strengthening wealth-giving planets",
      "Gemstone and Yantra recommendations for prosperity",
      "Ongoing business astrology advisory support",
    ],
  },
  {
    id: "job-career",
    title: "Job, Career, Study, Report",
    image: "/services/finance-problem.jpg",
    href: "/services/job-career-study",
    paragraphs: [
      "Career Prediction by Date of Birth — your birth chart holds the key to understanding your ideal career path, optimal timing for job changes, and strategies for professional growth. Pandit Vikram Bhai Joshi combines Vedic and Western astrology to deliver comprehensive career guidance.",
      "The 10th house (career and public image), 6th house (service and employment), and the positions of Saturn (discipline and hard work) and Mercury (intellect and communication) are carefully analyzed to reveal your career potential and the sectors most suited to your planetary configuration.",
      "Whether you're a student choosing a field of study, a professional seeking promotion, or someone facing job loss or career stagnation — astrological career analysis can provide the clarity needed to make empowered decisions about your professional future.",
    ],
    bullets: [
      "Career path suitability analysis",
      "Job change and promotion timing",
      "Income progression forecasting",
      "Study and education guidance for students",
      "Government job and competitive exam prospects",
      "Overseas career and work visa predictions",
    ],
    approach: [
      "10th house and Saturn analysis for career direction",
      "Dasha-based timing for career milestones",
      "Remedies for removing professional obstacles",
      "Sector-specific guidance aligned with planetary strengths",
      "Long-term career planning and advisory support",
    ],
  },
  {
    id: "love-problems",
    title: "Love Problems",
    image: "/services/relationship-problem.jpg",
    href: "/services/love-problems",
    paragraphs: [
      "Love is the most powerful emotion, yet it often brings the most intense pain. Whether you're struggling with unrequited love, facing rejection, dealing with trust issues, or experiencing constant conflicts with your partner — the root cause often lies in planetary imbalances in your birth chart.",
      "Pandit Vikram Bhai Joshi specializes in diagnosing love problems through Vedic astrology. By analyzing Venus (the planet of love), the 5th house (romance), the 7th house (partnerships), and the influence of malefic planets like Rahu, Ketu, and Saturn — he identifies exactly why your love life is troubled.",
      "With customized remedies including mantra therapy, gemstone recommendations, and specific pujas, he has helped over 90,000 individuals find resolution to their love problems and restore harmony in their relationships.",
    ],
    bullets: [
      "Unrequited and one-sided love resolution",
      "Trust and jealousy issue guidance",
      "Constant conflict and argument resolution",
      "Long-distance relationship challenges",
      "Love triangle and complicated situation guidance",
      "Emotional healing after heartbreak",
    ],
    approach: [
      "Venus and 5th house analysis for love potential",
      "Identification of malefic planetary influences",
      "Customized mantra therapy for love attraction",
      "Gemstone prescriptions for Venus strengthening",
      "Ongoing counseling until complete resolution",
    ],
  },
  {
    id: "intercaste-love-marriage",
    title: "Intercaste Love Marriage",
    image: "/services/intercaste-love-marriage.jpg",
    href: "/services/intercaste-love-marriage",
    paragraphs: [
      "Intercaste love marriages face unique challenges in Indian society — parental opposition, community pressure, threats from relatives, and social stigma. Despite changing times, many families still resist intercaste unions, leaving couples feeling helpless and desperate.",
      "Pandit Vikram Bhai Joshi has decades of experience helping intercaste couples overcome family resistance and societal barriers. Through powerful Vedic remedies, he works to soften parental hearts, remove astrological obstacles blocking the union, and create an environment conducive to acceptance.",
      "His approach combines astrological analysis with practical guidance — identifying the planetary reasons behind the opposition, performing targeted rituals for family harmony, and advising couples on the best timing and approach to seek blessings from their families.",
    ],
    bullets: [
      "Parental opposition and resistance removal",
      "Community and societal pressure management",
      "Family acceptance facilitation through remedies",
      "Inter-religion marriage obstacle resolution",
      "Astrological compatibility analysis across castes",
      "Court marriage guidance and protection",
    ],
    approach: [
      "Birth chart analysis of both partners for compatibility",
      "Targeted pujas for family harmony and acceptance",
      "Vashikaran remedies for softening parental resistance",
      "Auspicious timing selection for approaching families",
      "Complete support from consultation to marriage ceremony",
    ],
  },
  {
    id: "relationship-problem",
    title: "Relationship Problem",
    image: "/services/relationship-problem.jpg",
    href: "/services/relationship-problem",
    paragraphs: [
      "Relationships require constant nurturing, understanding, and effort from both partners. When planetary influences create discord — through misunderstandings, ego clashes, communication breakdowns, or external interference — even the strongest bonds can begin to fracture.",
      "Pandit Vikram Bhai Joshi provides deep astrological insights into your relationship dynamics. By examining the 7th house, Venus placement, and the interplay of both partners' birth charts, he reveals the hidden planetary causes behind your relationship struggles.",
      "Whether you're in a new relationship facing early challenges or a long-term partnership going through a rough patch, his expert guidance and proven Vedic remedies can help restore love, trust, and mutual understanding between you and your partner.",
    ],
    bullets: [
      "Communication breakdown resolution",
      "Trust rebuilding after betrayal",
      "Ego clash and dominance issue guidance",
      "Third-party interference removal",
      "Emotional distance and coldness resolution",
      "Compatibility enhancement through remedies",
    ],
    approach: [
      "Synastry analysis of both partners' charts",
      "Identification of conflict-triggering planetary transits",
      "Mantra and ritual remedies for relationship harmony",
      "Practical guidance for improving communication",
      "Follow-up support to ensure lasting improvement",
    ],
  },
  {
    id: "husband-wife-problem",
    title: "Husband & Wife Problem",
    image: "/services/husband-wife-problem.jpg",
    href: "/services/husband-wife-problem",
    paragraphs: [
      "Marriage is a sacred bond, but even the most loving couples can face serious challenges. Constant arguments, lack of intimacy, financial stress, in-law interference, suspicion, and emotional distance can slowly erode a marriage if left unaddressed.",
      "In Vedic astrology, the 7th house governs marriage, Venus represents love and harmony, and Jupiter signifies wisdom and mutual respect. When these are afflicted by Saturn, Rahu, or Mars — marital discord is almost inevitable. Pandit Vikram Bhai Joshi specializes in identifying these afflictions and providing targeted remedies.",
      "With compassion and deep astrological expertise, he has reunited thousands of estranged couples, resolved long-standing disputes, and restored love and harmony in marriages that seemed beyond repair. Every consultation is completely confidential.",
    ],
    bullets: [
      "Constant argument and fight resolution",
      "Lack of intimacy and emotional connection",
      "Suspicion and trust issue guidance",
      "In-law interference and family pressure",
      "Financial stress impact on marriage",
      "Separation and estrangement prevention",
    ],
    approach: [
      "7th house and Venus analysis for both spouses",
      "Manglik and Dosha assessment for marital harmony",
      "Powerful Vedic rituals for reuniting estranged couples",
      "Gemstone and Yantra remedies for lasting peace",
      "Confidential counseling with ongoing support",
    ],
  },
  {
    id: "extra-marital-affairs",
    title: "Extra Marital Affairs",
    image: "/services/extra-marital-affair.jpg",
    href: "/services/extra-marital-affairs",
    paragraphs: [
      "Extra marital affairs are one of the most devastating experiences a spouse can face. The betrayal of trust, emotional trauma, and threat to family stability can be overwhelming. In many cases, planetary influences — particularly Rahu's influence on the 7th house — create the conditions for infidelity.",
      "Pandit Vikram Bhai Joshi approaches this sensitive issue with complete confidentiality and compassion. Through careful astrological analysis, he identifies whether planetary factors are driving the behavior and provides powerful remedies to break the negative pattern.",
      "Whether you're the affected spouse seeking to save your marriage, or someone caught in an affair wanting to return to your family — his guidance can help restore fidelity, rebuild trust, and bring your marriage back to its rightful path of love and commitment.",
    ],
    bullets: [
      "Spouse affair detection through astrological indicators",
      "Breaking the cycle of infidelity with Vedic remedies",
      "Trust rebuilding and emotional healing guidance",
      "Removing third-party influence from your marriage",
      "Rekindling love and attraction between spouses",
      "Family protection and stability restoration",
    ],
    approach: [
      "Rahu and 7th house analysis for infidelity patterns",
      "Targeted mantra therapy to break negative attractions",
      "Remedies for strengthening marital bond and fidelity",
      "Confidential guidance for both affected partners",
      "Long-term protection measures for marital sanctity",
    ],
  },
  {
    id: "divorce-problem",
    title: "Divorce Problem",
    image: "/services/divorce-problem.jpg",
    href: "/services/divorce-problem",
    paragraphs: [
      "Divorce is often the last resort when all attempts at reconciliation have failed. However, in many cases, planetary afflictions create temporary but intense periods of discord that feel permanent. Before taking the irreversible step of divorce, astrological insight can reveal whether reconciliation is possible.",
      "Pandit Vikram Bhai Joshi analyzes the 7th house, 12th house (loss), and the influence of separative planets like Saturn, Rahu, and Ketu to determine whether the current marital crisis is temporary or deeply rooted. In many cases, targeted remedies during difficult Dasha periods have saved marriages on the brink.",
      "If divorce is indeed unavoidable, he also provides guidance on the most favorable timing, protecting your interests, and ensuring minimal emotional and financial damage — especially when children are involved. His approach is always compassionate and non-judgmental.",
    ],
    bullets: [
      "Marriage reconciliation through astrological remedies",
      "Divorce timing and impact analysis",
      "Child custody and welfare guidance",
      "Financial protection during separation",
      "Post-divorce recovery and new beginning guidance",
      "Second marriage prospects and timing",
    ],
    approach: [
      "Comprehensive marital chart analysis for both partners",
      "Identification of temporary vs. permanent discord periods",
      "Powerful reconciliation rituals when marriage is saveable",
      "Practical and astrological guidance when divorce is inevitable",
      "Post-divorce recovery support and future predictions",
    ],
  },
  {
    id: "education-jobs",
    title: "Education & Jobs Problems",
    image: "/services/finance-problem.jpg",
    href: "/services/education-jobs",
    paragraphs: [
      "Education and employment are foundational pillars of a fulfilling life. When students struggle academically despite hard work, or professionals face repeated job rejections and career stagnation — the answers often lie in their birth charts.",
      "The 4th house governs education, the 5th house represents intelligence and higher learning, and the 10th house rules career and professional success. Mercury (intellect), Jupiter (wisdom), and Saturn (discipline) are the key planets. Afflictions to these houses or planets can create significant obstacles in academic and professional life.",
      "Pandit Vikram Bhai Joshi provides targeted astrological solutions for students facing exam failures, concentration issues, and course selection confusion — as well as professionals dealing with unemployment, workplace conflicts, and promotion delays.",
    ],
    bullets: [
      "Academic performance improvement remedies",
      "Competitive exam success predictions and timing",
      "Course and stream selection guidance",
      "Job interview success and timing",
      "Workplace conflict resolution",
      "Higher education and abroad study prospects",
    ],
    approach: [
      "4th, 5th, and 10th house analysis for academic and career potential",
      "Mercury and Jupiter strengthening remedies",
      "Saraswati Puja and Vidya mantras for students",
      "Career-specific timing through Dasha analysis",
      "Ongoing guidance through academic and professional milestones",
    ],
  },
  {
    id: "career-financial",
    title: "Career & Financial Problems",
    image: "/services/business-problem.jpg",
    href: "/services/career-financial",
    paragraphs: [
      "Financial instability and career obstacles can create immense stress, affecting every aspect of your life — from relationships to health. In Vedic astrology, the 2nd house (accumulated wealth), 10th house (career), and 11th house (gains and income) hold the keys to your financial destiny.",
      "When planets like Saturn, Rahu, or Ketu afflict these houses — or when you're running through a challenging Dasha period — financial losses, debt accumulation, business failures, and career setbacks become common. Pandit Vikram Bhai Joshi identifies these exact planetary causes and provides proven remedies.",
      "From resolving chronic financial problems to planning major investments, from overcoming career stagnation to identifying the most profitable business opportunities — his astrological guidance has helped thousands achieve financial stability and professional success.",
    ],
    bullets: [
      "Chronic financial problem resolution",
      "Debt elimination and recovery guidance",
      "Salary and income growth predictions",
      "Investment timing and sector recommendations",
      "Business loss recovery and prevention",
      "Career change timing and direction",
    ],
    approach: [
      "2nd, 10th, and 11th house wealth analysis",
      "Lakshmi and Kubera puja for financial prosperity",
      "Gemstone recommendations for wealth-attracting planets",
      "Dasha-based timing for financial decisions",
      "Long-term wealth building strategy through astrology",
    ],
  },
  {
    id: "health-problems",
    title: "Health Problems",
    image: "/services/health-problem.jpg",
    href: "/services/health-problems",
    paragraphs: [
      "When medical treatments fail to provide relief and health issues persist without clear diagnosis, the root cause may be astrological. In Vedic astrology, the 6th house governs diseases, the 8th house rules chronic conditions, and each planet is associated with specific organs and body systems.",
      "Saturn affects bones, joints, and chronic conditions. Mars governs blood, accidents, and surgeries. Rahu and Ketu create mysterious, hard-to-diagnose ailments. The Sun rules vitality and heart, while the Moon governs mental health. When these planets are afflicted in your birth chart, health challenges manifest.",
      "Pandit Vikram Bhai Joshi provides astrological health analysis that complements medical treatment — identifying the planetary causes of persistent health issues and prescribing Vedic remedies to accelerate healing and prevent future health crises.",
    ],
    bullets: [
      "Chronic disease astrological root cause analysis",
      "Mental health and anxiety planetary factors",
      "Accident and surgery timing awareness",
      "Mysterious and undiagnosed ailment insights",
      "Recovery period prediction and optimization",
      "Preventive health measures through astrology",
    ],
    approach: [
      "6th and 8th house analysis for disease patterns",
      "Planet-specific healing mantras and rituals",
      "Mahamrityunjaya Mantra therapy for critical conditions",
      "Gemstone remedies for strengthening weak health planets",
      "Holistic guidance combining astrology with Ayurvedic wisdom",
    ],
  },
  {
    id: "family-problems",
    title: "Family Problems",
    image: "/services/family-problem.jpg",
    href: "/services/family-problems",
    paragraphs: [
      "Family is the foundation of our lives, yet family conflicts can be the most painful and complex to resolve. Property disputes among siblings, generational misunderstandings, parental conflicts, and toxic family dynamics can destroy the harmony of an entire household.",
      "In Vedic astrology, the 4th house represents family happiness, the 2nd house governs family wealth and unity, and the Moon signifies emotional bonds. When malefic planets afflict these areas, family discord becomes almost inevitable — regardless of how much effort members put into maintaining peace.",
      "Pandit Vikram Bhai Joshi uses his 25+ years of experience to diagnose family problems through birth chart analysis and provide powerful remedies that restore unity, resolve disputes, and bring lasting peace to your household.",
    ],
    bullets: [
      "Sibling rivalry and property dispute resolution",
      "Parent-child relationship improvement",
      "Joint family conflict mediation",
      "Generational gap and misunderstanding resolution",
      "Family curse (Pitru Dosha) identification and removal",
      "Household peace and harmony restoration",
    ],
    approach: [
      "4th house and Moon analysis for family harmony",
      "Pitru Dosha detection and remedial pujas",
      "Family-specific mantra therapy for unity",
      "Vastu recommendations for harmonious living",
      "Individual guidance for each family member when needed",
    ],
  },
  {
    id: "lucky-gemstones",
    title: "Lucky Gems Stones",
    image: "/services/business-problem.jpg",
    href: "/services/lucky-gemstones",
    paragraphs: [
      "Gemstones have been used for thousands of years in Vedic astrology as powerful remedial tools. Each gemstone channels the energy of a specific planet — Ruby for Sun, Pearl for Moon, Coral for Mars, Emerald for Mercury, Yellow Sapphire for Jupiter, Diamond for Venus, Blue Sapphire for Saturn, Hessonite for Rahu, and Cat's Eye for Ketu.",
      "However, wearing the wrong gemstone can be extremely harmful. A gemstone that strengthens a malefic planet in your chart can amplify negative results instead of providing benefits. This is why expert astrological analysis is essential before wearing any gemstone.",
      "Pandit Vikram Bhai Joshi provides precise gemstone recommendations based on thorough birth chart analysis — identifying which planets need strengthening, the exact gemstone weight, metal setting, wearing finger, and auspicious day and time for first wearing.",
    ],
    bullets: [
      "Personalized gemstone recommendation based on birth chart",
      "Gemstone quality and authenticity verification guidance",
      "Correct weight, metal, and finger specification",
      "Auspicious timing for first wearing (Muhurta)",
      "Gemstone activation mantras and rituals",
      "Periodic review and replacement guidance",
    ],
    approach: [
      "Complete planetary strength analysis before recommendation",
      "Only recommending gemstones for beneficial planets",
      "Detailed wearing instructions for maximum benefit",
      "Affordable alternatives when premium stones aren't accessible",
      "Follow-up assessment of gemstone effectiveness",
    ],
  },
  {
    id: "property-legal",
    title: "Property / Legal Disputes",
    image: "/services/property-problem.jpg",
    href: "/services/property-legal",
    paragraphs: [
      "Property disputes and legal battles can drain you financially, emotionally, and mentally — often lasting years with uncertain outcomes. In Vedic astrology, the 4th house governs property and real estate, while the 6th house rules legal disputes and litigation.",
      "When malefic planets like Saturn, Rahu, or Mars afflict the 4th house or its lord, property-related problems become persistent. Similarly, a strong 6th house can indicate success in litigation, while an afflicted one suggests defeat and prolonged court cases.",
      "Pandit Vikram Bhai Joshi provides astrological analysis of your property and legal matters — predicting outcomes, identifying favorable timing for legal actions, and prescribing powerful remedies to tilt the balance in your favor.",
    ],
    bullets: [
      "Property dispute resolution guidance",
      "Court case outcome prediction",
      "Favorable timing for legal proceedings",
      "Ancestral property conflict resolution",
      "Real estate investment timing and selection",
      "Government land and documentation issue guidance",
    ],
    approach: [
      "4th and 6th house analysis for property and legal matters",
      "Mars and Saturn remedies for dispute resolution",
      "Baglamukhi and Pratyangira pujas for court case success",
      "Vastu analysis of disputed properties",
      "Strategic timing guidance for legal filings and hearings",
    ],
  },
  {
    id: "vastu-consultation",
    title: "Vastu Consultation",
    image: "/services/property-problem.jpg",
    href: "/services/vastu-consultation",
    paragraphs: [
      "Vastu Shastra — the ancient Indian science of architecture and spatial arrangement — directly impacts the health, wealth, relationships, and overall prosperity of the inhabitants. A home or office with Vastu defects can create persistent problems even for people with strong birth charts.",
      "Common Vastu issues include incorrect placement of the main entrance, kitchen, bedroom, or prayer room; underground water tanks in wrong directions; toilets in the northeast; and structural extensions in inauspicious directions. These seemingly minor issues can cause major life disruptions.",
      "Pandit Vikram Bhai Joshi provides comprehensive Vastu analysis for homes, offices, factories, and commercial spaces — identifying defects and providing practical remedies that often don't require structural changes. His non-demolition Vastu solutions are effective and cost-efficient.",
    ],
    bullets: [
      "Complete home and office Vastu analysis",
      "Factory and commercial space Vastu consultation",
      "Vastu defect identification and remedies",
      "Non-demolition Vastu correction techniques",
      "New construction Vastu planning",
      "Plot and land selection guidance",
    ],
    approach: [
      "Detailed directional analysis of your property",
      "Identification of all Vastu defects and their life impacts",
      "Practical remedies without structural demolition",
      "Placement of Vastu Yantras and corrective elements",
      "Follow-up assessment after remedy implementation",
    ],
  },
  {
    id: "visa-immigration",
    title: "Visa / Immigration Problem",
    image: "/services/visa-problem.jpg",
    href: "/services/visa-immigration",
    paragraphs: [
      "Foreign travel and immigration are among the most common aspirations in today's globalized world. Yet many people face repeated visa rejections, immigration delays, and overseas settlement challenges despite meeting all documentation requirements. The answers often lie in the birth chart.",
      "In Vedic astrology, the 9th house governs long-distance travel and fortune, the 12th house represents foreign lands and settlement abroad, and Rahu is the primary planet for overseas journeys. When these factors are favorably placed and activated by the right Dasha, foreign travel becomes smooth.",
      "Pandit Vikram Bhai Joshi analyzes your chart to predict the likelihood and timing of successful foreign travel, identifies planets blocking your visa approval, and provides targeted remedies to remove these astrological obstacles.",
    ],
    bullets: [
      "Visa approval timing prediction",
      "Repeated visa rejection cause analysis",
      "Best country and direction for foreign travel",
      "Overseas settlement and permanent residency prospects",
      "Foreign education opportunity timing",
      "Work permit and job abroad predictions",
    ],
    approach: [
      "9th and 12th house analysis for foreign travel potential",
      "Rahu remedies for removing immigration obstacles",
      "Auspicious timing selection for visa applications",
      "Specific mantras and pujas for travel success",
      "Guidance on documentation timing for best results",
    ],
  },
  {
    id: "infertility-family",
    title: "Infertility / Family Issues",
    image: "/services/child-birth-issue.jpg",
    href: "/services/infertility-family",
    paragraphs: [
      "The desire to have children is one of the deepest human instincts, and infertility can be an emotionally devastating experience for couples. While modern medicine addresses physical causes, Vedic astrology reveals the karmic and planetary dimensions of fertility challenges.",
      "The 5th house is the primary house of children, and its lord, along with Jupiter (the natural significator of children), must be strong and well-placed for smooth conception. Afflictions from Saturn (delay), Rahu (complications), or Ketu (denial) to the 5th house can create significant fertility obstacles.",
      "Pandit Vikram Bhai Joshi provides compassionate fertility-focused astrological consultations — analyzing both partners' charts, identifying the specific planetary blocks, and prescribing powerful remedies that have helped hundreds of couples experience the joy of parenthood.",
    ],
    bullets: [
      "Detailed fertility analysis for both partners",
      "Identification of specific planetary blocks to conception",
      "Optimal conception timing through transit analysis",
      "IVF and medical treatment timing guidance",
      "Santan Gopal Puja for childbirth blessings",
      "Pregnancy protection and safe delivery remedies",
    ],
    approach: [
      "5th house and Jupiter analysis for fertility potential",
      "Saptamamsha (D-7) chart examination for child prospects",
      "Powerful Santan Gopal mantra therapy",
      "Gemstone and Yantra remedies for Jupiter strengthening",
      "Emotional support and guidance throughout the journey",
    ],
  },
  {
    id: "one-sided-love",
    title: "One Sided Love Problem",
    image: "/services/relationship-problem.jpg",
    href: "/services/one-sided-love",
    paragraphs: [
      "One-sided love is one of the most painful emotional experiences. When you deeply love someone who doesn't reciprocate your feelings, it can lead to depression, anxiety, and a sense of hopelessness. Astrologically, Venus afflictions and 5th house weaknesses often create this imbalance.",
      "Pandit Vikram Bhai Joshi understands the agony of unrequited love and provides ethical, positive remedies to help create mutual attraction and emotional connection. His methods work by strengthening your Venus, enhancing your natural charm, and creating favorable planetary conditions for love to blossom.",
      "Through positive Vashikaran techniques, specific mantras, and targeted remedies, many individuals have successfully transformed their one-sided love into a beautiful mutual relationship. Every case is handled with sensitivity and complete confidentiality.",
    ],
    bullets: [
      "Creating mutual attraction through Vedic remedies",
      "Venus strengthening for enhanced personal magnetism",
      "Positive Vashikaran for ethical love attraction",
      "Overcoming shyness and communication barriers",
      "Proposal timing and approach guidance",
      "Dealing with rejection and emotional healing",
    ],
    approach: [
      "Venus and 5th house analysis for love attraction potential",
      "Ethical Vashikaran mantras for mutual feelings",
      "Gemstone and perfume recommendations for charm enhancement",
      "Auspicious timing for confessing feelings or proposing",
      "Emotional resilience building through spiritual practices",
    ],
  },
  {
    id: "ex-love-back",
    title: "Ex Love Back",
    image: "/services/extra-marital-affair.jpg",
    href: "/services/ex-love-back",
    paragraphs: [
      "Losing the person you love can feel like losing a part of yourself. Whether the breakup was caused by misunderstandings, family interference, a third person, or sudden emotional changes — many separations happen during adverse planetary transits and can be reversed with the right remedies.",
      "Pandit Vikram Bhai Joshi has reunited thousands of separated lovers by identifying the astrological causes behind the breakup. Often, Rahu or Saturn transits over the 5th or 7th house create sudden separations that aren't meant to be permanent.",
      "His powerful reunion remedies — including specific mantras, rituals, and positive Vashikaran techniques — work to remove the negative energy that caused the separation and rekindle the love and connection between former partners.",
    ],
    bullets: [
      "Ex-partner reunion through Vedic remedies",
      "Breakup cause analysis and resolution",
      "Removing third-party interference",
      "Rebuilding trust after separation",
      "Communication restoration with former partner",
      "Preventing future breakups after reunion",
    ],
    approach: [
      "Synastry analysis to confirm compatibility and reunion potential",
      "Powerful reunion mantras and rituals",
      "Positive Vashikaran for rekindling lost attraction",
      "Timing guidance for reaching out to your ex",
      "Post-reunion relationship strengthening remedies",
    ],
  },
  {
    id: "lost-love-back",
    title: "Lost Love Back",
    image: "/services/relationship-problem.jpg",
    href: "/services/lost-love-back",
    paragraphs: [
      "When you've lost contact with someone you deeply loved — whether through circumstances, distance, misunderstandings, or time — the pain of that lost connection can linger for years. Vedic astrology offers powerful ways to reconnect with lost love and restore broken bonds.",
      "The 5th house (romance), 7th house (partnerships), and Venus are key indicators of reconnection potential. When favorable planetary periods align, lost connections can be restored in ways that feel almost miraculous. Pandit Vikram Bhai Joshi analyzes these factors to determine the best path forward.",
      "His expertise in love reunion remedies has helped countless individuals reconnect with lost partners, rebuild what was broken, and create stronger, more resilient relationships the second time around. Every situation is unique, and his approach is always personalized.",
    ],
    bullets: [
      "Lost contact partner reconnection guidance",
      "Long-distance lost love reunion remedies",
      "Overcoming years of separation barriers",
      "Restoring lost emotional connection",
      "Finding and reconnecting with childhood love",
      "Building a stronger bond after reunion",
    ],
    approach: [
      "Chart analysis for reunion timing and potential",
      "Specific mantras for attracting lost love back",
      "Meditation and spiritual practices for emotional reconnection",
      "Strategic timing for reaching out and reconnecting",
      "Guidance for rebuilding trust and commitment",
    ],
  },
  {
    id: "breakup-relationship",
    title: "Break Up Relationship",
    image: "/services/divorce-problem.jpg",
    href: "/services/breakup-relationship",
    paragraphs: [
      "Breakups can shatter your world, leaving you feeling lost, depressed, and unable to move forward. Whether the breakup was sudden or gradual, recent or long ago — the emotional impact can affect every area of your life, from work performance to physical health.",
      "Astrologically, breakups often coincide with challenging transits of Saturn, Rahu, or Ketu over the 5th or 7th house, or during difficult Venus or Mars Dasha periods. Understanding these planetary triggers helps determine whether reconciliation is possible or if it's time to heal and move forward.",
      "Pandit Vikram Bhai Joshi provides compassionate guidance for both scenarios — powerful reunion remedies if reconciliation is in your destiny, or healing and recovery support if it's time to embrace a new chapter. His goal is your happiness and emotional well-being above all.",
    ],
    bullets: [
      "Breakup cause analysis through birth chart",
      "Reconciliation possibility assessment",
      "Emotional healing and recovery guidance",
      "Moving forward with confidence after breakup",
      "New love timing and prediction",
      "Self-worth restoration and personal empowerment",
    ],
    approach: [
      "Transit analysis to understand breakup triggers",
      "Reconciliation mantras when reunion is destined",
      "Healing rituals for emotional recovery",
      "Venus strengthening for attracting new love",
      "Holistic guidance for complete emotional well-being",
    ],
  },
  {
    id: "in-laws-problem",
    title: "In-Laws Problem",
    image: "/services/family-problem.jpg",
    href: "/services/in-laws-problem",
    paragraphs: [
      "In-law problems are among the most common causes of marital distress, especially in Indian families. Whether it's an overbearing mother-in-law, critical father-in-law, or interfering siblings-in-law — these dynamics can poison even the strongest marriages.",
      "Astrologically, the 4th house (domestic peace), the Moon (emotional harmony), and the relationship between the 7th lord and 4th lord in the birth chart reveal the nature of in-law relationships. Saturn and Rahu afflictions to these areas create persistent in-law conflicts.",
      "Pandit Vikram Bhai Joshi provides specialized remedies for in-law problems — from creating understanding and respect between the spouses' families to establishing healthy boundaries while maintaining family harmony.",
    ],
    bullets: [
      "Mother-in-law conflict resolution",
      "Establishing healthy family boundaries",
      "Joint family harmony restoration",
      "Spouse caught between partner and parents",
      "Dowry and financial demand pressure",
      "Emotional manipulation and control issue guidance",
    ],
    approach: [
      "4th house and Moon analysis for domestic harmony",
      "Specific mantras for softening in-law attitudes",
      "Family harmony pujas and rituals",
      "Practical boundary-setting guidance",
      "Couple counseling for united front against interference",
    ],
  },
  {
    id: "love-life-problem",
    title: "Love Life Problem",
    image: "/services/husband-wife-problem.jpg",
    href: "/services/love-life-problem",
    paragraphs: [
      "A fulfilling love life is essential for emotional well-being, yet many people struggle with persistent romantic challenges — attracting the wrong partners, repeating toxic patterns, fear of commitment, or inability to sustain long-term relationships.",
      "These recurring patterns often stem from planetary afflictions in the birth chart. A weakened Venus creates difficulties in giving and receiving love, while malefic influences on the 5th and 7th houses attract problematic relationship dynamics. Rahu involvement can create obsessive or deceptive love patterns.",
      "Pandit Vikram Bhai Joshi provides comprehensive love life analysis — identifying the root planetary causes of your romantic struggles and prescribing targeted remedies to transform your love life. His guidance has helped thousands break free from negative patterns and attract healthy, lasting love.",
    ],
    bullets: [
      "Attracting the right partner for lasting love",
      "Breaking toxic relationship patterns",
      "Fear of commitment and intimacy resolution",
      "Repeated heartbreak cycle analysis",
      "Love timing prediction — when will true love arrive",
      "Self-love and confidence building through remedies",
    ],
    approach: [
      "Venus and 5th/7th house comprehensive analysis",
      "Pattern identification across past relationships",
      "Venus and Moon strengthening remedies",
      "Love attraction mantras and spiritual practices",
      "Timing predictions for meeting your ideal partner",
    ],
  },
  {
    id: "sexual-life-dissatisfaction",
    title: "Sexual Life Dissatisfaction",
    image: "/services/husband-wife-problem.jpg",
    href: "/services/sexual-life-dissatisfaction",
    paragraphs: [
      "Sexual compatibility and satisfaction are vital components of a healthy marriage, yet many couples struggle with intimacy issues in silence due to societal taboos. In Vedic astrology, Mars governs physical passion, Venus rules romantic attraction, and the 8th house represents sexual energy and intimacy.",
      "When these planets are afflicted or weakened — or when the 8th houses of both partners are incompatible — sexual dissatisfaction, low desire, performance issues, and intimacy avoidance can create serious relationship strain.",
      "Pandit Vikram Bhai Joshi handles these sensitive consultations with complete confidentiality and professionalism. His astrological remedies focus on strengthening the relevant planets and creating harmonious energy flow between partners.",
    ],
    bullets: [
      "Sexual compatibility analysis between partners",
      "Low desire and passion issue remedies",
      "Performance anxiety and confidence building",
      "Emotional intimacy and connection enhancement",
      "Post-pregnancy intimacy restoration",
      "Rekindling passion in long-term marriages",
    ],
    approach: [
      "Mars, Venus, and 8th house analysis for both partners",
      "Specific mantras for enhancing passion and attraction",
      "Gemstone recommendations for Mars and Venus strengthening",
      "Vastu adjustments for the bedroom",
      "Completely confidential and non-judgmental guidance",
    ],
  },
  {
    id: "personalized-prediction",
    title: "Personalized Problem Prediction",
    image: "/services/finance-problem.jpg",
    href: "/services/personalized-prediction",
    paragraphs: [
      "Every individual's life challenges are unique, and cookie-cutter solutions rarely work. Personalized Problem Prediction is a comprehensive, customized astrological analysis that addresses your specific life situation — whatever it may be.",
      "Pandit Vikram Bhai Joshi creates a detailed life map based on your birth chart, covering all 12 houses and their interactions, current and upcoming Dasha periods, significant planetary transits, and their impact on every area of your life — from relationships and career to health and spirituality.",
      "This service is ideal for anyone seeking a complete understanding of their life trajectory, major upcoming events, potential challenges, and the best strategies to navigate them. It's like having a detailed roadmap for the next several years of your life.",
    ],
    bullets: [
      "Complete birth chart analysis across all 12 houses",
      "5-year and 10-year life prediction report",
      "Major life event timing predictions",
      "Challenge identification with proactive remedies",
      "Yearly transit impact assessment",
      "Personalized lucky dates, colors, and numbers",
    ],
    approach: [
      "Thorough examination of your complete birth chart",
      "Dasha and transit analysis for upcoming years",
      "Identification of opportunities and challenges ahead",
      "Customized remedy plan for each life area",
      "Written report with annual follow-up consultations",
    ],
  },
  {
    id: "lifetime-consultation",
    title: "One Time Payment — Life Time Safe",
    image: "/services/business-problem.jpg",
    href: "/services/lifetime-consultation",
    paragraphs: [
      "Our most comprehensive service offering — One Time Payment, Life Time Safe — provides you with lifetime astrological protection and guidance under a single consultation package. This premium service ensures you never face life's challenges alone.",
      "With this service, you receive an initial comprehensive birth chart analysis covering all aspects of life, followed by unlimited follow-up consultations whenever you need guidance. Whether it's a career decision, relationship challenge, health concern, or any life crisis — Pandit Vikram Bhai Joshi will be your personal astrological advisor for life.",
      "This service also includes proactive alerts when major planetary transits are about to affect your chart — giving you advance warning and protective remedies before challenges manifest. It's the ultimate peace of mind for those who value astrological guidance.",
    ],
    bullets: [
      "Complete initial birth chart analysis and report",
      "Unlimited lifetime follow-up consultations",
      "Proactive planetary transit alerts and warnings",
      "Priority access to Pandit Vikram Bhai Joshi",
      "Annual prediction updates and remedy adjustments",
      "Emergency consultation availability 24/7",
    ],
    approach: [
      "Comprehensive initial consultation covering all life areas",
      "Personalized remedy package for immediate implementation",
      "Quarterly check-in calls for ongoing guidance",
      "Proactive alerts before challenging planetary periods",
      "Complete peace of mind with lifetime astrological protection",
    ],
  },
];

export default function MainServicesContent() {
  const [activeId, setActiveId] = useState(services[0].id);
  const [search, setSearch] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const selectService = (id: string) => {
    setActiveId(id);
    setSearch("");
    if (contentRef.current) {
      const top = contentRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const query = search.toLowerCase().trim();
  const filtered = query
    ? services.filter((s) => s.title.toLowerCase().includes(query))
    : services;

  const active = services.find((s) => s.id === activeId) || services[0];
  const activeIndex = services.findIndex((s) => s.id === activeId);

  return (
    <>
      {/* Header */}
      <section className="msv-header-bar">
        <div className="msv-header-inner">
          <h1 className="msv-page-title">Main Services</h1>
          <nav className="msv-breadcrumb">
            <Link href="/">Home</Link>
            <span className="msv-breadcrumb-sep">&rsaquo;</span>
            <span className="msv-breadcrumb-current">Main Services</span>
          </nav>
        </div>
        <div className="msv-header-decor" />
      </section>

      <section className="msv-body">
        <div className="msv-wrap">

          {/* Search */}
          <div className="msv-search-row">
            <div className="msv-search">
              <svg className="msv-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="msv-search-input"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className="msv-search-clear" onClick={() => setSearch("")} aria-label="Clear search">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
            <span className="msv-result-count">
              {filtered.length} {filtered.length === 1 ? "service" : "services"}
            </span>
          </div>

          {/* Cards Grid */}
          <div className="msv-grid">
            {filtered.length === 0 && (
              <div className="msv-no-results">No services match your search</div>
            )}
            {filtered.map((s) => {
              const globalIndex = services.indexOf(s);
              const isActive = activeId === s.id;
              return (
                <button
                  key={s.id}
                  className={`msv-card ${isActive ? "msv-card--active" : ""}`}
                  onClick={() => selectService(s.id)}
                  style={{ animationDelay: `${(globalIndex % 12) * 0.04}s` }}
                >
                  {/* Left fire stripe */}
                  <div className="msv-card-stripe" />

                  {/* Ghost number */}
                  <span className="msv-card-ghost">{String(globalIndex + 1).padStart(2, "0")}</span>

                  {/* Content */}
                  <div className="msv-card-body">
                    <span className="msv-card-num">{String(globalIndex + 1).padStart(2, "0")}</span>
                    <h3 className="msv-card-title">{s.title}</h3>
                  </div>

                  {/* Arrow indicator */}
                  <div className="msv-card-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>

                  {/* Corner deco */}
                  <div className="msv-card-corner" />
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="msv-divider">
            <div className="msv-divider-line" />
            <span className="msv-divider-label">Service Details</span>
            <div className="msv-divider-line" />
          </div>

          {/* Detail Content */}
          <div className="msv-detail" ref={contentRef}>
            <article key={active.id} className="msv-service msv-service--enter">
              {/* Banner */}
              <div className="msv-banner">
                <Image
                  src={active.image}
                  alt={active.title}
                  width={900}
                  height={400}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div className="msv-banner-overlay">
                  <span className="msv-banner-num">{String(activeIndex + 1).padStart(2, "0")}</span>
                  <h2 className="msv-banner-title">{active.title}</h2>
                </div>
              </div>

              {/* Description */}
              <div className="msv-text-block">
                <h3 className="msv-section-heading">
                  <span className="msv-heading-bar" />
                  {active.title}
                </h3>
                {active.paragraphs.map((p, pi) => (
                  <p key={pi} className="msv-para">{p}</p>
                ))}
              </div>

              {/* Two-column detail grid */}
              <div className="msv-detail-grid">
                <div className="msv-text-block">
                  <h4 className="msv-sub-heading">What We Offer</h4>
                  <ul className="msv-bullet-list">
                    {active.bullets.map((b) => (
                      <li key={b}>
                        <span className="msv-bullet-icon">&#10022;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="msv-text-block">
                  <h4 className="msv-sub-heading">How Can We Help?</h4>
                  <ul className="msv-bullet-list msv-bullet-list--alt">
                    {active.approach.map((a) => (
                      <li key={a}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8562A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA strip */}
              <div className="msv-detail-cta">
                <div className="msv-detail-cta-inner">
                  <div>
                    <p className="msv-detail-cta-text">Need guidance? Consult with Pandit Vikram Bhai Joshi today.</p>
                  </div>
                  <div className="msv-detail-cta-actions">
                    <a href="tel:+919737168423" className="msv-cta-btn msv-cta-btn--call">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      Call Now
                    </a>
                    <a href="https://wa.me/919737168423" target="_blank" rel="noopener noreferrer" className="msv-cta-btn msv-cta-btn--wa">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Header ── */
        .msv-header-bar {
          position: relative;
          background: linear-gradient(180deg, var(--bg-pale-yellow) 0%, var(--bg-cream) 100%);
          padding: 40px 32px;
        }
        .msv-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .msv-page-title {
          font-family: var(--font-display);
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }
        .msv-breadcrumb {
          font-family: var(--font-ui);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .msv-breadcrumb a {
          color: var(--gold-warm);
          text-decoration: none;
          transition: color 0.2s;
        }
        .msv-breadcrumb a:hover { color: var(--gold-glow); }
        .msv-breadcrumb-sep { color: var(--text-muted); font-size: 1rem; }
        .msv-breadcrumb-current { color: var(--text-muted); }
        .msv-header-decor {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 15%, rgba(232,86,42,0.2) 50%, transparent 85%);
        }

        /* ── Body ── */
        .msv-body {
          background: linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-void) 6%, var(--bg-void) 92%, var(--bg-white) 100%);
          padding: 48px 32px 80px;
        }
        .msv-wrap {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Search Row ── */
        .msv-search-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }
        .msv-search {
          position: relative;
          flex: 1;
          max-width: 420px;
        }
        .msv-search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }
        .msv-search-input {
          width: 100%;
          padding: 13px 42px 13px 44px;
          border: 1px solid var(--card-border);
          background: var(--card-bg);
          font-family: var(--font-ui);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-primary);
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .msv-search-input::placeholder {
          color: var(--text-muted);
          font-weight: 500;
        }
        .msv-search-input:focus {
          border-color: rgba(232,86,42,0.4);
          box-shadow: 0 0 0 3px rgba(232,86,42,0.08);
        }
        .msv-search-clear {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(232,86,42,0.1);
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--gold-warm);
          transition: background 0.2s;
        }
        .msv-search-clear:hover {
          background: rgba(232,86,42,0.2);
        }
        .msv-result-count {
          font-family: var(--font-ui);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }

        /* ── Cards Grid ── */
        .msv-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 48px;
        }
        .msv-no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 48px 20px;
          font-family: var(--font-ui);
          font-size: 0.85rem;
          color: var(--text-muted);
          letter-spacing: 0.04em;
        }

        /* ── Card ── */
        .msv-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          padding: 22px 20px 18px 22px;
          overflow: hidden;
          cursor: pointer;
          text-align: left;
          transition: transform 0.4s cubic-bezier(0.23,1,0.32,1),
                      box-shadow 0.4s cubic-bezier(0.23,1,0.32,1),
                      border-color 0.35s ease;
          animation: msvCardIn 0.5s ease both;
        }
        .msv-card:hover {
          transform: translateY(-4px);
          border-color: rgba(232,86,42,0.3);
          box-shadow:
            0 14px 36px rgba(0,0,0,0.07),
            0 0 0 1px rgba(232,86,42,0.12),
            0 0 32px rgba(232,86,42,0.04);
        }
        .msv-card--active {
          background: var(--text-primary) !important;
          border-color: var(--text-primary) !important;
          transform: translateY(-2px);
          box-shadow:
            0 10px 32px rgba(0,0,0,0.12),
            0 0 0 1px rgba(232,86,42,0.2);
        }

        /* Fire stripe */
        .msv-card-stripe {
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
          opacity: 0.25;
          transition: opacity 0.35s ease, width 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s ease;
        }
        .msv-card:hover .msv-card-stripe {
          opacity: 1;
          width: 4px;
          box-shadow: 3px 0 18px rgba(232,86,42,0.2);
        }
        .msv-card--active .msv-card-stripe {
          opacity: 1;
          width: 4px;
          background: linear-gradient(180deg, var(--gold-glow), #F59E3F);
          box-shadow: 3px 0 20px rgba(232,86,42,0.3);
        }

        /* Ghost number */
        .msv-card-ghost {
          position: absolute;
          top: -6px; right: 4px;
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          color: rgba(232,86,42,0.04);
          pointer-events: none;
          user-select: none;
          transition: transform 0.45s cubic-bezier(0.23,1,0.32,1), color 0.35s ease;
        }
        .msv-card:hover .msv-card-ghost {
          transform: translateY(-4px);
          color: rgba(232,86,42,0.07);
        }
        .msv-card--active .msv-card-ghost {
          color: rgba(255,255,255,0.06);
          transform: translateY(-4px);
        }

        /* Card body */
        .msv-card-body {
          position: relative;
          z-index: 1;
        }
        .msv-card-num {
          display: block;
          font-family: var(--font-ui);
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold-warm);
          opacity: 0.55;
          margin-bottom: 6px;
          transition: opacity 0.3s, color 0.3s;
        }
        .msv-card:hover .msv-card-num { opacity: 1; }
        .msv-card--active .msv-card-num {
          color: var(--gold-glow);
          opacity: 1;
        }
        .msv-card-title {
          font-family: var(--font-display);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--text-primary);
          line-height: 1.35;
          transition: color 0.3s;
        }
        .msv-card:hover .msv-card-title {
          color: var(--gold-warm);
        }
        .msv-card--active .msv-card-title {
          color: #fff;
        }

        /* Arrow indicator */
        .msv-card-arrow {
          position: absolute;
          bottom: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold-warm);
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .msv-card:hover .msv-card-arrow {
          opacity: 0.6;
          transform: translateX(0);
        }
        .msv-card--active .msv-card-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--gold-glow);
        }

        /* Corner deco */
        .msv-card-corner {
          position: absolute;
          bottom: 0; right: 0;
          width: 20px; height: 20px;
          border-bottom: 1px solid rgba(232,86,42,0.12);
          border-right: 1px solid rgba(232,86,42,0.12);
          transition: border-color 0.35s ease, width 0.35s ease, height 0.35s ease;
        }
        .msv-card:hover .msv-card-corner {
          width: 28px; height: 28px;
          border-color: rgba(232,86,42,0.35);
        }
        .msv-card--active .msv-card-corner {
          width: 28px; height: 28px;
          border-color: rgba(255,255,255,0.15);
        }

        @keyframes msvCardIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Divider ── */
        .msv-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        .msv-divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(232,86,42,0.2), transparent);
        }
        .msv-divider-label {
          font-family: var(--font-ui);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          white-space: nowrap;
        }

        /* ── Detail ── */
        .msv-detail {
          max-width: 900px;
          margin: 0 auto;
        }
        .msv-service {
          scroll-margin-top: 100px;
        }

        /* Banner */
        .msv-banner {
          position: relative;
          aspect-ratio: 2.4/1;
          overflow: hidden;
          margin-bottom: 36px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        .msv-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(46,26,26,0.85) 0%, rgba(46,26,26,0.4) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 36px;
        }
        .msv-banner-num {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 900;
          color: rgba(255,255,255,0.07);
          line-height: 1;
          position: absolute;
          top: 20px;
          right: 28px;
        }
        .msv-banner-title {
          font-family: var(--font-display);
          font-size: clamp(1.3rem, 3vw, 2rem);
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #fff;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        /* Text blocks */
        .msv-text-block {
          margin-bottom: 32px;
        }
        .msv-section-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-primary);
          margin-bottom: 20px;
        }
        .msv-heading-bar {
          width: 36px;
          height: 3px;
          background: linear-gradient(90deg, var(--gold-warm), var(--gold-glow));
          flex-shrink: 0;
        }
        .msv-para {
          font-family: var(--font-body);
          font-size: clamp(0.94rem, 1.5vw, 1.08rem);
          color: var(--text-secondary);
          line-height: 1.9;
          margin-bottom: 14px;
        }
        .msv-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 8px;
        }
        .msv-sub-heading {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--text-primary);
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(232,86,42,0.15);
        }

        /* Bullet lists — single column inside each grid cell */
        .msv-bullet-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .msv-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px 14px;
          background: rgba(232,86,42,0.03);
          border: 1px solid rgba(232,86,42,0.1);
          font-family: var(--font-ui);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: var(--text-secondary);
          line-height: 1.4;
          transition: all 0.25s;
        }
        .msv-bullet-list li:hover {
          background: rgba(232,86,42,0.06);
          border-color: rgba(232,86,42,0.2);
        }
        .msv-bullet-icon {
          color: var(--gold-warm);
          font-size: 0.7rem;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .msv-bullet-list--alt li svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Detail CTA */
        .msv-detail-cta {
          margin-top: 36px;
          padding: 0;
        }
        .msv-detail-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 24px 28px;
          background: var(--text-primary);
          border: 1px solid rgba(232,86,42,0.15);
          position: relative;
          overflow: hidden;
        }
        .msv-detail-cta-inner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--gold-warm), var(--gold-glow));
        }
        .msv-detail-cta-text {
          font-family: var(--font-body);
          font-size: 1rem;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
          margin: 0;
        }
        .msv-detail-cta-actions {
          display: flex;
          gap: 10px;
          flex-shrink: 0;
        }
        .msv-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          font-family: var(--font-ui);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          white-space: nowrap;
        }
        .msv-cta-btn--call {
          background: var(--gold-warm);
          color: #fff;
          border: 1px solid var(--gold-warm);
        }
        .msv-cta-btn--call:hover {
          background: var(--gold-glow);
          border-color: var(--gold-glow);
          box-shadow: 0 4px 16px rgba(232,86,42,0.35);
        }
        .msv-cta-btn--wa {
          background: transparent;
          color: #25D366;
          border: 1px solid rgba(37,211,102,0.4);
        }
        .msv-cta-btn--wa:hover {
          background: rgba(37,211,102,0.1);
          border-color: #25D366;
          box-shadow: 0 4px 16px rgba(37,211,102,0.2);
        }

        /* Enter animation */
        .msv-service--enter {
          animation: msvFadeIn 0.4s ease both;
        }
        @keyframes msvFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .msv-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 800px) {
          .msv-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .msv-detail-grid { grid-template-columns: 1fr; gap: 16px; }
          .msv-detail-cta-inner {
            flex-direction: column;
            text-align: center;
            gap: 16px;
          }
        }
        @media (max-width: 768px) {
          .msv-header-inner {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          .msv-body { padding: 32px 20px 64px; }
          .msv-search-row { flex-direction: column; align-items: stretch; gap: 10px; }
          .msv-search { max-width: 100%; }
          .msv-result-count { text-align: center; }
          .msv-banner-overlay { padding: 20px; }
          .msv-banner-num { font-size: 2.5rem; top: 12px; right: 16px; }
        }
        @media (max-width: 520px) {
          .msv-grid { grid-template-columns: 1fr; }
          .msv-card { padding: 18px 16px 16px 20px; }
          .msv-card-ghost { font-size: 3.2rem; }
        }
      `}</style>
    </>
  );
}
