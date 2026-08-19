
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import testimonialImage from '../images/testimonial.webp';
import {
  ContactSection,
  ContactType,
  Social,
  SubHeader,
  TestimonialSection,
} from './dataDef';

export const ptfHeader: SubHeader = {
  title: 'I am proficient with the technical stack',
  content: <></>,
  showSpacer: false,
};



export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      label: 'BA Business Advice GmbH — reference letter, 31 December 2024 (translated from German)',
      text: '“Thanks to his outstanding problem-solving skills, he consistently developed creative and workable solutions to customer-side challenges in everyday consulting, within his area of responsibility. He showed no hesitation in working his way into new topics.”',
    },
    {
      label: 'BA Business Advice GmbH — reference letter, 31 December 2024 (translated from German)',
      text: '“His quick grasp allowed him to keep an overview even of complex matters, and thanks to his logical and analytical thinking he always arrived at balanced and accurate results. He worked extremely conscientiously and, in day-to-day business, self-organised, prudently and trustworthily. Even under heavy pressure he acted calmly and deliberately.”',
    },
    {
      label: 'Sengicon GmbH — reference letter, 21 December 2021 (translated from German)',
      text: '“Mr Grellmann stood out in particular through the successful conversion of an outdated PHP web application into a modern PHP REST backend, connected to a React web frontend he had built himself.”',
    },
    {
      label: 'Sengicon GmbH — reference letter, 21 December 2021 (translated from German)',
      text: '“He carried out all tasks independently, very carefully and in a well-planned manner. He always acted calmly, deliberately, in a goal-oriented and precise way. He found good solutions for any problems that arose. His performance earned our full recognition in every respect.”',
    },
    {
      label: 'Ferienhaus-Vermittlung fincaferien.de GmbH — reference letter, 31 December 2019 (translated from German)',
      text: '“Thanks to his quick grasp and his lasting ability to learn, he was able to analyse complex problems at any time. He worked out solutions independently and implemented them in a targeted way. Even under pronounced pressure, Mr Grellmann always kept a complete overview.”',
    },
    {
      label: 'Ferienhaus-Vermittlung fincaferien.de GmbH — reference letter, 31 December 2019 (translated from German)',
      text: '“He worked his way into the extensively grown range of tasks and always handled the tasks assigned to him extremely carefully and with consistently high quality. He always acted to our fullest satisfaction.”',
    },
  ],
};

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Ways to contact me',
  items: [
    {
      type: ContactType.Email,
      text: 'martin@grellmann.eu',
      href: 'mailto:martin@grellmann.eu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Martin Grellmann',
      href: 'https://www.linkedin.com/in/martingrellmann',
    },
    {
      type: ContactType.Github,
      text: 'Martin Grellmann / cnochx',
      href: 'https://github.com/cnochx',
    },
    {
      type: ContactType.Phone,
      text: '+49 171 3242937 / +55 62 99828-5979',
      href: 'tel:+491713242937',
    },
  ],
};

export const socialLinks: Social[] = [
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/martingrellmann',
  },
  {
    label: 'Github',
    Icon: GithubIcon,
    href: 'https://github.com/cnochx',
  },
];



