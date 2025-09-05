import {motion} from "framer-motion"

export default function EducationSection() {
    return (
    <motion.section
        className="pt-12 px-6 bg-secondary rounded-t-[2rem]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-accent text-4xl font-bold mb-8 text-center">
          Education
        </h2>

        <p className="text-primary text-[14px] py-2">
          P.S. I'm currently studying to become an IT specialist in college.
        </p>
      </motion.section>
    );
}