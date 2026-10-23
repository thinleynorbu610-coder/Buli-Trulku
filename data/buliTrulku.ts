/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  THE LIVING LINEAGE OF BULI TRULKU RINPOCHE — content
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything the site says lives in this file. To change a sentence, edit it
 *  here. To add a photograph, drop the file at the path shown in `image` / `src`
 *  (inside /public) — or change the path. Missing files automatically show the
 *  "Photograph coming soon" placeholder.
 *
 *  Lines marked  // VERIFY  preserve the supplied wording but contain a name,
 *  spelling or number that should be checked with the lineage before launch.
 *  They are also collected in README.md.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type {
  GalleryItem,
  Institution,
  LifeEvent,
  LineageHolder,
  Place,
  Teacher,
} from "./types";

/* ───────────────────────────── Site ───────────────────────────── */

export const site = {
  name: "Kyabje Buli Trulku Rinpoche",
  shortName: "BULI TRULKU",
  tibetanName: "སྐྱབས་རྗེ་བྷུ་ལི་སྤྲུལ་སྐུ་རིན་པོ་ཆེ།",
  concept: "The Living Lineage of Buli Trulku Rinpoche",
  subtitle: "An unbroken journey of compassion, wisdom and devotion",
  title: "Kyabje Buli Trulku Rinpoche | Life, Lineage & Legacy",
  description:
    "Explore the life, lineage, spiritual journey, teachers, monasteries and enduring legacy of Kyabje Buli Trulku Rinpoche.",
  footerLine: "Preserving the story of a living lineage.",
  copyright: "© Buli Trulku Rinpoche Digital Biography",
  disclaimer:
    "Prepared from the biography supplied by the site's author. This is not an official statement of any monastery or institution.",
};

export const images = {
  hero: "/images/hero/prayer-flags.png",
  present: "/images/rinpoche/portrait-main.jpg",
  recognition: "/images/rinpoche/enthronement-1960.jpg",
  age16: "/images/rinpoche/age-16.jpg",
  dudjom: "/images/teachers/kyabje-dudjom-rinpoche.jpg",
  retreat: "/images/hero/retreat-mountains.jpg",
  yongphula: "/images/places/yongphula.jpg",
  zangthi: "/images/places/zangthi.jpg",
  shedra: "/images/places/droduel-tshangchen-shedra.jpg",
  foundationLogo: "/images/foundation/logo.png",
  foundationMonastery: "/images/foundation/monastery.jpg",
  foundationLaunch: "/images/foundation/launch-rinpoche.jpg",
  foundationKhenpo: "/images/foundation/khenpo-rinpoche.jpg",
  final: "/images/rinpoche/final-portrait.png",
};

export const nav = [
  { key: "story", label: "Story", href: "/#story", blurb: "The biography, told from the beginning." },
  { key: "lineage", label: "Lineage", href: "/lineage", blurb: "Eleven lineage holders, from Phagpa Magapa to the present." },
  { key: "timeline", label: "Timeline", href: "/timeline", blurb: "The milestones of a life, from 1949 to today." },
  { key: "teachers", label: "Teachers", href: "/teachers", blurb: "The masters named in the biography, and what they gave." },
  { key: "places", label: "Places", href: "/places", blurb: "Monasteries, retreat places and sacred sites." },
  { key: "foundation", label: "Foundation", href: "/foundation", blurb: "The Duejom Terling Shedra Foundation, est. 2014." },
  { key: "gallery", label: "Gallery", href: "/gallery", blurb: "Portraits, places and ceremonies in nine collections." },
  { key: "legacy", label: "Legacy", href: "/legacy", blurb: "The shedra, thirteen institutions, and the journey ahead." },
];

/* ───────────────────────── Introduction ───────────────────────── */

export const intro = {
  eyebrow: "The tradition of reincarnate teachers",
  heading: "The Journey of a Lineage",
  paragraphs: [
    "According to the Buddhist tradition, from the time of the historical Buddha to the present day there has been an unbroken succession of great beings who achieved enlightenment and dedicated themselves to guiding others on the path.",
    "In Tibetan Buddhism there is a widespread tradition of recognizing the reincarnations of highly realized teachers. Such incarnations are known as Trulkus. They are traditionally understood as taking rebirth through compassion — to benefit beings and to continue the activities of their previous incarnations.",
    "According to the lineage account, Kyabje Buli Trulku Rinpoche is one of the reincarnations in such a lineage. The chapters that follow walk through that account, from the earliest lineage holder named in the biography to the present Buli Trulku.",
  ],
  note: "Religious beliefs on this site are presented respectfully as the traditional Buddhist understanding and the lineage's own account.",
};

/* ───────────────────────── The lineage ────────────────────────── */

