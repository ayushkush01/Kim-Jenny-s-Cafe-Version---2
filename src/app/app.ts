import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('cafe-app');
  private router = inject(Router);
  private observer?: IntersectionObserver;
  private readonly handleParallaxScroll = () => {
    const parallaxTargets = document.querySelectorAll<HTMLElement>('[data-parallax]');
    const y = window.scrollY * 0.08;
    parallaxTargets.forEach(el => {
      el.style.transform = `translateY(${y}px) scale(1.02)`;
    });
  };

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.initRevealAnimations();
        this.initParallax();
      }, 80);
    });

    this.initRevealAnimations();
    this.initParallax();
  }

  private initRevealAnimations() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('.reveal').forEach(el => this.observer?.observe(el));
  }

  private initParallax() {
    const parallaxTargets = document.querySelectorAll<HTMLElement>('[data-parallax]');
    if (!parallaxTargets.length) {
      return;
    }
    this.handleParallaxScroll();
    window.removeEventListener('scroll', this.handleParallaxScroll);
    window.addEventListener('scroll', this.handleParallaxScroll, { passive: true });
  }
}
