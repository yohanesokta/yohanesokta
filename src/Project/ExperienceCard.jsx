const ExperienceCard = ({ experience }) => {
    return (
        <div className="p-6 rounded-lg shadow-lg bg-gray-800 w-full">
            <p className="mb-2 text-sm font-semibold text-green-300">{experience.date}</p>
            <h3 className="text-xl font-semibold text-white mb-2">{experience.name}</h3>
            <p className="mb-4 text-gray-400">{experience.title}</p>
            <div className="space-y-3">
                {experience.jobs.map((job, idx) => (
                    <div key={idx} className="flex items-start">
                        <svg className="w-4 h-4 text-green-300 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <p className="text-gray-300 text-sm">{job}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;
