export type Service = {
  id: number;
  title: string;
  slug: string;
  shortDesc: string;
  bullets: string[];
  displayOrder: number;
};

export type ModuleItem = {
  id: number;
  title: string;
  benefit: string;
  iconName: string;
  displayOrder: number;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
};

export type Job = {
  id: number;
  title: string;
  slug: string;
  location: string;
  type: string;
  description: string;
  isActive: boolean;
};

export type ProofStat = {
  id: number;
  label: string;
  value: string;
  displayOrder: number;
};

