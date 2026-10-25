import { HiUserGroup, HiShieldCheck, HiSparkles, HiGlobeAlt } from "react-icons/hi2";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  extendedBio: string;
}

// pillars data on the homepage
const pillars = [
    { num: "01", title: "Grassroots Support", body: "Mobilising local energy and building stronger community networks from the ground up." },
    { num: "02", title: "Shared Ideals", body: "Promoting the Party's ideals, programmes, and the vision of the Renewed Hope Agenda." },
    { num: "03", title: "Open Opportunity", body: "Helping communities access resources, empowerment pathways, and vital services." },
];

// programs data on the homepage
const programs = [
    { iconSrc: "/icons/education.svg", color: "#39a452", label: "Education", desc: "Scholarships, digital literacy, school infrastructure advocacy and mentorship." },
    { iconSrc: "/icons/health.svg", color: "#de232b", label: "Health & Wellbeing", desc: "Medical outreaches, health insurance enrollment and maternal & child health." },
    { iconSrc: "/icons/empowerment.svg", color: "#5cc3e6", label: "Economic Empowerment", desc: "Skills acquisition, micro-grants, cooperative formation and access to finance." },
    { iconSrc: "/icons/youth.svg", color: "#1e4544", label: "Youth & Women", desc: "Leadership pipelines, mentorship and targeted empowerment across communities." },
    { iconSrc: "/icons/infrastructure.svg", color: "#de232b", label: "Infrastructure", desc: "Community advocacy for water, power, roads, and public facilities." },
    { iconSrc: "/icons/civic.svg", color: "#39a452", label: "Civic Engagement", desc: "Voter education, town-hall dialogues and grassroots feedback loops." },
];


// wings static data
const wings = [
    {
        id: "health",
        title: "APC Cares Health Wing",
        introduction: "Better health, closer to home. The Health Wing brings care and health knowledge to communities that are often far from both.",
        programmes: [
            "Free medical outreaches, screenings, and eye and dental clinics",
            "Support for enrolment in health insurance schemes",
            "Maternal, newborn, and child health awareness",
            "Partnerships with primary healthcare centres and health professionals",
            "Health education on prevention, nutrition, sanitation, and wellbeing",
        ],
    },
    {
        id: "education",
        title: "APC Cares Education Wing",
        introduction: "Every child in school, every young mind given a chance.",
        programmes: [
            "Scholarships and bursaries for deserving students",
            "Advocacy for better school buildings and learning materials",
            "Digital literacy drives for students, teachers, and adults",
            "Mentorship for students and out-of-school youth",
            "Adult literacy and second-chance learning",
        ],
    },
    {
        id: "economic-empowerment",
        title: "APC Cares Economic Empowerment Wing",
        introduction: "From skills to income, from income to independence.",
        programmes: [
            "Skills acquisition and vocational training",
            "Micro-grants and start-up support for new businesses",
            "Cooperative formation for traders, artisans, and farmers",
            "Access to finance, including links to government intervention funds",
            "Financial literacy and business management training",
        ],
    },
    {
        id: "infrastructure",
        title: "APC Cares Infrastructure Wing",
        introduction: "The basics every community deserves: water, power, roads, and public facilities.",
        programmes: [
            "Community needs assessments to identify priority projects",
            "Advocacy to relevant government bodies through proper channels",
            "Monitoring of government and donor projects in communities",
            "Mobilising community self-help and partner-funded projects",
            "Maintenance awareness to protect public facilities",
        ],
    },
    {
        id: "security",
        title: "APC Cares Security Wing",
        introduction: "Safe communities are the foundation of every other good thing. The Security Wing consults and partners with communities and law enforcement agencies to strengthen community safety.",
        programmes: [
            "Community safety consultations and security needs assessments",
            "Partnerships with the Nigeria Police Force, NSCDC, and other lawful agencies",
            "Support for community policing and neighbourhood watch structures working within the law",
            "Early warning and reporting channels between residents and security agencies",
            "Safety awareness, conflict resolution, and peace-building dialogues",
            "Advocacy for street lighting and other safety infrastructure",
        ],
        note: "The Security Wing does not bear arms or carry out enforcement. It works only through lawful agencies and structures.",
    },
    {
        id: "youth",
        title: "APC Cares Youth Wing",
        introduction: "Equipping Nigeria's young people to lead.",
        programmes: [
            "Leadership and civic training for young people",
            "Mentorship linking youth with professionals and leaders",
            "Tech, creative, and digital skills programmes",
            "Job readiness, internships, and enterprise support",
            "Sports and cultural activities that build unity",
        ],
    },
    {
        id: "women",
        title: "APC Cares Women Wing",
        introduction: "When women thrive, families and communities thrive.",
        programmes: [
            "Women's economic empowerment and small business support",
            "Leadership and political participation training",
            "Support for widows and vulnerable women",
            "Awareness on women's health, rights, and safety",
            "Networks and mentorship for women in business and public life",
        ],
    },
    {
        id: "agriculture-food-security",
        title: "APC Cares Agriculture & Food Security Wing",
        introduction: "Feeding families, growing incomes.",
        programmes: [
            "Links for farmers to inputs, training, and extension services",
            "Support for farmer cooperatives and access to markets",
            "Awareness of government agricultural programmes",
            "Promotion of storage and processing to cut post-harvest losses",
            "Backyard and community farming for household food security",
        ],
    },
    {
        id: "civic-engagement",
        title: "APC Cares Civic Engagement Wing",
        introduction: "An informed citizen is an empowered citizen.",
        programmes: [
            "Voter education and citizen enlightenment",
            "Town hall meetings and community dialogues",
            "Feedback channels that carry grassroots views back to Party leadership",
            "Awareness of government programmes and how to access them",
        ],
    },
    {
        id: "partnerships-diaspora",
        title: "APC Cares Partnerships & Diaspora Wing",
        introduction: "Building the alliances that make lasting impact possible.",
        programmes: [
            "Partnerships with corporate sponsors and CSR programmes",
            "Relationships with philanthropic foundations and development partners",
            "Engagement of Nigerians in the diaspora to invest skills and resources at home",
            "Liaison with relevant government ministries, departments, and agencies",
        ],
    },
];


