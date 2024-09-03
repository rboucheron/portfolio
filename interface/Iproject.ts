export interface Project {
  id: number;
  title: string;
  details: string;
  date: Date; // ou string, selon ce que vous utilisez
  category: string;
  link: string;
  github: string;
  images: {
    id: number;
    src: string;
    alt: string;
    projectId: number;
  }[];
  technologies: {
    id: number;
    name: string;
  }[];
  translatedProject: {
    id: number;
    title: string;
    description: string;
    category: string;
    projectId: number;
  } | null;
}
