"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb category="About Us" />
      
      <div className="w-full py-10 lg:py-16" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-[83.333%] mx-auto px-4">
          {/* Page Title */}
          <div className="mb-8 lg:mb-12">
            <h1
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{
                color: "var(--foreground)",
                fontFamily: "var(--font-poppins), sans-serif",
              }}
            >
              About Us
            </h1>
            <div className="h-1 w-20" style={{ backgroundColor: "#dc2626" }}></div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none"
            style={{
              color: "var(--foreground)",
              fontFamily: "var(--font-poppins), sans-serif",
            }}
          >
            <p
              className="text-base lg:text-lg leading-relaxed mb-6"
              style={{
                color: "#2a2a2a",
                fontFamily: "var(--font-poppins), sans-serif",
                lineHeight: "1.8",
              }}
            >
              Welcome to ThaimartBD — your one-stop online destination for quality products, unbeatable deals, and a seamless shopping experience. At ThaimartBD, we are passionate about bringing you a curated selection of trending and authentic products from Thailand across categories with premium quality, fast delivery, and exceptional customer support — all from the comfort of your home.
            </p>

            <p
              className="text-base lg:text-lg leading-relaxed mb-6"
              style={{
                color: "#2a2a2a",
                fontFamily: "var(--font-poppins), sans-serif",
                lineHeight: "1.8",
              }}
            >
              Our mission is to make online shopping in Bangladesh easy, enjoyable, and trustworthy. Whether you're searching for daily essentials, fashion items, lifestyle goods, or gift ideas, we strive to offer products that meet your needs at great prices. With a focus on authentic products, fast delivery, easy returns, and customer satisfaction, ThaimartBD is dedicated to becoming your preferred e-commerce platform.
            </p>

            <p
              className="text-base lg:text-lg leading-relaxed mb-6"
              style={{
                color: "#2a2a2a",
                fontFamily: "var(--font-poppins), sans-serif",
                lineHeight: "1.8",
              }}
            >
              We believe in building long-lasting relationships with our customers by providing reliable service, transparent shopping policies, and continuous updates on the latest trends and offers. Join our community and explore a better way to shop — simple, secure, and tailored to you.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