export const lineage: LineageHolder[] = [
  {
    id: "phagpa-magapa",
    number: 1,
    name: "Phagpa Magapa",
    title: "Foremost lineage holder",
    label: "The beginning of the lineage",
    story: [
      "According to the lineage account, Phagpa Magapa was the foremost lineage holder of Kyabje Buli Trulku.",
      "He was one of the ten close disciples of the Buddha Gautama and was known for his clairvoyant vision.",
    ],
    facts: [
      { label: "Role", value: "Foremost lineage holder" },
      { label: "Known for", value: "Clairvoyant vision" },
    ],
    layout: "portrait",
    symbol: "lotus",
    image: "/images/lineage/01-phagpa-magapa.webp",
    imageLabel: "Phagpa Magapa",
    imageAlt: "Traditional painting of Phagpa Magapa seated with a staff and alms bowl, with his name inscribed in Tibetan",
    imageCaption: "࿑ འཕགས་པ་མ་འགགས་པ། ༼ ༡ ༽",
    summary: "One of the ten close disciples of the Buddha Gautama.",
  },
  {
    id: "tsang-legdup",
    number: 2,
    name: "Tsang Legdup",
    label: "Reborn in central Tibet",
    place: "Tsang Nemo, Uetsang Ruzhi — central Tibet",
    story: [
      "After the death of Phagpa Magapa, he was traditionally understood to have been reborn as Tsang Legdup.",
      "He was born at Tsang Nemo of Uetsang Ruzhi in central Tibet.",
    ],
    facts: [
      { label: "Birthplace", value: "Tsang Nemo of Uetsang Ruzhi" },
      { label: "Region", value: "Central Tibet" },
    ],
    layout: "portrait",
    symbol: "mountain",
    image: "/images/lineage/02-tsang-legdup.webp",
    imageLabel: "Tsang Legdup",
    imageAlt: "Traditional painting of Tsang Legdup seated, one hand raised, with the name inscribed in Tibetan",
    imageCaption: "࿑ གཙང་ལེགས་གྲུབ། ༼ ༢ ༽",
    summary: "Traditionally understood as the rebirth of Phagpa Magapa, born in central Tibet.",
  },
  {
    id: "yudra-nyingpo",
    number: 3,
    name: "Yudra Nyingpo",
    label: "Disciple of Guru Rinpoche",
    place: "Gyalmo Tsawarong",
    story: [
      "Yudra Nyingpo was the successor of Tsang Legdup. He was born in the region of Gyalmo Tsawarong.",
      "According to the lineage account, it was during this incarnation that Buli Rinpoche became one of the twenty-five heart disciples of Guru Rinpoche and the reincarnation of Legdrup of Tsang.", // VERIFY: "Legdrup" vs "Legdup" spelling
    ],
    facts: [
      { label: "Birthplace", value: "Region of Gyalmo Tsawarong" },
      { label: "Successor of", value: "Tsang Legdup" },
    ],
    highlight: "One of the twenty-five heart disciples of Guru Rinpoche",
    layout: "portrait",
    symbol: "wheel",
    image: "/images/lineage/03-yudra-nyingpo.webp",
    imageLabel: "Yudra Nyingpo",
    imageAlt: "Traditional painting of Yudra Nyingpo seated, holding a text, with his name inscribed in Tibetan",
    imageCaption: "࿑ རྒྱལ་མོ་གཡུ་སྒྲ་སྙིང་པོ། ༼ ༣ ༽",
    summary: "One of the twenty-five heart disciples of Guru Rinpoche.",
  },
  {
    id: "choeying-rangdrol",
    number: 4,
    name: "Choeying Rangdrol", // VERIFY: spelled "Choeing Rangdrol" elsewhere in the source
    title: "His Eminence",
    label: "From Tibet to Bumthang",
    place: "Lhodra, Tibet → Bumthang Chumey",
    story: [
      "His Eminence Choeying Rangdrol was recognized as one of the incarnations of Dorji Lingpa's son at Lhodra in Tibet.",
      "As prophesied by his father regarding his karmic activities in Bhutan, he travelled through Haa, Paro, Wangdue and Trongsa, and ultimately settled at Bumthang Chumey.",
      "He established Buli Lhuendrup Choeling Monastery and propagated the Dorling tradition.", // VERIFY: monastery name vs "Buli Wogmin Lhuendrup Choeling"
    ],
    facts: [
      { label: "Recognized at", value: "Lhodra, Tibet" },
      { label: "Established", value: "Buli Lhuendrup Choeling Monastery" },
      { label: "Tradition", value: "Dorling tradition" },
    ],
    journey: ["Tibet", "Haa", "Paro", "Wangdue", "Trongsa", "Bumthang"],
    layout: "portrait",
    symbol: "monastery",
    image: "/images/lineage/04-choeying-rangdrol.webp",
    imageLabel: "Choeying Rangdrol",
    imageAlt: "Traditional painting of His Eminence Choeying Rangdrol seated, with his name inscribed in Tibetan",
    imageCaption: "࿑ ཆོས་དབྱིངས་རང་གྲོལ། ༼ ༤ ༽",
    summary: "Travelled from Tibet to Bumthang and established Buli Lhuendrup Choeling Monastery.",
  },
  {
    id: "choing-lhuendup",
    number: 5,
    name: "Choing Lhuendup",
    label: "Reborn in Trongsa",
    place: "Kelai village, Trongsa — Mangde Tshozhi",
    story: [
      "After the death of Choeying Rangdrol, Buli Rinpoche was born at Kelai village in Trongsa, Mangde Tshozhi.",
      "He was known as Choing Lhuendup in this reincarnation.",
    ],
    layout: "portrait",
    symbol: "lamp",
    image: "/images/lineage/05-choing-lhuendup.webp",
    imageLabel: "Choing Lhuendup",
    imageAlt: "Traditional painting of Choing Lhuendup seated in meditation, with his name inscribed in Tibetan",
    imageCaption: "࿑ ཆོས་དབྱིངས་ལྷུན་གྲུབ། ༼ ༥ ༽",
    summary: "Born at Kelai village in Trongsa, Mangde Tshozhi.",
  },
  {
    id: "kencho-gyeltshen",
    number: 6,
    name: "Kencho Gyeltshen",
    label: "Reborn in Trongsa, again",
    place: "Chendebji, Trongsa",
    story: [
      "He was again born in Trongsa, at Chendebji, and was known as Kencho Gyeltshen in this reincarnation.",
    ],
    facts: [
      { label: "Location", value: "Chendebji, Trongsa" },
      { label: "Incarnation", value: "Kencho Gyeltshen" },
    ],
    layout: "portrait",
    symbol: "knot",
    image: "/images/lineage/06-kencho-gyeltshen.webp",
    imageLabel: "Kencho Gyeltshen",
    imageAlt: "Traditional painting of Kencho Gyeltshen seated on a lotus, with his name inscribed in Tibetan",
    imageCaption: "࿑ དཀོན་མཆོག་རྒྱལ་མཚན། ༼ ༦ ༽",
    summary: "Born at Chendebji in Trongsa.",
  },
  {
    id: "tenzin-namgyel",
    number: 7,
    name: "Tenzin Namgyel",
    label: "Into the Bumthang valley",
    place: "Gyeltsa, Bumthang, Bhutan",
    story: [
      "He was then incarnated as Tenzin Namgyel at Gyeltsa in Bumthang, Bhutan.",
    ],
    layout: "portrait",
    symbol: "mountain",
    image: "/images/lineage/07-tenzin-namgyel.webp",
    imageLabel: "Tenzin Namgyel",
    imageAlt: "Traditional painting of Tenzin Namgyel seated, holding a vajra and a vase",
    imageCaption: "࿑ བསྟན་འཛིན་རྣམ་རྒྱལ། ༼ ༧ ༽",
    summary: "Incarnated at Gyeltsa in Bumthang, Bhutan.",
  },
  {
    id: "sherub-jungney",
    number: 8,
    name: "Sherub Jungney",
    label: "Reborn in Kela",
    place: "Kela",
    story: [
      "After the death of Tenzin Namgyel, Buli Trulku was reborn in Kela.",
      "In that reincarnation, he was called Sherub Jungney.",
    ],
    layout: "portrait",
    symbol: "manuscript",
    image: "/images/lineage/08-sherub-jungney.webp",
    imageLabel: "Sherub Jungney",
    imageAlt: "Portrait of Sherub Jungney",
    imageCaption: "࿑ ཤེས་རབ་འབྱུངས་གནས། ༼ ༨ ༽",
    summary: "Reborn in Kela after Tenzin Namgyel.",
  },
  {
    id: "shacha-namgyel",
    number: 9,
    name: "Shacha Namgyel",
    label: "Kela, a second time",
    place: "Kela",
    story: [
      "It was the second time that the Rinpoche was born in Kela.",
      "In that life, the Rinpoche's name was Shacha Namgyel.",
    ],
    layout: "portrait",
    symbol: "lotus",
    image: "/images/lineage/09-shacha-namgyel.webp",
    imageLabel: "Shacha Namgyel",
    imageAlt: "Traditional painting of Shacha Namgyel seated, with long hair tied in a topknot, holding a bowl",
    imageCaption: "࿑ ཤཱཀྱ་རྣམ་རྒྱལ། ༼ ༩ ༽",
    summary: "The second time the Rinpoche was born in Kela.",
  },
  {
    id: "khachap-dorji",
    number: 10,
    name: "Khachap Dorji",
    label: "The last chapter before the present",
    place: "Bumthang Chummey — Buli Wogmin Lhuendrup Choeling",
    story: [
      "The ninth reincarnation of Buli Trulku was born in Bumthang Chummey, Bhutan, at Buli Wogmin Lhuendrup Choeling.", // VERIFY: "ninth reincarnation" in the source vs. chapter number 10
    ],
    parents: {
      father:
        "Yap Choejey Pema Tashi, the Dungkhar Dunjud",
      mother:
        "Yum Kuenzang Choden, from Peling Dungjud Tamzhing Choeje",
    },
    layout: "portrait",
    symbol: "wheel",
    image: "/images/lineage/10-khachap-dorji.webp",
    imageLabel: "Khachap Dorji",
    imageAlt: "Portrait of Khachap Dorji",
    imageCaption: "࿑ བྷུ་ལི་མཁའ་ཁྱབ་རྡོ་རྗེ། ༼ ༡༠ ༽",
    summary: "Born at Buli Wogmin Lhuendrup Choeling in Bumthang Chummey.",
  },
  {
    id: "present-buli-trulku",
    number: 11,
    name: "The Present Buli Trulku",
    title: "His Eminence Lama Sonam Loday",
    label: "The present incarnation",
    place: "Kurtoe Yogpaling Yoesel Choeling Lhakhang",
    story: [],
    layout: "portrait",
    symbol: "lotus",
    image: "/images/rinpoche/portrait-main.jpg",
    imageLabel: "His Eminence Lama Sonam Loday",
    imageAlt: "Portrait of His Eminence Lama Sonam Loday, the present Buli Trulku",
    summary: "His Eminence Lama Sonam Loday, born in 1949.",
  },
];

