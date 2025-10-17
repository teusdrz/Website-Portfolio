
export interface ProjectEntity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: {
    value: string;
    metric: string;
    description: string;
  };
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  technologies: string[];
  timeline: {
    phase: string;
    duration: string;
    description: string;
  }[];
  githubUrl: string;
}
