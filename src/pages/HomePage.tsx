
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Mail, Target, Users, FileText, Rocket } from "lucide-react";

const HomePage: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const featureVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.3,
      },
    },
  };

  const pulseVariant = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative px-6 py-24 overflow-hidden bg-gradient-to-br from-marketing-primary to-blue-700 text-white"
      >
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[length:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-marketing-primary to-transparent opacity-50" />
        
        <div className="container relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 items-center lg:grid-cols-2">
            <div>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl font-bold mb-4 md:text-5xl lg:text-6xl"
              >
                Transform Your <span className="text-yellow-300">Marketing</span> into Results
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl mb-8 text-blue-100"
              >
                Ignition is your all-in-one platform to launch, track, and optimize campaigns that generate real business impact.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-marketing-primary hover:bg-blue-100">
                  <Link to="/campaigns">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white bg-yellow-300 text-marketing-primary hover:bg-white/10">
                  <Link to="/dashboard">
                    View Dashboard
                  </Link>
                </Button>
              </motion.div>
            </div>
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                variants={pulseVariant}
                animate="pulse"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-bold text-xl mb-1">3.8K</div>
                    <div className="text-sm text-blue-100">Active Leads</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-bold text-xl mb-1">24</div>
                    <div className="text-sm text-blue-100">Campaigns</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-bold text-xl mb-1">38.5%</div>
                    <div className="text-sm text-blue-100">Open Rate</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="font-bold text-xl mb-1">12.8%</div>
                    <div className="text-sm text-blue-100">Click Rate</div>
                  </div>
                </div>
                <div className="mt-4 bg-white/20 rounded-lg p-4">
                  <div className="h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-sm text-blue-100 mb-2">Campaign Performance</div>
                      <div className="flex gap-2 justify-center">
                        <div className="w-1 h-12 bg-blue-300 rounded-full"></div>
                        <div className="w-1 h-16 bg-blue-300 rounded-full"></div>
                        <div className="w-1 h-8 bg-blue-300 rounded-full"></div>
                        <div className="w-1 h-24 bg-blue-300 rounded-full"></div>
                        <div className="w-1 h-10 bg-blue-300 rounded-full"></div>
                        <div className="w-1 h-14 bg-blue-300 rounded-full"></div>
                        <div className="w-1 h-20 bg-blue-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={featureVariants}
        className="py-20 px-6 bg-background"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Ignite Your Marketing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines powerful tools with intuitive design to help you achieve remarkable results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-marketing-primary/10 text-marketing-primary flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Campaign Management</h3>
              <p className="text-muted-foreground">
                Create, schedule, and manage email campaigns with drag-and-drop simplicity.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-marketing-primary/10 text-marketing-primary flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Gain deep insights with real-time performance metrics and conversion tracking.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-marketing-primary/10 text-marketing-primary flex items-center justify-center mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Audience Segmentation</h3>
              <p className="text-muted-foreground">
                Target the right people with powerful segmentation and personalization tools.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-marketing-primary/10 text-marketing-primary flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lead Management</h3>
              <p className="text-muted-foreground">
                Capture, nurture, and convert leads through the entire customer journey.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-marketing-primary/10 text-marketing-primary flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Reports</h3>
              <p className="text-muted-foreground">
                Generate detailed reports that showcase ROI and campaign effectiveness.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-background border rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-marketing-primary/10 text-marketing-primary flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Campaign Launch</h3>
              <p className="text-muted-foreground">
                Go from concept to launch in minutes with our streamlined workflow.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-20 px-6 bg-gradient-to-br from-marketing-primary/10 to-blue-700/10"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
            Ready to Ignite Your Marketing?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have transformed their campaigns with our platform.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button asChild size="lg" className="bg-marketing-primary hover:bg-marketing-primary/90">
              <Link to="/campaigns">
                Start Creating Campaigns <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
