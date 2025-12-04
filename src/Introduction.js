import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Introduction() {
  return (
    <div className="app">
      <Header />

      <main>
        <h2>Project Overview</h2>

        <section>
          <h3>Project Description</h3>
          <p>
            This web application will be designed for a small local business owner named Bob who runs a lawn care and landscaping service. 
            The website will highlight Bob’s services, showcase past landscaping work through a photo gallery, and provide potential customers 
            with an easy way to contact him. The purpose of this site is to increase Bob’s visibility in the community and make communication 
            with new clients more efficient.
          </p>
        </section>

        <section>
          <h3>Intended Users</h3>
          <ul>
            <li>Local homeowners looking for lawn care services</li>
            <li>New customers searching for landscaping solutions</li>
            <li>Returning clients seeking contact or service updates</li>
          </ul>
        </section>

        <section>
          <h3>Overview of Website Content</h3>
          <ul>
            <li>Service descriptions and pricing examples</li>
            <li>Photo gallery of landscaping projects</li>
            <li>About page introducing Bob and his work background</li>
            <li>Contact form for inquiries and service requests</li>
          </ul>
        </section>

        <section>
          <h3>Client Information</h3>
          <ul>
            <li><strong>Name:</strong> Bob Smith</li>
            <li><strong>Business:</strong> Bob's Lawn Care & Landscaping</li>
            <li><strong>Email:</strong> bobsmallbusiness@example.com</li>
            <li><strong>Phone:</strong> [private]</li>
          </ul>
        </section>

        <section>
          <h3>Wireframe (Home Page Layout)</h3>
          <figure>
            <img src="images/wireframe-homepage.png" alt="Homepage Wireframe" style={{ maxWidth: "400px" }} />
            <figcaption>Figure 1: Homepage Wireframe created using Draw.io</figcaption>
          </figure>
        </section>

        <section>
          <h3>Site Map</h3>
          <figure>
            <img src="images/site-map.png" alt="Site Map Diagram" style={{ maxWidth: "400px" }} />
            <figcaption>Figure 2: Sitemap showing website structure</figcaption>
          </figure>
        </section>

        <section>
          <h3>Website Page Details</h3>
          <h4>1. Home Page (index.html)</h4>
          <ul>
            <li>Purpose: Brief introduction of business and navigation access.</li>
            <li>Content: Welcome message, featured image, navigation links.</li>
            <li>Interactivity: Buttons linking to Services and Gallery pages.</li>
          </ul>

          <h4>2. About Page (about.html)</h4>
          <ul>
            <li>Purpose: Share information about Bob and his business background.</li>
            <li>Content: Bio text, mission statement, photo.</li>
          </ul>

          <h4>3. Services Page (services.html)</h4>
          <ul>
            <li>Purpose: Display list of services and estimated pricing.</li>
            <li>Interactivity: jQuery UI accordion to expand/hide details.</li>
          </ul>

          <h4>4. Gallery Page (gallery.html)</h4>
          <ul>
            <li>Purpose: Show completed landscaping projects.</li>
            <li>Interactivity: JavaScript slideshow/lightbox image view.</li>
          </ul>

          <h4>5. Contact Page (contact.html)</h4>
          <ul>
            <li>Purpose: Allow users to send message inquiries.</li>
            <li>Content: Form fields for name, contact info, message.</li>
            <li>Validation: JavaScript form validation ensuring required fields.</li>
          </ul>
        </section>

        <section>
          <h3>Dynamic Functionality</h3>
          <ul>
            <li><strong>Gallery Page:</strong> JavaScript slideshow to cycle through project images.</li>
            <li><strong>Services Page:</strong> jQuery UI Accordion to organize service descriptions.</li>
            <li><strong>Contact Page:</strong> JavaScript form validation for user input accuracy.</li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
