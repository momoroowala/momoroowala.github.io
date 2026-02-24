import { motion } from 'framer-motion';
import { Check, FileText, Zap, Crown, ArrowRight } from 'lucide-react';

function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      name: "Data Diagnostic",
      price: "$1,500 - $2,500",
      billing: "One-time",
      icon: <FileText className="w-8 h-8 text-blue" />,
      description: "Perfect for distributors who want to understand their customer loss problem before taking action.",
      features: [
        "QuickBooks data analysis",
        "Dormant customer identification",
        "Revenue at risk calculation",
        "Priority reactivation targets",
        "Detailed diagnostic report",
        "Anonymized data processing",
        "Keep report regardless of next steps"
      ],
      popular: false,
      cta: "Get Diagnostic"
    },
    {
      name: "Re-engagement Campaign System",
      price: "$2,500 - $3,500",
      billing: "per month",
      icon: <Zap className="w-8 h-8 text-blue" />,
      description: "Automated system to win back dormant customers with proven email sequences and tracking.",
      features: [
        "Everything in Data Diagnostic",
        "Automated email sequences",
        "Customer segmentation system",
        "Campaign performance tracking",
        "Monthly re-segmentation",
        "Win-back templates library",
        "Monthly performance reports"
      ],
      popular: true,
      cta: "Start Campaigns"
    },
    {
      name: "Full Revenue Recovery Retainer",
      price: "$4,000 - $5,500",
      billing: "per month",
      icon: <Crown className="w-8 h-8 text-blue" />,
      description: "Complete revenue recovery program with VIP retention, cross-sell campaigns, and strategic forecasting.",
      features: [
        "Everything in Campaign System",
        "VIP customer retention program",
        "Cross-sell campaign development",
        "Revenue forecasting models",
        "Quarterly strategic reviews",
        "Custom campaign creation",
        "Priority support and consultation",
        "Advanced analytics dashboard"
      ],
      popular: false,
      cta: "Go Premium"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-6">
            Revenue Recovery Services
          </h1>
          <p className="text-xl text-light-slate max-w-3xl mx-auto">
            Three ways to work with me. From a simple diagnostic to complete revenue 
            recovery systems. Choose what fits your needs and budget.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-light-navy rounded-lg p-8 border-2 ${
                service.popular 
                  ? 'border-blue shadow-xl shadow-blue/20' 
                  : 'border-lightest-navy hover:border-blue/50'
              } transition-colors duration-300`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue text-navy px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="bg-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-lightest-slate mb-2">
                  {service.name}
                </h3>
                <div className="text-3xl font-bold text-blue mb-1">
                  {service.price}
                </div>
                <div className="text-light-slate text-sm">
                  {service.billing}
                </div>
              </div>

              <p className="text-light-slate mb-6 text-center">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-blue mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-light-slate">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-md font-semibold transition-colors duration-200 ${
                service.popular
                  ? 'bg-blue text-navy hover:bg-blue/90'
                  : 'border border-blue text-blue hover:bg-blue-tint'
              }`}>
                {service.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-6">
            How We Get Started
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="bg-light-navy rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue font-bold">
                1
              </div>
              <h3 className="font-semibold text-lightest-slate mb-2">Initial Call</h3>
              <p className="text-light-slate text-sm">15-minute chat to understand your situation</p>
            </div>
            
            <div>
              <div className="bg-light-navy rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue font-bold">
                2
              </div>
              <h3 className="font-semibold text-lightest-slate mb-2">Data Upload</h3>
              <p className="text-light-slate text-sm">Secure QuickBooks export upload</p>
            </div>
            
            <div>
              <div className="bg-light-navy rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue font-bold">
                3
              </div>
              <h3 className="font-semibold text-lightest-slate mb-2">Analysis</h3>
              <p className="text-light-slate text-sm">My system analyzes your customer data</p>
            </div>
            
            <div>
              <div className="bg-light-navy rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-blue font-bold">
                4
              </div>
              <h3 className="font-semibold text-lightest-slate mb-2">Results</h3>
              <p className="text-light-slate text-sm">Get your diagnostic and next steps</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-light-navy p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lightest-slate mb-3">
                What data do you need?
              </h3>
              <p className="text-light-slate">
                Just a QuickBooks customer export. I need transaction history, customer IDs, 
                and purchase dates. No customer names or sensitive info.
              </p>
            </div>
            
            <div className="bg-light-navy p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lightest-slate mb-3">
                How long does analysis take?
              </h3>
              <p className="text-light-slate">
                Initial diagnostic takes 3-5 business days. You'll get a complete report 
                with findings and recommendations.
              </p>
            </div>
            
            <div className="bg-light-navy p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lightest-slate mb-3">
                Do you replace our ERP system?
              </h3>
              <p className="text-light-slate">
                No. I work with your existing systems. I find the money hiding in data 
                you already have, not replace what works.
              </p>
            </div>
            
            <div className="bg-light-navy p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-lightest-slate mb-3">
                What if we don't see results?
              </h3>
              <p className="text-light-slate">
                The diagnostic comes with zero risk. You keep the report regardless. 
                Monthly services can be paused anytime.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20 bg-light-navy p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-6">
            Ready to Recover Your Lost Revenue?
          </h2>
          <p className="text-xl text-light-slate mb-8 max-w-2xl mx-auto">
            Let's start with a free 15-minute call to see if we're a good fit. 
            No pressure, no sales pitch.
          </p>
          <a
            href="mailto:mo@deeplineops.com"
            className="inline-flex items-center bg-blue text-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue/90 transition-colors duration-200"
          >
            Schedule Your Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;