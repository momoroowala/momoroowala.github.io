import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Users, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';

function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-blue" />,
      title: "Send Your Data",
      description: "Upload your QuickBooks export. No customer names needed. Your data is anonymized immediately."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue" />,
      title: "Get Your Analysis",
      description: "My system finds dormant customers, calculates revenue at risk, and identifies priority targets."
    },
    {
      icon: <Users className="w-8 h-8 text-blue" />,
      title: "Win Them Back",
      description: "Get a detailed reactivation plan. Keep the report whether you work with us or not."
    }
  ];

  const stats = [
    { number: "20-30%", label: "of customers quietly stop ordering" },
    { number: "15-25%", label: "annual customer loss for average distributor" },
    { number: "$50,000+", label: "typical revenue recovered per campaign" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="max-w-3xl" {...fadeInUp}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-lightest-slate">Stop losing customers</span>
              <br />
              <span className="text-blue">you already won.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-light-slate mb-8 leading-relaxed">
              Most distributors have 20-30% of their customer base that quietly stopped ordering. 
              I help you find that lost revenue and win those customers back.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="#contact"
                className="bg-blue text-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue/90 transition-colors duration-200 text-center"
              >
                Get Free Diagnostic
              </Link>
              <Link
                to="/services"
                className="border border-blue text-blue px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue-tint transition-colors duration-200 text-center"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light-navy">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
              The Hidden Revenue Problem
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Every distributor is bleeding customers. The question is: how much revenue 
              are you losing without even knowing it?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-navy p-8 rounded-lg border border-lightest-navy"
              >
                <div className="text-4xl font-bold text-blue mb-2">{stat.number}</div>
                <div className="text-light-slate">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
              How It Works
            </h2>
            <p className="text-xl text-light-slate max-w-3xl mx-auto">
              Three simple steps to uncover your lost revenue. No long-term contracts. 
              No complex software to learn.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-light-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">
                  {step.title}
                </h3>
                <p className="text-light-slate">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="#contact"
              className="inline-flex items-center bg-blue text-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue/90 transition-colors duration-200"
            >
              Start Your Free Diagnostic
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-light-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-8">
              Zero Risk. Maximum Trust.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-lightest-slate mb-2">
                    Your Data Stays Private
                  </h3>
                  <p className="text-light-slate">
                    We never see customer names. All data is anonymized immediately 
                    and deleted after analysis.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-lightest-slate mb-2">
                    Keep Your Report
                  </h3>
                  <p className="text-light-slate">
                    Get a full diagnostic report whether you work with us or not. 
                    No strings attached.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-lightest-slate mb-2">
                    Not Another Software
                  </h3>
                  <p className="text-light-slate">
                    I don't replace your systems. I find the money hiding in the 
                    data you already have.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-lightest-slate mb-2">
                    One QuickBooks Export
                  </h3>
                  <p className="text-light-slate">
                    That's all I need. No complex integrations or system changes. 
                    Quick and simple.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-12">
              Results That Speak for Themselves
            </h2>
            
            <div className="bg-light-navy p-8 rounded-lg border border-lightest-navy max-w-4xl mx-auto">
              <p className="text-xl text-light-slate italic mb-6">
                "Case studies and testimonials coming soon. Currently working with select 
                distributors to build proven results."
              </p>
              <div className="text-blue font-semibold">
                Early Access Program - Limited Spots Available
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-light-navy">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
              Ready to Find Your Lost Revenue?
            </h2>
            
            <p className="text-xl text-light-slate mb-12 max-w-2xl mx-auto">
              One QuickBooks export. Free diagnostic. See exactly how much revenue 
              you're losing to dormant customers.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mo@deeplineops.com"
                className="inline-flex items-center bg-blue text-navy px-12 py-6 rounded-md font-bold text-xl hover:bg-blue/90 transition-colors duration-200"
              >
                <DollarSign className="mr-3 w-6 h-6" />
                Get Your Free Diagnostic
              </a>
              
              <p className="text-sm text-light-slate">
                Email: mo@deeplineops.com | Response within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;