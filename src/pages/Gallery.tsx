
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryCategory = 'all' | 'facilities' | 'staff' | 'events' | 'equipment';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: GalleryCategory;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/src/assets/gallery/facility1.jpg", alt: "Hospital Main Entrance", category: 'facilities' },
  { id: 2, src: "/src/assets/gallery/staff1.jpg", alt: "Medical Team", category: 'staff' },
  { id: 3, src: "/src/assets/gallery/equipment1.jpg", alt: "MRI Scanner", category: 'equipment' },
  { id: 4, src: "/src/assets/gallery/facility2.jpg", alt: "Patient Room", category: 'facilities' },
  { id: 5, src: "/src/assets/gallery/event1.jpg", alt: "Health Awareness Camp", category: 'events' },
  { id: 6, src: "/src/assets/gallery/staff2.jpg", alt: "Surgeons Team", category: 'staff' },
  { id: 7, src: "/src/assets/gallery/equipment2.jpg", alt: "Laboratory Equipment", category: 'equipment' },
  { id: 8, src: "/src/assets/gallery/facility3.jpg", alt: "Operation Theater", category: 'facilities' },
  { id: 9, src: "/src/assets/gallery/event2.jpg", alt: "Blood Donation Drive", category: 'events' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const categories: { value: GalleryCategory; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'facilities', label: 'Facilities' },
    { value: 'staff', label: 'Staff' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'events', label: 'Events' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-muted py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a visual journey through our state-of-the-art facilities, dedicated medical team, 
            and the events that make Mirza Hospital a leader in healthcare.
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="overflow-hidden rounded-xl shadow-md hover-lift cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] relative">
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="w-10 h-10 border-4 border-t-primary rounded-full animate-spin"></div>
                  </div>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ opacity: 0 }}
                    onLoad={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.opacity = '1';
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm text-muted-foreground capitalize">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl p-0 bg-transparent border-none overflow-hidden">
          {selectedImage && (
            <div className="glass">
              <div className="aspect-auto max-h-[80vh] flex items-center justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-w-full max-h-[80vh] object-contain" 
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="font-medium">{selectedImage.alt}</h3>
                <p className="text-sm text-muted-foreground capitalize">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
