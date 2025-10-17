export interface AboutInfo {
  readonly title: string;
  readonly description: string;
  readonly hardSkills: string[];
  readonly softSkills: string[];
  readonly highlights: string[];
}

export class AboutInfoEntity implements AboutInfo {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly hardSkills: string[],
    public readonly softSkills: string[],
    public readonly highlights: string[]
  ) { }

  static create(data: AboutInfo): AboutInfoEntity {
    return new AboutInfoEntity(
      data.title,
      data.description,
      data.hardSkills,
      data.softSkills,
      data.highlights
    );
  }
}
