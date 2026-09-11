export const profile = {
  name: "Md. Eram Hossain Ratul",
  firstName: "Eram",
  initials: "EHR",
  roles: [
    "General Secretary (Acting)",
    "Chief Sergeant-at-Arms",
    "Social Activist",
  ],
  location: "Uttara Model Town, Dhaka, Bangladesh",
  tagline:
    "A student leader from Dhaka who turns discipline, organization and service into impact — across clubs, campuses and community.",
  about: [
    "I am a student leader, club administrator and social activist based in Dhaka, Bangladesh. I currently serve as the General Secretary (Acting) of the Dhaka Commerce College Nature Study Club and as the Chief Sergeant-at-Arms of the Rotaract Club of Dhaka Commerce College, while also serving as a Cadet Lance Corporal in the Bangladesh National Cadet Corps (BNCC).",
    "Over the past years I have grown through every rung of club leadership — volunteer, treasurer, joint secretary, sergeant-at-arms — learning how discipline, transparent administration and genuine teamwork build organizations that people want to be part of. I care deeply about environmental awareness, youth development and the small operational details that make events and institutions run smoothly.",
  ],
  stats: [
    { value: "7", label: "Leadership Roles" },
    { value: "3", label: "Organizations" },
    { value: "7+", label: "Awards & Honors" },
    { value: "1.5+", label: "Years of Service" },
  ],
};

export interface ExperienceRole {
  title: string;
  period: string;
  duration: string;
  current?: boolean;
  summary: string;
  contributions: string[];
}

export interface ExperienceOrg {
  organization: string;
  type: string;
  totalPeriod: string;
  icon: string; // lucide icon name handled in component
  roles: ExperienceRole[];
}

export const experience: ExperienceOrg[] = [
  {
    organization: "Rotaract Club of Dhaka Commerce College",
    type: "Volunteer Leadership · Rotaract / Rotary International",
    totalPeriod: "Jun 2025 – Present",
    icon: "rotaract",
    roles: [
      {
        title: "Chief Sergeant-at-Arms",
        period: "Jul 2026 – Present",
        duration: "3 mos",
        current: true,
        summary:
          "Leads the Sergeant-at-Arms team in maintaining order, overseeing meeting protocols, and ensuring the smooth execution of club events and official activities. Coordinates closely with the executive committee to uphold professionalism, discipline, and operational efficiency.",
        contributions: [
          "Led and supervised the Sergeant-at-Arms team during meetings and events",
          "Ensured proper meeting procedures and maintained order and decorum",
          "Oversaw venue arrangements, logistics, and event readiness",
          "Coordinated with executive members to support seamless event execution",
          "Maintained a professional, organized, and welcoming environment for all club activities",
        ],
      },
      {
        title: "Sergeant-at-Arms",
        period: "Jun 2025 – Jul 2026",
        duration: "1 yr 2 mos",
        summary:
          "Responsible for maintaining order, supporting meeting procedures, and ensuring the smooth execution of club events and official activities, working closely with the executive committee to create a well-organized and professional environment.",
        contributions: [
          "Maintained order and decorum during meetings and events",
          "Assisted in organizing and coordinating official club activities",
          "Managed venue setup and meeting logistics",
          "Supported attendance tracking and member coordination",
          "Helped ensure the smooth and efficient execution of club programs",
        ],
      },
    ],
  },
  {
    organization: "Dhaka Commerce College Nature Study Club",
    type: "Volunteer Leadership · Environmental & Nature Club",
    totalPeriod: "Apr 2025 – Present",
    icon: "nature",
    roles: [
      {
        title: "General Secretary (Acting)",
        period: "Mar 2026 – Present",
        duration: "7 mos",
        current: true,
        summary:
          "Temporarily assumed the responsibilities of the General Secretary — overseeing the club's administrative operations, coordinating executive activities, and ensuring effective communication among members while maintaining continuity of club initiatives.",
        contributions: [
          "Managed administrative and organizational activities during the acting tenure",
          "Coordinated executive meetings and maintained official records",
          "Facilitated communication between the executive committee and club members",
          "Supervised event planning and execution",
          "Ensured smooth functioning of club operations and timely completion of key responsibilities",
        ],
      },
      {
        title: "Joint Secretary",
        period: "Feb 2026 – May 2026",
        duration: "4 mos",
        summary:
          "Supported the Secretary in coordinating club activities, maintaining effective communication, and ensuring the smooth execution of meetings, events, and administrative tasks in collaboration with the executive committee.",
        contributions: [
          "Assisted in planning and coordinating club activities",
          "Maintained communication with members and executive teams",
          "Supported meeting scheduling, documentation, and record-keeping",
          "Coordinated event logistics and administrative tasks",
          "Helped ensure the smooth execution of club programs and initiatives",
        ],
      },
      {
        title: "Treasurer",
        period: "Jun 2025 – Feb 2026",
        duration: "9 mos",
        summary:
          "Managed the club's financial activities — maintaining accurate records, assisting with budgeting, and ensuring transparency in financial operations in support of club events and initiatives.",
        contributions: [
          "Managed financial records and transaction documentation",
          "Assisted in budget planning and expense tracking",
          "Coordinated event-related payments and reimbursements",
          "Ensured financial transparency and accountability",
          "Supported fundraising and financial planning for club activities",
        ],
      },
      {
        title: "Volunteer",
        period: "Apr 2025 – Jul 2025",
        duration: "4 mos",
        summary:
          "Actively supported club initiatives by assisting with event planning, coordination, and on-ground execution, working collaboratively with team members to ensure activities ran smoothly and efficiently.",
        contributions: [
          "Assisted in organizing and managing club events",
          "Supported team coordination and task execution",
          "Helped with logistics, registrations, and on-ground operations",
          "Contributed to maintaining smooth event flow and participant engagement",
        ],
      },
    ],
  },
  {
    organization: "Bangladesh National Cadet Corps (BNCC)",
    type: "National Cadet Program",
    totalPeriod: "May 2025 – Present",
    icon: "cadet",
    roles: [
      {
        title: "Cadet Lance Corporal",
        period: "May 2025 – Present",
        duration: "1 yr 5 mos",
        current: true,
        summary:
          "Serving as a Cadet Lance Corporal in the Bangladesh National Cadet Corps — building discipline, physical readiness, teamwork and leadership through structured national cadet training and programs.",
        contributions: [],
      },
    ],
  },
];

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  note?: string;
  icon: string;
}

