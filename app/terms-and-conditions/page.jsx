import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions',
  description:
    'The terms that apply when you use the ZenStax website or work with ZenStax on software, automation, CRM/ERP, mobile app, network, or security projects in Dubai and the UAE.',
  alternates: { canonical: '/terms-and-conditions' },
  openGraph: {
    title: 'Terms and Conditions | ZenStax',
    description:
      'The terms that apply when you use the ZenStax website or work with ZenStax on a project.',
    url: '/terms-and-conditions',
    type: 'website',
  },
};

const lastUpdated = '9 October 2026';

const sections = [
  {
    id: 'about',
    title: 'About these terms',
    blocks: [
      {
        type: 'p',
        text: 'These Terms and Conditions apply to your use of the ZenStax website and to the services ZenStax provides to business clients in Dubai and across the United Arab Emirates.',
      },
      {
        type: 'p',
        text: 'By using this website, requesting a quotation, or engaging ZenStax, you confirm that you have read and accepted these terms. If you accept them on behalf of a company, you confirm that you are authorised to bind that company.',
      },
      {
        type: 'p',
        text: 'If a signed proposal, quotation, statement of work, or service agreement contains terms that differ from these terms, the signed document prevails for that project.',
      },
    ],
  },
  {
    id: 'services',
    title: 'Our services',
    blocks: [
      { type: 'p', text: 'ZenStax provides:' },
      {
        type: 'ul',
        items: [
          'Custom software, websites, and web applications.',
          'Mobile applications.',
          'AI automation and workflow automation.',
          'CRM and ERP configuration and development.',
          'Network infrastructure, structured cabling, Wi-Fi, CCTV, and security-system installation support.',
        ],
      },
      {
        type: 'p',
        text: 'The scope, deliverables, timeline, and fees for each project are set out in a written proposal, quotation, or agreement. Anything not listed in that document is outside the scope.',
      },
    ],
  },
  {
    id: 'quotations',
    title: 'Quotations and project start',
    blocks: [
      {
        type: 'p',
        text: 'A quotation is valid for the period stated in it. If no period is stated, we may revise the quotation when it has not been accepted within a reasonable time.',
      },
      {
        type: 'p',
        text: 'A project starts when you accept the quotation in writing, including by email or signed document, and any required initial payment has been received.',
      },
      {
        type: 'p',
        text: 'Timelines are estimates. They depend on you providing information, access, and approvals on time.',
      },
    ],
  },
  {
    id: 'responsibilities',
    title: 'Your responsibilities',
    blocks: [
      { type: 'p', text: 'To deliver a project well, we need you to:' },
      {
        type: 'ul',
        items: [
          'Provide accurate and complete information, content, and access on time.',
          'Nominate a contact who can give feedback and approvals.',
          'Make sure you have the right to use the content, data, logos, and materials you give us.',
          'Make sure your use of the delivered systems follows the laws that apply to your business.',
          'Keep your account credentials secure.',
          'For site work, arrange safe access and power, and obtain any permissions needed from landlords, building management, or authorities.',
        ],
      },
    ],
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    blocks: [
      {
        type: 'p',
        text: 'Fees, the payment schedule, and accepted payment methods are stated in your quotation or agreement.',
      },
      {
        type: 'p',
        text: 'Unless stated otherwise, fees are quoted in UAE dirhams (AED) and exclude VAT, which is added at the applicable rate.',
      },
      {
        type: 'p',
        text: 'Costs charged by third parties, such as domain names, hosting, software licences, messaging and API usage, app store accounts, and hardware, are separate from our fees unless the quotation says they are included.',
      },
      {
        type: 'p',
        text: 'If an invoice is not paid by its due date, we may pause work, withhold delivery, or suspend support until payment is received. Refunds, if any, are handled as set out in the quotation or agreement.',
      },
    ],
  },
  {
    id: 'changes',
    title: 'Changes to scope',
    blocks: [
      {
        type: 'p',
        text: 'If you ask for work beyond the agreed scope, we will describe the change and its effect on fees and timeline. Changed work starts only after you approve it in writing.',
      },
      {
        type: 'p',
        text: 'Delays caused by late feedback, missing information, or changing requirements may move delivery dates and may add costs.',
      },
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    blocks: [
      {
        type: 'p',
        text: 'Unless the agreement says otherwise, once you have paid in full you own, or receive a licence to use, the custom deliverables created specifically for you, such as your website design, custom code, and written content.',
      },
      {
        type: 'p',
        text: 'ZenStax keeps ownership of its pre-existing tools, templates, frameworks, and know-how, and of anything created for other clients. Where these form part of a deliverable, you receive a non-exclusive licence to use them as part of that deliverable.',
      },
      {
        type: 'p',
        text: 'Third-party and open-source components remain subject to their own licences, which we do not own or transfer.',
      },
      {
        type: 'p',
        text: 'You keep ownership of your own content, data, and brand materials, and you permit us to use them to deliver the services. With your permission, we may describe a completed project in our portfolio without disclosing confidential information.',
      },
    ],
  },
  {
    id: 'ai-third-party',
    title: 'AI features and third-party services',
    blocks: [
      {
        type: 'p',
        text: 'Some solutions use AI models or third-party platforms, such as cloud hosting, messaging services, and payment or CRM providers. These services are governed by their own terms, availability, and pricing, which we do not control.',
      },
      {
        type: 'p',
        text: 'AI output can be incomplete or wrong. We design workflows with review and approval steps where they matter, but you remain responsible for checking AI-generated content and decisions before relying on them.',
      },
      {
        type: 'p',
        text: 'To the extent permitted by law, we are not responsible for outages, changes, or the discontinuation of third-party services.',
      },
    ],
  },
  {
    id: 'installation',
    title: 'Network, cabling, and CCTV installation',
    blocks: [
      {
        type: 'p',
        text: 'We plan and install according to the agreed survey and plan. Hidden conditions, such as wall construction or existing wiring, can affect the work and may require changes to the plan or the fees.',
      },
      {
        type: 'p',
        text: 'You are responsible for obtaining permission to install at the site and for using CCTV and security systems lawfully, including the signage, privacy, recording, and data retention obligations that apply to your premises and business.',
      },
      {
        type: 'p',
        text: 'Hardware is covered by the manufacturer warranty. Where our agreement includes support, we will help you with warranty claims.',
      },
      {
        type: 'p',
        text: 'Wi-Fi coverage and network performance depend on the building and on the devices you use. We test and report on coverage at handover, but we cannot guarantee performance in conditions outside our control.',
      },
    ],
  },
  {
    id: 'delivery-support',
    title: 'Delivery, testing, and support',
    blocks: [
      {
        type: 'p',
        text: 'We carry out the services with reasonable skill and care and test work before delivery. Please review each deliverable promptly and tell us in writing about any defects.',
      },
      {
        type: 'p',
        text: 'Any warranty period, bug-fix period, maintenance, or support plan is stated in your agreement. Without such a plan, support after handover is available as separate work.',
      },
      {
        type: 'p',
        text: 'No software is completely free of errors, and we do not promise uninterrupted or error-free operation.',
      },
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    blocks: [
      {
        type: 'p',
        text: 'Each party will keep confidential information received from the other private, use it only for the project, and disclose it only to people who need it to deliver the services or where the law requires. This does not apply to information that is already public or that was lawfully obtained from another source.',
      },
    ],
  },
  {
    id: 'data-protection',
    title: 'Data protection',
    blocks: [
      {
        type: 'link',
        text: 'How we handle personal information collected through this website is described in our',
        href: '/privacy-policy',
        label: 'Privacy Policy',
      },
      {
        type: 'p',
        text: 'When we process personal data on your behalf as part of a project, we do so only to deliver the services and to follow your instructions. You are responsible for having a lawful basis to collect and use that data and for informing the people concerned, as required by the data protection laws that apply in the UAE.',
      },
      {
        type: 'p',
        text: 'Where a project needs a separate data processing agreement, we will agree it with you in writing.',
      },
    ],
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    blocks: [
      {
        type: 'p',
        text: 'To the extent permitted by law, ZenStax is not liable for indirect or consequential loss, including loss of profit, revenue, business, or data, arising from the services or from use of this website.',
      },
      {
        type: 'p',
        text: 'The limit on our total liability for each service is set out in the relevant quotation or agreement.',
      },
      {
        type: 'p',
        text: 'Nothing in these terms excludes or limits any liability that cannot be excluded or limited under the laws of the United Arab Emirates.',
      },
    ],
  },
  {
    id: 'website',
    title: 'Using this website',
    blocks: [
      {
        type: 'p',
        text: 'Information on this website is general and may change. It is not professional, legal, or technical advice. Demo pages show illustrative samples with fictional data and do not represent a real client system or guaranteed results.',
      },
      {
        type: 'p',
        text: 'Please do not misuse the website, including by attempting to gain unauthorised access, introducing harmful code, or copying site content for commercial use without permission.',
      },
      {
        type: 'p',
        text: 'The website content, design, and branding belong to ZenStax. Links to third-party sites are provided for convenience, and we are not responsible for their content.',
      },
    ],
  },
  {
    id: 'termination',
    title: 'Cancellation and termination',
    blocks: [
      {
        type: 'p',
        text: 'Either party may end a project by written notice as set out in the agreement. Where no notice period is stated, either party may end it by giving reasonable written notice.',
      },
      {
        type: 'p',
        text: 'If a project ends early, you pay for work completed, materials ordered, and non-cancellable third-party costs up to the end date. We will hand over completed work once payment is received.',
      },
      {
        type: 'p',
        text: 'We may suspend or end services if payment remains overdue after we have given you written notice, if you break these terms, or if continuing would break the law.',
      },
    ],
  },
  {
    id: 'force-majeure',
    title: 'Events outside our control',
    blocks: [
      {
        type: 'p',
        text: 'Neither party is liable for delay or failure caused by events outside its reasonable control, such as power or internet failures, natural disasters, government action, supply shortages, or failures of third-party platforms. The affected party will tell the other promptly and take reasonable steps to resume.',
      },
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing law and disputes',
    blocks: [
      {
        type: 'p',
        text: 'These terms, and any dispute connected with them, are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai.',
      },
      {
        type: 'p',
        text: 'We will first try to resolve any dispute through good-faith discussion. If it cannot be resolved, the courts of Dubai have jurisdiction, unless your agreement states a different forum.',
      },
    ],
  },
  {
    id: 'updates',
    title: 'Changes to these terms',
    blocks: [
      {
        type: 'p',
        text: 'We may update these terms from time to time. The date at the top of this page shows when they were last changed. Changes do not affect a signed agreement for a project that is already under way, unless both parties agree.',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact us',
    blocks: [
      {
        type: 'link',
        text: 'If you have a question about these terms, please reach us through our',
        href: '/contact',
        label: 'contact page',
      },
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className='legal-page'>
      <section className='legal-hero'>
        <div className='container'>
          <p className='section-label'>Legal</p>
          <h1>Terms and Conditions</h1>
          <p>
            The terms that apply when you use the ZenStax website or work with
            us on a software, automation, CRM/ERP, mobile app, network, or
            security project.
          </p>
          <p className='legal-last-updated'>Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className='legal-content-section'>
        <div className='container legal-layout'>
          <nav className='legal-toc' aria-label='Terms and Conditions contents'>
            <p>Contents</p>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title}
              </a>
            ))}
          </nav>

          <div className='legal-content'>
            <p className='legal-intro'>
              Please read these terms carefully. They explain how we work with
              you, what we each expect, and what happens if something changes or
              goes wrong.
            </p>

            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2>{section.title}</h2>

                {section.blocks.map((block, index) => {
                  if (block.type === 'ul') {
                    return (
                      <ul key={index}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === 'link') {
                    return (
                      <p key={index}>
                        {block.text} <Link href={block.href}>{block.label}</Link>.
                      </p>
                    );
                  }

                  return <p key={index}>{block.text}</p>;
                })}
              </section>
            ))}

            <p className='legal-note'>
              These terms are a general framework for working with ZenStax. The
              quotation or agreement for your specific project may add to or
              replace parts of them.
            </p>

            <Link href='/' className='legal-back-link'>
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
