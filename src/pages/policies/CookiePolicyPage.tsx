import PolicyLayout from "@/components/PolicyLayout/PolicyLayout";

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy" updated="6 Dec 2025">
      <div className="policy-callout">
        <p><strong>The important things to know</strong></p>
        <p>The Service employs cookies and comparable technologies for operational purposes, security, preference storage, and optional performance measurement. Essential cookies cannot be disabled through the system, though browser settings provide an override option. Non-essential cookies require user consent via cookie settings. Some cookies originate internally; others come from external providers. A detailed, current cookie inventory appears in the settings interface, and additional personal data handling information is available in the Privacy Policy.</p>
      </div>

      <h2>1. Definitions and scope</h2>
      <p>This policy explains cookie usage by the Operator. Relevant terms derive from other legal documents including Terms of Use and Privacy Policy, with the Imprint / Legal Information document taking precedence regarding Operator identification. The policy covers the Service whether accessed directly or through Integrated Applications, though third-party operators maintain separate cookie policies outside this document's scope.</p>

      <h2>2. What are cookies and similar technologies?</h2>
      <p>Cookies are small text files stored on devices during website or service visits. Similar technologies include local storage, web beacons, software development kits in applications, and device identifiers. These technologies function comparably to cookies for similar purposes and are collectively termed "cookies" in this policy unless distinction becomes necessary.</p>

      <h2>3. Types of cookies we use and purposes</h2>

      <h3>3.1 Strictly necessary cookies</h3>
      <p>These essential cookies enable basic Service functions including login, session management, connection security, embedded component functionality, and preference storage. Without them, the Service may malfunction. Users cannot disable them through settings but may block them via browser configurations, potentially affecting usability.</p>

      <h3>3.2 Preferences (functional) cookies</h3>
      <p>These cookies retain user choices regarding language, region, interface customisation, and settings preferences. They enhance convenience and personalisation without being strictly required for basic operation.</p>

      <h3>3.3 Analytics and performance cookies</h3>
      <p>These cookies measure Service usage patterns: visited pages, duration, feature utilisation, and user interactions. Data supports performance improvement, usability enhancement, and security. Applicable Law may require user consent before deployment.</p>

      <h3>3.4 Marketing and targeting cookies</h3>
      <p>These cookies deliver or measure promotional content, build interest profiles from Service usage, and display relevant content across platforms. First-party and third-party providers may deploy them. Legal requirements may necessitate consent.</p>

      <h2>4. Cookies used in connection with the Service</h2>
      <p>The specific cookies employed depend on current technical configuration and evolve as the Service develops. A detailed current inventory including category, provider, purpose, and duration appears via the cookie settings interface, which updates when cookies are added, removed, or modified. A consent management platform may provide supplementary or replacement cookie information.</p>

      <h2>5. Legal basis for using cookies</h2>
      <p>Strictly necessary cookies rely on legitimate interests in providing secure, functional services or contract performance. Preferences, analytics, and marketing cookies depend on user consent obtained through banner or settings interfaces where required by Applicable Law. Users may withdraw consent anytime without affecting prior processing lawfulness. Legitimate interest reliance occurs only when compatible with Applicable Law and balanced against user rights.</p>

      <h2>6. Managing your cookie settings</h2>
      <p>Initial visits display cookie banners allowing users to accept all cookies, reject non-essential ones, or select specific categories. Preferences may be changed anytime via cookie settings, typically accessible through footer links or app/interface settings. Browser and device settings provide additional cookie management options, though blocking all cookies may impair Service functionality.</p>

      <h2>7. Third-party cookies and technologies</h2>
      <p>Third parties including analytics providers, integrated service operators, and marketing partners may deploy cookies. These parties collect online activity information across platforms per their own policies, which users should review. Third-party cookies (excluding necessary technical ones) require consent where legally required, manageable via settings.</p>

      <h2>8. Retention periods</h2>
      <p>Session cookies delete upon browser closure or session termination. Persistent cookies remain for defined periods until deletion. Approximate lifetimes appear in the settings interface. Personal data collected via cookies persists as long as necessary for stated purposes, then deletes or anonymises unless legal requirements demand extended retention.</p>

      <h2>9. Relationship with the Privacy Policy</h2>
      <p>The Privacy Policy provides comprehensive information about general data processing, purposes, legal bases, data protection rights, international transfers, retention periods, contact information, and complaint procedures. Privacy Policy provisions supersede this policy regarding conflicts in cookie-related personal data processing.</p>

      <h2>10. Changes to this Policy</h2>
      <p>The Operator may update this Policy reflecting cookie changes, legal evolution, or technical modifications. The latest version publishes within the Service with update dates. Material changes or legally required updates prompt advance notification through Service displays or updated banners.</p>

      <h2>11. Contact</h2>
      <p>Questions about this Policy or cookie usage may be directed to contacts listed in the Imprint / Legal Information or through Service support options.</p>
    </PolicyLayout>
  );
}
