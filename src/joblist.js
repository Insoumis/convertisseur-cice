export const totalCICE = 2.2 * 10e9

export const smicMonth = 1568.27

const jobs = [
  {
    name: 'Infirmier',
    plural: 'Infirmiers.ères',
    costPerMonth: 2100,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  },
  {
    name: 'Instituteur',
    plural: 'Instituteurs.trices',
    costPerMonth: 2150,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  },
  {
    name: 'Animateur périscolaire',
    plural: 'Animateurs.trices périscolaires',
    costPerMonth: 820,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  },
  {
    name: 'Policier municipal',
    plural: 'Policiers.ères municipaux.ales',
    costPerMonth: 1800,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  },
  {
    name: 'Pompier',
    plural: 'Pompiers.ères',
    costPerMonth: 1800,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  }
]

export default jobs
