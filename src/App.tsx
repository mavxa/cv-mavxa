import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const { scrollY } = useScroll();

  const headerY = useTransform(scrollY, [0, 1000], [0, -600]);
  const scale = useTransform(scrollY, [0, 100000], [1, 0.9]);

  return (
    <div className="app">
      <motion.section
        style={{
          y: headerY,
          scale: scale,
        }}
        className="bg-[rgb(var(--primary))] text-center py-[12vh] mb-[12vh] border-b-[0.3rem] border-[rgb(var(--secondary))]"
      >
        <h1 className="text-[rgb(var(--text))] text-[12rem] font-bold preview">
          welcome my cv
        </h1>
      </motion.section>

      <motion.section
        className="bg-[rgb(var(--secondary))] py-16 min-h-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[80em] mx- px-6">
          <div className="flex flex-col md:flex-row gap-[12vh] items-start">
            {/* Left column with avatar */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-1/3"
            >
              <div className="rounded-full overflow-hidden border-4 border-[rgb(var(--primary))] aspect-square mb-6">
                <img 
                  src="https://github.com/mavxa.png" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right column with information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-2/3"
            >
              <h2 className="text-[rgb(var(--text))] text-4xl font-bold mb-4">
                Mavxa
              </h2>

              <div className="mb-6">
                <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-2">Languages</h3>
                <ul className="space-y-1">
                  <li>🇷🇺 Russian (Native)</li>
                  <li>🇬🇧 English (Intermediate)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-2">Contact</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:mavxa@duck.com" className="flex items-center gap-2 hover:text-[rgb(var(--primary))] transition-colors">
                      📧 mavxa@duck.com
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/mavxa" className="flex items-center gap-2 hover:text-[rgb(var(--primary))] transition-colors">
                      📱 Telegram: @mavxa
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/mavxa" className="flex items-center gap-2 hover:text-[rgb(var(--primary))] transition-colors">
                      💻 GitHub: @mavxa
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">HTML5</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">CSS3</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">SCSS</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">JavaScript</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">React</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">Bootstrap</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">Tailwind</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">Node.js</span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10">Git</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-[rgb(var(--accent))]"
      ></motion.section>
    </div>
  );
}

export default App;
