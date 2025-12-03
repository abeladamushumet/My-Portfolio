import { Code, BarChart3, Brain, GitBranch, Server, Bot } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Data Tools",
      color: "text-primary-600",
      bgColor: "bg-primary-600",
      skills: [
        "Python (Pandas, NumPy, Scikit-learn)",
        "R"
      ]
    },
    {
      icon: Brain,
      title: "Machine Learning & AI Frameworks",
      color: "text-red-600",
      bgColor: "bg-red-600",
      skills: [
        "TensorFlow, PyTorch",
        "Machine Learning: Regression, Classification, Clustering",
        "Deep Learning: CNN, RNN, LSTM",
        "RAG Systems"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Visualization",
      color: "text-secondary-600",
      bgColor: "bg-secondary-600",
      skills: [
        "Exploratory Data Analysis (EDA)",
        "Matplotlib, Seaborn, Plotly",
        "Data preprocessing and feature engineering"
      ]
    },
    {
      icon: Bot,
      title: "Specializations",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600",
      skills: [
        "Natural Language Processing (NLP)",
        "Time Series Forecasting",
        "Computer Vision"
      ]
    },
    {
      icon: GitBranch,
      title: "Version Control & Collaboration",
      color: "text-purple-600",
      bgColor: "bg-purple-600",
      skills: [
        "Git, GitHub, DVC"
      ]
    },
    {
      icon: Server,
      title: "Deployment & MLOps",
      color: "text-orange-600",
      bgColor: "bg-orange-600",
      skills: [
        "FastAPI",
        "Streamlit"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="skills-title">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="skills-description">
            Comprehensive toolkit for data analysis, machine learning, and AI development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-testid={`skill-category-${index}`}
            >
              <div className={`${category.color} text-3xl mb-4`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4" data-testid={`skill-title-${index}`}>
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <span className={`w-2 h-2 ${category.bgColor} rounded-full mr-3`}></span>
                    <span className="text-slate-600" data-testid={`skill-item-${index}-${skillIndex}`}>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
