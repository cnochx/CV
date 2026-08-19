import {DevicePhoneMobileIcon,
        EnvelopeIcon,
        MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import {SectionId} from '../../../data/SectionIdData'
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import SectionLayout from '../../Layout/DarkSpecial/SectionLayout';
import Reveal from '../../Motion/Reveal';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <SectionLayout
        IsMain={true}
        className="bg-ink-950"
        sectionId={SectionId.Contact}>
      <Reveal className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <EnvelopeIcon className="hidden h-16 w-16 text-frost-100 md:block" />
          <h2 className="text-h2 font-bold text-frost-100"
              id={SectionId.Contact}>{headerText}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <p className="prose leading-6 text-frost-300">{description}</p>
          <div className="order-2 col-span-1 md:order-1 ">
            <dl className="flex flex-col space-y-4 text-base text-ink-400 sm:space-y-2">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];
                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd className="flex items-center">
                      <a
                        className={classNames(
                          '-m-2 flex rounded-md p-2 text-frost-100 hover:text-accent-300 focus:outline-none focus:ring-2 focus:ring-accent-400',
                          {'hover:text-frost-100': !href},
                        )}
                        href={href}
                        target="_blank">
                        <Icon aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-frost-100 sm:h-5 sm:w-5" />
                        <span className="ml-3 text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-stretch">
          <a href="mailto:martin@grellmann.eu?subject=Send from grellmann.app CV">
            {/* v3.4 primary CTA — gradient fill retired (§6), solid primary-400 */}
            <button
              className="mb-2 inline-flex w-full items-center justify-center gap-x-2 rounded-full bg-primary-400 px-8 py-4 text-base font-semibold text-ink-950 shadow-e1 transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primary-300 hover:shadow-glow-primary-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 motion-reduce:hover:transform-none"
              type="button">
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              Send an eMail
            </button>
          </a>
        </div>
      </Reveal>
    </SectionLayout>
  );
});

Contact.displayName = 'Contact';
export default Contact;
