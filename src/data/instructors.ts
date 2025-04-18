export interface InstructorType {
  id: string;
  name: string;
  role: string;
  belt: string;
  image: string;
  bio: string;
  achievements: string[];
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const instructors: InstructorType[] = [
  {
    id: 'john-silva',
    name: 'John Silva',
    role: 'Head Coach & Founder',
    belt: 'Black Belt 3rd Degree',
    image: 'https://images.pexels.com/photos/7991572/pexels-photo-7991572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'John began training Brazilian Jiu-Jitsu in 1998 under the legendary Rickson Gracie. With over two decades of experience, he has competed and medaled in numerous IBJJF competitions and has trained world champions. His teaching philosophy emphasizes technical precision and practical application.',
    achievements: [
      'IBJJF World Champion (2x)',
      'ADCC North American Trials Winner',
      'Pan American Champion',
      'Certified IBJJF Referee'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/johnsilvabjj',
      facebook: 'https://facebook.com/johnsilvabjj'
    }
  },
  {
    id: 'maria-rodriguez',
    name: 'Maria Rodriguez',
    role: 'Women\'s Program Director',
    belt: 'Black Belt',
    image: 'https://images.pexels.com/photos/7991578/pexels-photo-7991578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Maria has been training for over 15 years and is passionate about growing women\'s participation in Brazilian Jiu-Jitsu. Her classes focus on technique and leverage rather than strength, making BJJ accessible to practitioners of all sizes and athletic backgrounds.',
    achievements: [
      'IBJJF European Champion',
      'No-Gi World Championship Bronze Medalist',
      'Pan American Silver Medalist',
      'Creator of "Women\'s BJJ Empowerment" Program'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/mariarodriguezbjj',
      twitter: 'https://twitter.com/mariarodriguezbjj'
    }
  },
  {
    id: 'david-chen',
    name: 'David Chen',
    role: 'No-Gi & Competition Coach',
    belt: 'Black Belt',
    image: 'https://images.pexels.com/photos/6765853/pexels-photo-6765853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'David specializes in no-gi grappling and modern competition techniques. A former NCAA Division I wrestler, he brings a unique perspective to takedowns and positional control. His classes emphasize practical techniques that blend wrestling and jiu-jitsu for competitive success.',
    achievements: [
      'ADCC Trials Finalist',
      'EBI Combat Jiu-Jitsu Veteran',
      'No-Gi Pan American Champion',
      'Former D1 Wrestling All-American'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/davidchenbjj'
    }
  },
  {
    id: 'samantha-lee',
    name: 'Samantha Lee',
    role: 'Kids Program Director',
    belt: 'Brown Belt',
    image: 'https://images.pexels.com/photos/6765833/pexels-photo-6765833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Samantha specializes in teaching children\'s classes, developing a curriculum that builds confidence, discipline, and anti-bullying skills. With a background in education, she creates engaging lessons that make learning jiu-jitsu fun while building character and physical fitness.',
    achievements: [
      'Certified Child Development Specialist',
      'Creator of "BJJ Bullying Prevention" Program',
      'IBJJF Kids Coaching Certification',
      'Former Elementary School Teacher'
    ],
    socialMedia: {
      instagram: 'https://instagram.com/samanthaleekidsbjj',
      facebook: 'https://facebook.com/elitembjjkids'
    }
  }
];