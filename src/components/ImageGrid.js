import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore('images'); 

  return (
    <div className='img-grid'>
        {docs && docs.map(doc => (
            <motion.div className='img-wrap'
                whileHover={{ opacity: 1 }}
                layout
            	onClick={() => setSelectedImg(doc.url)}
                key={doc.id} 
            >
                <motion.img src={doc.url} 
                    alt="Uploaded pic" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                />
            </motion.div>
        ))}
    </div>
  )
}
