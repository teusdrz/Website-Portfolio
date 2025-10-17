
import { Schema, model } from 'mongoose';
import { ProjectEntity } from '../../../domain/entities/project';

const projectSchema = new Schema<ProjectEntity>({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  description: { type: String, required: true },
  impact: {
    value: { type: String, required: true },
    metric: { type: String, required: true },
    description: { type: String, required: true },
  },
  highlights: [
    {
      icon: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  technologies: [{ type: String, required: true }],
  timeline: [
    {
      phase: { type: String, required: true },
      duration: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
  githubUrl: { type: String, required: true },
});

export const ProjectModel = model<ProjectEntity>('Project', projectSchema);
