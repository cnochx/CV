import WoodImage from '../images/wood.webp';
import HeaderDataDef from './HeaderDataDef';

/**
 * Shared header content configuration for all main portfolio sections.
 *
 * Dependencies:
 * - Uses `HeaderData` as the structural contract for all section header entries.
 * - Uses static image assets such as `WoodImage` for optional section background or media content.
 *
 * Operations:
 * - Defines the title, subtitle, description, optional image source, variant, and spacer behavior
 *   for each supported portfolio section.
 * - Centralizes all section header content in one shared configuration object.
 * - Supports JSX-based rich text descriptions for sections that require formatted content.
 * - Allows sections to remain intentionally empty until content is added later.
 *
 * Data model:
 * - Each top-level key represents a section group, such as `HeroMain`, `SkillsMain`, or `ContactMain`.
 * - Each section group stores one or more header configuration entries.
 * - Each entry follows the shared `HeaderData` contract and can define text, styling, image, and spacing behavior.
 *
 * @constant {HeaderData}
 */
const HeaderData: HeaderDataDef = {
  HeroMain: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  AboutMain: [{
    Title: 'About Martin Grellmann, Senior Full-Stack Engineer',
    Description: (
      <>
        <p>Who I am – German citizen with unrestricted work and residence permit in Brazil. Architect, Modernizer,
          Consultant - Senior software engineer with 20+ years of experience in full-stack web development and recent specialization
          in modern SAP full-stack development, including SAP BTP, S/4HANA modernization, ABAP, CDS, OData, Fiori/UI5 and API integration.</p>

        <p>On the web side, I’ve spent many years building and running Drupal sites, handling migrations, performance tuning
          and technical SEO/GEO to keep organic traffic and conversions stable during change.</p>
      </>
    ),
  }],
  ContractorMain: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: WoodImage,
    ShowSpacer: false,
  }],
  ContractorSolve: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  ContractorFocus: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  ContractorDifferent: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsMain: [{
    Variant: 'dark',
    Title: 'Skills - Senior Full-Stack Engineer Martin Grellmann',
    ImageSrc: WoodImage,
    SubTitle: '',
    Description: (
      <>
        <ul className="list-none mt-10 pl-0">
        <li className="mt-6 pl-0"><strong className="font-bold text-neutral-100">SAP development / Architecture</strong><br />
          Architects Clean-Core-ready S/4HANA backends end to end – from classic ABAP and CDS views to OData, RAP/CAP on
          SAP BTP and Fiori / UI5 frontends – so modernization projects ship without breaking the core.</li>

        <li className='mt-6 pl-0'><strong className="font-bold text-neutral-100">Web / API engineering</strong><br />
          Designs and implements robust JavaScript/TypeScript services with React and Node.js, Next.js, Express and
          thoroughly tested REST APIs, ready to integrate SAP or legacy systems into modern, scalable web products.</li>

        <li className='mt-6 pl-0'><strong className="font-bold text-neutral-100">PHP / Drupal / Platforms</strong><br />
          Builds and runs high-traffic PHP/Drupal platforms on solid LAMP and cloud infrastructure, covering CI tooling,
          package management and SQL databases so business-critical sites stay fast, secure and maintainable.</li>

        <li className="mt-6 pl-0"><strong className="font-bold text-neutral-100">Methods / Quality</strong><br />
          Applies Clean Code, SOLID, disciplined refactoring, Git-based workflows and agile collaboration to keep projects
          productive and codebases stable, even on long-running SAP and full-stack projects in demanding enterprise
          environments.</li>
        </ul>
      </>
    ),
    ShowSpacer: true,
  }],
  SkillsSapDev: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsWebDev: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsDrupalDev: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsMethods: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  CvMain: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  CvIs: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  CvFinca: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  CvBa: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  CvSc: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  CvFf: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  EducationMain: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  EducationSa: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  EducationSm: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  EducationWd: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  EducationIc: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
  ContactMain: [{
    Variant: null,
    Title: '',
    SubTitle: '',
    Description: (
      <>
      </>
    ),
    ImageSrc: '',
    ShowSpacer: false,
  }],
};

export default HeaderData;