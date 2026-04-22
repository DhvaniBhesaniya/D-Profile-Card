import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, Globe, BookOpen, Phone, MessageCircle, Link2, Instagram } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";
import backcoverImg from "@/assets/backcover.png";
const tags = [
    { emoji: "💻", label: "Software Developer" },
    { emoji: "✍️", label: "Technical Writer" },
];
const links = [
    { icon: Github, label: "GitHub", href: "https://github.com/DhvaniBhesaniya" },
    { icon: Globe, label: "Portfolio", href: "https://dhvanibhesaniya.github.io/My-Portfolio/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/dhvani-bhesaniya" },
    { icon: BookOpen, label: "Medium", href: "https://medium.com/@dhvani612" },
];
const ProfileCard = () => {
    const [loaded, setLoaded] = useState(false);
    const [avatarLoaded, setAvatarLoaded] = useState(false);
    const [infoVisible, setInfoVisible] = useState(false);
    const [buttonsVisible, setButtonsVisible] = useState(false);
    const [tagsVisible, setTagsVisible] = useState(false);
    const [copyClicked, setCopyClicked] = useState(false);
    const [repoCount, setRepoCount] = useState("–");
    const cardRef = useRef(null);
    useEffect(() => {
        const t1 = setTimeout(() => setLoaded(true), 100);
        const t2 = setTimeout(() => setAvatarLoaded(true), 500);
        const t3 = setTimeout(() => setInfoVisible(true), 800);
        const t4 = setTimeout(() => setTagsVisible(true), 1100);
        const t5 = setTimeout(() => setButtonsVisible(true), 1400);
        return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
    }, []);
    // Fetch GitHub repo count
    useEffect(() => {
        fetch("https://api.github.com/users/DhvaniBhesaniya")
            .then((r) => r.json())
            .then((data) => {
            if (data.public_repos !== undefined) {
                setRepoCount(String(data.public_repos));
            }
        })
            .catch(() => { });
    }, []);
    // Tilt effect
    useEffect(() => {
        const card = cardRef.current;
        if (!card)
            return;
        const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
        if (isTouch)
            return;
        const handleMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const tiltX = (y / rect.height) * 6;
            const tiltY = -(x / rect.width) * 6;
            card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
        };
        const handleLeave = () => {
            card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
        };
        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
        return () => {
            card.removeEventListener("mousemove", handleMove);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, []);
    const handleCall = () => {
        window.open("tel:+919316590044", "_self");
    };
    const handleWhatsApp = () => {
        window.open("https://wa.me/919316590044", "_blank", "noopener,noreferrer");
    };
    const handleInstagram = () => {
        window.open("https://www.instagram.com/_d_patel06_/", "_blank", "noopener,noreferrer");
    };
    const handleCopy = () => {
        setCopyClicked(true);
        navigator.clipboard?.writeText(window.location.href);
        setTimeout(() => setCopyClicked(false), 1200);
    };
    const stats = [
        { value: repoCount, label: "REPOS" },
        { value: "∞", label: "IDEAS" },
        { value: "☕", label: "COFFEE / DAY" },
    ];
    return (<div ref={cardRef} className="group w-full max-w-[400px] rounded-2xl bg-card overflow-hidden border border-border/40 shadow-2xl" style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.3s ease",
            willChange: "transform",
        }}>
      {/* Cover — using profile image */}
      <div className="relative h-48 overflow-hidden">
        <img src={avatarImg} alt="Cover" className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110" style={{ filter: "brightness(0.7) blur(2px)" }}/>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-70"/>

        {/* Back cover image */}
        <div className="absolute inset-0" style={{
            backgroundImage: `url(${backcoverImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}/>
      </div>

      {/* Avatar & Status */}
      <div className="relative px-6">
        <div className="absolute -top-14 left-6">
          <div className="w-[100px] h-[100px] rounded-full border-4 border-card overflow-hidden shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_hsl(190_100%_50%/0.5)] hover:scale-110 cursor-pointer" style={{
            opacity: avatarLoaded ? 1 : 0,
            transform: avatarLoaded ? "scale(1)" : "scale(0.3) rotate(-10deg)",
            transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
            <img src={avatarImg} alt="Dhvani Bhesaniya" className="w-full h-full object-cover"/>
          </div>
        </div>
        
        {/* Open to opportunities text */}
        <div className="absolute top-3 right-6 flex items-center gap-2" style={{
            opacity: avatarLoaded ? 1 : 0,
            transform: avatarLoaded ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.2s",
        }}>
          <div className="w-2 h-2 rounded-full bg-green-500" style={{ 
            boxShadow: "0 0 8px 2px rgba(34, 197, 94, 0.6)", 
            animation: avatarLoaded ? "pulse-dot 2s ease-in-out infinite" : "none" 
          }}></div>
          <span className="text-[11px] font-bold text-green-400 uppercase tracking-wider" style={{ 
            textShadow: "0 0 10px rgba(34, 197, 94, 0.5)" 
          }}>
            Open to opportunities
          </span>
        </div>
      </div>

      {/* Name & Info */}
      <div className="pt-[68px] px-6 pb-1">
        <h2 className="text-xl font-bold text-foreground" style={{
            opacity: infoVisible ? 1 : 0,
            transform: infoVisible ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}>
          Dhvani Bhesaniya
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3" style={{
            opacity: tagsVisible ? 1 : 0,
            transform: tagsVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {tags.map((tag, i) => (<span key={tag.label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border/60 text-foreground bg-muted/50 hover:bg-accent/20 hover:border-accent/40 transition-all duration-300 cursor-default" style={{
                opacity: tagsVisible ? 1 : 0,
                transform: tagsVisible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.9)",
                transition: `all 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.1}s`,
            }}>
              {tag.emoji} {tag.label}
            </span>))}
        </div>

        {/* Bio */}
        <p className="text-muted-foreground text-sm mt-3 leading-relaxed" style={{
            opacity: tagsVisible ? 1 : 0,
            transform: tagsVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s ease 0.2s",
        }}>
          Rust backend developer & Open Source Contributor; who loves crafting fast, reliable systems. Curious AI/ML enthusiast — exploring how
          machines learn, one model at a time.
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-around mx-6 my-3 py-3 rounded-xl border border-border/30" style={{
            opacity: tagsVisible ? 1 : 0,
            transform: tagsVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s ease 0.3s",
        }}>
        {stats.map((stat) => (<div key={stat.label} className="text-center cursor-default group/stat">
            <p className="text-foreground font-bold text-lg transition-colors duration-200 group-hover/stat:text-accent">
              {stat.value}
            </p>
            <p className="text-muted-foreground text-[10px] tracking-wider font-medium">{stat.label}</p>
          </div>))}
      </div>

      {/* Link Buttons Grid */}
      <div className="grid grid-cols-2 gap-2.5 px-6 py-2" style={{
            opacity: buttonsVisible ? 1 : 0,
            transform: buttonsVisible ? "translateY(0)" : "translateY(15px)",
            transition: "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        }}>
        {links.map(({ icon: Icon, label, href }, i) => (<a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-border/50 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/10 hover:text-accent active:scale-95 transition-all duration-300 cursor-pointer" style={{
                opacity: buttonsVisible ? 1 : 0,
                transform: buttonsVisible ? "translateZ(48px) translateY(0) scale(1)" : "translateZ(48px) translateY(10px) scale(0.95)",
                transition: `all 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s`,
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
            }}>
            <Icon size={16}/>
            {label}
          </a>))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 px-6 py-4" style={{
            opacity: buttonsVisible ? 1 : 0,
            transform: buttonsVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s ease 0.4s",
        }}>
        <div className="flex items-center justify-center gap-3">
          <button onClick={handleCall} aria-label="Call" title="Call" className="h-12 w-12 flex items-center justify-center rounded-full border border-border/50 text-foreground hover:border-accent/40 hover:bg-accent/10 active:scale-95 transition-all duration-300" style={{
                transform: "translateZ(48px) scale(1)",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
            }}>
            <Phone size={18}/>
          </button>
          <button onClick={handleWhatsApp} aria-label="WhatsApp" title="WhatsApp" className="h-12 w-12 flex items-center justify-center rounded-full border border-border/50 text-foreground hover:border-accent/40 hover:bg-accent/10 active:scale-95 transition-all duration-300" style={{
                transform: "translateZ(48px) scale(1)",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
            }}>
            <MessageCircle size={18}/>
          </button>
          <button onClick={handleInstagram} aria-label="Instagram" title="Instagram" className="h-12 w-12 flex items-center justify-center rounded-full border border-border/50 text-foreground hover:border-accent/40 hover:bg-accent/10 active:scale-95 transition-all duration-300" style={{
                transform: "translateZ(48px) scale(1)",
                transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                backfaceVisibility: "hidden",
                WebkitFontSmoothing: "antialiased",
                textRendering: "optimizeLegibility",
            }}>
            <Instagram size={18}/>
          </button>
        </div>
        <button onClick={handleCopy} className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-border/50 font-medium text-sm text-muted-foreground hover:border-accent/40 hover:text-foreground active:scale-95 transition-all duration-300" style={{
            transform: copyClicked ? "translateZ(48px) scale(0.93)" : "translateZ(48px) scale(1)",
            transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
            textRendering: "optimizeLegibility",
        }}>
          <Link2 size={16}/>
          {copyClicked ? "Copied!" : "Copy Card Link"}
        </button>
      </div>
    </div>);
};
export default ProfileCard;
