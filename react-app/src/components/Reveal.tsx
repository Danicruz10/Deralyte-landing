import { type ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
};

function Reveal({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 75 }} // Empieza invisible y 75px abajo
      whileInView={{ opacity: 1, y: 0 }} // Cuando se ve, sube y aparece
      viewport={{ once: true }} // Solo se anima la primera vez que bajas
      transition={{ duration: 0.5, delay: 0.25 }} // Tiempo de la animación
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
