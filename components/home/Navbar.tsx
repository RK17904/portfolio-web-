import { motion } from "framer-motion";
import {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type NavItem = {
  label: string;
  id: string;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    id: "home",
  },
  {
    label: "Work",
    id: "work",
  },
  {
    label: "Services",
    id: "services",
  },
  {
    label: "Contact",
    id: "contact",
  },
];

const Navbar = () => {
  /*
   * Home must ALWAYS be the initial active item.
   */
  const [activeSection, setActiveSection] =
    useState<string>("home");

  /*
   * Prevent the normal scroll detector from fighting
   * against a navigation click while smooth scrolling.
   */
  const navigationTargetRef = useRef<string | null>(null);

  const navigationTimeoutRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /*
   * -------------------------------------------------------
   * FIND ACTIVE SECTION
   * -------------------------------------------------------
   *
   * Instead of IntersectionObserver, we create an imaginary
   * activation line near the upper-middle part of viewport.
   *
   * Whichever section has most recently passed that line
   * becomes active.
   */
  const updateActiveSection = useCallback(() => {
    /*
     * If user is currently navigating through a click,
     * don't let normal scrolling change the pill.
     */
    if (navigationTargetRef.current) {
      return;
    }

    /*
     * At the top of the page Home must always be active.
     */
    if (window.scrollY < 120) {
      setActiveSection("home");
      return;
    }

    /*
     * If user reaches almost the bottom,
     * force Contact to become active.
     */
    const viewportBottom =
      window.scrollY + window.innerHeight;

    const documentHeight =
      document.documentElement.scrollHeight;

    if (viewportBottom >= documentHeight - 100) {
      setActiveSection("contact");
      return;
    }

    /*
     * Activation point.
     *
     * 32% down from the viewport gives a much more
     * natural section-navigation feeling.
     */
    const activationPoint =
      window.scrollY + window.innerHeight * 0.32;

    let currentSection = "home";

    navItems.forEach((item) => {
      const section =
        document.getElementById(item.id);

      if (!section) return;

      /*
       * Section absolute position from top of document.
       */
      const sectionTop =
        section.getBoundingClientRect().top +
        window.scrollY;

      if (sectionTop <= activationPoint) {
        currentSection = item.id;
      }
    });

    setActiveSection(currentSection);
  }, []);

  /*
   * -------------------------------------------------------
   * SCROLL LISTENER
   * -------------------------------------------------------
   */
  useEffect(() => {
    /*
     * Run once immediately when Home loads.
     */
    updateActiveSection();

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveSection();

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );

      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [updateActiveSection]);

  /*
   * -------------------------------------------------------
   * NAVIGATION CLICK
   * -------------------------------------------------------
   */
  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    const target =
      document.getElementById(id);

    if (!target) {
      return;
    }

    /*
     * Move the red pill immediately.
     *
     * User should never have to wait for scroll position
     * before receiving navigation feedback.
     */
    setActiveSection(id);

    /*
     * Temporarily lock automatic section detection.
     */
    navigationTargetRef.current = id;

    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current);
    }

    /*
     * Fixed navbar spacing.
     */
    const navbarOffset = 105;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    /*
     * Smooth native scrolling.
     */
    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: "smooth",
    });

    /*
     * Update URL hash without causing another browser jump.
     */
    window.history.replaceState(
      null,
      "",
      id === "home"
        ? window.location.pathname
        : `#${id}`
    );

    /*
     * Release automatic navigation detection after the
     * smooth scrolling animation is effectively finished.
     */
    navigationTimeoutRef.current = setTimeout(
      () => {
        navigationTargetRef.current = null;

        updateActiveSection();
      },
      850
    );
  };

  return (
    <div className="navbar-positioner">
      <motion.nav
        className="main-navbar"
        initial={{
          opacity: 0,
          y: -22,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-label="Main navigation"
      >
        {/* =========================
            BRAND
        ========================== */}

        <a
          href="#home"
          className="navbar-brand"
          aria-label="Go to home"
          onClick={(event) =>
            handleNavigation(event, "home")
          }
        >
          <span className="navbar-brand-mark">
            R
          </span>

          <span className="navbar-brand-name">
            Ravindu
          </span>
        </a>

        {/* =========================
            NAVIGATION
        ========================== */}

        <div className="navbar-links">
          {navItems.map((item) => {
            const isActive =
              activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`navbar-link ${
                  isActive ? "is-active" : ""
                }`}
                aria-current={
                  isActive ? "page" : undefined
                }
                onClick={(event) =>
                  handleNavigation(
                    event,
                    item.id
                  )
                }
              >
                {/* ========================
                    SHARED MOVING PILL
                ========================= */}

                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="navbar-active-pill"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 360,
                      damping: 30,
                      mass: 0.72,
                    }}
                  />
                )}

                <span className="navbar-link-label">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;