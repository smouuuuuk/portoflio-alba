import Link from "next/link";
import Image from "next/image";
import styles from "./proyecto.module.css";

export default function Proyecto({ props }) {
    return(
        <Link href={ props.href } >
            <Image
              hoverable="true"
              className={ styles.image }
              priority
              src={ props.src }
              width={ 1600 }
              height={ 1600 }
              alt={ props.alt }
              data-aos="fade-up"
              />
          </Link>
    )
}