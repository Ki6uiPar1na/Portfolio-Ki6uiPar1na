// All site content comes from here (sourced from the CV).

export const PROFILE = {
  handle: 'Ki6uiPar1na',
  name: 'Md. Khairul Islam',
  subtitle: 'Cybersecurity Specialist | Competitive Programmer | CSE Developer',
  location: 'Ishwargonj, Mymensingh, Bangladesh',
  github: 'https://github.com/Ki6uiPar1na',
  linkedin: 'https://www.linkedin.com/in/mdkhairulislamtushar/',
  email: 'khairulislamtushar33@gmail.com',
  summary:
    'Computer Science undergraduate with hands-on experience in cybersecurity and competitive programming. ' +
    'Placed at the top of multiple national and international CTFs, including 11th place with a bounty at HackerOne Bug Hunt 2026 ' +
    'and Top 100 at the Black Hat CTF. Skilled in penetration testing, bug bounty, reverse engineering, web security and OSINT, ' +
    'with proficiency in C/C++, Python and Java. Keen to apply offensive-security skills in cloud-native and security-focused communities.',
}
export const CONTACT_EMAIL = PROFILE.email

export const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const HERO_HIGHLIGHTS = [
  'Champion — National RoboFest EWU CTF 2026',
  '11th, with bounty — HackerOne Bug Hunt 2026',
  'President — JKKNIU Cyber Security Club',
]

export const ABOUT = [
  { label: 'Education', value: 'B.Sc. in CSE, Jatiya Kabi Kazi Nazrul Islam University (CGPA 3.65)' },
  { label: 'Focus', value: 'Penetration testing, bug bounty, reverse engineering, web security, OSINT' },
  { label: 'Leadership', value: 'President, JKKNIU Cyber Security Club; led teams in cybersecurity competitions' },
  { label: 'Problem solving', value: '550+ Codeforces problems (max rating 1087), 150+ on LeetCode, 2★ on CodeChef' },
  { label: 'Location', value: 'Ishwargonj, Mymensingh, Bangladesh' },
]

// Skill nodes in the 3D sphere
export const SKILLS = [
  { name: 'Pentesting', group: 'sec' }, { name: 'Bug Bounty', group: 'sec' }, { name: 'Web Security', group: 'sec' },
  { name: 'Reverse Eng.', group: 'sec' }, { name: 'OSINT', group: 'sec' }, { name: 'CTF', group: 'sec' },
  { name: 'Burp Suite', group: 'tool' }, { name: 'Nmap', group: 'tool' }, { name: 'Wireshark', group: 'tool' },
  { name: 'Metasploit', group: 'tool' }, { name: 'Binary Ninja', group: 'tool' },
  { name: 'C', group: 'dev' }, { name: 'C++', group: 'dev' }, { name: 'Python', group: 'dev' },
  { name: 'Java', group: 'dev' }, { name: 'PHP', group: 'dev' }, { name: 'JavaScript', group: 'dev' },
  { name: 'Kali Linux', group: 'os' }, { name: 'Windows', group: 'os' },
]
export const GROUP_COLOR = { sec: '#2563eb', tool: '#6366f1', dev: '#0f766e', os: '#b45309' }
export const SKILL_GROUPS = [
  { key: 'sec', title: 'Security' },
  { key: 'tool', title: 'Tools' },
  { key: 'dev', title: 'Languages' },
  { key: 'os', title: 'Operating systems' },
]

export const STATS = [
  { label: 'Codeforces problems solved', value: 550, suffix: '+', color: 'blue' },
  { label: 'Codeforces max rating', value: 1087, suffix: '', color: 'teal' },
  { label: 'LeetCode problems solved', value: 150, suffix: '+', color: 'slate' },
  { label: 'CTFs & contests listed', value: 26, suffix: '', color: 'blue' },
]

export const HIGHLIGHTS = [
  { rank: '1st', title: 'National RoboFest EWU CTF 2026', note: 'Champion · June 28, 2026' },
  { rank: '2nd', title: 'BCS CTF 2026', note: '1st Runners-Up · Bangladesh Computer Society' },
  { rank: '11th', title: 'HackerOne Bug Hunt 2026 (Onsite)', note: 'Placed with bounty · Jan 10, 2026' },
  { rank: 'Top 100', title: 'Black Hat CTF by Bugcrowd', note: 'International · Aug 2025' },
  { rank: 'Finalist', title: 'z0d1ak CTF Finals 2026', note: 'Qualified · VIT Vellore, India' },
]

