export default function Footer({ name }: { name: string }) {
  return (
    <footer className="snap-section-auto py-8 px-6 bg-surface-dark text-surface/50 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
    </footer>
  );
}
