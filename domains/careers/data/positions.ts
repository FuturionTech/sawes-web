// Job Positions Data
// This file contains job position data for the careers section

export interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: string
  remote?: boolean
  description: string
  summary?: string
  salary: string
  experience: string
  responsibilities: string[]
  requirements: string[]
  niceToHave?: string[]
  benefits: string[]
  posted?: string
  deadline?: string
}

// Get position by ID
export function getPositionById(id: string): JobPosition | undefined {
  return positions.find(p => p.id === id)
}

// Get all positions
export function getAllPositions(): JobPosition[] {
  return positions
}

// Sample positions data
const positions: JobPosition[] = [
  // Add positions here as needed
  // Example:
  // {
  //   id: 'water-engineer',
  //   title: 'Water Resources Engineer',
  //   department: 'Engineering',
  //   location: 'Ouagadougou, Burkina Faso',
  //   type: 'Full-time',
  //   remote: false,
  //   description: 'We are seeking a Water Resources Engineer...',
  //   salary: 'Competitive',
  //   experience: '3-5 years',
  //   responsibilities: [],
  //   requirements: [],
  //   benefits: []
  // }
]
