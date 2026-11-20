import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const legalPages = {
  'privacy-policy': {
    title: 'Privacy Policy',
    intro: 'This policy explains how Protapz collects, uses and protects information submitted through this website.',
    sections: [
      ['Information we collect', 'We may collect contact information you provide through forms or email, including your name, email address, phone number, company and message. We may also collect basic website usage and device information through standard analytics and hosting services.'],
      ['How we use information', 'We use submitted information to respond to enquiries, provide accounting services, improve website performance, maintain security and meet legal or regulatory obligations. We do not sell personal information.'],
      ['Data sharing and storage', 'Information may be processed by authorised service providers that host or support our website, communication, analytics or professional services. We apply reasonable safeguards and restrict access to people who need the information for a legitimate business purpose.'],
      ['Your choices', 'You may ask to access, update or delete relevant personal information by contacting zaran@protapz.co.in. Some information may need to be retained where required for professional, tax or legal recordkeeping.'],
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    intro: 'These terms apply to use of the Protapz website and general information published on it.',
    sections: [
      ['Website information', 'The information on this website is general information only and is not a substitute for advice tailored to your circumstances. Tax laws and ATO guidance can change, so verify material decisions with a registered professional.'],
      ['Professional engagement', 'Viewing this website or submitting an enquiry does not create an accountant-client relationship. A service agreement must be confirmed before professional work begins, including scope, fees and responsibilities.'],
      ['Website use', 'You must not misuse, disrupt or attempt to gain unauthorised access to the website or its systems. All website content may not be reproduced for commercial use without prior permission.'],
      ['Enquiries and liability', 'Every effort is made to keep published information accurate, but Protapz does not guarantee completeness or suitability for a particular purpose. Use of the website is at your own risk to the extent permitted by law.'],
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    intro: 'This page explains how cookies and similar technologies may be used on the Protapz website.',
    sections: [
      ['Essential technologies', 'Our hosting and website platform may use necessary cookies or local storage to deliver pages, maintain security and remember basic display or session preferences.'],
      ['Analytics', 'We may use privacy-conscious website analytics to understand visits, popular pages and technical performance. Analytics information is used to improve the website and is not used to build public advertising profiles.'],
      ['Managing cookies', 'You can control or remove cookies through your browser settings. Blocking some cookies may affect the operation or appearance of parts of the website.'],
      ['Updates', 'We may update this policy as website features or provider controls change. The most recent revision date appears in the website source and search index.'],
    ],
  },
};

export default function Legal({ page }) {
  const content = legalPages[page];
  if (!content) return null;

  return (
    <main id="main-content" role="main">
      <Helmet>
        <title>{content.title} - Protapz</title>
        <meta name="description" content={content.intro} />
        <link rel="canonical" href={`https://www.protapz.co.in/${page}`} />
      </Helmet>
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-emerald-400 no-underline">Protapz</Link>
          <h1 className="text-5xl font-bold mt-5 mb-6">{content.title}</h1>
          <p className="text-xl text-slate-300 mb-12">{content.intro}</p>
          {content.sections.map(([heading, text]) => (
            <section key={heading} className="mb-10">
              <h2 className="text-2xl font-bold mb-4">{heading}</h2>
              <p className="text-lg text-slate-300 leading-relaxed">{text}</p>
            </section>
          ))}
          <p className="text-slate-400 mt-12">Questions: <a href="mailto:zaran@protapz.co.in" className="text-emerald-400">zaran@protapz.co.in</a></p>
        </div>
      </article>
    </main>
  );
}
