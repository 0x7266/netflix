import { Link } from 'react-router-dom';
export default function FooterLinks() {
  return (
    <div className="links grid grid-cols-1 sm:grid-cols-4 justify-center sm:justify-between sm:gap-12">
      <div className="link-col">
        <Link href="/faq">FAQ</Link>
        <Link href="/faq">Investor Relations</Link>
        <Link href="/faq">Ways to Watch</Link>
        <Link href="/faq">Corporate Information</Link>
        <Link href="/faq">Only on Netflix</Link>
      </div>
      <div className="link-col">
        <Link href="/faq">Help Center</Link>
        <Link href="/faq">Jobs</Link>
        <Link href="/faq">Terms of Use</Link>
        <Link href="/faq">Contact Us</Link>
      </div>
      <div className="link-col">
        <Link href="/faq">Account</Link>
        <Link href="/faq">Redeem Gift Cards</Link>
        <Link href="/faq">Privacy</Link>
        <Link href="/faq">Speed Test</Link>
      </div>
      <div className="link-col">
        <Link href="/faq">Media Center</Link>
        <Link href="/faq">Buy Gift Cards</Link>
        <Link href="/faq">Cookie Preferences</Link>
        <Link href="/faq">Legal Notices</Link>
      </div>
    </div>
  );
}
