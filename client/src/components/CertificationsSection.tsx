import { Bot, Brain, BarChart3, Award, ShieldCheck, BookOpenCheck } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Machine Learning",
      issuer: "Future Interns",
      details: "Credential ID: FIT/SEP25/ML2968",
      date: "Issued Nov 2025",
      verificationUrl: "https://futureinterns.com/verification/?cin=FIT/SEP25/ML2968",
      icon: Brain,
      color: "text-primary-600",
      bgColor: "from-primary-50 to-primary-100",
      borderColor: "border-primary-200"
    },
    {
      title: "Data Analytics Micro-Credential Certificate",
      issuer: "Africa Agility Foundation",
      details: "Industry-focused analytics sprint",
      date: "Issued Oct 2025",
      verificationUrl: "https://verify.apac.certifyme.org/verify/a3e669d94461",
      icon: BarChart3,
      color: "text-secondary-600",
      bgColor: "from-secondary-50 to-secondary-100",
      borderColor: "border-secondary-200"
    },
    {
      title: "AI Mastery Training Program",
      issuer: "Kifiya x 10 Academy",
      details: "Machine Learning, Data Engineering, Financial Analysis — Completed with distinction",
      date: "Completed Sep 2025",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200"
    },
    {
      title: "Machine Learning for Data Science Projects",
      issuer: "IBM",
      details: "Hands-on ML lifecycle specialization",
      date: "Issued Apr 2025",
      verificationUrl: "https://www.credly.com/badges/267e991c-725a-4974-91ed-50408bfe35ad",
      icon: Bot,
      color: "text-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200"
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "Udacity",
      details: "AI systems, ethics, and deployment",
      date: "Issued Feb 2025",
      verificationUrl: "https://www.udacity.com/certificate/e/624883ba-c2ea-11ef-9bab-7b52ef89e5f0",
      icon: Award,
      color: "text-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200"
    },
    {
      title: "Data Analysis Fundamentals",
      issuer: "Udacity",
      details: "Data wrangling, visualization, storytelling",
      date: "Issued Nov 2024",
      verificationUrl: "https://www.udacity.com/certificate/e/41f782e8-94f3-11ef-8667-67c46badef87",
      icon: BookOpenCheck,
      color: "text-rose-600",
      bgColor: "from-rose-50 to-rose-100",
      borderColor: "border-rose-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="certifications-title">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="certifications-description">
            Continuous learning and professional development achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${cert.bgColor} p-8 rounded-xl border ${cert.borderColor}`}
              data-testid={`certification-card-${index}`}
            >
              <div className={`${cert.color} text-4xl mb-4`}>
                <cert.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2" data-testid={`certification-title-${index}`}>
                {cert.title}
              </h3>
              <p className="text-slate-700 font-medium mb-1" data-testid={`certification-issuer-${index}`}>
                {cert.issuer}
              </p>
              {cert.details && (
                <p className="text-slate-600 text-sm mb-2" data-testid={`certification-details-${index}`}>
                  {cert.details}
                </p>
              )}
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 mb-2"
                  data-testid={`certification-verify-${index}`}
                >
                  Verify credential →
                </a>
              )}
              <p className={`${cert.color} font-semibold text-sm`} data-testid={`certification-date-${index}`}>
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