/* ───────────────── Chapter 11 — the present Buli Trulku ───────────────── */

export const present = {
  name: "The Present Buli Trulku",
  honorific: "His Eminence Lama Sonam Loday",
  born: "15th day of the 10th month of the Bhutanese calendar, 1949",
  birthplace: "Kurtoe Yogpaling Yoesel Choeling Lhakhang",
  biography: [
    "His Eminence Lama Sonam Loday was born with auspicious signs at Kurtoe Yogpaling Yoesel Choeling Lakhang in 1949.",
    "His father was Lopen Thinley, a descendant of Dungsam Yurung Khoche from Lemi, Trashigang. His mother was Ani Damchoe Zangmo from Drepong, Mongar.",
  ],
};

export const earlyYears = {
  heading: "The Early Years",
  subtitle: "A journey of learning begins",
  lead: "At the age of six, Buli Trulku travelled to Kurtoe Phuning Goenpa.",
  steps: [
    {
      title: "Writing and Rigney",
      from: ["Lam Tshering of Mongar Dratshang", "Lopen Jangchuk of Tagchu Goenpa"],
      received: ["Writing", "Rigney"],
    },
    {
      title: "Longchen Nyingthik, Choga Chaglen & Torzog",
      from: [
        "Lam Kezang of Mugpa Khar, Yoeselchoeling Monastery", // VERIFY
        "Lam Yangmarethroed",
      ],
      received: ["Longchen Nyingthik Wang Lung Thri", "Choga Chaglen", "Torzog"],
    },
    {
      title: "Tshoklay Rinchen Threngwa",
      from: ["Wangthang Rinpoche"],
      received: ["Tshoklay Rinchen Threngwa"],
    },
    {
      title: "Chejog Thri Lung",
      from: ["Choing Rinpoche"],
      received: ["Chejog Thri Lung"],
    },
  ],
};

