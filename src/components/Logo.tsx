
interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const Logo = ({ size = "md", showText = true }: LogoProps) => {
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "h-8 w-8";
      case "lg":
        return "h-14 w-14";
      case "md":
      default:
        return "h-10 w-10";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`relative flex items-center justify-center ${getSizeClass()}`}>
        <img 
          src="/lovable-uploads/9a49c76c-028e-4eff-87c9-52a0d170ffac.png" 
          alt="Schedulak Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <span className="text-xl font-bold bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
          Schedulak
        </span>
      )}
    </div>
  );
};

export default Logo;
