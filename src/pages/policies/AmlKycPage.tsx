import PolicyLayout from "@/components/PolicyLayout/PolicyLayout";

export default function AmlKycPage() {
  return (
    <PolicyLayout title="AML / KYC Policy" updated="5 Jun 2026">
      <div className="policy-callout">
        <p><strong>The important things to know</strong></p>
        <p>The Operator requires identity verification and transaction monitoring. Failure to provide requested information may result in account denial, restrictions, or closure. A risk-based methodology determines the intensity of compliance checks. Users and transactions face screening against sanctions lists, with possible reporting to authorities that typically cannot be disclosed. Third-party verification providers assist with identity checks and fraud prevention. KYC/AML records are retained for years post-relationship. The Operator disclaims liability for compliance-related losses within legal limits.</p>
      </div>

      <h2>1. Definitions and scope</h2>
      <p>This Policy explains KYC and AML/CFT measures for the Service. Terms reference definitions in related legal documents, with the Imprint prevailing on Operator identification. The Policy applies to all Users and Service activities across all interfaces.</p>

      <h2>2. Legal framework and status as obliged institution</h2>
      <p>The Service is operated by <strong>LUNTRA sp. z o.o.</strong> (KRS: 0001143324, NIP: 8982315211), entered in the Polish Register of Virtual Currency Activities (Rejestr Działalności w Zakresie Walut Wirtualnych) under number <strong>RDWW-1771</strong>, maintained by the Director of the Tax Administration Chamber in Katowice (entry effective 18 December 2024).</p>
      <p>The Operator qualifies as an obliged institution under the Polish Act of 1 March 2018 on Counteracting Money Laundering and Terrorist Financing and related EU AML/CFT requirements. Obliged institutions must conduct due diligence, monitor transactions, maintain records, and report suspicious activity. This Policy summarises high-level requirements without replacing detailed internal procedures.</p>

      <h2>3. Risk-based approach</h2>
      <p>The Operator assesses and classifies risks, applying intensive measures for higher-risk situations and simplified measures where legally permitted. Risk factors include:</p>
      <ul>
        <li>the User's country of residence or incorporation;</li>
        <li>whether the User is a politically exposed person (PEP) or is closely related to a PEP;</li>
        <li>the size, frequency and pattern of transactions;</li>
        <li>the nature of the User's business or activities;</li>
        <li>whether the User uses the Service directly or via an Integrated Application;</li>
        <li>whether the User or related persons appear on sanctions lists, watchlists or adverse media.</li>
      </ul>
      <p>Risk assessments undergo regular review.</p>

      <h2>4. Customer due diligence (KYC)</h2>

      <h3>4.1 When we perform KYC</h3>
      <p>CDD measures occur when establishing business relationships, conducting certain occasional transactions above regulatory thresholds, suspecting money laundering or terrorist financing, or doubting previously obtained identification data accuracy. Where third-party interfaces performed prior KYC checks, the Operator may consider that information but retains independent compliance responsibility.</p>

      <h3>4.2 Information we may request</h3>
      <p><strong>For individuals</strong>, the Operator may request:</p>
      <ul>
        <li>full name;</li>
        <li>date and place of birth;</li>
        <li>nationality and country of residence;</li>
        <li>address;</li>
        <li>government-issued identity document (for example, ID card, passport, residence permit);</li>
        <li>photographs or live video (for liveness detection and document matching); and</li>
        <li>information on the source of funds or source of wealth, where applicable.</li>
      </ul>
      <p><strong>For legal entities</strong>, requests may include:</p>
      <ul>
        <li>company name, registration number, registered office and principal place of business;</li>
        <li>constitutional documents and corporate structure;</li>
        <li>identification data of directors or other authorised representatives;</li>
        <li>information about beneficial owners (ultimate beneficial owners – UBOs) and control structure;</li>
        <li>information on the nature and purpose of the business relationship;</li>
        <li>information on the source of funds or source of wealth, where applicable.</li>
      </ul>

      <h3>4.3 Verification and ongoing monitoring</h3>
      <p>Identification verification uses reliable, independent sources including government registries, identity databases, and third-party electronic tools. Following relationship establishment, transactions receive continuous monitoring for consistency with User knowledge and risk profile. Periodic information updates or additional documents may be requested, with Service restriction until compliance.</p>

      <h2>5. Enhanced and simplified due diligence</h2>
      <p>Enhanced due diligence applies to higher-risk situations including PEP dealings, high-risk jurisdictions, complex or unusually large transactions, or elevated-risk situations. EDD may involve obtaining additional User information, source of funds documentation, enhanced verifications, and increased relationship monitoring. Simplified due diligence applies to lower-risk situations where regulations permit, while maintaining transaction monitoring.</p>

      <h2>6. Sanctions and watchlist screening</h2>
      <p>The Operator screens Users and connected persons against relevant sanctions and watchlists including EU, UN, and national authority lists. Identified matches may result in:</p>
      <ul>
        <li>refuse to enter into a relationship;</li>
        <li>freeze or block transactions;</li>
        <li>restrict the use of the Service; and/or</li>
        <li>report to competent authorities, as required by AML Regulations.</li>
      </ul>
      <p>Legal prohibitions may prevent disclosing such actions.</p>

      <h2>7. Reporting of suspicious activity</h2>
      <p>The Operator files suspicious transaction reports with competent AML/CFT supervisory authorities where required. Legal prohibition generally prevents disclosing report filing or content ("tipping-off" prohibition). The Operator may request additional information or documentation for clarification or compliance purposes.</p>

      <h2>8. Use of third-party verification providers</h2>
      <p>The Operator employs specialised third-party providers for identity verification, document authentication, biometric and liveness detection, sanctions screening, and transaction monitoring. Verification Providers function as independent controllers or processors depending on roles and contracts. Details appear in the Privacy Policy. The Operator may modify or add Verification Providers, with information available upon request. Ultimate AML regulatory compliance responsibility remains with the Operator.</p>

      <h2>9. Record-keeping and retention</h2>
      <p>The Operator maintains records of:</p>
      <ul>
        <li>customer identification data and documents;</li>
        <li>information obtained during CDD and EDD;</li>
        <li>transaction data;</li>
        <li>internal and external reports and communications related to AML/CFT.</li>
      </ul>
      <p>Records are retained for periods required by AML Regulations following relationship end and may be retained longer where permitted or required. The Privacy Policy describes AML/CFT personal data processing and data protection rights, noting certain rights may face limitations due to mandatory retention requirements.</p>

      <h2>10. User obligations</h2>
      <p>Users must:</p>
      <ul>
        <li>provide true, accurate, current and complete information when requested by the Operator or any Verification Provider acting on our behalf;</li>
        <li>promptly update such information if it changes;</li>
        <li>provide any additional information and documents that we reasonably request to comply with AML Regulations;</li>
        <li>not use the Service for any unlawful purpose, including money laundering, terrorist financing, fraud, sanctions evasion or other criminal activity.</li>
      </ul>
      <p>Providing false information or failing to provide requested documentation may result in account denial, feature restriction, transaction delays, or Service termination.</p>

      <h2>11. Refusal, suspension and termination</h2>
      <p>The Operator may discretionarily:</p>
      <ul>
        <li>refuse to enter into or continue a business relationship;</li>
        <li>suspend or restrict your access to the Service;</li>
        <li>refuse, cancel or reverse certain transactions;</li>
        <li>freeze or block Digital Assets or Fiat Currencies held within the Service (where technically and legally possible); and/or</li>
        <li>close your Account</li>
      </ul>
      <p>for AML/CFT compliance or risk management purposes.</p>
      <p>Transaction execution may be delayed, refused, or suspended if additional verification is required, criminal activity is suspected, or competent authorities direct such action. The Operator typically attempts notification but may be prohibited by regulations from providing detailed reasons or advance notice. No execution timeframe obligation exists during compliance checks, and delays cause no liability within legal limits.</p>

      <h2>12. Limitation of liability</h2>
      <p>The Operator disclaims liability for losses resulting from KYC performance, Service access refusal, transaction delays, or authority reporting within legal limits. This excludes liability for wilful misconduct or gross negligence. The Policy creates no additional liability basis beyond the Terms of Use, which apply equally to compliance measures.</p>

      <h2>13. Travel Rule (information accompanying transfers of crypto-assets)</h2>
      <p>As a provider of virtual currency / crypto-asset services, the Operator is subject to Regulation (EU) 2023/1113 on information accompanying transfers of funds and certain crypto-assets (the "Travel Rule"). For transfers of crypto-assets, the Operator is required to:</p>
      <ul>
        <li>collect, hold and transmit prescribed information about the originator and the beneficiary — which may include names, wallet/account identifiers, and, where applicable, addresses, official personal document numbers, customer identification numbers, or the date and place of birth;</li>
        <li>obtain and verify equivalent information for incoming transfers; and</li>
        <li>share this information with the crypto-asset service provider of the counterparty, with intermediaries, and with competent authorities, as required by the Travel Rule and AML Regulations.</li>
      </ul>
      <p>Where required information is missing, incomplete, or cannot be verified, the Operator may delay, reject, return, or suspend the relevant transfer and may request additional information before proceeding. The processing of personal data under the Travel Rule is described further in the Privacy Policy.</p>

      <h2>14. Relationship with other documents and changes to this Policy</h2>
      <p>This Policy integrates with the Terms of Use and Privacy Policy. In conflicts, the Terms of Use prevail regarding contractor relationships unless AML Regulations mandate otherwise. The Operator may update this Policy for regulatory or operational reasons, with updates published in the Service. Continued Service use after updates constitutes Policy acknowledgement.</p>
    </PolicyLayout>
  );
}
