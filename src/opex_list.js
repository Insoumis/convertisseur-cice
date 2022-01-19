import { totalISF } from './dataISF.js'

export const smicMonth = 1568.27

const jobs = [
  {
    name: 'Infirmier',
    plural: 'Infirmierszzzz',
    costPerYear: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Instituteur',
    plural: 'Instituteurs.trices',
    costPerYear: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Animateur périscolaire',
    plural: 'Animateurs.trices périscolaires',
    costPerYear: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Policier municipal',
    plural: 'Policiers.ères municipaux.ales',
    costPerYear: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Pompier',
    plural: 'Pompiers.ères',
    costPerYear: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  }
]

export default jobs
