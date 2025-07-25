const STACKS = [
  {
    "name": "JavaScript",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
  },
  {
    "name": "TypeScript",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  },
  {
    "name": "Laravel",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg"
  },
  {
    "name": "Flutter",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg"
  },
  {
    "name": "Swift",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg"
  },
  {
    "name": "Bun",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/bun/bun-original.svg"
  },
  {
    "name": "Linux",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
  },
  {
    "name": "Debian",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/debian/debian-plain.svg"
  },
  {
    "name": "Cloudflare",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/cloudflare/cloudflare-original.svg"
  },
  {
    "name": "Tailwind CSS",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg"
  },
  {
    "name": "Postgre Sql",
    "icon": "https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/postgresql/postgresql-original.svg"
  }
];

const RunningText = () => {
  return (
    <div className="relative flex w-full overflow-hidden  py-4">
    
      <div className="flex min-w-full flex-shrink-0 skrol items-center justify-around">
        {STACKS.map((stack, index) => (
          <div 
            key={index}
            className="mx-4 flex-shrink-0 rounded-lg px-5 flex items-center gap-4 py-2 text-center text-lg font-semibold text-gray-700  dark:text-gray-200"
          >
            <img src={stack.icon} className="h-10" alt={stack.name} />
            {stack.name}
          </div>
        ))}
        
        
        {STACKS.map((stack, index) => (
          <div 
            key={`duplicate-${index}`}
            className="mx-4 flex-shrink-0 rounded-lg px-5 py-2 text-center text-lg font-semibold text-gray-700 flex items-center gap-4  dark:text-gray-200"
            aria-hidden="true"
          >
            <img src={stack.icon} className="h-10" alt={stack.name} />
            {stack.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningText;