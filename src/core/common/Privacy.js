import React from "react";

export default function Privacy() {
  return (
    <div className="text-pages">
      <h1>Privacy Policy</h1>

      <div>
        <strong>Introduction</strong>
      </div>
      <p>
      360 Real Vista ("us", "we", or "our") operates the www.360realvista.com website (the "Service").
This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
We will not use or share your information with anyone except as described in this Privacy Policy.
By using the Service, you agree to the collection and use of information in accordance with this policy.

      </p>
      <div>
        <strong>Information Collection And Use </strong>
      </div>
      <p>
      While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, postal address and phone number ("Personal Information").
      </p>
      <div>
        <strong>Log Data </strong>
      </div>
      <p>
      We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's IP address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
      </p>
  
      <p>
        The app does use third party services that may collect information used
        to identify you.
      </p>

      <div>
        <strong>Cookies</strong>
      </div>
      <p>
      Cookies are files with small amount of data, which may include an anonymous unique identifier. We use cookies to collect information in order to improve our services for you.
      </p>
      <div>
        <strong>Service Providers</strong>
      </div>
      <p>
        I may employ third-party companies and individuals due to the following
        reasons:
      </p>
      <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>
      <p>
      We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
      </p>
      <div>
        <strong>Security</strong>
      </div>
      <div className="security">
            <ul>
              <li>All of our models and infrastructure are hosted by Amazon Web Services in a multi-tenancy environment.</li>
              <li>All communication with our servers use encrypted channels (via HTTPS).</li>
              <li>All critical infrastructure is further protected by firewalls that is only accessible by authorized employees.</li>
              <li>Models set to private can only be accessed by the Models’ owner, collaborators, and account admins.</li>
              <li>SOC2 Type II Report may be submitted upon client’s request.</li>
              <li>Latest Penetration Testing Report may be submitted upon client’s request.</li>
              <li>AWS maintains physical and environmental security of all models’ Infrastructure containing customer confidential information designed to: (i) protect information assets from unauthorized physical access, (ii) manage, monitor, and log movement of persons into and out of Models’ generating software facilities, and (iii) guard against environmental hazards such as heat, fire, and water damage.</li>
              <li>Models’ generating software maintains a cryptographic standard that aligns with recommendations from industry groups, government publications and other reputable standards groups.</li>
              <li>
                <p>Encryption:</p>
                <ul>
                  <li>   In-Transit Encryption. Data in transit is encrypted using TLS protocol with 256-bit AES encryption All network traffic flowing in and out of the Services data centers, including customer data, is encrypted in transit.</li>
                  <li>At-Rest Encryption. Customer data created by the customer, is encrypted at rest with 256-bit AES encryption.</li>
                </ul>
              </li>
              <p>Measures include:</p>
              <li>Patch management</li>
              <li>Anti-virus / anti-malware</li>
              <li>Threat notification advisories</li>
              <li>Vulnerability scanning (all internal systems)</li>
              <li>Annual penetration testing (Internet facing systems) within remediation of identified vulnerabilities by a third-party security firm.</li>
              <li>Models’ generating software uses TLS protocol with 256-bit AES encryption to protect data in transit. User</li>
              <li>Models’ generating software undergos independent third-party, annual audits against SOC2’s Trust Principles of Security, Availability and Confidentiality.</li>
              <li>Data can be restored to a point-in-time within 1 second of precision for the past 7 days. Data is stored with 99.999999999% durability and 99.99% availability of objects over a given year.</li>
              <li>Models’ generating software ensures compliance with the privacy regulations and security standards it is subject to, including the California Consumer Privacy Act (CCPA), the General Data Protection Regulation (GDPR), the United Kingdom’s Data Protection Act (2018) and the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA).</li>
            <li>Data Processing Addendum (“DPA”): Models’ generating software is pleased to offer a comprehensive Data Processing Addendum (DPA). Models’ generating software DPA is designed to meet the requirements of applicable data privacy laws and regulations, including the CCPA, GDPR, UK GDPR and PIPEDA.</li>
            <li>Infrastructure Sub-processors: Models’ generating software may use Sub-processors to provide infrastructure services that support the delivery of our services. These Sub-processors provide services for security and operational information, marketing information, and data lake services.</li>
            </ul>
            <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
      </div>

      <div>
        <strong>Links To Other Sites </strong>
      </div>
      <p>
      Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites.
      </p>
      <div>
        <strong>Changes To This Privacy Policy </strong>
      </div>
      <p>
      We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
      </p>
      <div>
        <strong> Contact Us </strong>
      </div>
      <p>
      If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at 
      </p>
          <div className="contact-us">info@360realvista.com
</div>

       <div>
        <strong>Last updated: </strong>24.07.2023</div>   
    </div>
  );
}
