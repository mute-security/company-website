import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

/* Global v-reveal directive — scroll-triggered fade-up */
app.directive('reveal', {
  mounted(el, binding) {
    const delay = (binding.value && binding.value.delay) ? binding.value.delay : 0;
    el.style.setProperty('--reveal-delay', `${delay}ms`);
    el.classList.add('reveal');

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    io.observe(el);
  }
});

app.use(router).mount('#app');
