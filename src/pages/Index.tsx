import HeroBanner from "@/components/HeroBanner";
import CoursesSection from "@/components/CoursesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <CoursesSection />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>© 2026 Professional Development Program. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