export const recognition = {
  year: "1960",
  age: "12",
  heading: "Recognized and Enthroned",
  text: "In 1960, at the age of twelve, he was recognized and enthroned as the incarnation of Buli Trulku at Dechen Norbu Sergi Dramthang Goenpa.",
  place: "Dechen Norbu Sergi Dramthang Goenpa",
  conductedBy: [
    { name: "Lam Sonam Zangpo", image: "/images/teachers/lam-sonam-zangpo.jpg" },
    { name: "Dungsey Thinley Norbu Rinpoche", image: "/images/teachers/dungsey-thinley-norbu-rinpoche.jpg" },
    { name: "Kham Golo Trulku", image: "/images/teachers/kham-golo-trulku.jpg" },
    { name: "Jadrelwa Jangchup Dorji", image: "/images/teachers/jadrelwa-jangchup-dorji.jpg" },
  ],
};

export const dudjom = {
  year: "1964",
  age: "16",
  heading: "Destined by Past Karma",
  text: [
    "In 1964, at the age of sixteen, Buli Trulku, with the help of Lam Longdrol, met Kyabje Dudjom Rinpoche at Kalimpong in India, as destined by his past karma.",
    "He received complete initiations on the Tersar tradition from His Holiness.",
    "Kyabje Dudjom Rinpoche subsequently named him Longchen Gyepa, and later Sonam Loday.",
  ],
  names: ["Longchen Gyepa", "Sonam Loday"],
  path: ["Buli Trulku", "Lam Longdrol", "Kalimpong", "Kyabje Dudjom Rinpoche"],
};

export const lamaKarpo = {
  heading: "Under the Guidance of Lama Karpo",
  text: [
    "His Eminence was instructed to stay under the guidance of Lama Karpo of Yongphula, Tashigang, whom Kyabje Dudjom Rinpoche referred to as his lama.",
    "From Lama Karpo, His Eminence received Wang, Lung, Thri and Menngag on TsaSum Terchoe and Dzogchen teachings.",
  ],
  received: ["Wang", "Lung", "Thri", "Menngag"],
  on: "TsaSum Terchoe and Dzogchen teachings",
};

