import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import photo from '../../public/photo.jpg'

export default function Projects() {
  return (
    <div>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.link}>
        <Link href="/projects/project1" >
          <Image
            src={photo}
            alt="project"
          />
          <div>
            Project 1: Assignment 1
          </div>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/projects/project2" >
          <Image
            src={photo}
            alt="project"
          />
          <div>
            Project 2: Assignment 2
          </div>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/projects/project3" >
          <Image
            src={photo}
            alt="project"
          />
          <div>
            Project 3: Assignment 3
          </div>
        </Link>
      </div>
    </div>
  )
}