// our mandate static data
const pillarsDetail = [
  {
    iconSrc: "/icons/education.svg",
    color: "#39a452",
    title: "01. Education Access",
    short: "Scholarships, digital literacy, school advocacy & mentorship.",
    details:
      "Mobilizing community educational grants, supporting public school infrastructure improvements, and deploying youth digital literacy centers across local government areas.",
    action: "Target: 100,000 Students & Youth Supported",
  },
  {
    iconSrc: "/icons/health.svg",
    color: "#de232b",
    title: "02. Community Wellbeing",
    short: "Medical outreaches, health insurance enrollment & maternal health.",
    details:
      "Organizing rural medical clinics, facilitating state health insurance enrollment for vulnerable households, and expanding maternal and child wellness initiatives.",
    action: "Target: 500 Free Rural Health Outreaches",
  },
  {
    iconSrc: "/icons/empowerment.svg",
    color: "#5cc3e6",
    title: "03. Economic Empowerment",
    short: "Skills acquisition, micro-grants & cooperative formation.",
    details:
      "Providing vocational skills acquisition, cooperative formation assistance for artisans and market traders, and facilitating seed micro-grants for small enterprises.",
    action: "Target: ₦100M Seed Micro-Grant Allocation",
  },
  {
    iconSrc: "/icons/youth.svg",
    color: "#1e4544",
    title: "04. Human Development",
    short: "Leadership pipelines, female empowerment & mentorship.",
    details:
      "Creating structured leadership development pipelines for young political and civic leaders, while funding market women cooperatives across wards.",
    action: "Target: 36 State Leadership Academies",
  },
  {
    iconSrc: "/icons/infrastructure.svg",
    color: "#de232b",
    title: "05. Infrastructure Advocacy",
    short: "Community advocacy for water, power, roads & public facilities.",
    details:
      "Acting as a direct channel of communication between communities and government agencies to advocate for clean water boreholes, road repairs, and rural electrification.",
    action: "Target: 774 LGA Needs Assessment Audits",
  },
  {
    iconSrc: "/icons/civic.svg",
    color: "#39a452",
    title: "06. Civic Engagement",
    short: "Voter education, town-hall dialogues & grassroots feedback loops.",
    details:
      "Hosting regular ward town halls, promoting active voter education, and creating transparent feedback mechanisms connecting everyday citizens with party leadership.",
    action: "Target: Monthly Ward Town Halls",
  },
];

