export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    bigDescription: string[];
    technologies: string[];
  }

export interface Education {
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  color: string;
  expected?: boolean;
}