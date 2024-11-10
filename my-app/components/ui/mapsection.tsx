import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-2xl">Our Location</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5661042519025!2d151.10092081521252!3d-33.87748028065435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3e3b3de41d%3A0x5017d681632ccc0!2s123%20Burwood%20Rd%2C%20Burwood%20NSW%202134%2C%20Australia!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-4 text-2xl">Visit Us</h3>
            <p className="text-gray-600 mb-4">
              We're conveniently located in the heart of Burwood. Drop by our center to learn more about our
              programs and meet our dedicated team of educators.
            </p>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>123 Burwood Road, Burwood NSW 2134</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}