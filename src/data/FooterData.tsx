import {BoltIcon} from '@heroicons/react/24/solid';

import {
  FooterItems,
  ImprintItems,
} from './FooterDataDef';

export const footerItems: FooterItems = {
  link: 'https://reactresume.com',
  Icon: BoltIcon,
  textContent: (
    <>
      <span>
        Fork of <span className="text-white">React</span>
        <span className="italic text-yellow">Resume</span>
      </span>
    </>
  ),
  copyrightText: '- Changes written by Martin Grellmann'
};

/**
 * Imprint items
 */
export const imprintItems: ImprintItems = {
  header: 'Imprint',
  adressheader: 'Person in charge / Responsibility',
  personInCharge: 'Martin Grellmann',
  addressGermany: [
    {
      aiKey: 0,
      text: 'Leipzig, Germany',
    },
  ],
  addressBrazil: [
    {
      aiKey: 0,
      text: 'Goiás, Brazil',
    },
  ],
  onlineAddress: [
    {
      liKey: 0,
      linkLabel: 'e-mail:',
      text: 'martin@grellmann.eu',
      href: 'mailto:martin@grellmann.eu',
    },
    {
      liKey: 1,
      linkLabel: 'Phone:',
      text: '+49 171 3242937',
      href: 'tel:+491713242937',
    },
    {
      liKey: 2,
      linkLabel: 'Phone:',
      text: '+55 62 99828-5979',
      href: 'tel:+5562998285979',
    },
    {
      liKey: 3,
      linkLabel: 'LinkedIn:',
      text: 'Martin Grellmann',
      href: 'https://www.linkedin.com/in/martingrellmann',
    },
  ],

  headerLegal: 'Data protection',
  legalContent: (
    <>
      <h4 className="font-bold text-neutral-200">
        The sole purpose of this website is to present my CV and related professional content.
      </h4>
      <p className="text-neutral-300">
        No personal data is intentionally collected on this page apart from the usual technical log files of the hosting provider.
      </p>
      <p className="text-neutral-200">
        Log data may be evaluated for technical accessibility, website stability and continuous improvement.
      </p>
      <p className="text-neutral-200">
        If a contact form or e-mail action is used, the transmitted contact data is processed only for the purpose of responding to the request.
      </p>
      <h4 className="font-bold text-neutral-200">
        Responsibility for the content of external websites linked from this page lies with their respective operators.
      </h4>
      <p className="text-neutral-200">
        At the time of linking, no illegal content was apparent on the referenced external pages.
      </p>
    </>
  ),
};