export const CONTESTS = {
  national: [
    ['National RoboFest EWU CTF 2026', 'Champion', 'Jun 28, 2026'],
    ['BCS CTF 2026 (Bangladesh Computer Society)', '1st Runners-Up', 'Sep 25–27, 2026'],
    ['Cyber Hackathon 2025 Final', '4th / 35 teams', 'May 2025'],
    ['Cisco National Skills Competition 2025', '5th / 30 teams', 'Nov 29, 2025'],
    ['Red Sentry CTF 2025', '5th / 50+', 'Jun 2025'],
    ['Cyber Invasion 2025 (TechnoNext)', '7th / 70', 'Dec 13, 2025'],
    ['BUP CTF (Knight Squad)', '7th / 40 teams', '2025'],
    ['HackerOne Bug Hunt 2026 Onsite', '11th, with bounty', 'Jan 10, 2026'],
    ['DIU CyberCon 2025', '12th / 35 teams', 'Oct 25, 2025'],
    ['EWU CTF Final', '12th / 40 teams', '2025'],
    ['BUET CTF 2026', '14th / 35 teams', 'Jan 30, 2026'],
    ['Phoenix Summit CTF 2025', '17th / 140+ teams', 'May 10, 2025'],
    ['BUP CTF 2026 Onsite', '20th', 'Sep 29–30, 2026'],
    ['MIST Cyber Raid', '23rd / 40 teams', '2025'],
    ['Al-Khwarizmi Science Fest CTF 2025', '23rd / 45 teams', 'Jan 29, 2026'],
    ['BUP Cipher Sprint 2025', '23rd / 30 teams', '2025'],
    ['NSU Cyber Nauts 2026 Final', '39th / 60 teams', '2026'],
    ['Phoenix Summit CTF 2024 Qualifier', '74th / 250+', 'May 2024'],
    ['Knight CTF 2025', '147th / 750+ teams', 'Jan 2025'],
  ],
  international: [
    ['z0d1ak CTF Finals 2026 (VIT Vellore, India)', 'Qualified', 'Sep 19, 2026'],
    ['Black Hat CTF by Bugcrowd', 'Top 100', 'Aug 2025'],
  ],
  programming: [
    ['ACM ICPC 2025', 'Regionalist', 'Dec 20, 2025'],
    ['AUST IUPC 2025', '73rd / 130+ teams', 'Feb 22, 2025'],
    ['11th IUT IUPC 2024', '75th / 120+ teams', 'Apr 27, 2024'],
    ['NSU Web Extreme Hackathon', 'Participant', 'Feb 12, 2025'],
    ['EWU National Hackathon 2024', 'Participant', '2024'],
  ],
}

export const CERTIFICATIONS = [
  { name: 'eJPT — Junior Penetration Tester', issuer: 'INE', date: 'Mar 6, 2026', id: '176301104' },
  { name: 'Mastering Cyber Threat Intelligence for SOC Analysts', issuer: 'SOCRadar', date: 'Jul 2025', id: 'aa899e7c-4619-4898-896a-f0de19b14f62' },
  { name: 'Blue Team Junior Analyst', issuer: 'Security Blue Team', date: 'Jul 2025', id: '7713344076' },
]

export const EDUCATION = [
  { degree: 'B.Sc. Computer Science and Engineering', school: 'Jatiya Kabi Kazi Nazrul Islam University', period: 'Feb 2023 – Present', score: 'CGPA 3.65' },
  { degree: 'Higher Secondary Certificate (HSC)', school: 'Agricultural University College, Mymensingh', period: '2019 – 2021', score: 'GPA 5.00' },
  { degree: 'Secondary School Certificate (SSC)', school: 'Mollickpur Laksmiganj High School, Ishwargonj', period: '2019', score: 'GPA 5.00' },
]

export const ORGANIZATIONS = [
  { role: 'President', org: 'JKKNIU Cyber Security Club', period: '2025 – 2026' },
  { role: 'Public Relations Officer', org: 'JKKNIU Cyber Security Club', period: '2024 – 2025' },
  { role: 'Senior Executive', org: 'Mid-Day Programming Club, JKKNIU', period: '2026 – 2027' },
  { role: 'Executive', org: 'Mid-Day Programming Club, JKKNIU', period: '2025 – 2026' },
  { role: 'Director, Professional Development Service', org: 'Rotaract Club of JKKNIU', period: '2024 – 2025' },
]
export const COURSES = ['Practical SOC Analyst — maikroservice Academy']

// NOTE: the CV gives no repo links, so "Code" points at the GitHub profile — replace with direct repo URLs.
export const PROJECTS = [
  { title: 'Kingdom Of Soldier', desc: 'A game project built with Python.', tags: ['Python'], github: PROFILE.github, hue: 215 },
  { title: 'Mid-Day Programming Club App', desc: 'Official Android app of the Mid-Day Programming Club.', tags: ['Java', 'Firebase'], github: PROFILE.github, hue: 170 },
  { title: 'JKKNIU Attendance Management System', desc: 'Attendance tracking for Jatiya Kabi Kazi Nazrul Islam University.', tags: ['React Native', 'MongoDB'], github: PROFILE.github, hue: 245 },
]

export const SOCIALS = [
  { id: 'github', label: 'GitHub', handle: '@Ki6uiPar1na', href: PROFILE.github },
  { id: 'linkedin', label: 'LinkedIn', handle: 'mdkhairulislamtushar', href: PROFILE.linkedin },
  { id: 'email', label: 'Email', handle: PROFILE.email, href: `mailto:${PROFILE.email}` },
]
