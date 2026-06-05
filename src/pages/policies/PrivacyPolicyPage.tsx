import PolicyLayout from "@/components/PolicyLayout/PolicyLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" updated="5 Jun 2026">
      <div className="policy-callout">
        <p><strong>The important things to know</strong></p>
        <ul>
          <li>The Operator running the Service controls personal data; legal details appear in Imprint / Legal Information.</li>
          <li>Data processing supports Service provision, legal compliance (AML/CFT, tax, financial regulations), fraud prevention, and service improvement.</li>
          <li>Specialised service providers handle KYC/AML, fraud prevention, and sanctions screening functions.</li>
          <li>AML/KYC, transaction, and tax records are retained as legally required, even after Account closure.</li>
          <li>Data protection rights include access, rectification, erasure, restriction, portability, and objection — some limited by legal retention requirements.</li>
          <li>Account and transaction information may be reported to tax and other authorities across borders per EU and national rules.</li>
          <li>Data transfers outside the EEA use appropriate safeguards like standard contractual clauses.</li>
          <li>Cookies and similar technologies are used; details and management options appear in the Cookie Policy.</li>
        </ul>
      </div>

      <h2>1. Controller and contact details</h2>
      <p>This Policy explains personal data processing connected to the Service. The controller of your personal data is:</p>
      <p><strong>LUNTRA sp. z o.o.</strong><br />
      ul. Romana Dmowskiego 3/9, 50-203 Wrocław, Poland<br />
      KRS: 0001143324 · NIP: 8982315211 · REGON: 540382294</p>
      <p>You can contact the Operator about data protection matters via the in-app chat, the contact / support options within the Service, or by post at the address above. Further details appear in Imprint / Legal Information. If a Data Protection Officer or dedicated privacy contact is appointed, notice will be provided in Imprint / Legal Information or a Policy update.</p>

      <h2>2. Scope of this Policy and relationship with third-party platforms</h2>
      <p>This Policy applies when you access or use the Service, create an Account, participate in identity verification or KYC/AML processes, communicate with the provider, or when data processing is legally required or protects legitimate interests.</p>
      <p>When accessing the Service through Integrated Applications or third-party platforms, those third parties act as independent controllers for their own processing under their own privacy policies. The Operator acts as independent controller for Service-related processing. In exceptional cases where joint control applies, obligations will be met under applicable law.</p>
      <p>Technical integrations or data exchanges do not create joint controller relationships. This Policy does not cover processing by Integrated Application operators or other third-party services; their own privacy policies apply.</p>

      <h2>3. Categories of personal data we process</h2>
      <p>Processing depends on Service usage and legal requirements:</p>

      <h3>Identification and KYC data</h3>
      <ul>
        <li>Name, surname, date and place of birth, nationality, citizenship</li>
        <li>Address, contact details, government-issued identifiers (ID card, passport number, tax ID where permitted)</li>
        <li>Copies or images of identity documents and proof-of-address documents</li>
        <li>Photographs, video recordings and biometric templates used for identity verification and liveness detection where permitted</li>
        <li>Occupation, employer, nature of business information</li>
        <li>Beneficial owner and control structure information for legal entities</li>
      </ul>

      <h3>Account and transactional data</h3>
      <ul>
        <li>Account identifiers, usernames, access credentials (hashed or protected)</li>
        <li>Transaction history in Digital Assets and Fiat Currencies</li>
        <li>Account balances where applicable</li>
        <li>Funding source information (linked bank accounts, payment methods in tokenized or masked form)</li>
        <li>Order, trade, and transaction details</li>
      </ul>

      <h3>Compliance, risk and tax-related data</h3>
      <ul>
        <li>Risk scores and flags from systems or service providers</li>
        <li>Sanctions screening, PEP status, and adverse media information</li>
        <li>Internal notes and communications relevant to KYC/AML assessment, fraud prevention, or disputes</li>
        <li>Tax residence, tax identification numbers, and transaction value summaries required by law</li>
      </ul>

      <h3>Technical and usage data</h3>
      <ul>
        <li>IP address, device identifiers, browser type and version, operating system</li>
        <li>Access times, pages or screens viewed, clicks and usage data</li>
        <li>Referrer URLs and Integrated Application information</li>
        <li>Cookie identifiers and similar technologies</li>
      </ul>

      <h3>Communication data</h3>
      <ul>
        <li>Message content sent to the provider (emails, chat, support tickets)</li>
        <li>Associated metadata (timestamps, sender/recipient information)</li>
      </ul>

      <h3>Marketing and preference data</h3>
      <ul>
        <li>Marketing consents and preferences</li>
        <li>Interactions with messages or campaigns (whether email was opened)</li>
        <li>Feedback from surveys or reviews</li>
      </ul>

      <h2>4. Sources of personal data</h2>
      <p>Personal data comes from:</p>
      <ul>
        <li>You directly through the Service, onboarding, forms, or communications</li>
        <li>Integrated Applications or partners passing data to enable the Service</li>
        <li>Third-party verification and KYC/AML service providers</li>
        <li>Payment service providers, banks, and financial institutions</li>
        <li>Publicly accessible registers and sources (company registers, sanctions lists, court or regulatory databases)</li>
        <li>The provider's own systems generating technical, usage, risk, transactional, and analytics data</li>
        <li>Public authorities or third parties lawfully providing information for compliance, tax, enforcement, or fraud prevention</li>
      </ul>

      <h2>5. Purposes and legal bases for processing</h2>
      <p>Processing occurs only with legal basis under applicable data protection law, particularly GDPR.</p>

      <h3>5.1 Provision of the Service and performance of a contract</h3>
      <p><strong>Purpose:</strong> Create and manage Account; provide and operate the Service including processing orders and transactions; provide customer support and handle requests.</p>
      <p><strong>Legal basis:</strong> Performance of contract or steps taken at your request prior to contract entry (Article 6(1)(b) GDPR); for related processing, legitimate interests (Article 6(1)(f) GDPR) such as ensuring Service security and stability.</p>

      <h3>5.2 Compliance with legal obligations (including AML/CFT, tax and financial regulations)</h3>
      <p><strong>Purpose:</strong> Conduct KYC and customer due diligence; perform ongoing monitoring, sanctions screening, and risk assessments; comply with the EU "Travel Rule" (Regulation (EU) 2023/1113) by collecting, transmitting, receiving and verifying information on the originator and beneficiary of crypto-asset transfers; keep records and report to competent authorities as required; comply with tax, accounting, reporting, and regulatory obligations including administrative cooperation and financial information reporting.</p>
      <p><strong>Legal basis:</strong> Compliance with legal obligations to which the Controller is subject (Article 6(1)(c) GDPR).</p>

      <h3>5.3 Security, fraud prevention and risk management</h3>
      <p><strong>Purpose:</strong> Prevent, detect and investigate fraud, abuse, unauthorised access, money laundering, terrorist financing, sanctions evasion, and law violations; protect system and Service integrity and security; manage risk and enforce rights.</p>
      <p><strong>Legal basis:</strong> Legitimate interests in protecting the Service, Users, and business, and in enforcing rights (Article 6(1)(f) GDPR); in some cases, compliance with legal obligations (Article 6(1)(c) GDPR).</p>

      <h3>5.4 Analytics and Service improvement</h3>
      <p><strong>Purpose:</strong> Understand Service usage; develop and improve Service, user experience, and security; create aggregated non-identifying statistics.</p>
      <p><strong>Legal basis:</strong> Legitimate interests in improving and developing the Service (Article 6(1)(f) GDPR); where required by law such as non-essential cookies, your consent (Article 6(1)(a) GDPR).</p>

      <h3>5.5 Marketing and communication</h3>
      <p><strong>Purpose:</strong> Send service-related messages like security alerts, updates, and administrative communications; send marketing messages about products and services where permitted; show personalised content or offers where agreed.</p>
      <p><strong>Legal basis:</strong> For service-related communications, performance of contract (Article 6(1)(b) GDPR) and/or legitimate interests (Article 6(1)(f) GDPR); for electronic direct marketing to existing customers, legitimate interests in promoting services (Article 6(1)(f) GDPR) subject to opt-out rights; in other cases where required by law, your consent (Article 6(1)(a) GDPR).</p>

      <h3>5.6 Legal claims and compliance</h3>
      <p><strong>Purpose:</strong> Establish, exercise, or defend legal claims; respond to lawful requests from courts, regulators, and public authorities; cooperate with audits and investigations.</p>
      <p><strong>Legal basis:</strong> Legitimate interests in protecting rights of the provider and Users (Article 6(1)(f) GDPR); compliance with legal obligations (Article 6(1)(c) GDPR).</p>

      <h2>6. Recipients and categories of recipients</h2>
      <p>Personal data may be shared with these categories only as necessary for relevant purposes:</p>
      <ul>
        <li><strong>Group entities:</strong> Other companies within the same group as the Operator for internal administration, risk management, compliance, or service provision.</li>
        <li><strong>Verification providers and KYC/AML partners:</strong> Specialised providers of identity verification, document authentication, sanctions screening, transaction monitoring, and fraud prevention.</li>
        <li><strong>Payment service providers and banks:</strong> Processing Fiat Currency payments, withdrawals, settlements, chargebacks, and related controls.</li>
        <li><strong>Counterparty crypto-asset service providers and intermediaries:</strong> When you send or receive crypto-assets, originator and beneficiary information is shared with the counterparty's crypto-asset service provider and any intermediaries as required by the EU Travel Rule (Regulation (EU) 2023/1113).</li>
        <li><strong>Technical and infrastructure providers:</strong> IT hosting, cloud, security, analytics, communications, and other technology service providers.</li>
        <li><strong>Professional advisors:</strong> Lawyers, auditors, consultants, accountants for legal, compliance, or business purposes.</li>
        <li><strong>Public authorities and regulators:</strong> Financial intelligence units, law enforcement, courts, data protection authorities, tax authorities, and other public bodies where required by law or legitimately requested, including AML/CFT, tax reporting, administrative cooperation, sanctions, or other regulatory obligations.</li>
        <li><strong>Third parties in corporate transactions:</strong> Potential or actual purchasers, investors, or other parties and their advisors in connection with merger, acquisition, restructuring, or asset sale, subject to appropriate confidentiality safeguards.</li>
      </ul>
      <p>The provider does not sell personal data to third parties.</p>

      <h2>7. International data transfers</h2>
      <p>Some recipients may be located outside the European Economic Area or process data outside the EEA. Where transferring personal data to countries without adequate data protection as recognised by the European Commission, appropriate safeguards are in place, such as standard contractual clauses approved by the Commission or other mechanisms recognised by applicable law.</p>
      <p>Contact the provider for more information on international transfers and, where applicable, to obtain copies of relevant safeguards (subject to confidentiality redactions).</p>

      <h2>8. Retention of personal data</h2>
      <p>Personal data is kept only as long as necessary for collection purposes or as required by applicable law. Retention periods depend on data category:</p>
      <ul>
        <li><strong>KYC/AML, transactional and tax-related data:</strong> Kept for at least the period required by AML, tax, and financial regulations (potentially several years after business relationship end or transaction completion) and longer where necessary for legal claims or investigations.</li>
        <li><strong>Account data:</strong> Retained for the life of your Account and reasonable period after closure to manage follow-up issues, comply with record-keeping obligations, and protect rights.</li>
        <li><strong>Technical and analytics data:</strong> Retained for shorter periods necessary for security, analysis, and improvement, unless longer retention is justified.</li>
        <li><strong>Marketing data:</strong> Retained until opt-out or consent withdrawal and reasonable period thereafter to keep preference records.</li>
      </ul>
      <p>When data is no longer needed, it will be deleted or anonymised unless retention is required or permitted by law.</p>

      <h2>9. Automated decision-making and profiling</h2>
      <p>Automated systems, including profiling, support KYC/AML risk assessment, sanctions screening, transaction monitoring, fraud detection and prevention, security and access control, product analytics and improvement, and selection of relevant information or offers where permitted.</p>
      <p>These systems identify potentially suspicious or high-risk activities and manage risks effectively. Where such automated processing produces legal effects concerning you or similarly significantly affects you and where required by law, appropriate safeguards protect your rights, freedoms, and legitimate interests, and you have the right to obtain human intervention, express your point of view, and contest the decision.</p>

      <h2>10. Your rights</h2>
      <p>Under data protection law, you have the following rights concerning your personal data, subject to applicable conditions and limitations:</p>
      <ul>
        <li><strong>Right of access:</strong> Obtain confirmation whether your personal data is processed and, if so, receive a copy and certain information.</li>
        <li><strong>Right to rectification:</strong> Have inaccurate or incomplete personal data corrected.</li>
        <li><strong>Right to erasure:</strong> Request deletion of your personal data in certain circumstances (where no longer needed or where you withdraw consent and there is no other legal basis).</li>
        <li><strong>Right to restriction of processing:</strong> Request that processing be restricted in certain cases (while verifying accuracy or the processing basis).</li>
        <li><strong>Right to data portability:</strong> Receive your provided personal data in structured, commonly used, machine-readable format and transmit it to another controller where technically feasible and processing is based on consent or contract and carried out by automated means.</li>
        <li><strong>Right to object:</strong> Object, on grounds relating to your particular situation, to processing based on legitimate interests, including profiling; the provider will no longer process your data for those purposes unless demonstrating compelling legitimate grounds.</li>
        <li><strong>Right to object to direct marketing:</strong> Object at any time to personal data processing for direct marketing, including related profiling.</li>
        <li><strong>Right to withdraw consent:</strong> Where processing is based on your consent, withdraw it at any time; this will not affect the lawfulness of processing before withdrawal.</li>
      </ul>
      <p>Some rights may be restricted where the provider is legally required to retain or process certain data, for example under AML Regulations, tax laws, or other regulatory requirements. In particular, data legally required for AML/CFT, tax, or record-keeping purposes may not be fully deleted or restricted.</p>
      <p>To exercise your rights, contact the provider using Section 1 details. Identity verification may be requested before responding.</p>

      <h2>11. Right to lodge a complaint</h2>
      <p>If you believe personal data processing violates data protection law, you have the right to lodge a complaint with the competent supervisory authority.</p>
      <p>The primary supervisory authority for the Operator is:</p>
      <p><strong>President of the Personal Data Protection Office</strong> (Prezes Urzędu Ochrony Danych Osobowych)<br />
      ul. Stawki 2, 00-193 Warsaw, Poland</p>
      <p>You may also have the right to lodge a complaint with the data protection authority in the EU Member State of your habitual residence, place of work, or place of the alleged infringement.</p>

      <h2>12. Cookies and similar technologies</h2>
      <p>Cookies and similar technologies are used in connection with the Service for enabling basic functionality and security, remembering preferences, performing analytics and improving the Service, and where applicable, providing personalised content or marketing.</p>
      <p>For more information, including cookie types and management choices, see the Cookie Policy and cookie settings available in the Service. Where required by law, consent is obtained before setting non-essential cookies or similar technologies.</p>

      <h2>13. Changes to this Policy</h2>
      <p>This Policy may be updated to reflect changes in applicable law, processing activities, or services. The latest version will be published within the Service and will indicate the update date.</p>
      <p>Where changes are material or required by law, the provider will endeavour to inform you in advance through the Service or by other appropriate means. Continued Service use after the updated Policy takes effect constitutes acknowledgement of the updated Policy, without prejudice to any specific consent requirements that may apply.</p>

      <h2>14. Contact</h2>
      <p>If you have questions about this Policy, how personal data is processed, or wish to exercise data protection rights, contact the provider using Imprint / Legal Information details or via contact/support channels provided within the Service.</p>
    </PolicyLayout>
  );
}
