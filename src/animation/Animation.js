import "./animation.css"
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

function Animation(){
    return(
        <div>
            <motion.div className="card-div" animate={{ scale: 0.8 }}>
                <h3>hi my name is daniyal</h3>
                <p>The improved version of Code Components in Framer no longer use the Framer Library—keep 
                reading to learn more about migrating your old Code Components or head over to the legacy 
                documentation to maintain them.</p>
            </motion.div>
        </div>
    )
}

export default Animation;