export const retreat = {
  heading: "Years of Retreat",
  intro:
    "The biography names these places in connection with His Eminence's years of retreat.",
  // Source: "retreat at Phuningla at Aja, Singye Dzong and Drejong" — three places
  places: [
    { name: "Phuningla, Aja" },
    { name: "Singye Dzong" },
    { name: "Drejong" },
  ],
  note: "Further details of the retreat years will be added once verified information is available.",
};

export const yongphula = {
  heading: "Yongphula Thegchok Darjey Goenpa",
  text: [
    "His Eminence established Yongphula Thegchok Darjey Goenpa, and has many disciples.",
  ],
  // VERIFY: location inferred from "Lama Karpo of Yongphula, Tashigang"
  location: "Yongphula, Tashigang",
};

export const zangthi = {
  year: "1983",
  heading: "The Journey to Zangthi",
  text: [
    "In 1983, he moved to Zangthi according to the instruction of his root teacher Lama Karpo and following repeated requests from the people of Shingkhar Lauri.",
    "He established Kinga Jigdrel Singye Chholing Monastery at Zangthi, Lauri Gewog, under Samdrup Jongkhar District, Bhutan.",
  ],
  monastery: "Kinga Jigdrel Singye Chholing Monastery",
  hierarchy: ["Bhutan", "Samdrup Jongkhar District", "Lauri Gewog", "Zangthi"],
};

export const shedra = {
  year: "2005",
  heading: "The Dharma Continues",
  text: "In 2005, he established Droduel Tshangchen Shedra, coinciding with the auspicious day of the First Sermon of Lord Buddha.",
  enrollment: 60,
  enrollmentLabel: "monks and nuns in the initial enrollment",
};

export const legacyStats = {
  heading: "The Living Legacy",
  intro:
    "Today, His Eminence has thirteen institutions and meditation centers, including two in Arunachal Pradesh, India.",
  stats: [
    { value: 13, suffix: "", label: "Institutions & Meditation Centers", note: "including two in Arunachal Pradesh, India" },
    { value: 300, suffix: "+", label: "Practitioners Completed Three-Year Retreat", note: "Tshampas, to date" },
    { value: 50, suffix: "", label: "Practitioners Currently in Meditation", note: "approximately" },
  ],
};

export const foundation = {
  date: "21 November 2014",
  heading: "An Enduring Foundation",
  name: "Duejom Terling Shedra Foundation",
  text: [
    "On 21 November 2014, Buli Trulku established the non-profit organization Duejom Terling Shedra Foundation.",
    "The foundation aims to help uphold the light of Buddha Dharma and support monks, nuns and practitioners.",
  ],
};

/* ──────────────────────── Foundation page ──────────────────────── */
// Source: the foundation's own announcement, "Launching of Foundation".
// It spells the name "Dudjom Terling Shedra Foundation (DTSF)".  // VERIFY spelling

export const foundationPage = {
  launch: {
    heading: "Launching of the Foundation",
    place:
      "Zangtho Pelri, Tshothang; Zangthi, Lauri Geog, Jomotsangkha Dungkhag, Samdrup Jongkhar Dzongkhag",
    text: [
      "Duejom Terling Shedra Foundation was launched by Venerable Buli Trulku on 21 November 2014 at Zangtho Pelri, Tshothang; Zangthi, Lauri Geog, Jomotsangkha Dungkhag under Samdrup Jongkhar Dzongkhag.",
      "The foundation is initiated by H.E. Buli Trulku, Lama Sonam Loday, with collaborative effort from Khenpo, disciples, sponsors and patrons as per the Bhutan Religious Act, 2010. It is a non-profitable organization which will support and enhance the Buddhist teaching both within the country and abroad. It is also to extend the wisdom and compassion of Buddha as widely as possible for the benefit of all sentient beings.",
    ],
  },
  vision:
    "Duejom Terling Shedra Foundation envisions to become an independent religious organisation that is dedicated to uphold the light of Buddha Dharma until the end of the worldly existence.",
  mission:
    "The foundation is committed to ensuring cohesion, affinity and sustainability of religious institutions and centres established by or under the refuge of His Eminence Buli Trulku Rinpoche in pursuit of the common goal of attaining peace and harmony in the world.",
  objectives: [
    "Ensure the sustainability of various religious institutions and meditation centres established by His Eminence, by providing the necessary resources, capital and manpower.",
    "Provide basic needs to monks, nuns and practitioners for their study, practice and retreat.",
    "Provide assistance to perform religious activities for the welfare of communities, the country and the world as a whole.",
    "Organize the annual Moenlam Chenmo, Dorsem Drupchen, Tshemar Soelchoe Bum and Purpai Tordok.",
    "Organize Wang Lung Thri Sum for the benefit of the general public and devotees.",
    "Raise awareness among people of the advantages of following the spiritual path.",
    "Emphasize activities that enhance the conservation of the environment and the promotion of Gross National Happiness / Global Happiness.",
  ],
  membership: [
    "On this particular day, Rinpoche and Khenpo registered as members of the DTSF, followed by more than 300 people from all parts of the country who submitted their names to become registered members.",
    "For further details, visit the foundation's Facebook page, “Duejom Terling Shedra Foundation”, where the terms and conditions and the membership criteria are also available.",
  ],
};

