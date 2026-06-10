import AdditionalElements from './AdditionalTextDef';

/**
 * Shared additional text configuration for selected sections.
 *
 * Dependencies:
 * - Uses the `AdditionalElements` interface from `AdditionalTextDef`
 *   as the structural contract for all configured sections.
 *
 * Operations:
 * - Provides prefix and suffix copy for the contractor section.
 * - Provides suffix copy for the main skills section.
 * - Provides shared labels and helper text for individual skill items.
 *
 * Content:
 * - `ContractorMain` explains your SAP engineering and architecture focus,
 *   how you approach modernization work, and your general working style.
 * - `SkillsMain` describes how your skills are built and validated in practice.
 * - `SkillsItem` defines short labels used around experience values and role text.
 *
 * @constant {AdditionalElements}
 */
const AdditionalElements: AdditionalElements = {
  ContractorMain: {
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
          more effort overall. Therefore, I generally recommend a high-quality implementation — it may require more effort
          initially, but it ensures that the technical details are implemented properly.</p>
      </>
    ),
  },
  SkillsMain: {
    Suffix: (
      <>
        <p>All of my skills are self-taught, built through deliberate learning and proven in real-world practice. I don’t
          just collect tools – I design my own learning paths, break complex topics into concrete experiments, and keep
          what works. I only adopt approaches and technologies that prove genuinely useful in practice, so what you see
          here is what has actually helped to build and run real systems.</p>
      </>
    ),
  },
  SkillsItem: {
    ExperiencePrefix: 'Experience',
    ExperienceSuffix: 'years',
    RoleText: 'Applied mainly in the role of:',
  },
};

export default AdditionalElements;