export const education: EducationItem[] = [
  {
    institution: "Dhaka Commerce College",
    degree: "Higher Secondary Certificate",
    field: "Science",
    period: "Aug 2024 – Present",
    note: "Currently pursuing, alongside active club leadership roles.",
    icon: "college",
  },
  {
    institution: "Adamjee Cantonment Public School",
    degree: "Secondary School Certificate",
    field: "Science",
    period: "Jan 2014 – Dec 2024",
    note: "Completed eleven years of schooling with a consistent academic record.",
    icon: "school",
  },
];

export interface SkillItem {
  name: string;
  description: string;
  icon: string;
}

export const skills: SkillItem[] = [
  {
    name: "Event Management",
    description:
      "Planning, logistics and on-ground execution of club events, seminars and ceremonies.",
    icon: "calendar",
  },
  {
    name: "Leadership",
    description:
      "Leading teams as sergeant-at-arms, secretary and treasurer across multiple organizations.",
    icon: "users",
  },
  {
    name: "Communication",
    description:
      "Member coordination, executive liaison, and clear documentation and record-keeping.",
    icon: "message",
  },
  {
    name: "Volunteering",
    description:
      "Hands-on community service and environmental activism with Rotaract and nature clubs.",
    icon: "heart",
  },
  {
    name: "English",
    description:
      "Professional working proficiency — correspondence, documentation and public speaking.",
    icon: "languages",
  },
];

export interface AchievementItem {
  title: string;
  organization: string;
  detail: string;
  year: string;
  icon: string;
  highlight?: boolean;
}

export const achievements: AchievementItem[] = [
  {
    title: "100% Attendance Award",
    organization: "Dhaka Commerce College",
    detail:
      "Recognized for maintaining a perfect attendance record throughout the academic session.",
    year: "2026",
    icon: "award",
    highlight: true,
  },
  {
    title: "1st Place — Eco Spark Challenge",
    organization: "Dhaka Commerce College Nature Study Club",
    detail:
      "Won first position in the environment-focused quiz competition, competing across the college.",
    year: "2025",
    icon: "trophy",
    highlight: true,
  },
  {
    title: "6th Place — Energy Talk Delegates Quiz",
    organization: "Inter-college Competition",
    detail:
      "Placed sixth among delegate teams in the Energy Talk quiz competition held on 30 June 2025.",
    year: "2025",
    icon: "zap",
  },
  {
    title: "Certificate of Achievement — Debate",
    organization: "Voice of Nature 1.0",
    detail:
      "Awarded for successful participation in the debate competition organized by the Nature Study Club.",
    year: "2025",
    icon: "mic",
  },
  {
    title: "Campus Ambassador — Gonitbid 2025",
    organization: "Bangladesh Olympiadian Club",
    detail:
      "Approved as Campus Ambassador representing Dhaka Commerce College — promoted the event, built an Olympiad-focused community and strengthened leadership and communication skills.",
    year: "2025",
    icon: "globe",
  },
  {
    title: "Campus Ambassador — NDC English Carnival 2025",
    organization: "NDC English Carnival",
    detail:
      "Honored with the Campus Ambassador role in recognition of promotion and outreach efforts.",
    year: "2025",
    icon: "globe",
  },
  {
    title: "Participant — TECHNOVATION'25",
    organization: "Josephite IT Club · Eastern Bank Ltd.",
    detail:
      "Earned a certificate of participation in the technology competition — teamwork, new ideas and hands-on learning.",
    year: "2025",
    icon: "cpu",
  },
];

export interface ActivityItem {
  title: string;
  organization: string;
  detail: string;
}

export const activities: ActivityItem[] = [
  {
    title: "“Breaking the Plastic Habit” Seminar",
    organization: "The Green Mindset · Dhaka Residential Model School and College",
    detail:
      "Attended an insightful seminar on the environmental and social impacts of plastic pollution, exploring practical steps individuals can take toward a cleaner, more sustainable future.",
  },
];