export const finalMessage = {
  heading: "The Journey Continues",
  // Original closing text written for this website — not a quotation.
  text: [
    "The story of a spiritual lineage is not only a record of the past. In the tradition's understanding it is a living stream, carried forward in practice, in teaching, in compassion and in service.",
    "From the earliest lineage holder named in the account, through the incarnations that followed, to the monasteries, retreats, shedras and foundation of today — the same aim continues: to uphold the Dharma and to benefit those who walk the path.",
    "This website records one part of that story. The journey it describes goes on, wherever practitioners study, meditate and serve.",
  ],
  honorific: "Kyabje Buli Trulku Rinpoche",
  name: "Lama Sonam Loday",
};

/* ──────────────────────── Institutions ───────────────────────── */

/** Only the institutions actually named in the biography. */
export const institutions: Institution[] = [
  {
    id: "yongphula",
    name: "Yongphula Thegchok Darjey Goenpa",
    location: "Yongphula, Tashigang", // VERIFY
    note: "Established by His Eminence; he has many disciples.",
  },
  {
    id: "zangthi",
    name: "Kinga Jigdrel Singye Chholing Monastery",
    year: "1983",
    location: "Zangthi, Lauri Gewog, Samdrup Jongkhar District",
    note: "Established following the instruction of Lama Karpo and the repeated requests of the people of Shingkhar Lauri.",
  },
  {
    id: "shedra",
    name: "Droduel Tshangchen Shedra",
    year: "2005",
    note: "Established on the auspicious day of the First Sermon of Lord Buddha, with 60 monks and nuns in the initial enrollment.",
  },
  {
    id: "foundation",
    name: "Duejom Terling Shedra Foundation",
    year: "2014",
    note: "A non-profit organization established on 21 November 2014.",
  },
];

/* ─────────────────────── Life timeline ───────────────────────── */

export const lifeEvents: LifeEvent[] = [
  {
    id: "birth",
    when: "1949",
    title: "Birth",
    description:
      "Born with auspicious signs at Kurtoe Yogpaling Yoesel Choeling Lhakhang, on the 15th day of the 10th month of the Bhutanese calendar.",
    anchor: "/#birth",
  },
  {
    id: "early-studies",
    when: "Age 6",
    title: "Early studies",
    description:
      "Travelled to Kurtoe Phuning Goenpa and began his studies, learning writing and Rigney.",
    anchor: "/#early-years",
  },
  {
    id: "enthronement",
    when: "1960",
    title: "Recognition and enthronement",
    description:
      "At the age of twelve, recognized and enthroned as the incarnation of Buli Trulku at Dechen Norbu Sergi Dramthang Goenpa.",
    anchor: "/#recognition",
  },
  {
    id: "dudjom",
    when: "1964",
    title: "Meeting Kyabje Dudjom Rinpoche",
    description:
      "At sixteen, met Kyabje Dudjom Rinpoche at Kalimpong, India, and received complete initiations on the Tersar tradition.",
    anchor: "/#dudjom-rinpoche",
  },
  {
    id: "zangthi",
    when: "1983",
    title: "Move to Zangthi",
    description:
      "Moved to Zangthi and established Kinga Jigdrel Singye Chholing Monastery in Lauri Gewog, Samdrup Jongkhar District.",
    anchor: "/#zangthi",
  },
  {
    id: "shedra",
    when: "2005",
    title: "Establishment of Droduel Tshangchen Shedra",
    description:
      "Established on the auspicious day of the First Sermon of Lord Buddha, with 60 monks and nuns.",
    anchor: "/legacy#shedra",
  },
  {
    id: "foundation",
    when: "2014",
    title: "Establishment of Duejom Terling Shedra Foundation",
    description:
      "On 21 November 2014, established the non-profit foundation to help uphold the light of Buddha Dharma.",
    anchor: "/foundation",
  },
  {
    id: "present",
    when: "Present",
    title: "Thirteen institutions and meditation centers",
    description:
      "Today, thirteen institutions and meditation centers, including two in Arunachal Pradesh, India.",
    anchor: "/legacy#legacy",
  },
];

/* ───────────────────────── Teachers ──────────────────────────── */

const T = (slug: string) => `/images/teachers/${slug}.jpg`;

