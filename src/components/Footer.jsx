import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white text-sm text-gray-700 p-8 border-t mt-10">
        {/* Wrapper flex container */}
        <div className="flex justify-between items-start mb-6">
          {/* Left side - details in flex row with spacing */}
          <div className="flex gap-10">
            <div>
              <h4 className="font-bold mb-2">About Us</h4>
              <ul>
                <li>Corporate Responsibility</li>
                <li>Investors</li>
                <li>Media Center</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Business</h4>
              <ul>
                <li>Enterprise</li>
                <li>SME</li>
                <li>Wholesale</li>
                <li>International</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact Us</h4>
              <p>Sri Lanka Telecom PLC</p>
              <p>Lotus Road, P.O.Box 503</p>
              <p>Colombo 01, Sri Lanka</p>
              <p>Telephone: +94 112 000 000</p>
              <p>Email: 1212@slt.com.lk</p>
              <p>Mon–Fri: 9am to 5pm</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Customer Support</h4>
              <p>Telephone: 1212</p>
              <p>Email: 1212@slt.com</p>
              <p>Self Service: +94 112 12 12 12</p>
            </div>
          </div>

          {/*  social media icons */}
          <div className="flex space-x-6 items-center justify-end">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
            {/* Facebook  */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.8v-7h-3v-3h3v-2.3c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 3h-2.9v7A10 10 0 0 0 22 12z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
            {/* Twitter */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14.86 5.48 5.48 0 0 0 2.4-3 10.9 10.9 0 0 1-3.48 1.33 5.48 5.48 0 0 0-9.3 5A15.58 15.58 0 0 1 1.64 3.15a5.48 5.48 0 0 0 1.7 7.3 5.4 5.4 0 0 1-2.48-.68v.07a5.48 5.48 0 0 0 4.4 5.38 5.49 5.49 0 0 1-2.46.09 5.48 5.48 0 0 0 5.12 3.8A10.97 10.97 0 0 1 1 19.54 15.5 15.5 0 0 0 8.29 21c9.05 0 14-7.5 14-14 0-.21 0-.42-.02-.63A10 10 0 0 0 23 3z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
            {/* Instagram */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm8 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm-4 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm5.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
          </a>
          {/* YouTube */}
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white">
           <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"> <path d="M19.615 3.184c-1.865-.131-9.618-.131-11.482 0-1.904.134-3.298 1.603-3.398 3.517-.126 2.588-.126 7.68 0 10.268.1 1.915 1.494 3.384 3.398 3.517 1.865.131 9.617.131 11.482 0 1.903-.134 3.297-1.603 3.398-3.517.126-2.588.126-7.68 0-10.268-.1-1.915-1.494-3.384-3.398-3.517zM10 15.5v-7l6 3.5-6 3.5z" /></svg>
      </a>

          {/* LinkedIn */}
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white">
           <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5 1.11 1 2.5 1s2.48 1.119 2.48 2.5zM.2 8.98h4.56v14.02H.2V8.98zM9.98 8.98h4.38v2.1h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.98v7.3h-4.58v-6.48c0-1.54-.03-3.53-2.15-3.53-2.15 0-2.48 1.68-2.48 3.41v6.6H9.98V8.98z"/> </svg>
          </a>

        </div>
      </div>

      </footer>
    </>
  );
}