const frameworkSteps = [
  {
    step: "01",
    title: "National & Zonal Oversight",
    desc: "National Executive Committee aligns strategic directives with 6 geopolitical zonal hubs.",
  },
  {
    step: "02",
    title: "36 State Chapters",
    desc: "State Executive Directors coordinate inter-LGA deployment, government relations, and monitoring.",
  },
  {
    step: "03",
    title: "774 LGA Steering Teams",
    desc: "Local Government Area officers identify high-priority community needs and manage local volunteers.",
  },
  {
    step: "04",
    title: "8,809 Ward Champions",
    desc: "Grassroots ward leaders drive direct outreach, beneficiary verification, and town-hall feedback.",
  },
];


// the team members data
const teamMembersData:TeamMember[] = [
  {
    id: "bukunola-odusanwo",
    name: "Dr. Bukunola Odusanwo",
    role: "National Coordinator",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/bukunola_jurhle.jpg",
    extendedBio: `
    **Dr. Bukunola Odusanwo**, known widely as *Dr. Nola*, is the National Coordinator of APC CARES, dedicated to connecting Nigerian communities with resources, opportunities, and empowerment services. She brings to the role more than four decades of management experience, over thirty years of it in senior leadership, across the United States, the Middle East, and Africa, along with a lifelong conviction that institutions exist to serve the people who depend on them.

    Dr. Odusanwo began her management career in 1984 as a Management Trainee at Bankers Trust in New York and went on to lead programs across pharmaceutical, biotechnology, contract research, construction, and public-sector organizations. Her public-sector work is extensive. She established the Enterprise Project Management Office for the U.S. Department of Health and Human Services and led the creation of national program management offices for the Kingdom of Saudi Arabia's National Border Initiative, the State of Qatar, and the State of Maryland, building the governance, policy, and training structures those governments still rely on today. 
      
    As a turnaround executive, she has taken charge of high-visibility programs in crisis and closed them out with hundreds of millions of dollars in recovered savings.In healthcare and life sciences, she has directed global clinical operations for organizations including Parexel International and BIBI Clinical, leading teams of seventy or more across programs in oncology, rare disease, cell and gene therapy, neurology, diabetes, and infectious disease, including COVID-19, Ebola, MPOX, and HIV. Over a decade at Pristine Clinical, she delivered millions of dollars in savings for several drug development sponsors.
      
    Her commitment to accountability has always extended to ordinary citizens. During an early stint in Nigeria, she provided executive project management training to major organizations, state governments, and banking institutions. As a facility management services auditor, she has examined the management of residential estates in Lagos and recovered millions of naira on behalf of residents, work she continues today. Since relocating to Lagos, she has also contributed to renovation projects and provided project cost controls for construction projects. She hosts Dr. Nola, a podcast that examines trending Nigerian and global affairs from multiple perspectives, reflecting her belief in informed, open public dialogue.
      
    As National Coordinator, Dr. Odusanwo brings this same blend of governance discipline, fiscal stewardship, and community advocacy to APC CARES, with a focus on building a transparent, well-run organization that delivers real access and empowerment to Nigerians at the grassroots.
      
    ## Education and Credentials
      
    Dr. Odusanwo holds a Doctorate in Healthcare Administration from Virginia University of Lynchburg; a Master of Science in Project Management and a Master of Science in Information Systems Management, both from Keller Graduate School of Management; a nursing diploma from Ivy Tech Community College; and a Bachelor of Arts in French, with a minor in Russian, from the University of Ibadan. She is a certified Project Management Professional (PMP), a Six Sigma Green Belt, and a Licensed Nurse in th U.S.
      
    ## Professional Memberships
      
    American College of Healthcare Executives, Project Management Institute, Society of Clinical Research Associates, and Society for Clinical Data Management.
      
    ## Languages
      
    English, French, Spanish, and Russian.`,
  },
  {
    id: "odebode-joseph",
    name: "Dr. Odebode Joseph",
    role: "Financial Secretary",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/joseph_zvgtzf.jpg",
    extendedBio: `
    **Dr. Odebode Joseph Olusegun** is a Nigerian medical doctor, healthcare entrepreneur, and advocate for innovation in healthcare delivery. He serves as Financial Secretary of APC CARES, bringing to the role the discipline, integrity, and organisational leadership he has built across his medical and business career. 
    
    Dr. Odebode graduated in Medicine from Obafemi Awolowo University (OAU), Ile-Ife, and holds a Master of Advanced Studies (MAS) in Human Nutrition and Health from ETH Zurich, Switzerland. He received specialised training in Laser Medicine in Switzerland, is a certified Laser Safety Officer through UVEX Germany, and is a member of the Swiss Laser Medicine Association. He has further strengthened his leadership and technology expertise with certifications in Leadership in Healthcare from the University of Washington and in AI and Agentic Systems in Healthcare from Johns Hopkins University. 
    
    He is the Founder and Chief Executive Officer of Healingrays Healthcare Services Ltd, an organisation providing innovative, evidence-based medical services while promoting education and research. Through Healingrays, he is pioneering the development of laser medicine in Nigeria by establishing specialist clinical services, running professional training programmes, and advocating for regulatory frameworks that ensure safe and effective practice.
    
    As an entrepreneur who has built and managed a healthcare enterprise, Dr. Odebode understands the importance of sound financial stewardship, transparency, and accountability. He is committed to ensuring that APC CARES resources are managed responsibly and directed toward programmes that deliver real impact in the lives of the communities it serves. His broader vision is to position Nigeria and West Africa as centres of excellence in healthcare and to expand access to quality services for all, a vision that aligns closely with the APC CARES mission of community access and empowerment.`,
  },
  {
    id: "bamidele-paul",
    name: "Dr. Bamidele Paul",
    role: "National Secretary",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/founder1_yy5skp.jpg",
    extendedBio: `
    **Dr. Bamidele Paul Atiba** is a Senior Lecturer, Physician, Public Health Specialist and governance advocate. With a background spanning clinical medicine, public health leadership, programme planning, quality improvement and monitoring and evaluation, his work has focused on strengthening systems and translating policy into real impact for people.
    
    He serves on the boards of charity organisations within and outside Nigeria dedicated to supporting people and improving community well-being.
    
    A committed progressive and loyal member of the All Progressives Congress family, Dr. Atiba is passionate about good governance, accountable leadership, and building a more inclusive, people-centred democracy in line with the ideals of the APC.`,
  },
  {
    id: "kabiesi-ademola",
    name: "Kábíèsí Adémólá",
    role: "Director of Strategy, Innovation, and Technology",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/kabiesi_gsls3b.jpg",
    extendedBio: `
    **Kábíèsí Adémólá (Ademola Taofik)** is a technology founder, AI innovator, and communications strategist with more than 18 years of experience using technology and media to widen access and empower communities. As Founder and Chief Technology Officer of Lodum AI Banking, he builds tools that bring financial services to underserved Nigerians through everyday platforms like WhatsApp and Telegram. His other ventures, including Open School Africa, Holu AI, and HarePay, focus on digital learning, financial inclusion, and opportunity for young people and small businesses. 
    
    Through the Kabiesi Ademola Centre, he mentors youth, creators, and emerging tech professionals. He has worked closely with government and community institutions, advising the Department of Petroleum Resources on public communications and creating Ulera Ekiti, a public health awareness program that reached all 16 local government areas of Ekiti State. He has also served as production consultant to the Office of the Ooni of Ife on cultural heritage initiatives, and lectured in media arts at Ekiti State University.
    
    At **APC CARES**, he leads the strategy and technology that help connect Nigerians to the resources, services, and opportunities they need to thrive.`,
  },
  {
    id: "fasola-olasile",
    name: "Fasola Olasile",
    role: "National Executive Member",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/founder6_quhthp.jpg",
    extendedBio: `
    **Fasola Olasile** brings more than 15 years of grassroots service and a strong background in healthcare to APC Community Access to Resources and Empowerment Services (APC CARES).
    
    For about 15 years, he has volunteered among underserved communities, providing health outreach, education, and practical support to people who are often overlooked. He is known for his ability to mobilize people, build trust at community level, and turn good intentions into real results. 
    
    This experience makes him a natural fit for the mission of APC CARES: connecting communities to the resources and opportunities that improve lives.
    
    Professionally, Fasola is an Assistant Chief Medical Laboratory Technician at Olabisi Onabanjo University Teaching Hospital (OOUTH), Sagamu, where he helps deliver the accurate diagnostic services that doctors and patients depend on. 
    
    He holds a National Diploma from Ogun State College of Health Technology, Ilese-Ijebu, and is a certified Medical Laboratory Technician with the Medical Laboratory Science Council of Nigeria (MLSCN).
    
    He also serves as General Secretary of the Association of Medical Laboratory Technicians and Assistants of Nigeria (AMELTAN), Ogun State Chapter, where he advances the welfare and professional growth of his colleagues across the state.
    
    At APC CARES, Fasola brings together clinical knowledge, organizational leadership, and a deep commitment to the grassroots, helping ensure that no community is left behind.
    `,
  },
  {
    id: "gbolahan-adekoyejo",
    name: "Gbolahan Adekoyejo",
    role: "National Executive Committee Member and Coordinator, Education Wing",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/gbolahan_glfrqp.jpg",
    extendedBio: `
    Gbolahan Magbagbeola is a seasoned administrator, educator and public servant with nearly four decades of experience across government, education and faith-based organisations. He serves as a National Executive Committee member of APC CARES and coordinates its Education Wing. His public service career includes serving as Personal Assistant to the Honourable Minister of State for Education (1994–1996) and as Senior Legislative Assistant at the Nigerian National Assembly (2003–2007). 
    
    In these roles, he supported policy research, drafted legislation and briefings, managed stakeholder relationships, and served as a liaison between lawmakers and their constituents. Since 2009, he has served as Co-Proprietor and Administrator of Potter's Place Nursery & Primary School in Abeokuta, guiding its strategic direction, staff development and community partnerships. He began his career as an English Language teacher in Ibadan and is the author of Civic Education for Senior Secondary Schools (Books 1–3), published by Melrose Publishers. A graduate of French from the University of Ibadan, Mr. Magbagbeola brings political acumen, policy expertise and a lifelong commitment to education and capacity building to his work with APC CARES.`,
  },
  {
    id: "suleman-ozemoka",
    name: "Dr. Suleman Shaibu Ozemoka, MBBS, MPH, FWACP",
    role: "Consultant Family Physician",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/suleiman_tgz3e6.jpg",
    extendedBio: `
    **Dr. Suleman Shaibu Ozemoka** is a Consultant Family Physician with more than 20 years of experience across clinical medicine and public health. 
    
    He currently serves with the Edo State Hospitals Management Agency in the Department of Family Medicine at Edo Specialist Hospital, Benin City, where he manages patients at the General Outpatient Clinic and mentors resident doctors. His career has centred on delivering quality, patient-centred care in resource-limited settings. 
    
    Before his current role, he spent over a decade in family medicine at Central Hospital and Edo Specialist Hospital, providing emergency care, performing minor surgical procedures, and training junior doctors and medical students. 
    
    Earlier, he served as Head of Clinical Services and Donor Care Manager at the National Blood Transfusion Service, South-South Zonal Centre, where he helped the centre earn recognition as the best blood transfusion service in Nigeria in 2008 and 2009.
    
    Dr. Ozemoka holds an MBBS and a Master in Public Health from the University of Benin and is a Fellow of the West African College of Physicians. 
    
    He has additional training in geriatric medicine, obstetric life support, neonatal resuscitation, and trauma life support.
    
    A committed advocate for safe blood, he received the Blood Safety Advocacy Award from the National Blood Transfusion Commission in 2022, among several other honours for service and leadership. 
    
    He is a member of the **NMA, SOFPON, and MDCAN,** and is actively involved in research and free medical outreach.`,
  },
  {
    id: "chinwe-okoli",
    name: "Prof. Chinwe Edith Okoli, MBBS | FMCA | FWACS | FICS | Professor of Anaesthesia",
    role: "South East Coordinator, APC CARES",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/founder8_mjozfq.jpg",
    extendedBio: `
    **Professor Chinwe Edith Okoli** is a consultant anaesthesiologist, academic and healthcare executive with nearly three decades of service in Nigerian medicine. A Professor of Anaesthesia at Gregory University Uturu, where she serves as Deputy Provost of the College of Medicine and Health Sciences, she has spent more than 13 years at the Federal Medical Centre, Umuahia, rising to Head of Department, Head of Clinical Services and Training, Chairman of the Medical Advisory Committee, and Acting Medical Director.

    Under her leadership, FMC Umuahia secured simultaneous full accreditation for four departments, a first in the hospital's history. She led the centre's response to a Lassa fever outbreak, established its ICU admission protocols, and kept hospital services running through periods of industrial action.

    Her commitment to communities reaches far beyond the hospital walls. 

    Since 2007, she has served as State Coordinator of the NDDC Free Rural Medical Missions, coordinating more than 35 free medical missions across nine Niger Delta states and Abia State, bringing primary and specialist care to underserved communities. She is also President of God's Delight Medicare Rural Outreach Programme and Senior Pastor of God's Own Power Ministries.

    A dual Fellow of the National Postgraduate Medical College of Nigeria and the West African College of Surgeons, and a Fellow of the International College of Surgeons, Prof. Okoli serves as Faculty Secretary of the NPMCN Faculty of Anaesthesia and as a national examiner. 

    She has supervised 16 fellowship candidates, assessed 34 dissertations, and authored 27 peer-reviewed publications. She also holds management diplomas from ASCON and from the Galilee International Management Institute, Israel.

    At APC CARES, she brings this blend of clinical excellence, institutional leadership and grassroots outreach to the work of connecting Nigerians with health resources and empowerment.

    As South East Coordinator of APC CARES, Prof. Okoli brings deep roots in the region and decades of service to its people. An Abia State indigene born in Anambra State, a graduate of the University of Nigeria, Nsukka, and a leader in Umuahia's healthcare community for over a decade, she combines clinical excellence, institutional leadership and grassroots outreach to connect communities across the South East with the health resources and empowerment opportunities they deserve.`,
  }
];


