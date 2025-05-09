// main.js

document.addEventListener("DOMContentLoaded", () => {
    // Scroll suave para seções ao clicar nos links do menu
    const links = document.querySelectorAll('a[href^="#"]');
    for (let link of links) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  
    // Ativar classe "active" na navbar com base na seção visível
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link[href^='#']");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.navbar-nav .nav-link[href="#${id}"]`);
          if (link) {
            if (entry.isIntersecting) {
              navLinks.forEach(link => link.classList.remove("active"));
              link.classList.add("active");
            }
          }
        });
      },
      { threshold: 0.6 }
    );
  
    sections.forEach(section => observer.observe(section));
  
    // Responsividade: fecha o menu ao clicar em item no mobile
    const navToggler = document.querySelector(".navbar-toggler");
    const navCollapse = document.querySelector(".navbar-collapse");
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link =>
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          navToggler.click();
        }
      })
    );
  
    // Scroll para o topo suave ao atualizar a página (opcional)
    // window.scrollTo({ top: 0, behavior: "smooth" });
  
    // Outras melhorias JS podem ser adicionadas aqui
  });