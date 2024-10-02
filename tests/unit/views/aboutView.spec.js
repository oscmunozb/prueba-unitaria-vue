import { mount } from '@vue/test-utils'; // Importa la función mount de Vue Test Utils para montar componentes en pruebas unitarias
import { createRouter, createWebHistory } from 'vue-router'; // Importa las funciones necesarias para crear el router en Vue

import AboutView from '@/views/AboutView.vue'; // Importa el componente AboutView que será probado

describe('AboutView', () => {
  
  /**
   * Esta prueba verifica la existencia del componente AboutView cuando la ruta asociada
   * está activa. Se asegura de que el componente esté correctamente montado en el DOM.
   */
  test('Probando la existencia del componente o vista AboutView', async () => {
    
    // Crea un enrutador simulado para el componente AboutView
    // Esto simula un entorno de enrutamiento como el de una aplicación real de Vue
    const router = createRouter({
      history: createWebHistory(), // Configura el historial de navegación utilizando la API del navegador
      routes: [{
        path: '/about', // Define la ruta '/about' asociada al componente AboutView
        name: 'AboutViewVue', // Asigna un nombre a la ruta
        component: AboutView // Asocia la ruta con el componente AboutView
      }],
    });
    
    // Navega a la ruta '/about' y espera que el router esté completamente cargado
    router.push('/about');
    await router.isReady();

    // Monta el componente AboutView usando el router configurado
    // Esto asegura que el componente puede acceder a las funcionalidades del router
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router] // Se inyecta el router como plugin global para que esté disponible en el componente
      }
    });

    // Verifica que el componente AboutView esté presente en el DOM
    // Busca el componente en el DOM y asegura que efectivamente exista
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });

  /**
   * Esta prueba genera un snapshot de la estructura HTML del componente AboutView.
   * Los snapshots permiten verificar que la salida HTML del componente no cambie
   * de manera inesperada.
   */
  test('Snapshot de la estructura HTML del componente AboutView.vue', async () => {

    // Crea el enrutador simulado para la prueba
    const router = createRouter({
      history: createWebHistory(), // Configura el historial de navegación utilizando la API del navegador
      routes: [{
        path: '/about', // Define la ruta '/about' para el componente AboutView
        name: 'AboutViewVue', // Asigna un nombre a la ruta
        component: AboutView // Asocia la ruta con el componente AboutView
      }],
    });
    
    // Navega a la ruta '/about' y espera a que el router esté listo
    router.push('/about');
    await router.isReady();

    // Monta el componente AboutView usando el router configurado
    const wrapper = mount(AboutView, {
      global: {
        plugins: [router] // Inyecta el router como plugin global
      }
    });

    // Compara el HTML renderizado por el componente con el snapshot almacenado
    // Si no hay snapshot anterior, Jest generará uno nuevo; si ya existe, validará que no haya cambios inesperados
    expect(wrapper.html()).toMatchSnapshot();
  });
});
