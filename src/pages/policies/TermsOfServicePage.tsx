import PolicyLayout from "@/components/PolicyLayout/PolicyLayout";

export default function TermsOfServicePage() {
  return (
    <PolicyLayout title="Terms of Use" updated="5 Jun 2026">
      <div className="policy-callout">
        <p><strong>The important things to know</strong></p>
        <ul>
          <li>Contract between user and the Operator running the "MeinBit" brand service.</li>
          <li>Legal eligibility required; KYC/AML checks may be necessary.</li>
          <li>Digital Assets involve significant risk; no investment, tax, or legal advice provided.</li>
          <li>Users responsible for account security and legal compliance including taxes.</li>
          <li>Service may be suspended or terminated for legal, regulatory, or compliance reasons.</li>
          <li>Liability limited to maximum extent permitted by law.</li>
          <li>Governed by Polish law with mandatory EU consumer protections where applicable.</li>
        </ul>
      </div>

      <h2>1. Definitions and scope</h2>
      <p>1.1 Key definitions include:</p>
      <ul>
        <li><strong>Service</strong>: Digital asset services under the "MeinBit" brand across websites, apps, and integrated platforms.</li>
        <li><strong>Operator</strong>: Polish legal entity providing the Service.</li>
        <li><strong>User / you</strong>: Natural person or legal entity accessing the Service.</li>
        <li><strong>Account</strong>: Registered user account within the Service.</li>
        <li><strong>Digital Assets</strong>: Virtual currencies, tokens, or digital value representations.</li>
        <li><strong>Fiat Currency</strong>: Legal tender from sovereign states or monetary authorities.</li>
        <li><strong>Integrated Application</strong>: Third-party services where Service is embedded.</li>
        <li><strong>Applicable Law</strong>: All relevant laws including Polish law and EU regulations.</li>
      </ul>
      <p>1.2 "We / us / our" refers to Operator; "you / your" refers to User.</p>
      <p>1.3 Imprint / Legal Information prevails regarding Operator identification.</p>
      <p>1.4 These Terms govern Service access; additional terms may apply to specific features and prevail in conflicts.</p>

      <h2>2. Acceptance of the Terms</h2>
      <p>2.1 Creating an Account, accessing the Service, or clicking accept constitutes agreement to these Terms.</p>
      <p>2.2 Non-acceptance requires discontinuation of Service use.</p>
      <p>2.3 Users on behalf of legal entities warrant authority to bind that entity.</p>

      <h2>3. Eligibility</h2>
      <p>3.1 Service use permitted only if:</p>
      <ul>
        <li>At least 18 years old or legal age in jurisdiction</li>
        <li>Full legal capacity to enter binding contracts</li>
        <li>No Applicable Law prohibitions preventing Service use</li>
      </ul>
      <p>3.2 Service use prohibited if:</p>
      <ul>
        <li>Located in jurisdiction where Service provision is restricted</li>
        <li>Subject to sanctions or listed on sanctioned persons lists</li>
        <li>Use would breach Applicable Law including AML/CFT or financial regulations</li>
      </ul>
      <p>3.3 Operator may restrict access from certain jurisdictions or User categories for legal, regulatory, or risk reasons.</p>

      <h2>4. Description of the Service</h2>
      <p>4.1 Service may enable:</p>
      <ul>
        <li>Exchange between Digital Assets and Fiat Currency</li>
        <li>Exchange between different Digital Assets</li>
        <li>Holding Digital Asset and Fiat Currency balances</li>
        <li>Additional functionality introduced over time</li>
      </ul>
      <p>4.2 Available features depend on residence, verification status, Integrated Application use, and other factors.</p>
      <p>4.3 No guarantee of continuous availability of particular Digital Assets, currency pairs, payment methods, partners, or features; these may be modified or removed at Operator's discretion within legal compliance.</p>
      <p>4.4 Service does not provide personal bank accounts, EU Payment Services Directive accounts, or deposit guarantee scheme coverage unless expressly stated.</p>
      <p>4.5 Users remain solely responsible for third-party wallets, interfaces, or accounts; Operator does not generate, store, or manage private keys for third-party wallets unless expressly stated.</p>

      <h2>5. KYC/AML and compliance</h2>
      <p>5.1 Operator must comply with anti-money-laundering and counter-terrorist-financing obligations as obliged institution.</p>
      <p>5.2 Users agree to comply with KYC/AML requests including providing information and documents as reasonably requested.</p>
      <p>5.3 Third-party verification providers may conduct identity verification, sanctions screening, transaction monitoring, and risk checks per the KYC/AML Policy and Privacy Policy.</p>
      <p>5.4 Information from third-party Integrated Applications may be considered; however, Operator remains solely responsible for AML/CFT compliance and reserves right to conduct independent checks and request direct documentation.</p>
      <p>5.5 Non-provision of requested information or unsuccessful verification may result in:</p>
      <ul>
        <li>Account opening refusal or maintenance discontinuation</li>
        <li>Feature restriction or suspension</li>
        <li>Service access termination</li>
      </ul>
      <p>5.6 The KYC/AML Policy forms part of these Terms.</p>

      <h2>6. Integrated Applications and third-party platforms</h2>
      <p>6.1 Service through Integrated Applications:</p>
      <ul>
        <li>These Terms govern User-Operator relationship regarding Service</li>
        <li>Third-party operator terms govern User-third party relationship</li>
      </ul>
      <p>6.2 Integrated Applications are independent third-party operated; User assumes risk of use.</p>
      <p>6.3 Operator not responsible for Integrated Application content, security, availability, compliance, performance, or operator decisions.</p>
      <p>6.4 Service availability through Integrated Applications creates no partnership, joint venture, employment, agency, or corporate group relationship.</p>
      <p>6.5 Integrated Applications and third parties lack authority to make Operator promises, representations, bindings, or Term modifications.</p>
      <p>6.6 Service-related inconsistencies between Integrated Application terms and these Terms result in these Terms prevailing.</p>

      <h2>7. Your Account and security</h2>
      <p>7.1 Users responsible for Account credential confidentiality and security and all Account activities.</p>
      <p>7.2 Unauthorised access or security breaches must be reported without undue delay.</p>
      <p>7.3 Operator may implement additional security measures (e.g., multi-factor authentication) which users must follow.</p>
      <p>7.4 Operator not responsible for unauthorised access losses from credential mishandling or security instruction non-compliance, except where mandatory law requires responsibility.</p>

      <h2>8. User obligations and prohibited activities</h2>
      <p>8.1 Service use must comply with these Terms, Operator policies, and Applicable Law.</p>
      <p>8.2 Users must not:</p>
      <ul>
        <li>Use Service for unlawful purposes including money laundering, terrorist financing, fraud, sanctions evasion, tax evasion, market manipulation, or criminal conduct</li>
        <li>Use Service for high-risk or unacceptable activities per internal policies</li>
        <li>Circumvent KYC/AML, sanctions, tax reporting, or compliance measures</li>
        <li>Interfere with Service operation or related systems</li>
        <li>Access another User's Account</li>
        <li>Use automated access means (bots, scrapers) without express authorisation</li>
        <li>Reverse engineer, decompile, or disassemble Service components except as legally permitted</li>
        <li>Infringe intellectual property rights</li>
      </ul>
      <p>8.3 Operator may restrict or terminate Accounts for reasonably believed prohibited activity engagement.</p>

      <h2>9. Fees, pricing and taxes</h2>
      <p>9.1 Service fees charged for certain transactions or features, displayed in interface or separate fee schedule.</p>
      <p>9.2 Transaction initiation or feature use constitutes fee payment agreement.</p>
      <p>9.3 Fee updates comply with Section 16; changes don't apply retroactively to completed transactions.</p>
      <p>9.4 Users responsible for applicable taxes including income, capital gains, withholding, and stamp taxes; Operator provides no tax advice.</p>
      <p>9.5 Tax reporting and administrative cooperation compliance may require Operator to collect, store, and report Account, User, and transaction information to tax or authorities, including cross-border exchange per Privacy Policy.</p>

      <h2>10. Risks, relationship and disclaimers (no advice, no fiduciary duty)</h2>
      <p>10.1 Digital Assets are highly volatile, may lose rapid value or become worthless; markets may be illiquid with prices influenced by uncontrollable events.</p>
      <p>10.2 Service and Digital Asset operation depends on uncontrolled networks, protocols, smart contracts, and technology subject to malfunction, attacks, forks, or unexpected operation.</p>
      <p>10.3 Digital Asset regulatory treatment is evolving; legal changes may affect Service use, Digital Asset legality or treatment, and transaction tax consequences.</p>
      <p>10.4 Service information is general only, not investment, financial, legal, accounting, or tax advice; users solely responsible for decisions and should seek professional advice.</p>
      <p>10.5 No guarantee of Service, feature, partner, payment method, or Digital Asset continuous or jurisdiction-specific availability.</p>
      <p>10.6 Operator acts solely as Service provider without adviser, broker, agent, trustee, asset manager, or fiduciary roles; no Operator communication or information creates fiduciary duty or constitutes investment or financial advice.</p>
      <p>10.7 Operator assumes no duty to monitor or manage overall Digital Asset or Fiat Currency holdings within Service, third-party wallets, or Third-Party Services.</p>

      <h2>11. Suspension, limitations and termination</h2>
      <p>11.1 Operator may suspend, limit, or terminate Service access, specific features, or close Accounts if:</p>
      <ul>
        <li>Terms or referenced policies are breached</li>
        <li>Reasonable grounds exist for fraud, money laundering, terrorist financing, sanctions evasion, tax evasion, or unlawful activity</li>
        <li>Information or document provision fails</li>
        <li>Compliance with AML/CFT, sanctions, tax reporting, or regulatory obligations is necessary</li>
        <li>Court, regulator, or competent authority requires termination</li>
        <li>Service discontinuation is decided for jurisdiction coverage</li>
      </ul>
      <p>11.2 Reasonable notice efforts are made where legally permitted; detailed reasons or advance notice may be prevented.</p>
      <p>11.3 Users may close Accounts anytime subject to completing KYC/AML checks and settling outstanding obligations.</p>
      <p>11.4 Terms continue applying as necessary to resolve outstanding transactions or matters after Account closure.</p>

      <h2>12. Intellectual property</h2>
      <p>12.1 Operator or licensors own all Service intellectual property rights including software, design, text, graphics, logos, trademarks, domain names, and content.</p>
      <p>12.2 Limited, non-exclusive, non-transferable, revocable licence grants Service access and use for intended purposes per these Terms.</p>
      <p>12.3 Material reproduction, modification, derivative creation, public display, republication, download, storage, or transmission prohibited except for normal Service use or express authorisation.</p>
      <p>12.4 "MeinBit" and associated logos require prior written Operator consent for use.</p>

      <h2>13. Third-party services and links</h2>
      <p>13.1 Service may contain third-party website, application, wallet, exchange, payment provider, or service links or integrations.</p>
      <p>13.2 Third-Party Service use is user risk at own discretion, governed by third-party terms and policies; Operator not responsible for content, performance, availability, security, compliance, or legality.</p>
      <p>13.3 Operator doesn't endorse or recommend particular Third-Party Services unless expressly stated.</p>
      <p>13.4 Service interoperability with Third-Party Services or Integrated Applications creates no joint or several Operator liability or responsibility for losses from separate third-party relationships.</p>

      <h2>14. Limitation of liability</h2>
      <p>14.1 Nothing excludes or limits liability for wilful misconduct, gross negligence, death, or personal injury negligence liability under Applicable Law.</p>
      <p>14.2 Subject to Section 14.1 and mandatory consumer rights:</p>
      <ul>
        <li>No liability for profit loss, revenue loss, business loss, opportunity loss, data loss, goodwill loss, or indirect, consequential, incidental, punitive, or special damages</li>
        <li>Total aggregate liability is limited to greater of: (i) total fees paid in preceding twelve months or (ii) EUR 1,000</li>
      </ul>
      <p>14.3 Consumer protection law limitations apply only to permitted extent in consumer residence country.</p>
      <p>14.4 Operator not liable for losses from:</p>
      <ul>
        <li>Account or credential security maintenance failure</li>
        <li>Unauthorised access from user acts or omissions</li>
        <li>Good faith suspension, limitation, or termination per Terms or legal obligations</li>
        <li>Uncontrollable events including network failures, power supply failures, third-party actions or omissions</li>
      </ul>

      <h2>15. Indemnity (for non-consumer Users)</h2>
      <p>15.1 Non-consumer users indemnify and hold harmless Operator, group companies, directors, officers, employees, and agents from claims, demands, actions, proceedings, losses, damages, fines, penalties, costs, and expenses arising from:</p>
      <ul>
        <li>Terms or Applicable Law breach</li>
        <li>Service use with Integrated Applications or Third-Party Services, including customer or user representations</li>
        <li>Regulatory, tax, reporting, or compliance issues from own obligation failure as independent controller, service provider, or obliged institution</li>
        <li>Inaccurate, incomplete, or misleading information, documents, or instructions</li>
      </ul>
      <p>15.2 Indemnity doesn't apply to claims from Operator wilful misconduct or gross negligence.</p>

      <h2>16. Changes to the Service and to these Terms</h2>
      <p>16.1 Operator may modify, suspend, or discontinue Service parts anytime with Applicable Law compliance.</p>
      <p>16.2 Terms may be updated; material changes receive advance notice through Service or other means.</p>
      <p>16.3 Updated Terms take effect upon publication unless different dates are stated; continued Service use constitutes acceptance.</p>
      <p>16.4 Updated Terms non-acceptance requires Service discontinuation and Account closure request.</p>

      <h2>17. Governing law and dispute resolution</h2>
      <p>17.1 Terms are governed by Polish law without conflict-of-laws regard, subject to Section 17.2.</p>
      <p>17.2 EU consumer residents may benefit from mandatory consumer protection rules of residence country unaffected by these Terms.</p>
      <p>17.3 Polish courts have non-exclusive jurisdiction; consumer residents may bring proceedings in residence country courts where required.</p>
      <p>17.4 European Commission online dispute resolution platform available at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a>; alternative dispute resolution use is not undertaken unless legally required.</p>

      <h2>18. Contact and miscellaneous</h2>
      <p>18.1 Operator contact details are in the Imprint / Legal Information section.</p>
      <p>18.2 Invalid or unenforceable provisions are enforced maximally with remaining provisions in full force.</p>
      <p>18.3 Users may not transfer or assign rights or obligations without prior written consent; Operator may assign rights and obligations within group or reorganisation provided user rights aren't adversely affected.</p>
      <p>18.4 Right or remedy non-exercise failure or delay is not waiver construction.</p>

      <hr />

      <h2>Operator information</h2>
      <p><strong>Company:</strong> LUNTRA sp. z o.o. (limited liability company registered in Poland)</p>
      <ul>
        <li>KRS: 0001143324 (District Court for Wrocław-Fabryczna in Wrocław, 6th Commercial Division of the National Court Register)</li>
        <li>NIP: 8982315211</li>
        <li>REGON: 540382294</li>
        <li>Registered Office: ul. Romana Dmowskiego 3/9, 50-203 Wrocław, Poland</li>
        <li>Share capital: PLN 5,000.00, fully paid in</li>
        <li>RDWW Registration Number: RDWW-1771 (Register of Virtual Currency Activities)</li>
        <li>RDWW Registration Date: 18 December 2024</li>
      </ul>
      <p><strong>Authorised activities:</strong></p>
      <ul>
        <li>Exchange between virtual currencies and fiat currencies</li>
        <li>Exchange between virtual currencies</li>
        <li>Intermediation in such exchanges</li>
        <li>Maintenance of accounts for virtual currencies per Polish law</li>
      </ul>
      <p>© LUNTRA sp. z o.o. All rights reserved.</p>
    </PolicyLayout>
  );
}