// about page static data
const coreValues = [
  {
    title: "Grounded in People",
    desc: "We listen to local realities and prioritize community voices over top-down assumptions.",
    icon: HiUserGroup,
  },
  {
    title: "Transparent & Open",
    desc: "We share clear information about programs, resource allocation, and ways citizens can participate.",
    icon: HiShieldCheck,
  },
  {
    title: "Practical Impact",
    desc: "We move beyond rhetoric to deliver useful support, skills, and direct empowerment pathways.",
    icon: HiSparkles,
  },
  {
    title: "Nationwide Unity",
    desc: "We build bridges across geopolitical zones, connecting urban centers with rural areas.",
    icon: HiGlobeAlt,
  },
];

const commitments = [
  {
    number: "01",
    title: "Deliver resources",
    description:
      "Channel education, healthcare, infrastructure support, and economic tools to underserved communities, in line with the Renewed Hope Agenda.",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/f_webp/q_auto:good/dpr_auto/deliver_l0ja4v.avif",
    alt: "Community members gathered together outdoors",
  },
  {
    number: "02",
    title: "Build capacity",
    description:
      "Offer vocational training, entrepreneurship development, financial literacy, and leadership skills so citizens become self-reliant.",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/capacity_fn6ro7.avif",
    alt: "Students learning together in a classroom",
  },
  {
    number: "03",
    title: "Engage stakeholders",
    description:
      "Work with APC allies, partners, philanthropists, and corporate sponsors to secure lasting support for community programmes.",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/stakeholders_wi8qfz.avif",
    alt: "Colleagues discussing a shared project around a table",
  },
  {
    number: "04",
    title: "Mobilise communities",
    description:
      "Build strong local networks so citizens' needs and voices reach the Party's policy and governance processes.",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/f_webp/q_auto:good/dpr_auto/mobilize_ayjeid.avif",
    alt: "People taking part in a community gathering",
  },
  {
    number: "05",
    title: "Stay transparent",
    description:
      "Manage funds and resources to the highest standard and report progress openly.",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/transparent_awk4lg.avif",
    alt: "Team reviewing information and plans together",
  },
  {
    number: "06",
    title: "Raise awareness",
    description:
      "Promote community-driven development and the role of empowered citizens in Nigeria's future.",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/awareness_yjcbqx.avif",
    alt: "People sharing information through a digital device",
  },
  {
    number: "07",
    title: "Measure results",
    description:
      "Track every programme and adapt to what communities actually need.",
    image: "https://res.cloudinary.com/nextbuildr/image/upload/results_c9hjgf.avif",
    alt: "A team reviewing charts and programme results",
  },
];

export { pillars, programs, wings, pillarsDetail, frameworkSteps, teamMembersData, coreValues, commitments };