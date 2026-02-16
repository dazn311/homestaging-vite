import {motion} from "motion/react"
import {useRef} from "react";

export function SvgMotion() {
  const ref = useRef<SVGSVGElement>(null);

  return (
    <motion.svg ref={ref}
                viewBox="0 0 200 200"
                initial={{ viewBox: "10 0 200 200" ,width: 100}} // 100px to the right
                animate={{ viewBox: "100 0 200 200" ,width: 1000}} // 100px to the right
                transition={{duration: 1.6, delay: 0.2}}
                style={{ backgroundColor:'gray',width: 200, height: 200 }}>
      <motion.circle drag width={10} height={10} style={{backgroundColor:'white',width: 60, height: 60}} />
    </motion.svg>
  )
}