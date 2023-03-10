import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Projects.module.css'
import photo from '../../public/photo.jpg'

export default function AllProjects() {
  return (
    <div className={styles.container} style={{ marginTop: "-70px;", marginBottom: "-92px;", background: '#8B80E5' }}>
      <div className={styles.pageTitle}>
        <h1 className={styles.heading}>All pr<em className={styles.italic}>oje</em>cts</h1>
      </div>
      <div className={styles.columnContainer}>
        <div className={styles.column1}>
          <Link href="/projects/assignment1">
            <Image
              src={photo}
              alt="project"
            />
            <div className={styles.title}>
              Project 1: Assignment 1
            </div>
          </Link>
        </div>
        <div className={styles.column2}>
          <Link href="/projects/assignment2">
            <Image
              src={photo}
              alt="project"
            />
            <div className={styles.title}>
              Project 2: Assignment 2
            </div>
          </Link>
        </div>
        <div className={styles.column2}>
          <Link href="/projects/assignment3">
            <Image
              src={photo}
              alt="project"
            />
            <div className={styles.title}>
              Project 3: Assignment 3
            </div>
          </Link>
        </div>
      </div>

      {/* ------- Resume section ------- */}
      <div className={styles.moreProjects}>
        <div className={styles.subTitle}>More projects</div>
        <span className={styles.contentTitle}>
          <span className={styles.contentDesc}>Years</span>
          <span className={styles.contentDesc}>Role</span>
          <span className={styles.contentDesc}>Company</span>
          <span className={styles.contentDesc}></span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
        <span className={styles.contentProject}>
          <span className={styles.contentYear}>2018&#8212;2019</span>
          <span className={styles.contentRole}>Designer</span>
          <span className={styles.contentClient}>Trygghetsbyrån</span>
          <span className={styles.contentArrow}>&#x261E;</span>
        </span>
        <span className={styles.bar}></span>
      </div>
    </div>
  )
}
