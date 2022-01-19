import { totalISF } from './dataISF.js'

export const smicMonth = 1568.27

//TODO : delete inutile

const jobs = [
  {
    name: 'Infirmier',
    plural: 'Infirmiers',
    cost: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Instituteur',
    plural: 'Instituteurs.trices',
    cost: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Animateur périscolaire',
    plural: 'Animateurs.trices périscolaires',
    cost: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Policier municipal',
    plural: 'Policiers.ères municipaux.ales',
    cost: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  },
  {
    name: 'Pompier',
    plural: 'Pompiers.ères',
    cost: 10,
    active: true,
    progress: { min: 0, max: totalISF, value: 0 }
  }
]

export default jobs
