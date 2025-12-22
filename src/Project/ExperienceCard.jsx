const ExperienceCard = ({ experience, isLast }) => {
    return (
        <div className="flex">
            <div className="flex flex-col items-center mr-4">
                <div>
                    <div className="flex items-center justify-center w-10 h-10 bg-green-300 rounded-full">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.628A2.25 2.25 0 0118.75 16H5.25A2.25 2.25 0 013 13.628V10.372A2.25 2.25 0 015.25 8h13.5A2.25 2.25 0 0121 10.372v3.256z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.75 8V6a3 3 0 00-3-3h-3a3 3 0 00-3 3v2m5.25 8v2a3 3 0 01-3 3h-3a3 3 0 01-3-3v-2"></path>
                        </svg>
                    </div>
                </div>
                {!isLast && <div className="w-px h-full bg-gray-300"></div>}
            </div>
            <div className="pb-8">
                <p className="mb-2 text-sm font-semibold text-green-300">{experience.date}</p>
                <h3 className="text-xl font-semibold text-white">{experience.name}</h3>
                <p className="mb-2 text-gray-400">{experience.title}</p>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                    {experience.jobs.map((job, index) => (
                        <li key={index}>{job}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceCard;
