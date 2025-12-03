import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type RepoCard = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  colors: string;
  url: string;
};

const GITHUB_USERNAME = "abeladamushumet";

const fallbackProjects: RepoCard[] = [
  {
    title: "Credit Approval Classification",
    description:
      "End-to-end pipeline that cleans credit application data, engineers behavioral signals, and trains interpretable classifiers for approval decisions.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&h=400",
    tags: ["Scikit-Learn", "XGBoost", "Credit"],
    colors: "bg-primary-100 text-primary-700",
    url: "https://github.com/abeladamushumet/Credit-approval-classification",
  },
  {
    title: "Credit Risk Model",
    description:
      "Segmented risk modeling framework using feature selection, hyperparameter tuning, and probability calibration for lending decisions.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&h=400",
    tags: ["Risk", "MLflow", "Pipelines"],
    colors: "bg-secondary-100 text-secondary-700",
    url: "https://github.com/abeladamushumet/credit-risk-model",
  },
  {
    title: "Intelligent Complaint Analysis",
    description:
      "Generative-AI RAG system that classifies complaints, extracts sentiment, and surfaces actionable insights for CX teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
    tags: ["NLP", "RAG", "Streamlit"],
    colors: "bg-emerald-100 text-emerald-700",
    url: "https://github.com/abeladamushumet/Intelligent-Complaint-Analysis",
  },
  {
    title: "Telegram Medical Pipeline",
    description:
      "Healthcare command bot that triages patient messages, routes to specialists, and summarizes chats with LLMs.",
    image:
      "https://images.unsplash.com/photo-1504814532849-cffa2a3cc003?auto=format&fit=crop&w=800&h=400",
    tags: ["LLM", "FastAPI", "Telegram"],
    colors: "bg-purple-100 text-purple-700",
    url: "https://github.com/abeladamushumet/telegram_medical_pipeline",
  },
  {
    title: "Credit Fraud Detection",
    description:
      "Model ensemble leveraging SMOTE, anomaly detection, and feature drift monitoring to flag fraudulent transactions in real time.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
    tags: ["Anomaly", "SMOTE", "Random Forest"],
    colors: "bg-orange-100 text-orange-700",
    url: "https://github.com/abeladamushumet/credit-fraud-detection",
  },
  {
    title: "Brent Oil Change Point Analysis",
    description:
      "Time-series research identifying structural breaks in Brent crude prices using Bayesian and statistical tests.",
    image:
      "https://images.unsplash.com/photo-1496497243327-9dccd845c1b5?auto=format&fit=crop&w=800&h=400",
    tags: ["Time Series", "Bayesian", "Energy"],
    colors: "bg-red-100 text-red-700",
    url: "https://github.com/abeladamushumet/brent-oil-change-point-analysis",
  },
  {
    title: "PPT QA Chatbot",
    description:
      "Retrieval-augmented chatbot that parses PowerPoint decks and answers stakeholder questions with grounded citations.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&h=400",
    tags: ["LLM", "LangChain", "QA"],
    colors: "bg-teal-100 text-teal-700",
    url: "https://github.com/abeladamushumet/ppt-qa-chatbot",
  },
  {
    title: "Customer Churn Prediction",
    description:
      "Customer 360° feature store with SHAP-driven churn models and marketing uplift analysis dashboards.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=400",
    tags: ["Churn", "SHAP", "Dashboards"],
    colors: "bg-indigo-100 text-indigo-700",
    url: "https://github.com/abeladamushumet/Customer-Churn-Prediction-System",
  },
  {
    title: "Amharic ASR Summarization",
    description:
      "Speech-to-text and abstractive summarization stack tailored for Amharic meetings and call centers.",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=800&h=400",
    tags: ["ASR", "NLP", "Amharic"],
    colors: "bg-lime-100 text-lime-700",
    url: "https://github.com/abeladamushumet/Amharic-ASR-Summarization",
  },
  {
    title: "AI Sales Forecasting",
    description:
      "Hierarchical forecasting engine blending classical models with transformers for revenue projections.",
    image:
      "https://images.unsplash.com/photo-1459499362902-55a20553e082?auto=format&fit=crop&w=800&h=400",
    tags: ["Forecasting", "Transformers", "Sales"],
    colors: "bg-yellow-100 text-yellow-700",
    url: "https://github.com/abeladamushumet/AI-Powered-Sales-Forecasting",
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<RepoCard[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        const colorPalette = [
          "bg-primary-100 text-primary-700",
          "bg-secondary-100 text-secondary-700",
          "bg-emerald-100 text-emerald-700",
          "bg-purple-100 text-purple-700",
          "bg-orange-100 text-orange-700",
          "bg-red-100 text-red-700",
        ];

        const topicImageMap: Record<string, string> = {
          nlp: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&h=400",
          rag: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=400",
          machinelearning: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&h=400",
          "deep-learning": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=400",
          "deep learning": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=400",
          "time_series": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=400",
          timeseries: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&h=400",
          vision: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&h=400",
          "computer-vision": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&h=400",
          fastapi: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&h=400",
          streamlit: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&h=400",
          finance: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&h=400",
          security: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=400",
          energy: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&h=400",
        };

        const formatted = data.map((repo: any, index: number): RepoCard => {
          const languageTag = repo.language ? [repo.language] : [];
          const topics: string[] = Array.isArray(repo.topics) ? repo.topics : [];
          const tags = [...languageTag, ...topics].slice(0, 3);
          const normalizedTopics = topics.map((topic) => topic.toLowerCase());
          const matchedTopic = normalizedTopics.find((topic) => topicImageMap[topic]);
          const image = matchedTopic
            ? topicImageMap[matchedTopic]
            : `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`;

          return {
            title: repo.name.replace(/-/g, " "),
            description:
              repo.description ?? "A new project is on the way. Description coming soon.",
            image,
            tags: tags.length ? tags : ["GitHub"],
            colors: colorPalette[index % colorPalette.length],
            url: repo.html_url,
          };
        });

        if (formatted.length) {
          setProjects(formatted);
        }
      } catch (err: any) {
        setError(err.message ?? "Unable to load GitHub projects");
        setProjects(fallbackProjects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="projects-description">
            Real-world applications of data science and machine learning across various industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
              data-testid={`project-card-${index}`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} project visualization`}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 ${project.colors} text-sm rounded-full`}
                      data-testid={`project-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                  data-testid={`project-link-${index}`}
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline"
            className="border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
            data-testid="button-view-all-projects"
          >
            <a
              href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
            >
              View All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
