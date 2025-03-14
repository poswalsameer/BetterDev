import FeatureCard from "./FeatureCard"



export default function FeatureSection() {
  const features = [
    {
      icon: "analysis",
      title: "Real-time Code Analysis",
      description: "Get instant feedback on your code quality, performance, and security vulnerabilities as you type.",
    },
    {
      icon: "refactoring",
      title: "Smart Refactoring",
      description: "Automatically identify and fix code smells with AI-powered refactoring suggestions.",
    },
    {
      icon: "patterns",
      title: "Code Pattern Recognition",
      description: "Learn from best practices and common patterns in your programming language.",
    },
    {
      icon: "performance",
      title: "Performance Optimization",
      description: "Identify bottlenecks and receive suggestions for improving code performance.",
    },
    {
      icon: "security",
      title: "Security Scanning",
      description: "Detect and fix security vulnerabilities before they reach production.",
    },
    {
      icon: "collaboration",
      title: "Collaborative Learning",
      description: "Share and learn from code reviews within your team or the community.",
    },
  ] as const

  return (
    <section 
      className="
        py-20 px-6 bg-[#02010a]  
        sm:py-20 sm:px-6 sm:bg-[#02010a]
        md:py-20 md:px-6 md:bg-[#02010a]">
      <div 
        className="
          max-w-6xl mx-auto  
          sm:max-w-6xl sm:mx-auto
          md:max-w-6xl md:mx-auto">
        <div 
          className="
            text-center mb-16  
            sm:text-center sm:mb-16
            md:text-center md:mb-16">
          <h2 
            className="
              text-4xl font-bold text-white mb-4  
              sm:text-4xl sm:font-bold sm:text-white sm:mb-4
              md:text-4xl md:font-bold md:text-white md:mb-4">
            <span className="text-[#7C3AED]">Supercharge</span> Your Development
          </h2>
          <p 
            className="
              text-lg text-gray-400/80 max-w-3xl mx-auto  
              sm:text-xl sm:text-gray-400/80 sm:max-w-3xl sm:mx-auto
              md:text-xl md:text-gray-400/80 md:max-w-3xl md:mx-auto">
            Transform your coding experience with powerful AI-driven features designed
            to make you a better developer.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}