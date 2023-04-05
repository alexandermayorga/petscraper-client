import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { iPet } from "@/lib/iPet";


export default function PetCard(props: {pet: iPet}) {
  const { pet } = props;
  //imgs[]
  //name
  //sex
  //breed
  //domain
  //petURI

  const template = (
    <div className="card petCard mb-4">
      <div className={styles.petCard__imgFrame}>
        {pet.imgs && pet.imgs[0] ? (
          <Image
            src={pet.imgs[0]} // Route of the image file
            height={240} // Desired size with correct aspect ratio
            width={298} // Desired size with correct aspect ratio
            alt={`${pet.name} | ${pet.sex} | ${pet.breed}`}
          />
        ) : (
          <div>
            No Image Yet{" "}
            <span role="img" aria-label="dog emoji">
              🐶
            </span>
          </div>
        )}
      </div>
      <div className="card-body">
        <div className="card-title h3">{pet.name}</div>
        <div className="card-subtitle mb-2">
          <span
            className="badge"
            style={{
              color: pet.sex.indexOf("emale") >= 0 ? "black" : "white",
              backgroundColor:
                pet.sex.indexOf("emale") >= 0 ? "pink" : "#2892CF",
            }}
          >
            {pet.sex}
          </span>
        </div>
        <p className="card-text">{pet.breed}</p>
        <p className="card-text">
          <small className="text-muted">{pet.domain}</small>
        </p>
        <a
          className="btn btn-dark"
          href={pet.petURI}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </div>
    </div>
  );

  return template;
}
