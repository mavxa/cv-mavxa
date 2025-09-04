import "./App.css";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

function App() {
  const { scrollY } = useScroll();
  const [showAbout, setShowAbout] = useState(false);

  const headerY = useTransform(scrollY, [0, 1000], [0, -800]);
  const scale = useTransform(scrollY, [0, 100000], [1, 0.9]);

  useScroll().scrollY.onChange((latest) => {
    setShowAbout(latest > 10 && latest < 500);
  });

  return (
    <div className="app">
      <motion.section
        style={{
          y: headerY,
          scale: scale,
        }}
        className="bg-[rgb(var(--primary))] text-center py-[12vh] border-[rgb(var(--secondary))] relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1 className="text-[rgb(var(--accent))] text-[12rem] font-bold preview flex flex-col items-center gap-16">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block"
            >
              WELCOM TO
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-block bg-clip-text bg-gradient-to-r from-[rgb(var(--accent))] to-[rgb(var(--primary))]"
            >
              MY CV
            </motion.span>
          </h1>
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-[20%] left-[20%] w-[20vw] h-[20vw] rounded-full bg-[rgb(var(--accent))] blur-[100px]" />
          <div className="absolute bottom-[60%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-[rgb(var(--secondary))] blur-[100px]" />
        </motion.div>
      </motion.section>

      <div className="h-[6.5vh] relative overflow-hidden mb-[8vh]">
        <AnimatePresence>
          {showAbout && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.1,
                ease: [0.2, 1, 0.2, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="max-w-3xl mx-auto px-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[rgb(var(--text))] text-xl text-center leading-relaxed"
                >
                  Junior Frontend Developer currently studying IT, passionate
                  about creating responsive and user-friendly web applications.
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.section
        className="bg-[rgb(var(--secondary))] py-12 mb-[15vh] rounded-t-[2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[20em] md:max-w-[80em] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-[12vh] items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-[30%]"
            >
              <div className="rounded-full overflow-hidden border-4 border-[rgb(var(--primary))] aspect-square mb-6">
                <img
                  src="https://github.com/mavxa.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-[70%]"
            >
              <h2 className="text-[rgb(var(--primary))] text-5xl font-bold mb-5">
                Mavxa
              </h2>

              <div className="mb-5">
                <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-2">
                  Languages
                </h3>
                <ul className="space-y-1 flex gap-2.5 text-[rgb(var(--primary))]/75">
                  <li>🇷🇺 Russian (Native)</li>
                  <li>|</li>
                  <li>🇬🇧 English (Intermediate)</li>
                </ul>
              </div>

              <div className="mb-5 text-[rgb(var(--primary))]/75">
                <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-2">
                  Contact
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:mavxa@duck.com"
                      className="flex items-center gap-2 hover:text-[rgb(var(--primary))] transition-colors"
                    >
                      📧 mavxa@duck.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/mavxa"
                      className="flex items-center gap-2 hover:text-[rgb(var(--primary))] transition-colors"
                    >
                      📱 Telegram: @mavxa
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/mavxa"
                      className="flex items-center gap-2 hover:text-[rgb(var(--primary))] transition-colors"
                    >
                      💻 GitHub: @mavxa
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.171-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z" />
                    </svg>
                    HTML5
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z" />
                    </svg>
                    CSS3
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.121V21.88c-5.52 0-10-4.48-10-10s4.48-10 10-10zm0-2.121C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4c4.411 0 8 3.589 8 8s-3.589 8-8 8v-2c3.309 0 6-2.691 6-6s-2.691-6-6-6V4z" />
                    </svg>
                    SCSS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                    </svg>
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 9.861a2.139 2.139 0 100 4.278 2.139 2.139 0 100-4.278zm-5.992 6.394l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 001.363 3.578l.101.213-.101.213a23.307 23.307 0 00-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 011.182-3.046A24.752 24.752 0 015.317 8.95zm12.675 7.305l-.133-.469a23.357 23.357 0 00-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 001.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 01-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 00-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 00-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 013.233-.501 24.847 24.847 0 012.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 002.421-2.968l.135-.193.234-.02a23.63 23.63 0 003.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 01-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 01-3.234.501 24.674 24.674 0 01-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 00-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 00-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0114.75 7.24zM7.206 22.677A2.38 2.38 0 016 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 002.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 01-2.052-2.545 24.976 24.976 0 01-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 01-1.35-2.122 30.354 30.354 0 01-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 011.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 015.033 0l.234.02.134.193a30.006 30.006 0 012.517 4.35l.101.213-.101.213a29.6 29.6 0 01-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 002.196-3.798 28.585 28.585 0 00-2.197-3.798 29.031 29.031 0 00-4.394 0 28.477 28.477 0 00-2.197 3.798 29.114 29.114 0 002.197 3.798z" />
                    </svg>
                    React
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 0H4C1.793 0 0 1.793 0 4v16c0 2.207 1.793 4 4 4h16c2.207 0 4-1.793 4-4V4c0-2.207-1.793-4-4-4zm-2.5 15h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                    </svg>
                    Bootstrap
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                    </svg>
                    Tailwind
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                    </svg>
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[rgb(var(--primary))] bg-opacity-10 backdrop-blur-sm flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                    </svg>
                    Git
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-12 px-6 bg-[rgb(var(--secondary))] mb-[15vh] rounded-t-[2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-[80em] mx-auto">
          <h2 className="text-[rgb(var(--accent))] text-4xl font-bold mb-8 text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden backdrop-blur-xl bg-[rgb(var(--primary))] bg-opacity-5 border border-[rgb(var(--accent))] border-opacity-10 p-6 hover:bg-opacity-10 transition-all duration-300"
            >
              <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-3">
                Personal CV Website
              </h3>
              <p className="text-[rgb(var(--text))] mb-4">
                A modern, responsive CV website built with React, Framer Motion,
                and Tailwind CSS. Features smooth animations and glass morphism
                effects.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  React
                </span>
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  TypeScript
                </span>
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  Tailwind
                </span>
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  Framer Motion
                </span>
              </div>
              <a
                href="https://github.com/mavxa/cv-mavxa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--accent))] hover:underline inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden backdrop-blur-xl bg-[rgb(var(--primary))] bg-opacity-5 border border-[rgb(var(--accent))] border-opacity-10 p-6 hover:bg-opacity-10 transition-all duration-300"
            >
              <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-3">
                Stack Flow Landing
              </h3>
              <p className="text-[rgb(var(--text))] mb-4">
                A responsive landing page showcasing modern design principles
                and SCSS capabilities. Built with a focus on clean design and
                smooth user experience.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  SCSS
                </span>
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  Bootstrap
                </span>
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  HTML5
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://scss-landing-stack-flow.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--accent))] hover:underline inline-flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden backdrop-blur-xl bg-[rgb(var(--primary))] bg-opacity-5 border border-[rgb(var(--accent))] border-opacity-10 p-6 hover:bg-opacity-10 transition-all duration-300"
            >
              <h3 className="text-[rgb(var(--accent))] text-xl font-semibold mb-3">
                Constellations App
              </h3>
              <p className="text-[rgb(var(--text))] mb-4">
                An educational pet project developed during my studies,
                demonstrating React components and Tailwind styling. Interactive
                constellation visualization.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  React
                </span>
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  Tailwind CSS
                </span>
                <span className="px-2 py-1 text-sm rounded-full bg-[rgb(var(--primary))] bg-opacity-10">
                  JavaScript
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://constellations-gsk.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(var(--accent))] hover:underline inline-flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="pt-12 px-6 bg-[rgb(var(--secondary))] rounded-t-[2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[rgb(var(--accent))] text-4xl font-bold mb-8 text-center">
          Education
        </h2>

        <p className="text-[rgb(var(--primary))] text-[14px] py-2">
          P.S. I'm currently studying to become an IT specialist in college.
        </p>
      </motion.section>
    </div>
  );
}

export default App;
