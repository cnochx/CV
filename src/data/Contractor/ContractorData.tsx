import WoodImage from '../../images/wood.webp';
import {Contractor, ContractorCont} from './ContractorDataDef';


/**
 * Freelance Section
 */
export const ContractorData: Contractor = {
  Solve: {
    Title: 'Problems I solve',
    ShowSpacer: true,
    Description: (
      <>
        <p>
          I help companies with heavily customized SAP systems to reduce technical debt,
          get ready for S/4HANA and move towards a clean, upgrade-friendly core.
          That typically means refactoring legacy ABAP, stabilizing critical
          interfaces, and designing API-driven architectures that play nicely
          with cloud and non-SAP systems.
        </p>

        <p>
          My background: 20+ years in enterprise and web development, with recent
          years focused on ABAP Objects, CDS/OData, SAP BTP, UI5/Fiori and
          API-centric integration scenarios.
          <br />
          I help organizations that are stuck between a heavily customized ECC
          system and the pressure to move towards a lean, upgradeable S/4HANA
          and cloud landscape.
        </p>

        <p>
          If you’re looking at S/4HANA or already there, you probably see at least
          some of these challenges:
        </p>
      </>
    ),
    Detail: [
      {
        iKey: 1,
        label: 'Legacy Code Debt',
        text: 'Too much legacy ABAP and Z-logic, poorly documented and hard to test',
      },
      {
        iKey: 2,
        label: 'Upgrade Risk',
        text: 'Business-critical custom code that makes every upgrade or support package risky',
      },
      {
        iKey: 3,
        label: 'Integration Spaghetti',
        text: '“Spaghetti” integrations using old RFC/BAPI calls and point-to-point connections, process-oriented',
      },
      {
        iKey: 4,
        label: 'Missing Clean-Core Strategy',
        text: 'No clear strategy for clean core, extensions and SAP BTP',
      },
      {
        iKey: 5,
        label: 'Delivery Pressure',
        text: 'Pressure from the business to deliver new features faster – without breaking what works',
      },
    ],
  },
  Focus: {
    Title: 'My work focuses on',
    ShowSpacer: true,
    Description: (
      <>
        <p>
          I help organizations modernize heavily customized SAP landscapes by combining clean‑core architecture, code
          remediation, robust integration design, and modern user experiences. That means defining target architectures
          that keep your S/4HANA core close to standard, moving extensions into the right layers (in‑app, ABAP Cloud,
          and BTP side‑by‑side), and systematically transforming custom code so it becomes upgrade‑safe and maintainable
          again.</p>
        <p>Along the way, I replace fragile point‑to‑point interfaces with API‑driven OData/REST integrations that work
          across on‑prem and cloud, and build Fiori/UI5 and web frontends that match real business processes.</p>
      </>
    ),
    Detail: [
      {
        iKey: 1,
        label: 'Architecture & clean‑core strategy',
        text: 'Designing target architectures that keep the SAP core close to standard, move extensions into the right layers (in‑app, ABAP Cloud, BTP side‑by‑side) and reduce modification risk.',
      },
      {
        iKey: 2,
        label: 'Code modernization & S/4HANA readiness',
        text: 'Assessing custom code, refactoring or retiring where needed, and aligning extensions with SAP’s extensibility and upgrade guidance so your landscape becomes maintainable again.',
      },
      {
        iKey: 3,
        label: 'API‑driven integration',
        text: 'Replacing fragile point‑to‑point integrations with well‑designed OData/REST APIs and integration patterns that work in both on‑prem and cloud scenarios.',
      },
      {
        iKey: 4,
        label: 'Usable, modern UIs',
        text: 'Building Fiori/UI5 and web frontends that reflect real‑world processes instead of technical tables, increasing adoption and reducing “Excel on the side”.',
      },
    ],
  },
  Different: {
    Title: 'Why I’m different',
    ShowSpacer: true,
    Description: (
      <>
        <p>
          I think and work like an architect, not just a developer: clear target architecture, step‑by‑step roadmap,
          and honest trade‑offs instead of “just one more custom enhancement”. I speak the language of both business
          and IT, and I’m used to turning vague modernization goals into concrete, deliverable work packages.
        </p>

        <p>
          That means I do not just look at ABAP code in isolation, but at how
          custom code, extensions, interfaces and platform decisions fit together
          in a maintainable target architecture.
        </p>

        <p>Here are many strong ABAP developers. What I offer is a specific mix of roles:</p>
      </>
    ),
    Detail: [
      {
        iKey: 1,
        label: 'Architect',
        text: 'I create a clear blueprint: where you are, where you want to go, and which steps get you there with acceptable risk and budget. No “magic big bang”, but realistic, incremental modernization.',
      },
      {
        iKey: 2,
        label: 'Modernization expert',
        text: 'I enjoy working in brownfield landscapes with technical debt. I can read old code, talk to the people who built it, and translate that into cleaner, testable, extensible solutions that respect your existing investments.',
      },
      {
        iKey: 3,
        label: 'Consultant ',
        text: 'I don’t just deliver code, I explain trade‑offs and options in a way decision‑makers understand: what must stay in the core, what should move to BTP, and what should be retired.',
      },
    ],
  },
};

export default Contractor;

export const ContractorContData: ContractorCont = {
  ImageSrc: WoodImage,
  Title: 'Independent SAP Engineer & Architect',
  Prefix: (
    <>
      <p>I’m an SAP engineer and architect who enjoys untangling heavily customized landscapes and turning them into
        clean‑core, upgradeable systems.</p>
      <p>I work where ABAP, architecture and integration meet: clarifying the real problems, designing a realistic
        target picture, and then modernizing code, interfaces and UIs step by step so S/4HANA becomes something your
        teams can actually live with, not just survive.</p>
    </>
  ),
  Suffix: (
    <>
      <p>I’m direct, transparent, and used to speaking with both C‑level and developers. My goal is not to sell the
        biggest project, but helping to make your SAP landscape simpler, safer and easier to evolve.</p>
      <p>In my experience, a quick-and-dirty implementation may resolve the issue quickly, but it ultimately requires
        more
        effort overall. Therefore, I generally recommend a high-quality implementation — it may require more effort
        initially,
        but it ensures that the technical details are implemented properly.</p>
    </>
  ),
};

