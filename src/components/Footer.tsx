

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-gray-200 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
                <div>
                    <div className="text-2xl font-bold text-white">Siri Decorations</div>
                    <p className="text-sm text-white mt-2">Premium event materials — artificial flowers, pendal ceilings, lights, birthday items, and custom backdrops.Making Every Event Beautiful With Artificial — Weddings, Birthdays, Festivals & More</p>
                    {/* <div className="flex gap-3 mt-4">
                        <a href="https://wa.me/+91 6303130025" target="_blank" rel="noreferrer" className="bg-green-600 p-2 rounded-full">WhatsApp</a>
                        <a href="mailto:siridecorations@gmail.com" className="bg-gray-800 p-2 rounded-full">Email</a>
                        <a href="#" className="bg-gray-800 p-2 rounded-full">Call</a>
                    </div> */}
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Navigation</h4>
                    <ul className="text-sm text-white space-y-2">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/about" className="hover:text-white">About</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="/gallery" className="hover:text-white">Gallery</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3">Contact & Social</h4>
                    <div className="text-sm text-white">
                        <div>📞 +91 63031 30025</div>
                        <div>✉️ siridecorations@gmail.com</div>
                        <div className="mt-3 flex gap-3">
                            {/* simple inline svg icons */}
                            <a href="#" className="p-2 bg-gray-800 rounded-full" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.14 8.44 9.94v-7.04H8.08v-2.9h2.36V9.2c0-2.33 1.39-3.62 3.51-3.62. 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.6l-.42 2.9h-2.18v7.04C18.34 21.21 22 17.06 22 12.07z" /></svg></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.4A3.6 3.6 0 1 0 15.6 12 3.6 3.6 0 0 0 12 8.4zM18.5 6.6a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" /></svg></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full" aria-label="Youtube"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M23.5 6.2a2.7 2.7 0 0 0-1.9-1.9C19.8 4 12 4 12 4s-7.8 0-9.6.3A2.7 2.7 0 0 0 .5 6.2 28.6 28.6 0 0 0 0 12a28.6 28.6 0 0 0 .5 5.8 2.7 2.7 0 0 0 1.9 1.9c1.8.3 9.6.3 9.6.3s7.8 0 9.6-.3a2.7 2.7 0 0 0 1.9-1.9A28.6 28.6 0 0 0 24 12a28.6 28.6 0 0 0-.5-5.8zM9.8 15.6V8.4l6.5 3.6-6.5 3.6z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-700 border-t border-gray-800 text-center py-4 text-sm text-white">
                © {new Date().getFullYear()} Siri Decorations — All rights reserved.
            </div>
        </footer>
    )
}
