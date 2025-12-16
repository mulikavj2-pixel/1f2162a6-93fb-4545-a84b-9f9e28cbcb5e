"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarouselSplit from '@/components/sections/hero/HeroBillboardCarouselSplit';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Coffee, Trophy, Calendar, Leaf, Instagram, Linkedin, Mail, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="small"
      sizing="mediumSizeExtraLargeSpacing"
      background="aurora"
      cardStyle="glass-outline-light"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
            { name: "Menu", id: "menu" }
          ]}
          brandName="CoffeeHub"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895946293-vifh7s8r.jpg"
          logoAlt="CoffeeHub Logo"
          bottomLeftText="Craft Coffee Since 2015"
          bottomRightText="hello@coffeehub.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarouselSplit
          title="Discover Exceptional Coffee Crafted Daily"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895947824-8i9ins97.jpg",
              imageAlt: "Espresso shot"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895949530-23li2f0v.jpg",
              imageAlt: "Cappuccino with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895951430-1b5s6kt3.jpg",
              imageAlt: "Iced coffee beverage"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895952442-k103tgc6.jpg",
              imageAlt: "Roasted coffee beans"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895954233-71e1q946.jpg",
              imageAlt: "Barista preparing coffee"
            }
          ]}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Order Now", href: "contact" }
          ]}
          ariaLabel="Coffee shop hero section"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          title="Featured Coffee Selection"
          description="Explore our most popular coffee drinks crafted with premium beans and expert care"
          products={[
            {
              id: "1",
              name: "Espresso Shot",
              price: "$3.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895956843-rtgdc5wq.jpg",
              imageAlt: "Double espresso shot"
            },
            {
              id: "2",
              name: "Cappuccino",
              price: "$4.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895958774-bb3n2sph.jpg",
              imageAlt: "Cappuccino with milk foam"
            },
            {
              id: "3",
              name: "Americano",
              price: "$3.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895960175-hrqvpxe2.jpg",
              imageAlt: "Black americano coffee"
            },
            {
              id: "4",
              name: "Mocha",
              price: "$5.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895961400-z6op473o.jpg",
              imageAlt: "Mocha with chocolate"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Featured coffee products"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          title="Passionate about coffee since 2015. We source the finest beans from sustainable farms worldwide and roast them fresh daily to bring you the perfect cup."
          description="CoffeeHub Founders"
          subdescription="Est. 2015 | Award-winning Roasters"
          icon={Coffee}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895955702-m5njs35p.jpg"
          imageAlt="CoffeeHub interior"
          useInvertedBackground="noInvert"
          ariaLabel="About CoffeeHub section"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="What Our Customers Say"
          description="Join thousands of coffee lovers who trust CoffeeHub for their daily dose of excellence"
          testimonials={[
            {
              id: "1",
              title: "Best Coffee in the City",
              quote: "I've been coming here for three years. The consistency and quality of their coffee is unmatched. Every barista knows exactly how to make the perfect espresso.",
              name: "Sarah Mitchell",
              role: "Regular Customer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895963111-021saros.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              title: "Amazing Atmosphere",
              quote: "Not just great coffee, but a wonderful place to work or relax. The ambiance is perfect, and the staff is incredibly friendly and welcoming.",
              name: "James Chen",
              role: "Freelancer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895964837-9dvatfy3.jpg",
              imageAlt: "James Chen"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Customer testimonials section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="CoffeeHub by the Numbers"
          description="Our growth and impact in the coffee community"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Cups Served",
              description: "Happy customers served annually",
              icon: Coffee
            },
            {
              id: "2",
              value: "15",
              title: "Awards",
              description: "Local and regional recognition",
              icon: Trophy
            },
            {
              id: "3",
              value: "8",
              title: "Years",
              description: "Of craft coffee excellence",
              icon: Calendar
            },
            {
              id: "4",
              value: "100%",
              title: "Sustainable",
              description: "Ethically sourced beans only",
              icon: Leaf
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="CoffeeHub metrics section"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Expert baristas and coffee enthusiasts dedicated to your perfect cup"
          members={[
            {
              id: "1",
              name: "Marco Rossi",
              role: "Head Barista",
              description: "Champion barista with 10 years of experience. Specializes in espresso perfection and latte art.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895968833-jdxq3pyq.jpg",
              imageAlt: "Marco Rossi",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" }
              ]
            },
            {
              id: "2",
              name: "Lisa Park",
              role: "Coffee Specialist",
              description: "Coffee sourcing expert passionate about sustainable farming and single-origin beans.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895973138-svk37t3g.jpg",
              imageAlt: "Lisa Park",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "David Thompson",
              role: "Manager",
              description: "Customer experience enthusiast ensuring every visit is memorable and welcoming.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1765895974415-wi6576ls.jpg",
              imageAlt: "David Thompson",
              socialLinks: [
                { icon: Mail, url: "mailto:david@coffeehub.com" }
              ]
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Team members section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about CoffeeHub"
          faqs={[
            {
              id: "1",
              title: "What coffee beans do you use?",
              content: "We source premium, ethically-sourced beans from sustainable farms across Central America, South America, and East Africa. All beans are roasted fresh in-house daily."
            },
            {
              id: "2",
              title: "Do you offer decaf options?",
              content: "Yes, we offer high-quality decaf espresso and all coffee beverages with decaf. Our decaf is water-processed to preserve flavor while removing caffeine."
            },
            {
              id: "3",
              title: "What are your operating hours?",
              content: "We're open Monday to Friday 6:30 AM - 7 PM, Saturday 7 AM - 8 PM, and Sunday 8 AM - 6 PM. We're closed on major holidays."
            },
            {
              id: "4",
              title: "Do you provide WiFi?",
              content: "Yes, we have free high-speed WiFi available for all customers. Just ask for the password at the counter."
            },
            {
              id: "5",
              title: "Can I order wholesale coffee beans?",
              content: "Absolutely! We offer wholesale pricing for businesses. Contact us at wholesale@coffeehub.com for bulk orders and special pricing."
            },
            {
              id: "6",
              title: "Do you have seating for meetings?",
              content: "Yes, we have comfortable seating areas perfect for meetings and work sessions. We also offer a quieter corner for focused work."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          ariaLabel="FAQ section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Get Our Latest Coffee Updates"
          description="Subscribe to our newsletter for new roasts, special offers, and coffee tips delivered to your inbox weekly"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. No spam, just great coffee."
          useInvertedBackground="noInvert"
          ariaLabel="Newsletter signup section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="CoffeeHub"
          copyrightText="© 2025 CoffeeHub. All rights reserved. Crafted with passion for coffee lovers."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/coffeehub",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/coffeehub",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/coffeehub",
              ariaLabel: "Twitter"
            }
          ]}
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}