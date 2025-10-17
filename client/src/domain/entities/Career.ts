export interface CareerExperience {
  id: string;
  company: string;
  position: string;
  period: string;
  year: number;
  description: string;
  technologies: string[];
  achievements?: string[];
  type: 'work' | 'education' | 'project';
  featured?: boolean;
}

export class CareerEntity {
  constructor(
    public readonly experiences: CareerExperience[],
    public readonly skills: string[],
    public readonly currentFocus: string
  ) { }

  getTimelineData(): CareerExperience[] {
    return this.experiences.sort((a, b) => a.year - b.year);
  }

  getFeaturedExperiences(): CareerExperience[] {
    return this.experiences.filter(exp => exp.featured);
  }

  getExperiencesByType(type: 'work' | 'education' | 'project'): CareerExperience[] {
    return this.experiences.filter(exp => exp.type === type);
  }
}
