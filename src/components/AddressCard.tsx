import Link from "next/link";

type AddressCardProp = {
  placeName: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  phone: string;
  email: string;
  domain: string;
};

export default function AddressCard(props: AddressCardProp) {
  const { placeName, address, city, state, zip, phone, email, domain } = props;
  return (
    <div className="p-3 bg-light border rounded-3">
      <address className="mb-0">
        <strong>{placeName}</strong>
        <br />
        {address}
        <br />
        {city}, {state} {zip}
        <br />
        <abbr title="Phone">
          <i class="bi bi-telephone-fill"></i>
        </abbr>{" "}
        {phone}
        <br />
        <abbr title="Email">
          <i className="bi bi-envelope-fill"></i>
        </abbr>{" "}
        <Link href={`mailto:${email}`}>{email}</Link>
        <div className="shelterNfo__website">
          <i className="bi bi-display"></i>{" "}
          <a href={`https://www.${domain}/`}>{domain}</a>
        </div>
      </address>
    </div>
  );
}
