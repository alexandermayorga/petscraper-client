import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import { iPet } from "@/lib/iPet";
import SexBadge from "../SexBadge";
import { useRouter } from "next/router";
import Link from "next/link";
import { formatDistance } from 'date-fns'


export default function PetCard(props: { pet: iPet; template?: string }) {
  const router = useRouter();

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

  // const handleCardClick = () => window.open(pet.petURI, '_blank');
  const handleCardClick = () => router.push(`/pets/${pet.slug}`);

  const verticalTemplate = (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div
        className={`card mb-4 ${styles.petCard} ${styles[template]}`}
        onClick={handleCardClick}
      >
        <div className="position-relative">
          {renderPetImage(pet)}
          <div className="card-img-overlay">
            <p className="card-text bottom-0 end-0 position-absolute mb-3 me-3">
              <span className="badge text-bg-light shadow-lg">
                <small><i className="bi bi-calendar3-event me-1"></i>{formatDistance(new Date(pet.createdAt), new Date(), { addSuffix: true })}</small>
              </span>
            </p>
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title text-truncate">{pet.name}</h3>
          <div className="card-subtitle mb-2">
            <SexBadge sex={pet.sex} />
          </div>
          <p
            title={pet.breed}
            className={`card-text ${styles["line-clamp-2-sm"]} ${styles.breed}`}
          >
            {pet.breed}
          </p>
          <p className="card-text">
            <small className="text-muted">{pet.domain}</small>
          </p>
          <Link href={`/pets/${pet.slug}`} className="btn btn-dark">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );

  const horizontalTemplate = (
    <>
      <div className="col-lg-6 col-xl-6">
        <div
          className={`card mb-3 ${styles.petCard} ${styles[template]}`}
          onClick={handleCardClick}
        >
          <div className="row">
            <div className="col-md-5">
              {renderPetImage(pet)}
              {/* <img src="..." className="img-fluid rounded-start" alt="..."/> */}
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className="card-title text-truncate">{pet.name}</h3>
                <div className="card-subtitle mb-2">{renderSexBadge(pet)}</div>
                <p
                  title={pet.breed}
                  className={`card-text ${styles["line-clamp-2-sm"]} ${styles.breed}`}
                >
                  {pet.breed}
                </p>
                <p className="card-text">
                  <small className="text-muted">{pet.domain}</small>
                </p>
                <Link href={`/pets/${pet.slug}`} className="btn btn-dark">
                  View Profile
                </Link>
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
