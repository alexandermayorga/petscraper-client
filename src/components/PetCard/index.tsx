import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { iPet } from "@/lib/iPet";

export default function PetCard(props: { pet: iPet; template?: string }) {
  const { pet, template = "horizontal" } = props;
  //imgs[]
  //name
  //sex
  //breed
  //domain
  //petURI
  const renderPetImage = (pet: iPet) => {
    const isImageAvailable = pet.imgs && pet.imgs[0];
    const imageFrameStyles = [styles.petCard__imgFrame];
    if (!isImageAvailable) imageFrameStyles.push(styles.noImage);

    return (
      <div className={imageFrameStyles.join(" ")}>
        {isImageAvailable ? (
          <Image
            src={pet.imgs[0]} // Route of the image file
            height={256} // Desired size with correct aspect ratio
            width={340} // Desired size with correct aspect ratio
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
    );
  };

  const renderSexBadge = (pet: iPet) => {
    return (
      <span
        className="badge"
        style={{
          color: pet.sex.indexOf("emale") >= 0 ? "black" : "white",
          backgroundColor: pet.sex.indexOf("emale") >= 0 ? "pink" : "#2892CF",
        }}
      >
        {pet.sex}
      </span>
    );
  };

  const verticalTemplate = (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div className={`card mb-4 ${styles.petCard} ${styles[template]}`}>
        {renderPetImage(pet)}
        <div className="card-body">
          <h3 className="card-title text-truncate">{pet.name}</h3>
          <div className="card-subtitle mb-2">{renderSexBadge(pet)}</div>
          <p title={pet.breed} className={`card-text ${styles["line-clamp-2-sm"]} ${styles.breed}`}>{pet.breed}</p>
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
    </div>
  );

  const horizontalTemplate = (
    <>
      <div className="col-lg-6 col-xl-6">
        <div className={`card mb-3 ${styles.petCard} ${styles[template]}`}>
          <div className="row">
            <div className="col-md-5">
              {renderPetImage(pet)}
              {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title text-truncate">{pet.name}</h3>
                <div className="card-subtitle mb-2">{renderSexBadge(pet)}</div>
                <p title={pet.breed} className={`card-text ${styles["line-clamp-2-sm"]} ${styles.breed}`}>{pet.breed}</p>
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
          </div>
        </div>
      </div>
    </>
  );

  if (template == "vertical") return verticalTemplate;

  return horizontalTemplate;
}
