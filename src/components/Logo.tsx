export default function Logo({ white = false, className = "" }: { white?: boolean; className?: string }) {
  return <img src={white ? "/logo_white.png" : "/logo.png"} alt="Adna Cosmetics" className={className} />;
}
