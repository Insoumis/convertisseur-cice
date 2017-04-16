export const totalCICE = 2.2 * 10e9

export const smicMonth = 1568.27

const jobs = [
  {
    name: 'Infirmier',
    plural: 'Infirmier(s)',
    costPerMonth: 2100,
    active: true,
    progress: { min: 0, max: totalCICE, value: 5 * 10e8 }
  },
  {
    name: 'Instituteur',
    plural: 'Instituteurs',
    costPerMonth: 2150,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  },
  {
    name: 'Animateur périscolaire',
    plural: 'Animateurs périscolaires',
    costPerMonth: 820,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  },
  {
    name: 'Policier municipal',
    plural: 'Policiers municipaux',
    costPerMonth: 1800,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  },
  {
    name: 'Pompier',
    plural: 'Pompiers',
    costPerMonth: 1800,
    active: true,
    progress: { min: 0, max: totalCICE, value: 0 }
  }
]

export default jobs
