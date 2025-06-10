import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Fake Image and Video Detection',
      description:
        'A system to detect deepfakes using machine learning models that identify facial manipulations.',
      tech: 'Python, PyTorch, Django, Jupyter Notebook',
    },
    {
      title: 'Craftopia - Handicraft Marketplace',
      description:
        'A web platform connecting artisans and customers for handmade crafts like pottery and jewelry.',
      tech: 'PHP, MySQL, HTML, CSS, JS, Bootstrap',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-blue-800">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-700">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Tech Stack:</strong> {project.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
