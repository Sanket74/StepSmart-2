
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Sanket",
    role: "Founder & CEO",
    bio: "Sanket founded StepSmart with a vision to make mentorship accessible to everyone. With 5+ years in EdTech, he's passionate about transforming how we approach learning.",
    image: "https://i.pravatar.cc/300?img=57",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "2",
    name: "Shivang",
    role: "Head of Education",
    bio: "Shivang brings over a decade of experience in curriculum development. She ensures all StepSmart courses meet the highest pedagogical standards.",
    image: "https://i.pravatar.cc/300?img=14",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "3",
    name: "Ankit",
    role: "Lead Developer",
    bio: "Ankit leads our technical team with expertise in creating seamless learning platforms. He's committed to building technology that enhances the mentorship experience.",
    image: "https://i.pravatar.cc/300?img=12",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "4",
    name: "Achutya",
    role: "Community Manager",
    bio: "Achutya fosters our vibrant community of mentors and learners. She organizes events and programs that create meaningful connections within the StepSmart ecosystem.",
    image: "https://i.pravatar.cc/300?img=1",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];