export const teachers: Teacher[] = [
  {
    id: "lam-tshering",
    name: "Lam Tshering",
    from: "Mongar Dratshang",
    relationship: "Taught him writing and Rigney.",
    teachings: ["Writing", "Rigney"],
    period: "Early years",
    image: T("lam-tshering"),
  },
  {
    id: "lopen-jangchuk",
    name: "Lopen Jangchuk",
    from: "Tagchu Goenpa",
    relationship: "Taught him writing and Rigney.",
    teachings: ["Writing", "Rigney"],
    period: "Early years",
    image: T("lopen-jangchuk"),
  },
  {
    id: "lam-kezang",
    name: "Lam Kezang",
    from: "Mugpa Khar, Yoeselchoeling Monastery", // VERIFY
    relationship:
      "Gave him Longchen Nyingthik Wang Lung Thri, Choga Chaglen and Torzog (together with Lam Yangmarethroed).",
    teachings: ["Longchen Nyingthik Wang Lung Thri", "Choga Chaglen", "Torzog"],
    period: "Early years",
    image: T("lam-kezang"),
  },
  {
    id: "lam-yangmarethroed",
    name: "Lam Yangmarethroed",
    relationship:
      "Gave him Longchen Nyingthik Wang Lung Thri, Choga Chaglen and Torzog (together with Lam Kezang).",
    teachings: ["Longchen Nyingthik Wang Lung Thri", "Choga Chaglen", "Torzog"],
    period: "Early years",
    image: T("lam-yangmarethroed"),
  },
  {
    id: "wangthang-rinpoche",
    name: "Wangthang Rinpoche",
    relationship: "Gave him Tshoklay Rinchen Threngwa.",
    teachings: ["Tshoklay Rinchen Threngwa"],
    period: "Early years",
    image: T("wangthang-rinpoche"),
  },
  {
    id: "choing-rinpoche",
    name: "Choing Rinpoche",
    relationship: "Gave him Chejog Thri Lung.",
    teachings: ["Chejog Thri Lung"],
    period: "Early years",
    image: T("choing-rinpoche"),
  },
  {
    id: "lam-sonam-zangpo",
    name: "Lam Sonam Zangpo",
    relationship:
      "Conducted his recognition and enthronement in 1960.",
    period: "Recognition",
    image: T("lam-sonam-zangpo"),
  },
  {
    id: "dungsey-thinley-norbu",
    name: "Dungsey Thinley Norbu Rinpoche",
    relationship:
      "Conducted his recognition and enthronement in 1960.",
    period: "Recognition",
    image: T("dungsey-thinley-norbu-rinpoche"),
  },
  {
    id: "kham-golo-trulku",
    name: "Kham Golo Trulku",
    relationship:
      "Conducted his recognition and enthronement in 1960.",
    period: "Recognition",
    image: T("kham-golo-trulku"),
  },
  {
    id: "jadrelwa-jangchup-dorji",
    name: "Jadrelwa Jangchup Dorji",
    relationship:
      "Conducted his recognition and enthronement in 1960.",
    period: "Recognition",
    image: T("jadrelwa-jangchup-dorji"),
  },
  {
    id: "lam-longdrol",
    name: "Lam Longdrol",
    relationship:
      "Helped him to meet Kyabje Dudjom Rinpoche at Kalimpong in 1964.",
    period: "Dudjom Rinpoche & Lama Karpo",
    image: T("lam-longdrol"),
  },
  {
    id: "kyabje-dudjom-rinpoche",
    name: "Kyabje Dudjom Rinpoche",
    from: "Met at Kalimpong, India",
    relationship:
      "Gave him complete initiations on the Tersar tradition, and subsequently named him Longchen Gyepa and later Sonam Loday.",
    teachings: ["Complete initiations on the Tersar tradition"],
    period: "Dudjom Rinpoche & Lama Karpo",
    image: images.dudjom,
  },
  {
    id: "lama-karpo",
    name: "Lama Karpo",
    from: "Yongphula, Tashigang",
    relationship:
      "His root teacher, under whose guidance he was instructed to stay. Kyabje Dudjom Rinpoche referred to Lama Karpo as his lama. Gave him Wang, Lung, Thri and Menngag on TsaSum Terchoe and Dzogchen teachings.",
    teachings: ["Wang", "Lung", "Thri", "Menngag"],
    period: "Dudjom Rinpoche & Lama Karpo",
    image: T("lama-karpo"),
  },
];

/* ───────────────────────── Places ────────────────────────────── */

const P = (slug: string) => `/images/places/${slug}.jpg`;

