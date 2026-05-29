import PolicyLayout from "@/components/PolicyLayout/PolicyLayout";

export default function ImprintPage() {
  return (
    <PolicyLayout title="Imprint / Legal Information" updated="6 Dec 2025">
      <div className="policy-callout">
        <p><strong>The important things to know</strong></p>
        <ul>
          <li>The Service is operated by a Polish limited liability company registered in Warsaw.</li>
          <li>The Operator is entered in the Polish National Court Register (KRS) and in the Polish Virtual Currency Business Register.</li>
          <li>"MeinBit" is a trademark used by the Operator for the Service.</li>
          <li>Polish law governs the Service, together with directly applicable EU law (GDPR and EU AML rules).</li>
          <li>Contact the Operator using listed details for questions, complaints, or requests.</li>
        </ul>
      </div>

      <h2>1. Provider of the Service</h2>
      <p><strong>Trust Change spółka z ograniczoną odpowiedzialnością</strong> (sp. z o.o.)</p>
      <p>Registered office: ul. Hoża 86, lok. 210, 00-682 Warsaw, Poland</p>
      <ul>
        <li>KRS (National Court Register): 0001090716</li>
        <li>NIP (Tax ID): 7011191958</li>
        <li>REGON: 527919235</li>
        <li>Legal form: Limited liability company incorporated under Polish law</li>
        <li>Share capital: PLN 5,000, fully paid in</li>
      </ul>

      <h2>2. Virtual currency business registration and authorised activities</h2>
      <p>RDWW registration number: <strong>RDWW-1241</strong></p>
      <p>Register: Virtual Currency Business Register</p>
      <p>Registration date: 3 April 2024</p>
      <p>The Operator is authorised to perform activities including:</p>
      <ul>
        <li>Exchange between virtual currencies and fiat currencies</li>
        <li>Exchange between virtual currencies</li>
        <li>Intermediation in such exchanges</li>
        <li>Maintenance of virtual currency accounts</li>
      </ul>

      <h2>3. Supervisory and competent authorities</h2>
      <h3>For anti-money-laundering and counter-terrorist-financing</h3>
      <p>Generalny Inspektor Informacji Finansowej (GIIF)<br />
      ul. Świętokrzyska 12, 00-916 Warsaw, Poland</p>

      <h3>For personal data protection</h3>
      <p>Prezes Urzędu Ochrony Danych Osobowych (UODO)<br />
      ul. Stawki 2, 00-193 Warsaw, Poland</p>

      <h2>4. Contact details</h2>
      <p>General inquiries: Contact or support options within the Service.</p>
      <p><strong>Postal address:</strong><br />
      Trust Change sp. z o.o.<br />
      ul. Hoża 86, lok. 210<br />
      00-682 Warsaw, Poland</p>
      <p>Electronic communication: Email address in the "Contact" or "Support" section.</p>
      <p>Data protection rights inquiries: Follow the Privacy Policy instructions.</p>

      <h2>5. Trademarks and intellectual property</h2>
      <p>"MeinBit" is a trademark used by the Operator. Other names, logos, and marks may be trademarks of the Operator or third parties. All rights in content and technology are reserved unless stated otherwise.</p>

      <h2>6. Governing law and online dispute resolution</h2>
      <p>The Service is governed by Polish law. EU consumers retain mandatory consumer protection rights. European Commission ODR platform: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a></p>

      <h2>Definitions and scope</h2>
      <ul>
        <li><strong>Service</strong>: Digital asset services under the "MeinBit" brand.</li>
        <li><strong>Operator</strong>: Trust Change sp. z o.o.</li>
        <li><strong>User / you</strong>: Any person or entity accessing the Service.</li>
        <li><strong>Account</strong>: Registered user account within the Service.</li>
        <li><strong>Digital Assets</strong>: Virtual currencies and tokens supported.</li>
        <li><strong>Fiat Currency</strong>: Legal tender from sovereign states.</li>
        <li><strong>Integrated Application</strong>: Third-party services with Service integration.</li>
        <li><strong>Applicable Law</strong>: Polish law and directly applicable EU law.</li>
      </ul>
    </PolicyLayout>
  );
}
