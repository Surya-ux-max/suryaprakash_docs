import image1 from './contribute/image1.png';
import image2 from './contribute/image.png';

const GITHUB_USERNAME = 'Surya-ux-max';
const LEETCODE_USERNAME = 'Surya-17-exe';

export default function ProfilesSection() {
  return (
    <section className="h-screen w-full snap-start relative flex flex-col justify-center overflow-hidden bg-yellow-400 px-[6vw]">
      {/* Header */}
      <div className="flex items-end leading-[0.8] mb-[6vh] z-10">
        <h1 className="text-[min(20vh,12vw)] font-black tracking-[-0.08em]">
          P
        </h1>
        <span className="text-[min(6vh,4vw)] font-bold ml-[1vw] mb-[1.5vh]">
          rofiles
        </span>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        {/* GitHub Profile */}
        <div className="bg-black rounded-3xl p-[4vh] flex flex-col gap-[3vh]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-yellow-400 font-black text-2xl uppercase tracking-tight">GitHub</h3>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 font-mono hover:text-yellow-400 transition-colors">
                @{GITHUB_USERNAME}
              </a>
            </div>
          </div>

          <div className="flex-1 bg-zinc-900 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
            <img 
              src={image1} 
              alt="GitHub Contribution Chart" 
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>

        {/* LeetCode Profile */}
        <div className="bg-black rounded-3xl p-[4vh] flex flex-col gap-[3vh]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
              <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0 .125 2.632l3.858 4.129 3.857 4.127a1.383 1.383 0 0 0 1.047.466h16.354a1.372 1.372 0 0 0 .961-.44l.008-.007 3.854-4.126a5.266 5.266 0 0 0 1.209-2.104 5.35 5.35 0 0 0-.125-2.632l-3.858-4.129-3.857-4.127a1.374 1.374 0 0 0-.961-.438zm3.255 6.766H9.883L16.483 0l.255.225zm-2.478 10.47H9.883l3.858 4.129 3.857-4.129zM8.472 7.74l-3.854 4.126-3.857-4.126zm0 8.47l3.854 4.129-3.858-4.129zm12.012 0l-3.854 4.129 3.858-4.129zm2.478-4.234l-3.854 4.126 3.857 4.126z"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-yellow-400 font-black text-2xl uppercase tracking-tight">LeetCode</h3>
              <a href={`https://leetcode.com/u/${LEETCODE_USERNAME}/`} target="_blank" rel="noopener noreferrer" className="text-yellow-400/70 font-mono hover:text-yellow-400 transition-colors">
                @{LEETCODE_USERNAME}
              </a>
            </div>
          </div>

          <div className="flex-1 bg-zinc-900 rounded-2xl p-4 flex items-center justify-center overflow-hidden">
            <img 
              src={image2} 
              alt="LeetCode Profile" 
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </div>

      {/* Background Text Pattern */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-5">
        <h1 className="text-[min(90vh,40vw)] font-black leading-none tracking-[-0.1em] select-none">
          CODE
        </h1>
      </div>
    </section>
  );
}