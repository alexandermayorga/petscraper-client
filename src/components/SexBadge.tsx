export default function SexBadge({ sex }: { sex: string }) {
  return (
    <span
      className="badge"
      style={{
        color: sex.indexOf("emale") >= 0 ? "black" : "white",
        backgroundColor: sex.indexOf("emale") >= 0 ? "pink" : "#2892CF",
      }}
    >
      {sex}
    </span>
  );
}
