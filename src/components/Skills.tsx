import { motion } from "framer-motion";

const skills = [
  { category: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"] },
  { category: "Development", items: ["React", "TypeScript", "Node.js", "Next.js"] },
  { category: "Tools", items: ["Figma", "VS Code", "Git", "Docker"] },
];

export function Skills() {
  return (
    <section className="container section border-t border-border" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="heading-lg mb-16">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="heading-md">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <li key={skill} className="body-md flex items-center gap-2">
                    <span className="inline-block w-1 h-1 rounded-full bg-foreground"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}