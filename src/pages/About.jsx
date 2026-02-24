import { motion } from 'framer-motion';
import { Users, TrendingUp, Target, Mail } from 'lucide-react';

function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue" />,
      title: "Small Business Focus",
      description: "I work exclusively with distributors between 10-50 employees. You get personal attention, not enterprise-level complexity."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue" />,
      title: "Data-Driven Results",
      description: "Every recommendation is backed by your actual data. No guesswork, no generic advice."
    },
    {
      icon: <Target className="w-8 h-8 text-blue" />,
      title: "Revenue Focus",
      description: "I'm not here to sell you software. I'm here to find money you're already losing and help you get it back."
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-6">
            About Deepline Operations
          </h1>
          <p className="text-xl text-light-slate">
            Hi, I'm Mo. I help small distributors find revenue they didn't know they were losing.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-light-navy p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-lightest-slate mb-6">My Story</h2>
            
            <div className="space-y-6 text-light-slate">
              <p>
                I've spent years working with distributors, and I kept seeing the same problem everywhere: 
                customers quietly disappearing from the books. Not with dramatic exits or complaints, 
                just... gone.
              </p>
              
              <p>
                Most distribution companies I worked with had no idea this was happening. Their QuickBooks 
                showed sales, their ERP tracked inventory, but no one was watching for the customers 
                who used to order regularly but hadn't placed an order in months.
              </p>
              
              <p>
                That's when I realized the opportunity. These weren't customers who hated the company 
                or switched to competitors. They were just busy, distracted, or forgot. With the right 
                approach, many could be won back.
              </p>
              
              <p>
                So I built a system to find them. Not a complex software that requires training or 
                replaces your current setup. Just a proven process that analyzes your existing data 
                and identifies recovery opportunities.
              </p>
              
              <p>
                I'm not trying to build the next big SaaS company. I work with a small number of 
                distributors at a time, providing personal attention and real results. Quality over quantity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-12 text-center">
            How I Work
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-navy p-8 rounded-lg border border-lightest-navy"
              >
                <div className="bg-light-navy rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-lightest-slate mb-4">
                  {value.title}
                </h3>
                <p className="text-light-slate">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Not Enterprise */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-light-navy p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-lightest-slate mb-6">
              Why I Don't Work with Big Companies
            </h2>
            
            <div className="space-y-4 text-light-slate">
              <p>
                Large distributors have entire teams, complex approval processes, and enterprise 
                software budgets. They don't need a solo consultant.
              </p>
              
              <p>
                Small distributors (10-50 employees) are different. You're growing fast but still 
                lean. You need results, not bureaucracy. You want someone who understands your 
                business personally, not a team of junior analysts.
              </p>
              
              <p>
                That's my sweet spot. I work with owners and managers who can make decisions quickly 
                and implement changes without months of meetings.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-12 text-center">
            What Makes This Different
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue">Not Another Software</h3>
              <ul className="space-y-3 text-light-slate">
                <li>• No monthly software fees</li>
                <li>• No complex integrations</li>
                <li>• No training your team on new systems</li>
                <li>• Works with your existing QuickBooks</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue">Personal Service</h3>
              <ul className="space-y-3 text-light-slate">
                <li>• You work directly with me, not a team</li>
                <li>• Custom analysis for your specific business</li>
                <li>• Quick responses, no ticket systems</li>
                <li>• Flexible engagement based on your needs</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-light-navy p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-6">
            Ready to Work Together?
          </h2>
          
          <p className="text-xl text-light-slate mb-8 max-w-2xl mx-auto">
            Let's start with a 15-minute call. I'll tell you more about how this works, 
            and you can decide if it makes sense for your business.
          </p>
          
          <a
            href="mailto:mo@deeplineops.com"
            className="inline-flex items-center bg-blue text-navy px-8 py-4 rounded-md font-semibold text-lg hover:bg-blue/90 transition-colors duration-200"
          >
            <Mail className="mr-3 w-5 h-5" />
            Get in Touch
          </a>
          
          <p className="text-sm text-light-slate mt-4">
            mo@deeplineops.com | I respond within 24 hours
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;