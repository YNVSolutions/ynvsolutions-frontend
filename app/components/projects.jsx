import React from 'react'

const Projects = () => {
  return (
    <div className='z-[-999] absolute  w-full h-full bg-zinc-700' id = "projects">
      <style jsx>{`
        .grid div {
          grid-row: var(--r);
          grid-column: var(--c);
        }
        .grid img {
          width: 200px;
          height: 150px;
        }
      `}</style>
      <div className="grid grid-cols-8 grid-rows-4 gap-2">
        {/* Row 1 */}
        <div className="col-span-1 row-span-1" style={{ '--r': 1, '--c': 1 }}>
          <img src="https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" alt="Image 1" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 1, '--c': 7 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRSN7q0U6K6ciRrhPb0k4mmKMDFiQNyjXUw&s" alt="Image 15" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 1, '--c': 4 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqh-XpWAkI5y-Tp8KoDkTDlmNZ0pwQK_epGw&s" alt="Image 15" />
        </div>

        {/* Row 2 */}
        <div className="col-span-1 row-span-1" style={{ '--r': 2, '--c': 5 }}>
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Technology_Trends.jpg" alt="Image 3" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 2, '--c': 8 }}>
          <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201810/stockvault-person-studying-and-learning---knowledge-concept178241_0.jpeg?size=690:388" alt="Image 13" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 2, '--c': 2 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_d44PBXJFU95Jxbp0xZTqkP2XJGemmgiQemhn1l_RAedJRFebCVCMZz2YoxFwaffJ-U0&usqp=CAU" alt="Image 15" />
        </div>

        {/* Row 3 */}
        <div className="col-span-1 row-span-1" style={{ '--r': 3, '--c': 4 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZx_g2K2F99ksuxib171hL0hfKx8c8OopjQ&s" alt="Image 5" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 3, '--c': 6 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5q8QTOBqv5D2IiYT-H2zuXNe-ostEiw9rHw&s" alt="Image 11" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 3, '--c': 1 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7LyYFYMemkRO_G4Lc9mQSygeLfwP1482KHg&s" alt="Image 15" />
        </div>

        {/* Row 4 */}
        <div className="col-span-1 row-span-1" style={{ '--r': 4, '--c': 8 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5y1WbbqVDtaGo2MfjArnEAIOEnWBv4PQhtA&s" alt="Image 7" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 4, '--c': 2 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSp_DSBSIuU_dG3YhmFGC_GXbYjzAz8UkXA&s" alt="Image 9" />
        </div>
        <div className="col-span-1 row-span-1" style={{ '--r': 4, '--c': 5 }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_U_Hi1vlmPAmZA7oyMAAtkRZqnxpWqyB0lQ&s" alt="Image 15" />
        </div>

      </div >

    </div >

  )
}

export default Projects