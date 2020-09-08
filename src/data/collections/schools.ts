import { School } from '../interfaces/school';

export let schools: School[] = [];

export const fillSchools = (newSchools: School[]) => {
  console.log('fill school');
  schools = [...newSchools];
};
