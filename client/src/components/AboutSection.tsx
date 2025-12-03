export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/abel.jpg"
              alt="Portrait of Abel Adamu Shumet"
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              data-testid="about-image"
            />
          </div>
          
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-lg text-slate-600 leading-relaxed" data-testid="about-description-1">
              I am a passionate and detail-oriented Junior Data Scientist specializing in data analysis,
              machine learning, NLP, and AI-driven solutions. I build predictive models, analyze complex datasets,
              and deliver actionable insights that solve real-world problems.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed" data-testid="about-description-2">
              Through 10 Academy projects and industry internships, I have completed 10+ end-to-end projects with
              hands-on experience in finance, security, energy, and NLP applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-center">
              <div className="p-6 bg-slate-50 rounded-lg" data-testid="stat-projects">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">10+</h3>
                <p className="text-slate-600">Projects Completed</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg" data-testid="stat-experience">
                <h3 className="text-2xl font-bold text-primary-600 mb-2">2+</h3>
                <p className="text-slate-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
