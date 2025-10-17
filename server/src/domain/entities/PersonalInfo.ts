export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly avatarUrl: string;
  readonly email: string;
  readonly telegram: string;
  readonly linkedin: string;
}

export class PersonalInfoEntity implements PersonalInfo {
  constructor(
    public readonly name: string,
    public readonly title: string,
    public readonly avatarUrl: string,
    public readonly email: string,
    public readonly telegram: string,
    public readonly linkedin: string
  ) { }

  static create(data: PersonalInfo): PersonalInfoEntity {
    return new PersonalInfoEntity(
      data.name,
      data.title,
      data.avatarUrl,
      data.email,
      data.telegram,
      data.linkedin
    );
  }
}