export const places: Place[] = [
  {
    id: "yoesel-choeling",
    name: "Kurtoe Yogpaling Yoesel Choeling Lhakhang",
    region: "Kurtoe",
    year: "1949",
    description: "The birthplace of His Eminence Lama Sonam Loday.",
    group: "Life & teachings",
    image: P("yoesel-choeling"),
  },
  {
    id: "phuning-goenpa",
    name: "Kurtoe Phuning Goenpa",
    region: "Kurtoe",
    year: "Age 6",
    description:
      "Where he travelled at the age of six and began his early studies.",
    group: "Life & teachings",
    image: P("phuning-goenpa"),
  },
  {
    id: "dramthang-goenpa",
    name: "Dechen Norbu Sergi Dramthang Goenpa",
    year: "1960",
    description:
      "The place of his recognition and enthronement as the incarnation of Buli Trulku.",
    group: "Life & teachings",
    image: P("dramthang-goenpa"),
  },
  {
    id: "kalimpong",
    name: "Kalimpong",
    region: "India",
    year: "1964",
    description:
      "Where he met Kyabje Dudjom Rinpoche and received complete initiations on the Tersar tradition.",
    group: "Life & teachings",
    image: P("kalimpong"),
  },
  {
    id: "yongphula",
    name: "Yongphula",
    region: "Tashigang", // VERIFY
    description:
      "Home of Lama Karpo, and the site of Yongphula Thegchok Darjey Goenpa, established by His Eminence.",
    group: "Life & teachings",
    image: images.yongphula,
  },
  {
    id: "zangthi",
    name: "Zangthi",
    region: "Lauri Gewog, Samdrup Jongkhar District",
    year: "1983",
    description:
      "Where he established Kinga Jigdrel Singye Chholing Monastery.",
    group: "Life & teachings",
    image: images.zangthi,
  },
  {
    id: "buli-wogmin",
    name: "Buli Wogmin Lhuendrup Choeling",
    region: "Bumthang Chummey",
    description:
      "The birthplace of Khachap Dorji, the incarnation immediately before the present Buli Trulku.",
    group: "Life & teachings",
    image: P("buli-wogmin-lhuendrup-choeling"),
  },
  {
    id: "shedra",
    name: "Droduel Tshangchen Shedra",
    year: "2005",
    description:
      "Established on the auspicious day of the First Sermon of Lord Buddha, with 60 monks and nuns.",
    group: "Life & teachings",
    image: images.shedra,
  },
  {
    id: "foundation",
    name: "Duejom Terling Shedra Foundation",
    year: "2014",
    description:
      "A non-profit organization established on 21 November 2014 to help uphold the light of Buddha Dharma.",
    group: "Life & teachings",
    image: P("duejom-terling-shedra-foundation"),
  },
  { id: "phuningla", name: "Phuningla", region: "Aja", description: "Named in the biography in connection with his years of retreat.", group: "Retreat places", image: P("phuningla") },
  { id: "singye-dzong", name: "Singye Dzong", description: "Named in the biography in connection with his years of retreat.", group: "Retreat places", image: P("singye-dzong") },
  { id: "drejong", name: "Drejong", description: "Named in the biography in connection with his years of retreat.", group: "Retreat places", image: P("drejong") },
];

/* ───────────────────────── Gallery ───────────────────────────── */

const G = (folder: string, n: number) => `/images/gallery/${folder}/${String(n).padStart(2, "0")}.jpg`;

export const galleryCategories = [
  "Portraits",
  "Early Life",
  "Teachers",
  "Monasteries",
  "Retreats",
  "Teachings",
  "Ceremonies",
  "Foundation",
  "Historical Photographs",
] as const;

/**
 * Gallery slots. Titles are neutral on purpose — when you add a photograph,
 * set its real `title`, `caption`, `year`, `location` and `credit` here.
 * Add more items by copying a line; the file goes at `src` inside /public.
 */
export const gallery: GalleryItem[] = [
  { id: "portraits-1", category: "Portraits", title: "Portrait 01", src: G("portraits", 1) },
  { id: "portraits-2", category: "Portraits", title: "Portrait 02", src: G("portraits", 2) },
  { id: "portraits-3", category: "Portraits", title: "Portrait 03", src: G("portraits", 3) },
  { id: "early-life-1", category: "Early Life", title: "Early Life 01", src: G("early-life", 1) },
  { id: "early-life-2", category: "Early Life", title: "Early Life 02", src: G("early-life", 2) },
  { id: "teachers-1", category: "Teachers", title: "Teachers 01", src: G("teachers", 1) },
  { id: "teachers-2", category: "Teachers", title: "Teachers 02", src: G("teachers", 2) },
  { id: "teachers-3", category: "Teachers", title: "Teachers 03", src: G("teachers", 3) },
  { id: "monasteries-1", category: "Monasteries", title: "Monasteries 01", src: G("monasteries", 1) },
  { id: "monasteries-2", category: "Monasteries", title: "Monasteries 02", src: G("monasteries", 2) },
  { id: "monasteries-3", category: "Monasteries", title: "Monasteries 03", src: G("monasteries", 3) },
  { id: "retreats-1", category: "Retreats", title: "Retreats 01", src: G("retreats", 1) },
  { id: "retreats-2", category: "Retreats", title: "Retreats 02", src: G("retreats", 2) },
  { id: "teachings-1", category: "Teachings", title: "Teachings 01", src: G("teachings", 1) },
  { id: "teachings-2", category: "Teachings", title: "Teachings 02", src: G("teachings", 2) },
  { id: "ceremonies-1", category: "Ceremonies", title: "Ceremonies 01", src: G("ceremonies", 1) },
  { id: "ceremonies-2", category: "Ceremonies", title: "Ceremonies 02", src: G("ceremonies", 2) },
  { id: "foundation-1", category: "Foundation", title: "Foundation 01", src: G("foundation", 1) },
  { id: "foundation-2", category: "Foundation", title: "Foundation 02", src: G("foundation", 2) },
  { id: "historical-1", category: "Historical Photographs", title: "Historical 01", src: G("historical", 1) },
  { id: "historical-2", category: "Historical Photographs", title: "Historical 02", src: G("historical", 2) },
  { id: "historical-3", category: "Historical Photographs", title: "Historical 03", src: G("historical", 3) },
];
