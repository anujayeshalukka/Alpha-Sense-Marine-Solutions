import { motion } from 'framer-motion';

interface PageBannerProps {
  title: React.ReactNode;
  subtitle?: string;
  bgImage?: string;
  children?: React.ReactNode;
}

const PageBanner = ({ title, subtitle, bgImage, children }: PageBannerProps) => {
  return (
    <section className="relative h-[400px] flex flex-col justify-center items-center bg-[#112140] border-b border-[#ffffff]/5 overflow-hidden">
      {bgImage ? (
        <>
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url("${bgImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#112140] via-[#112140]/60 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
        </>
      )}
      
      <div className="max-w-[1536px] w-full mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#ffffff] [&_span]:!text-[#18b3b5] mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-[#cbd5e1] font-light leading-relaxed mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
