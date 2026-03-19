import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "电子商务平台",
      description: "功能齐全的电子商务平台，包含用户认证、支付处理和管理后台。使用现代网络技术构建，提供最佳性能和用户体验。",
      image: "/api/placeholder/600/400",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "任务管理应用",
      description: "协作式任务管理应用，具有实时更新、拖拽功能和团队协作特性。专为提升生产力而设计。",
      image: "/api/placeholder/600/400",
      techStack: ["Vue.js", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "天气仪表板",
      description: "响应式天气仪表板，提供实时天气数据、预报和交互式地图。具有基于位置的服务和美观的数据可视化功能。",
      image: "/api/placeholder/600/400",
      techStack: ["React", "TypeScript", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "社交媒体分析",
      description: "社交媒体管理分析仪表板，具有数据可视化、调度功能和跨平台性能追踪。",
      image: "/api/placeholder/600/400",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "D3.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "作品集生成器",
      description: "动态作品集生成器，允许用户创建美观、响应式的作品集，具有可定制主题和组件。无需编码。",
      image: "/api/placeholder/600/400",
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "AI聊天助手",
      description: "由机器学习驱动的智能聊天助手，提供客户支持、回答问题并帮助用户浏览复杂的工作流程。",
      image: "/api/placeholder/600/400",
      techStack: ["Python", "TensorFlow", "React", "FastAPI", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const getTechColor = (tech: string): string => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-100 text-blue-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'Node.js': 'bg-green-100 text-green-800',
      'MongoDB': 'bg-green-100 text-green-800',
      'Stripe': 'bg-purple-100 text-purple-800',
      'Vue.js': 'bg-green-100 text-green-800',
      'Firebase': 'bg-yellow-100 text-yellow-800',
      'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
      'Weather API': 'bg-blue-100 text-blue-800',
      'Chart.js': 'bg-orange-100 text-orange-800',
      'Next.js': 'bg-gray-100 text-gray-800',
      'PostgreSQL': 'bg-blue-100 text-blue-800',
      'D3.js': 'bg-orange-100 text-orange-800',
      'Redis': 'bg-red-100 text-red-800',
      'Vite': 'bg-purple-100 text-purple-800',
      'Python': 'bg-blue-100 text-blue-800',
      'TensorFlow': 'bg-orange-100 text-orange-800',
      'FastAPI': 'bg-green-100 text-green-800',
      'WebSocket': 'bg-gray-100 text-gray-800'
    };
    return colors[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            精选项目
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            探索我的最新作品，看看我如何通过代码将想法变为现实
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-sm"
                    >
                      在线演示
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex-1 text-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm"
                    >
                      查看代码
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            查看所有项目
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
