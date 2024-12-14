class WebsiteInteractionManager {
  constructor() {
    this.initializeEventListeners();
  }

  initializeEventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      this.setupDropdownMenu();
      this.setupScrollTopButton();
      this.setupWhatsAppButton();
      this.setupWorkSectionsAnimation();
      this.setupAboutMeAnimation();
    });
  }

  setupDropdownMenu() {
    const list = document.getElementById("list");
    const icon = document.getElementById("icon");
    let isListVisible = false;

    // Toggle list visibility when icon is clicked
    icon.addEventListener("click", (event) => {
      event.stopPropagation();
      isListVisible = !isListVisible;
      list.style.display = isListVisible ? "flex" : "none";
    });

    // Hide list when clicking outside
    document.addEventListener("click", (event) => {
      if (!list.contains(event.target) && event.target !== icon) {
        list.style.display = "none";
        isListVisible = false;
      }
    });
  }

  setupScrollTopButton() {
    window.addEventListener("scroll", () => {
      const scrollTopBtn = document.getElementById("scrollTopBtn");
      const scrollThreshold = 100;

      if (
        document.body.scrollTop > scrollThreshold ||
        document.documentElement.scrollTop > scrollThreshold
      ) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    // Attach scroll to top method
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", this.scrollToTop);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  setupWhatsAppButton() {
    const whatsappBtn = document.getElementById("whatsappBtn");
    if (whatsappBtn) {
      whatsappBtn.addEventListener("click", (e) => {
        e.preventDefault();
        whatsappBtn.classList.add("animate__animated", "animate__pulse");

        setTimeout(() => {
          window.location.href = whatsappBtn.href;
        }, 1000);
      });
    }
  }

  setupWorkSectionsAnimation() {
    // Work Sections Animation Class
    class WorkSectionAnimator {
      constructor() {
        this.seeMoreBtn = document.getElementById("seeMoreBtn");
        this.seeLaterBtn = document.getElementById("seeLaterBtn");
        this.line2 = document.getElementById("line2");
        this.line3 = document.getElementById("line3");

        this.initializeEventListeners();
      }

      initializeEventListeners() {
        if (this.seeMoreBtn) {
          this.seeMoreBtn.addEventListener("click", () =>
            this.showSecondLine()
          );
        }

        if (this.seeLaterBtn) {
          this.seeLaterBtn.addEventListener("click", () =>
            this.showThirdLine()
          );
        }
      }

      animateBox(elementId) {
        gsap.from(elementId, { y: 50, duration: 0.3 });
      }

      showSecondLine() {
        gsap.to("#line2", { opacity: 1, display: "block", duration: 0.3 });

        this.animateBox("#work4");
        this.animateBox("#work5");
        this.animateBox("#work6");

        this.seeMoreBtn.style.display = "none";
        this.seeLaterBtn.style.display = "inline-block";
      }

      showThirdLine() {
        gsap.to("#line3", { opacity: 1, display: "block", duration: 0.3 });

        this.animateBox("#work7");
        this.animateBox("#work8");
        this.animateBox("#work9");

        this.line2.style.display = "none";
        this.line3.style.display = "none";
        this.seeLaterBtn.style.display = "none";
      }
    }

    // Initialize Work Section Animator
    new WorkSectionAnimator();
  }

  setupAboutMeAnimation() {
    gsap.to("#aboutMe", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  }
}

// Initialize the Website Interaction Manager
new WebsiteInteractionManager();
