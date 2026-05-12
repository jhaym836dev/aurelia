import React from 'react';
import AppImage from '@/components/ui/AppImage';

const videoHighlights = [
{
  id: 1,
  title: 'A Day at Aurelia',
  duration: '3:42',
  thumb: "https://images.unsplash.com/photo-1726597284983-cb8e36dba0c3",
  alt: 'Aerial beach resort view at golden hour — thumbnail for A Day at Aurelia resort video'
},
{
  id: 2,
  title: 'Sunset at Solis',
  duration: '1:58',
  thumb: "https://images.unsplash.com/photo-1532302584927-8bd4b6118390",
  alt: 'Candlelit oceanfront restaurant at sunset — thumbnail for Solis dining experience video'
},
{
  id: 3,
  title: 'Overwater Life',
  duration: '2:15',
  thumb: "https://images.unsplash.com/photo-1589287097369-f3c9ab393b86",
  alt: 'Overwater bungalows at dusk with amber sky — thumbnail for overwater villa lifestyle video'
}];


export default function VideoSection() {
  return (
    <section
      className="py-20 px-6 relative"
      style={{ borderTop: '1px solid rgba(212,137,74,0.1)' }}>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--primary)' }} />
              <span className="text-primary uppercase tracking-widest" style={{ fontSize: '10px', fontWeight: 600 }}>
                Film
              </span>
            </div>
            <h2 className="section-title font-display text-foreground" style={{ fontWeight: 300 }}>
              Video <span className="italic" style={{ color: 'var(--accent)' }}>Stories</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs reveal-on-scroll stagger-2">
            Let the light of Aurelia move you. Short films capturing the essence of life at the resort.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {videoHighlights?.map((video, i) =>
          <div
            key={video?.id}
            className="reveal-on-scroll group relative overflow-hidden rounded-2xl cursor-pointer"
            style={{
              height: '280px',
              transitionDelay: `${i * 100}ms`
            }}>
            
              <AppImage
              src={video?.thumb}
              alt={video?.alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw" />
            
              {/* Scrim — dark overlay for white text */}
              <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top, rgba(13,10,7,0.88) 0%, rgba(13,10,7,0.3) 60%, rgba(13,10,7,0.1) 100%)' }} />
            

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(212,137,74,0.2)',
                  border: '1px solid rgba(212,137,74,0.5)',
                  backdropFilter: 'blur(8px)'
                }}>
                
                  <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="var(--primary)"
                  className="ml-1">
                  
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-foreground font-display text-lg mb-1" style={{ fontStyle: 'italic', fontWeight: 300 }}>
                  {video?.title}
                </h3>
                <p className="text-muted-foreground text-xs uppercase tracking-widest">{video?.duration}</p>
              </div>
            </div>
          )}
        </div>

        {/* Featured video reel */}
        <div
          className="reveal-on-scroll mt-8 relative overflow-hidden rounded-2xl group cursor-pointer"
          style={{ height: '400px' }}>
          
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1dde97f70-1772138871292.png"
            alt="Full resort aerial view at golden hour — thumbnail for Aurelia resort full cinematic reel video"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="100vw" />
          
          {/* Dark scrim — white text over image */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, rgba(13,10,7,0.82) 0%, rgba(13,10,7,0.5) 50%, rgba(13,10,7,0.25) 100%)'
            }} />
          

          {/* Center play */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-5">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: 'rgba(212,137,74,0.15)',
                border: '1px solid rgba(212,137,74,0.5)',
                backdropFilter: 'blur(12px)',
                animation: 'pulseGlow 3s ease-in-out infinite'
              }}>
              
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--primary)" className="ml-1">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <div className="text-center">
              <p
                className="font-display text-foreground"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, fontStyle: 'italic' }}>
                
                The Aurelia Experience
              </p>
              <p className="text-muted-foreground text-xs uppercase tracking-widest mt-2">
                Full Resort Film · 8:30
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}