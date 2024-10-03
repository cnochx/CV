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
}
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
      text: 'Vogelmauer 43',
    },
    {
      aiKey: 1,
      text: '86152 Augsburg',
    },
    {
      aiKey: 2,
      text: 'Germany',
    },
  ],
  addressBrazil: [
    {
      aiKey: 0,
      text: 'Sitio de Cristal, C4 - Chácara Shanti',
    },
    {
      aiKey: 1,
      text: 'Povoado do Moinho',
    },
    {
      aiKey: 2,
      text: 'Alto Paraíso de Goiás',
    },
    {
      aiKey: 3,
      text: '73770-000',
    },
    {
      aiKey: 4,
      text: 'Goiás',
    },
    {
      aiKey: 4,
      text: 'Brazil',
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
      linkLabel: 'Fax:',
      text: '+49 322 239 432 99',
      href: 'tel:004932223943299',
    },
    {
      liKey: 2,
      linkLabel: 'Phone:',
      text: '+55 113 042 5721',
      href: 'tel:00551130425721',
    },
    {
      liKey: 3,
      linkLabel: 'Skype:',
      text: 'live:rudra_117',
      href: 'skype:live:rudra_117?call',
    }
  ],

  headerLegal: 'Data protection',
legalContent: (
  <>
    <h4 className="font-bold text-neutral-200">
      The sole purpose of this website is to present my CV and related content.
    </h4>
    <p className="text-neutral-300">No data will be collected on this page, apart from the usual log files of the domain hoster (Vercel Analytics /
      Speed insight).</p>
    <p className="text-neutral-200">The Logfiles are evaluated for accessibility and improvement of the Website </p>
    <p className="text-neutral-200">By submitting the email button, name, email and Message will be requested and sent. The corresponding e-mail is saved on the host (A2 Hosting) and the e-mail clients.</p>
    <h4 className="font-bold text-neutral-200">
      The responsibility for the websites accessed via any links lies with the respective operators.
    </h4>
    <p className="text-neutral-200">The operator of the respective website is responsible for the link that may be accessed</p>
  </>
),
};