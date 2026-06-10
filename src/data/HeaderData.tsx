import WoodImage from '../images/wood.webp';
import HeaderData from './HeaderDataDef';
import {getFontColorClass} from '../utils/SectionHelper';

// Set Font Color for Theme Variant
const fontColor: string = getFontColorClass('dark');

const HeaderData: HeaderData = {
  HeroMain: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  AboutMain: [{
    Variant: 'dark-pill-bg',
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  ContractorMain: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: WoodImage,
    ShowSpacer: false,
  }],
  ContractorSolve: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  ContractorFocus: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  ContractorDifferent: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsMain: [{
    Variant: 'dark',
    Title: "Skills - Senior Full-Stack Engineer Martin Grellmann",
    SubTitle: "",
    Description: (
      <>
        <p><strong className={`${fontColor} font-bold`}>SAP development / Architecture</strong><br />
        Architects Clean-Core-ready S/4HANA backends end to end – from classic ABAP and CDS views to OData, RAP/CAP on
          SAP BTP and Fiori / UI5 frontends – so modernization projects ship without breaking the core.</p>

        <p><strong className={`${fontColor} font-bold`}>Web / API engineering</strong><br />
        Designs and implements robust JavaScript/TypeScript services with React and Node.js, Next.js, Express and
          thoroughly tested REST APIs, ready to integrate SAP or legacy systems into modern, scalable web products.</p>

        <p><strong className={`${fontColor} font-bold`}>PHP / Drupal / Platforms</strong><br />
        Builds and runs high-traffic PHP/Drupal platforms on solid LAMP and cloud infrastructure, covering CI tooling,
          package management and SQL databases so business-critical sites stay fast, secure and maintainable.</p>

        <p><strong className={`${fontColor} font-bold`}>Methods / Quality</strong><br />
        Applies Clean Code, SOLID, disciplined refactoring, Git-based workflows and agile collaboration to keep projects
          productive and codebases stable, even on long-running SAP and full-stack projects in demanding enterprise
          environments.</p>
      </>
    ),
    ShowSpacer: true,
  }],
  SkillsSapDev: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsWebDev: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsDrupalDev: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  SkillsMethods: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ShowSpacer: false,
  }],
  CvMain: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  CvIs: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  CvFinca: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  CvBa: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  CvSc: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  CvFf: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  EducationMain: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  EducationSa: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  EducationSm: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  EducationWd: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  EducationIc: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }],
  ContactMain: [{
    Variant: null,
    Title: "",
    SubTitle: "",
    Description: (
      <>
      </>
    ),
    ImageSrc: "",
    ShowSpacer: false,
  }]
}
export default HeaderData;